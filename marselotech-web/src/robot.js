const data = {
    // ros connection
    ros: null,
    rosbridge_address: 'ws://127.0.0.1:9090/',
    connected: false,
    // service information
    service_busy: false,
    service_response: ''
}

export const  connect = () => {
    console.log("Clic en connect")

    data.ros = new ROSLIB.Ros({
        url: data.rosbridge_address

    })

    let topic = new ROSLIB.Topic({
        ros: data.ros,
        name: '/odom',
        messageType: 'nav_msgs/msg/Odometry'
    })
    topic.subscribe((message) => {
        data.position = message.pose.pose.position
        //document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
        //document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
    })
    let topic3 = new ROSLIB.Topic({
        ros: data.ros,
        name: '/image',
        messageType: 'sensor_msgs/msg/Image'
    })
    topic3.subscribe();

    // Define callbacks
    data.ros.on("connection", () => {
        data.connected = true
        console.log("Conexion con ROSBridge correcta")
        document.getElementById("robot_conectado").innerHTML="Robot conectado"
        setCamera();
    })
    data.ros.on("error", (error) => {
        console.log("Se ha producido algun error mientras se intentaba realizar la conexion")
        console.log(error)
    })
    data.ros.on("close", () => {
        data.connected = false
        console.log("Conexion con ROSBridge cerrada")
    })
}

export const disconnect= () => {
    data.ros.close()
    data.connected = false
    console.log('Clic en botón de desconexión')
    document.getElementById("robot_conectado").innerHTML="Robot desconctado"

    // quitamos camara
    document.getElementById("divCamera").innerHTML = ""
}

export const move = () => {

        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })

        let message = new ROSLIB.Message({
            linear: {x: 0.1, y: 0, z: 0, },
            angular: {x: 0, y: 0, z: 0},
        })

        topic.publish(message)

}

export const move_detras = () => {

        let topic = new ROSLIB.Topic({
            ros: data.ros,
            name: '/cmd_vel',
            messageType: 'geometry_msgs/msg/Twist'
        })

        let message = new ROSLIB.Message({
            linear: {x: -0.1, y: 0, z: 0, },
            angular: {x: 0, y: 0, z: 0},
        })

        topic.publish(message)
}

export const move_izquierda = () => {

    let topic = new ROSLIB.Topic({
        ros: data.ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/msg/Twist'
    })

    let message = new ROSLIB.Message({
        linear: {x: 0.1, y: 0, z: 0.1, },
        angular: {x: 0, y: 0, z: 0},
    })

    topic.publish(message)

}

export const move_derecha = () => {

    let topic = new ROSLIB.Topic({
        ros: data.ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/msg/Twist'
    })

    let message = new ROSLIB.Message({
        linear: {x: 0.1, y: 0, z: -0.1, },
        angular: {x: 0, y: 0, z: 0},
    })

    topic.publish(message)

}

export const stop = () => {
    let topic = new ROSLIB.Topic({
        ros: data.ros,
        name: '/cmd_vel',
        messageType: 'geometry_msgs/msg/Twist'
    })
    let message = new ROSLIB.Message({
        linear: {x: 0, y: 0, z: 0, },
        angular: {x: 0, y: 0, z: 0, },
    })
    topic.publish(message)
}

export const call_delante_service = (valor) =>{

    console.log("Estoy dentro de call delaten service "+valor)
    data.service_busy = true
    data.service_response = ''

    //definimos los datos del servicio
    let service = new ROSLIB.Service({
        ros: data.ros,
        name: '/movement',
        serviceType: 'custom_interface/srv/MyMoveMsg'
    })

    let request = new ROSLIB.ServiceRequest({
        move: valor
    })

    service.callService(request, (result) => {
        data.service_busy = false
        data.service_response = JSON.stringify(result)
    }, (error) => {
        data.service_busy = false
        console.error(error)
    })
}

export const setCamera = () => {
    console.log("entra fucion serCamara()")

    let dengue = new MJPEGCANVAS.Viewer({
        divID: "divCamera", //elemento del html donde mostraremos la cámara
        host: "ws:127.0.0.1", //dirección del servidor de vídeo
        port: "9090",
        width: 320, //no pongas un tamaño mucho mayor porque puede dar error
        height: 240,
        topic: "/image",
        ssl: false,
    })

    console.log(dengue)
}
