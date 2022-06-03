import { async } from "@firebase/util";

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

    });

    //--------------------------------------------
    //nos suscribimos al topic del movimiento
    let topic = new ROSLIB.Topic({
        ros: data.ros,
        name: '/odom',
        messageType: 'nav_msgs/msg/Odometry'
    });
    topic.subscribe((message) => {
        data.position = message.pose.pose.position
        //document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
        //document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
    });
    //--------------------------------------------


    // Define callbacks
    data.ros.on("connection", () => {
        data.connected = true
        console.log("Conexion con ROSBridge correcta")
        document.getElementById("robot_conectado").innerHTML="Robot conectado"
        //setCamera();
    });

    data.ros.on("error", (error) => {
        console.log("Se ha producido algun error mientras se intentaba realizar la conexion")
        console.log(error)
    });

    data.ros.on("close", () => {
        data.connected = false
        console.log("Conexion con ROSBridge cerrada")
    });
}

export const disconnect= () => {
    data.ros.close()
    data.connected = false
    console.log('Clic en botón de desconexión')
    document.getElementById("robot_conectado").innerHTML="Robot desconctado"

    // quitamos camara
    document.getElementById("divCamera").innerHTML = ""
}



export const call_delante_service = async valor =>{

    console.log("Estoy dentro de call delaten service "+valor)
    data.service_busy = true
    data.service_response = ''

    //definimos los datos del servicio
    let service = new ROSLIB.Service({
        ros: data.ros,
        name: '/movement',
        serviceType: 'marselotech_custom_interface/srv/MyMoveMsg'
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

export const detectar_caras = () => {

    try {

        console.log("conectarse a la camara")

        data.service_busy = true
        data.service_response = ''

        let service = new ROSLIB.Service({
            ros: data.ros,
            name: '/detection',
            serviceType: 'marselotech_custom_interface/srv/DetectionMsg'
        })

        let request = new ROSLIB.ServiceRequest({
            type: "caras"
        })

        service.callService(request, (result) => {
            data.service_busy = false
            data.service_response = JSON.stringify(result)
            console.log("Servicio conectado ---> " )
            console.log(JSON.stringify(result))
        }, (error) => {
            data.service_busy = false
            console.error("Error en el callback del servicio")
        })
    } catch (error) {
        console.error("Error en el try catch")
    }

}

export const detectar_personas = () => {
    
    try {

        console.log("conectarse a la camara")

        data.service_busy = true
        data.service_response = ''

        let service = new ROSLIB.Service({
            ros: data.ros,
            name: '/detection',
            serviceType: 'marselotech_custom_interface/srv/DetectionMsg'
        })

        let request = new ROSLIB.ServiceRequest({
            type: "personas"
        })

        service.callService(request, (result) => {
            data.service_busy = false
            data.service_response = JSON.stringify(result)
            console.log("Servicio conectado ---> " )
            console.log(JSON.stringify(result))
        }, (error) => {
            data.service_busy = false
            console.error("Error en el callback del servicio")
        })
    } catch (error) {
        console.error("Error en el try catch")
    }

}

export const detectar_enemigos = () => {

    try {

        console.log("conectarse a la camara")

        data.service_busy = true
        data.service_response = ''

        let service = new ROSLIB.Service({
            ros: data.ros,
            name: '/detection',
            serviceType: 'marselotech_custom_interface/srv/DetectionMsg'
        })

        let request = new ROSLIB.ServiceRequest({
            type: "color"
        })

        service.callService(request, (result) => {
            data.service_busy = false
            data.service_response = JSON.stringify(result)
            console.log("Servicio conectado ---> " )
            console.log(JSON.stringify(result))
        }, (error) => {
            console.log(request)
            data.service_busy = false
            console.error("Error en el callback del servicio")
        })
    } catch (error) {
        console.error("Error en el try catch")
    }
}

