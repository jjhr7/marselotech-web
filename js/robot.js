document.addEventListener('DOMContentLoaded', event => {
    console.log("entro en la pagina")

    document.getElementById("btn_conectar").addEventListener("click", connect)
    document.getElementById("btn_desconectar").addEventListener("click", disconnect)
    document.getElementById("btn_adelante").addEventListener("click", move)
    document.getElementById("btn_parar").addEventListener("click", stop)
    document.getElementById("btn_izquierda").addEventListener("click", () => {
        call_delante_service("izquierda")
    })
    document.getElementById("btn_adelante").addEventListener("click", () => {
        call_delante_service("delante")
    })
    document.getElementById("btn_derecha").addEventListener("click", () => {
        call_delante_service("derecha")
    })
    document.getElementById("btn_atras").addEventListener("click", () => {
        call_delante_service("atras")
    })
    document.getElementById("btn_parar").addEventListener("click", () => {
        call_delante_service("parar")
    })

    document.addEventListener("keydown", (w) => {
        call_delante_service("delante")
    })

    document.addEventListener('input', (w) => {
        logMessage(`Key "${w.data}" input  [event: input]`);
        call_delante_service("delante")
    });

    document.addEventListener('beforeinput', (w) => {
        logMessage(`Key "${w.data}" about to be input  [event: beforeinput]`);
        call_delante_service("delante")
    });



    data = {
        // ros connection
        ros: null,
        rosbridge_address: 'ws://127.0.0.1:9090/',
        connected: false,
        // service information
        service_busy: false,
        service_response: ''
    }

    function connect(){
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
            document.getElementById("pos_x").innerHTML = data.position.x.toFixed(2)
            document.getElementById("pos_y").innerHTML = data.position.y.toFixed(2)
        })

        // Define callbacks
        data.ros.on("connection", () => {
            data.connected = true
            console.log("Conexion con ROSBridge correcta")
            document.getElementById("robot_conectado").innerHTML="Robot conectado"
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

    function disconnect(){
        data.ros.close()
        data.connected = false
        console.log('Clic en botón de desconexión')
        document.getElementById("robot_conectado").innerHTML="Robot desconctado"
    }

    function move() {
        if (modo_jaula == true){

            var movimiento = comparar_coordenadas()

            if(movimiento == false){

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

            }else{

                rotar_90()

            }
        }else{

            let topic = new ROSLIB.Topic({
                ros: data.ros,
                name: '/cmd_vel',
                messageType: 'geometry_msgs/msg/Twist'
            })
            let message = new ROSLIB.Message({
                linear: {x: 0.1, y: 0, z: 0, },
                angular: {x: 0, y: 0, z: -0.2, },
            })
            topic.publish(message)
        }
    }

    function stop() {
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


    function call_delante_service(valor){

        console.log("Estoy dentro de call delaten service")
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


});