<template>
    <div class="grey">

    <!--Main Navigation-->
    <header>

        <!-- Sidebar -->
        <div class="sidebar-fixed position-fixed sidebar">

            <a href="../index.html" class=" waves-effect mt-2">
                <img src="images/marselotech-logo.png" class="img-fluid" alt="">
            </a>

            <div class="list-group list-group-flush mt-2">
                <a href="panel_control.html" class="list-group-item active waves-effect sidebar txt1">
                    <i class="fas fa-chart-pie mr-3"></i>Dashboard
                </a>
                <a href="#" class="list-group-item list-group-item-action waves-effect sidebar txt1">
                    <i class="fas fa-user mr-3"></i>Profile</a>
                <a href="../index.html" class="list-group-item list-group-item-action waves-effect sidebar txt1">
                    <i class="fas fa-backward mr-3"></i>Volver</a>
            </div>

        </div>
        <!-- Sidebar -->

    </header>
    <!--Main Navigation-->

    <!--Main layout-->
    <main class="pt-1 mx-lg-5">
        <div class="container-fluid mt-5">
            <!-- Heading -->
            <div class="card mb-4 wow fadeIn">

                <!--Card content-->
                <div class="card-body d-sm-flex justify-content-between">

                    <h4 class="mb-2 mb-sm-0 pt-1">
                        <a href="../index.html" >Marselotech</a>
                        <span class="txt1">/</span>
                        <span class="txt1">Panel de control</span>
                    </h4>
                </div>

            </div>
            <!-- Heading -->

            <!--Grid row-->
            <div class="row wow fadeIn">

                <!--Grid column-->
                <div class="col-md-4 mb-4 ">

                    <!--Card-->
                    <div class="card mb-4">

                        <!-- Card header -->
                        <div id="robot_conectado" class=" text-danger card-header text-center d-flex justify-content-center">
                            Estado robot: desconectado
                        </div>

                        <div class="card-body text-center">

                            <div class="pl-5 pr-5 pb-2">
                                <img src="images/turtlebot3-sin-fondo.png" class="img-fluid" />
                            </div>

                            <div class="col-12">
                                <button id="btn_conectar" type="button" class="btn btn-success btn-sm">Conectar</button>
                                <button id="btn_desconectar" type="button" class="btn btn-danger btn-sm">Desconectar</button>
                            </div>

                            <div class="col-12">
                            <button id="btn_adelante" type="button" class="btn btn-primary btn-sm "><i class="fas fa-arrow-up fa-lg " style="margin-left: 0;margin-right: 0;"></i></button>
                            <br>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button id="btn_izquierda" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-left fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                <button id="btn_parar" type="button" class="btn btn-warning btn-sm text-center"> <i class="fas fa-stop fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                                <button id="btn_derecha" type="button" class="btn btn-primary btn-sm text-center"> <i class="fas fa-arrow-right fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
                            </div>
                            <br>
                            <button id="btn_atras" type="button" class="btn btn-primary btn-sm"><i class="fas fa-arrow-down fa-lg" style="margin-left: 0;margin-right: 0;"></i></button>
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
                        <div class="card-header txt1">Mapa</div>

                        <!--Card content-->
                        <div class="card-body">
                            <!--Google map-->
                            <div id="map-container-google-2" class="z-depth-1-half map-container" >
                                <iframe src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0"
                                        style="border:0" allowfullscreen></iframe>
                            </div>

                            <!--Google Maps-->

                        </div>

                    </div>
                    <!--/.Card-->

                </div>
                <!--Grid column-->



            </div>
            <!--Grid row-->

            <!--Grid row-->
            <div class="row wow fadeIn">

                <!--Grid column-->
                <div class="col-md-12 mb-4">

                    <!--Card-->
                    <div class="card">

                        <!-- Card header -->
                        <div class="card-header txt1">Camara</div>

                        <!--Card content-->
                        <div class="card-body">

                            <div id="divCamera">
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

export default{
    name: 'DashboardMarselotech',
    mounted(){
        const jspath = 'js/';
        var jslibs = ['jquery-3.2.1.min.js', 'jquery.easing.1.3.js', 'bootstrap.min.js', 'jquery.countdown.js', 'jquery.fullPage.min.js', 'jquery.appear.js', 'jquery.fitvids.js', 'jquery.backstretch.min.js', 'owl.carousel.min.js', 'jquery.ajaxchimp.js', 'particles.js', 'moment.js', 'main.js'];
        for(var i=0;i<14;i++){
            var customLib = document.createElement("script");
            customLib.setAttribute('src',jspath+jslibs[i]);
            customLib.setAttribute('crossorigin', 'anonymous');
            document.body.appendChild(customLib);
        }
    }

}

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