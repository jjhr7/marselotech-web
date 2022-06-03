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
                                <button @click="moveRobot" id="btn_adelante" type="button" class="btn btn-primary btn-sm "><i class="fas fa-arrow-up fa-lg " style="margin-left: 0;margin-right: 0;"></i></button>
                                <br>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button @click="move_izquierdaRobot(); call_delante_service('izquierda');" id="btn_izquierda" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-left fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                    <button @click="stopRobot(); call_delante_service('parar');" id="btn_parar" type="button" class="btn btn-warning btn-sm text-center"> <i class="fas fa-stop fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                    <button @click="move_derechaRobot(); call_delante_service('derecha');" id="btn_derecha" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-right fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                </div>
                                <br>
                                <button @click="move_detrasRobot(); call_delante_service('atras');" id="btn_atras" type="button" class="btn btn-primary btn-sm"><i class="fas fa-arrow-down fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
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
                                        <a v-on:click="changeTabActive('1')"  class="nav-link active" id="ex-with-icons-tab-1" data-toggle="tab" data-mdb-toggle="tab" href="#a" role="tab"
                                        aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i class="fas fa-low-vision mr-2"></i>Vigilancia</a>
                                    </li>
                                    <li v-on:click="changeTabActive('2')"  class="nav-item" role="presentation">
                                        <a class="nav-link" id="ex-with-icons-tab-2" data-toggle="tab" data-mdb-toggle="tab" href="#b" role="tab"
                                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i class="fas fa-map-marker-alt mr-2"></i>Exploración</a>
                                    </li>
                                    <li v-on:click="changeTabActive('3')"  class="nav-item" role="presentation">
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
                                            <button  type="button" class="btn btn-primary btn-sm">Sacar foto</button>
                                            <button  type="button" class="btn btn-primary btn-sm">Detectar persona</button>
                                            <button type="button" class="btn btn-primary btn-sm">Detectar enemigo</button>
                                        </div>

                                        <div class="text-center">
                                            <a class="ripple img-fluid">
                                                <img
                                                        alt="example"
                                                        class="img-fluid rounded"
                                                        src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                                                />
                                            </a>
                                        </div>

                                    </div>
                                    <div class="tab-pane" id="b">
                                        <!--Google map-->
                                        <div id="map-container-google-2" class="z-depth-1-half map-container" >
                                            <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                                    style="border:0" allowfullscreen></iframe>
                                        </div>

                                        <!--Google Maps-->
                                    </div>
                                    <div class="tab-pane" id="c">
                                        <button  type="button" class="btn btn-primary btn-sm">Sacar foto</button>
                                        <button  type="button" class="btn btn-primary btn-sm">Detectar armas</button>

                                        <div class="text-center">
                                            <a class="ripple img-fluid">
                                                <img
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
import { connect, disconnect, move, move_detras, move_izquierda, move_derecha, stop, call_delante_service, setCamera} from '@/robot';


export default{
    name: 'DashboardMarselotech',
    setup(){

        onMounted(()=>{
            setTimeout(() => {
            
                console.log("entro en la pagina")

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


                //w
                document.addEventListener("keydown", (w) => {
                    call_delante_service("delante")
                })

                document.addEventListener('input', (w) => {
                    logMessage(`Key "${w.data}" input  [event: input]`);
                    call_delante_service("delante")
                });

                document.addEventListener('beforeinput', (a) => {
                    logMessage(`Key "${a.data}" about to be input  [event: beforeinput]`);
                    call_delante_service("izquierda")
                });

                //a
                document.addEventListener("keydown", (a) => {
                    call_delante_service("izquierda")
                })

                document.addEventListener('input', (a) => {
                    logMessage(`Key "${a.data}" input  [event: input]`);
                    call_delante_service("izquierda")
                });

                document.addEventListener('beforeinput', (a) => {
                    logMessage(`Key "${a.data}" about to be input  [event: beforeinput]`);
                    call_delante_service("izquierda")
                });

                //s
                document.addEventListener("keydown", (s) => {
                    call_delante_service("atras")
                })

                document.addEventListener('input', (s) => {
                    logMessage(`Key "${s.data}" input  [event: input]`);
                    call_delante_service("atras")
                });

                document.addEventListener('beforeinput', (s) => {
                    logMessage(`Key "${s.data}" about to be input  [event: beforeinput]`);
                    call_delante_service("atras")
                });

                //d
                document.addEventListener("keydown", (d) => {
                    call_delante_service("derecha")
                })

                document.addEventListener('input', (d) => {
                    logMessage(`Key "${d.data}" input  [event: input]`);
                    call_delante_service("derecha")
                });

                document.addEventListener('beforeinput', (d) => {
                    logMessage(`Key "${d.data}" about to be input  [event: beforeinput]`);
                    call_delante_service("derecha")
                });

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

        const  connectRobot = connect;

        const disconnectRobot = disconnect;

        const moveRobot = move;

        const move_detrasRobot = move_detras;

        const move_izquierdaRobot = move_izquierda;

        const move_derechaRobot = move_derecha;

        const stopRobot = stop;

        /*const call_delante_serviceRobot = call_delante_service(valor);*/

        const setCameraRobot = setCamera;

        return { changeTabActive, connectRobot, disconnectRobot, moveRobot, move_detrasRobot, move_izquierdaRobot, move_derechaRobot, stopRobot, /*call_delante_serviceRobot,*/ setCameraRobot};
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