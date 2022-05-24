<template>
<!-- Start Loader -->
    <div class='loading'>
        <div class='loader'>
            <img height='80' src='images/loader.svg' width='80'>
        </div>
    </div>
    <!-- End Loader -->

    <div class='page-wrap' id='fullpage'>
    <!-- Particles Background -->
        <canvas class='bg-particles' id='bg-particles'></canvas>

        <section class="welcome section-content section background-parallax bg-image-1">
            <div class='overlay'></div>
            <div class="container" style="padding-right: 0;padding-left: 0;margin-right: 0;margin-left: 0;">
                <div class="row g-0">
                    <div class="col-lg-6 bg-dark d-flex flex-column align-items-end min-vh-100">
                        <!--<div class="px-lg-5 pt-lg-4 pb-lg-3 p-4 mb-auto w-100">
                            <img src="Logo.svg" class="img-fluid" />
                        </div>-->
                        <div class="align-self-center my-auto w-100 px-lg-5 py-lg-4 p-4">
                            <h1 class="font-weight-bold mb-4 text-light">Bienvenido a Marselotech</h1>
                            <form action="panel_control.html" class="mb-5">
                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label font-weight-bold text-light">Email</label>
                                    <input type="email" class="form-control bg-dark-x border-0" id="exampleInputEmail1" placeholder="Ingresa tu email" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label font-weight-bold text-light">Código del robot</label>
                                    <input type="password" class="form-control bg-dark-x border-0 mb-2" placeholder="Ingresa tu código del robot" id="exampleInputPassword1">
                                    <a href="" id="emailHelp" class="form-text text-muted text-decoration-none">¿Has olvidado tu código?</a>
                                </div>

                                <button type="submit" class="btn btn-primary w-100">Entrar</button>

                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block">

                    </div>

                </div>
            </div>

        </section>
    </div>
</template>

<script>

export default{
    name: 'LogiDashboard',
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

</style>