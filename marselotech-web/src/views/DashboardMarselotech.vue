<template>
    <div class="grey">
        <!--Main Navigation-->
        <header>

            <!-- Sidebar -->
            <div class="sidebar-fixed position-fixed sidebar">

                <router-link to="/">
                    <a  class=" waves-effect mt-2">
                        <img src="http://localhost:8080/images/mtech-logo.png" class="img-fluid" alt="">
                    </a>
                </router-link>
                

                <div class="list-group list-group-flush mt-2 ">
                    
                    <a href="#" class="list-group-item active waves-effect sidebar txt1">
                        <i class="fas fa-chart-pie mr-3"></i>Dashboard
                    </a>
                    <a href="#" class="list-group-item list-group-item-action waves-effect sidebar txt1">
                        <i class="fas fa-user mr-3"></i>Profile</a>
                    <router-link to="/">
                        <a  class="list-group-item list-group-item-action waves-effect sidebar txt1" >
                        <i class="fas fa-backward mr-3"></i>Volver</a>
                    </router-link>
                    
                </div>

            </div>
            <!-- Sidebar -->

        </header>
        <!--Main Navigation-->

        <!--Main layout-->
        <main class="pt-1 mx-lg-5 ">
            <div class="container-fluid mt-5">
                <!-- Heading -->
                <div class="card mb-4 wow fadeIn">

                    <!--Card content-->
                    <div class="card-body d-sm-flex justify-content-between">

                        <h4 class="mb-2 mb-sm-0 pt-1">
                            <router-link to="/">
                                <a>Marselotech</a>
                            </router-link>
                            <span class="txt1">/</span>
                            <span class="txt1">Panel de control</span>
                        </h4>
                    </div>

                </div>
                <!-- Heading -->

                <!--Grid row-->
                <div class="row wow fadeIn">

                    <!--Grid column-->
                    <div class="col-md-4 mb-4">

                        <!--Card-->
                        <div class="card mb-4 dark_cards">

                            <!-- Card header -->
                            <div id="robot_conectado" class=" text-danger card-header text-center d-flex justify-content-center">
                                Estado robot: desconectado
                            </div>

                            <div class="card-body text-center">

                                <div class="pl-5 pr-5 pb-2">
                                    <img src="http://localhost:8080/images/turtlebot3-burger.png" class="img-fluid" />
                                </div>

                                <div class="col-12">
                                    <button @click="connectRobot" id="btn_conectar" type="button" class="btn btn-success btn-sm">Conectar</button>
                                    <button @click="disconnectRobot" id="btn_desconectar" type="button" class="btn btn-danger btn-sm">Desconectar</button>
                                </div>

                                <div class="col-12">
                                <button @click="call_movement_service_robot('delante')" id="btn_adelante" type="button" class="btn btn-primary btn-sm "><i class="fas fa-arrow-up fa-lg " style="margin-left: 0;margin-right: 0;"></i></button>
                                <br>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button @click="call_movement_service_robot('izquierda')" id="btn_izquierda" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-left fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                    <button @click="call_movement_service_robot('parar')" id="btn_parar" type="button" class="btn btn-warning btn-sm text-center"> <i class="fas fa-stop fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                    <button @click="call_movement_service_robot('derecha')" id="btn_derecha" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-right fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                </div>
                                <br>
                                <button @click="call_movement_service_robot('atras')" id="btn_atras" type="button" class="btn btn-primary btn-sm"><i class="fas fa-arrow-down fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                </div>
                            </div>

                        </div>
                        <!--/.Card-->

                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-8 mb-4">

                        <!--Card-->
                        <div class="card">

                            <!-- Card header -->
                            <div class="card-header txt1">
                                <!-- Tabs navs -->
                                <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <a @click="changeTabActive('1')"  class="nav-link active" id="ex-with-icons-tab-1" data-toggle="tab" data-mdb-toggle="tab" href="#a" role="tab"
                                        aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i class="fas fa-low-vision mr-2"></i>Vigilancia</a>
                                    </li>
                                    <li @click="changeTabActive('2')"  class="nav-item" role="presentation">
                                        <a class="nav-link" id="ex-with-icons-tab-2" data-toggle="tab" data-mdb-toggle="tab" href="#b" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i class="fas fa-map-marker-alt mr-2"></i>Exploración</a>
                                    </li>
                                    <li @click="changeTabActive('3')"  class="nav-item" role="presentation">
                                        <a class="nav-link" id="ex-with-icons-tab-3" data-toggle="tab" data-mdb-toggle="tab" href="#c" role="tab"
                                        aria-controls="ex-with-icons-tabs-3" aria-selected="false"><i class="fas fa-luggage-cart mr-2"></i>Soporte</a>
                                    </li>
                                </ul>
                                <!-- Tabs navs -->
                            </div>

                            <!--Card content-->
                            <div class="card-body">
                                <div class="tab-content">
                                    <div class="tab-pane active" id="a">

                                        <div>
                                            <button @click="call_detectar_caras_service" type="button" class="btn btn-primary btn-sm">Reconocimiento facial</button>
                                            <button @click="call_detectar_personas_service" type="button" class="btn btn-primary btn-sm">Detectar persona</button>
                                            <button @click="call_detectar_enemigos_service" type="button" class="btn btn-primary btn-sm">Detectar enemigo</button>
                                        </div>

                                        <div class="text-center">
                                            <a class="ripple img-fluid">
                                                <img id="tabApoyo"
                                                        alt="example"
                                                        class="img-fluid rounded"
                                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                                />
                                            </a>
                                        </div>

                                    </div>
                                    <div class="tab-pane" id="b">
                                        <div class="row">
                                            <div class="col">
                                                <div class="form-outline input-group-sm">
                                                    <label class="form-label txt1" >Coordenadas del robot</label>
                                                    <div class="d-flex">
                                                        <p class="txt1">X:</p>
                                                        <p class="txt1 pl-2" id="pos_x">Sin conexión</p>
                                                    </div>
                                                    <div class="d-flex">
                                                        <p class="txt1">Y:</p>
                                                        <p class="txt1 pl-2" id="pos_y">Sin conexión</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="form-outline input-group-sm">
                                                    <label class="form-label txt1" >Nuevas coordenadas</label>
                                                    <input type="number" id="x_input"  placeholder="x" class="form-control"/>
                                                    <input type="number" id="y_input"  placeholder="y" class="form-control mt-3" />
                                                    <div class="text-right">
                                                        <button :click="call_enviar_cords" id="btn_enviar_coordenada"  type="button" class="btn btn-primary btn-sm">Enviar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="c">
                                        <button :click="call_detectar_armas_robot" type="button" class="btn btn-primary btn-sm" id="btnguns">Detectar armas</button>

                                        <div class="text-center">
                                            <a class="ripple img-fluid">
                                                <img   id="tabGuns"
                                                        alt="example"
                                                        class="img-fluid rounded"
                                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                                />
                                            </a>
                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                        <!--/.Card-->

                    </div>
                    <!--Grid column-->



                </div>
                <!--Grid row-->

            </div>
        </main>
        <!--Main layout-->
    </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import {getLastImage} from '@/firebase'
import { connect, disconnect, call_delante_service, detectar_caras, detectar_personas, detectar_enemigos, detectar_armas, enviar_coordenada} from '@/robot';


export default{
    name: 'DashboardMarselotech',
    setup(){

        onMounted(()=>{
            setTimeout(() => {

                document.getElementById("btnguns").addEventListener("click", () => {
                    call_detectar_armas_robot();
                })

            },1500);
        });
        
        const router = useRouter();

        const changeTabActive = (num) =>{
            document.getElementById("ex-with-icons-tab-1").classList.remove('active');
            if(num === 1){
                //ex-with-icons-tab-1
                document.getElementById("ex-with-icons-tab-1").classList.add('active');
                document.getElementById("ex-with-icons-tab-2").classList.remove('active');
                document.getElementById("ex-with-icons-tab-3").classList.remove('active');
            }else if(num === 2){
                // ex-with-icons-tab-2
                //ex-with-icons-tab-1
                document.getElementById("ex-with-icons-tab-2").classList.add('active');
                document.getElementById("ex-with-icons-tab-1").classList.remove('active');
                document.getElementById("ex-with-icons-tab-3").classList.remove('active');
            }else if(num === 3){
                // ex-with-icons-tab-3
                document.getElementById("ex-with-icons-tab-3").classList.add('active');
                document.getElementById("ex-with-icons-tab-2").classList.remove('active');
                document.getElementById("ex-with-icons-tab-1").classList.remove('active');
            }
        }

        const getLastImageFromFirebase = async (imgType) => {
            /*caras, persona, color, arma*/
           const imgUrl = await getLastImage(imgType);
           return imgUrl;
        }

        const call_getLastImg = async (imgTypetxt,idComponent) => {

            var curretnUrl = new URL(window.location.href);
            let ulrtxt = curretnUrl.toString();
            let urlSplit = ulrtxt.split("/");
            let urlLength = urlSplit.length;
            let robotid = urlSplit[urlLength-1];
            let imgType = {idRobot: robotid, type: imgTypetxt}
            let imageWeb = document.getElementById(idComponent);
            const urlimgage = await getLastImageFromFirebase(imgType);
            console.log(urlimgage);
            imageWeb.src = urlimgage;

        }


        const  connectRobot = connect;

        const disconnectRobot = disconnect;

        const call_detectar_caras_service  = () =>{
            call_getLastImg("caras","tabApoyo");
            detectar_caras();
        };

        const call_detectar_personas_service = () => {
            call_getLastImg("persona","tabApoyo")
            detectar_personas();
        };

        const call_detectar_enemigos_service = () =>{
            call_getLastImg("color","tabApoyo");
            detectar_enemigos();
        };

        const call_detectar_armas_robot = () => {
            console.log("test111");
            call_getLastImg("arma","tabGuns");
            detectar_armas();
        };

        const call_movement_service_robot = async (valor) => {
           await call_delante_service(valor);
        };

        const call_enviar_cords = async () => {
            let x = document.getElementById("x_input").value;
            let y = document.getElementById("y_input").value;
            await enviar_coordenada(x.toString(),y.toString());

        };

        
        
        return { call_getLastImg, changeTabActive, connectRobot, disconnectRobot, call_movement_service_robot, call_detectar_caras_service, call_detectar_personas_service, call_detectar_enemigos_service, call_detectar_armas_robot, call_enviar_cords};
    }
};

</script>

    <style>

        .map-container{
            overflow:hidden;
            padding-bottom:56.25%;
            position:relative;
            height:0;
        }
        .map-container iframe{
            left:0;
            top:0;
            height:100%;
            width:100%;
            position:absolute;
        }

        :root{
            /* dark color */
            --dark-h: 0;
            --dark-s: 0%;
            --dark-l: 12%;
            --dark-color: var(--dark-h), var(--dark-s), var(--dark-l);
            /* light color */
            --light-h: 0;
            --light-s: 0%;
            --light-l: 100%;
            --light-color: var(--light-h), var(--light-s), var(--light-l);

            --bg-color-one: var(--dark-color);
            --bg-color-two: var(--dark-h), var(--dark-s), calc(var(--dark-l) + 7%);
            --t-color-one: var(--light-color);

        }

        .card {
            background-color: hsl(var(--bg-color-two)) !important;
        }

        .sidebar{
            background-color: hsl(var(--bg-color-two)) !important;
        }

        .grey{
            background-color: hsl(var(--bg-color-one)) !important;
        }

        .txt1{
            color: hsl(var(--t-color-one)) !important;
        }
    </style>