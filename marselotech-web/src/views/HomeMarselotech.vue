<template>
 <LoaderMarselotech/>
<!-- Start Header -->
<header class='page-header' id='page-header'>
  <div class='container-full pading-logo'>
    <div>
      <div class='navbar-header'>
        <!-- Logo -->
        <a class='logo animated onstart' data-animation-delay='200' data-animation='fadeInDown' href='#'>
          <!-- %img{:src => "images/logo.png", :alt => ""}/ -->
          <div class='circle-logo-wrapper '>
            <img src="images/mtech-logo.png" width="75" height="75" alt="logo marselotech">
          </div>
          <strong class="title-header">Marselotech</strong>
        </a>
      </div>
      
      <!-- Social navigation -->
      <div class='social-nav'>
        <ul>
          <li class='animated onstart' data-animation-delay='600' data-animation='fadeInDown' href='#'>
            <a data-placement='bottom' data-toggle='tooltip' href='#' title='Follow us on Facebook'>
              <i class='fa fa-facebook'></i>
            </a>
          </li>
          <li class='animated onstart' data-animation-delay='700' data-animation='fadeInDown' href='#'>
            <a data-placement='bottom' data-toggle='tooltip' href='#' title='Follow us on Twitter'>
              <i class='fa fa-twitter'></i>
            </a>
          </li>
          <li class='animated onstart' data-animation-delay='800' data-animation='fadeInDown' href='#'>
            <a data-placement='bottom' data-toggle='tooltip' href='#' title='Follow us on Instagram'>
              <i class='fa fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      <!-- End Social navigation -->

    </div>
  </div>
</header>
<!-- End Header -->

<div class='page-wrap' id='fullpage'>
  <!-- Particles Background -->
  <canvas class='bg-particles' id='bg-particles'></canvas>

  <!-- Start Welcome -->
  <section class='inicio section-content section background-parallax bg-image-1 cloud-background'>
    <div class='overlay'></div>
    <div class='container'>
      <div class='row'>
        <div class="col-sm-6 ">
          <img src="images/turtlebot3-burger.png" alt="Marsebot - Turtlebot3 burger">
        </div>
        <div class='col-sm-6'>
          <h1 class='section-title'>
            <span class="highlight f-bold">Marsebot</span>
          </h1>
          <div class="col-sm-offset-1 col-sm-12 left-vertical-bar">
            <p>Este es un pequeño robot que dará soporte a diferentes tareas gracias a sus diferentes modos. Cada uno de estos modos está programado para
              realizar ciertas funciones especificas. Modo soporte, modo exploración y modo vigilancia.</p>
          </div>
          <div class="col-sm-12">
            <div class='mg-t'>
              <router-link to="/login">
                <a class='btn btn-color btn-lg js-to-slide animated onstart btn-login-marselotech' data-animation-delay='300' data-animation='fadeInUp' data-slide='4' href=''>
                Panel de control
              </a>
              </router-link>
                
              <a class='btn btn-outline btn-lg js-to-slide animated onstart' data-animation-delay='400' data-animation='fadeInUp' data-slide='2' href='#'>
                Saber más
                <i class='fa fa-angle-down'></i>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- End Welcome -->

  <!-- Start Services -->
  <section class='servicios section background-parallax section-no-space bg-image-2'>
    <div class='overlay light'></div>
    <div class='owl-carousel full-page-carousel owl-theme'>
      <div class='item'>
        <div class='carousel-item-inner js-vertical-middle text-center'>
          <h1 class='section-title'>
            Modos
          </h1>
        </div>
      </div>
      <div class='item bg-image-4'>
        <div class='overlay'></div>
        <div class='carousel-item-inner js-vertical-middle'>
          <div class='text-center'>
            <div class='mg-b'>
              <i class='fa fa-truck ico-box icon-box-lg'></i>
              <h3 class='f-thin'>
                Soporte
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequuntur eum enim commodi, minima
              </p>
            </div>
            <a class='btn btn-outline' href="#suport-mode">
              Más detalles
            </a>
          </div>
        </div>
      </div>
      <div class='item color-dark bg-white'>
        <div class='carousel-item-inner js-vertical-middle'>
          <div class='text-center'>
            <div class='mg-b'>
              <i class='fa fa-globe ico-box icon-box-lg'></i>
              <h3 class='f-thin'>
                Exploración
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequuntur eum enim commodi, minima
              </p>
            </div>
            <a class='btn btn-outline-dark' href="#exploration-mode">
              Más detalles
            </a>
          </div>
        </div>
      </div>
      <div class='item bg-primary'>
        <div class='overlay'></div>
        <div class='carousel-item-inner js-vertical-middle'>
          <div class='text-center'>
            <div class='mg-b'>
              <i class='fa fa-eye ico-box icon-box-lg'></i>
              <h3 class='f-thin'>
                Vigilancia
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta consequuntur eum enim commodi, minima
              </p>
            </div>
            <a class='btn btn-outline' href="#watch-mode">
              Más detalles
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
  <!-- End Services -->

  <!-- Start Support mode -->
  <section class='modo-soporte section background-parallax bg-image-2' id="suport-mode">
    <div class='overlay'></div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6'>
          <div class='hero-content'>
            <h1 class='section-title text-left animated' data-animation-delay='0' data-animation='fadeInUp'>
              Modo <strong class="highlight">Soporte</strong>
            </h1>
          </div>
          <div class='row'>
            <div class='col-sm-12 right-vertical-bar'>
              <div class='mg-b'>
                <p class='animated' data-animation-delay='100' data-animation='fadeInUp'>
                  Con este modo, el robot está programado para llevar objetos de un punto a otro. El robot escanea el entorno donde se encuentra y traza
                  la ruta más optima hacia el punto objetivo. Es funcionalidad es muy util cuando se prentende transportar objetos de un punto a otro evitnado así
                  dejar de lado otro tipo de tareas con mayor importancia.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='col-sm-6'>
          <img src="images/hand.jpg" alt="Mano de robot ">
        </div>
      </div>
    </div>
  </section>
  <!-- End Support mode -->


  <!-- Start Exploration mode -->
  <section class='modo-exploracion section background-parallax bg-image-2' id="exploration-mode">
    <div class='overlay'></div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6'>
          <img src="images/robot-soporte.jpg" alt="Robot configurando panle de operaciones">
        </div>
        <div class='col-sm-6'>
          <div class='hero-content'>
            <h1 class='section-title text-left animated ' data-animation-delay='0' data-animation='fadeInUp'>
              Modo <strong class="highlight">Exploración</strong>
            </h1>
          </div>
          <div class='row'>
            <div class='col-sm-12 left-vertical-bar'>
              <div class='mg-b'>
                <p class='animated' data-animation-delay='100' data-animation='fadeInUp'>
                  En la modalidad de exploración, el robot está programado para investigar zonas inexploradas, en caso de detectar algo que se encuentre fuera de
                  sus parametros de busqueda avisará a sus propietarios indicandoles la posición. También cuenta con un sensor de gas, el cual irá avisando si se detecta
                  algún gas nocivo en el ambiente mientras explora la zona.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Exploration mode -->

  <!-- Start watch mode -->
  <section class='modo-vigilancia section background-parallax bg-image-2' id="watch-mode">
    <div class='overlay'></div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6'>
          <div class='hero-content'>
            <h1 class='section-title text-left animated' data-animation-delay='0' data-animation='fadeInUp' >
              Modo <strong class="highlight">Vigilancia</strong>
            </h1>
          </div>
          <div class='row'>
            <div class='col-sm-12 right-vertical-bar'>
              <div class='mg-b'>
                <p class='animated' data-animation-delay='100' data-animation='fadeInUp'>
                  Este modo fue desarrollado expresamente para facilitar la vigilancia de zonas ya reconocidas. El robot trazara la ruta más óptima para cubrir el máximo terreno posible,
                  y si encontrase algún intruso, el robot informaría de la posición del intruso y de ser necesarió el intruso sería atacado por el robot.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='col-sm-6'>
          <img src="images/security.jpg" alt="Escudo envuelto por malla protectora">
        </div>
      </div>
    </div>
  </section>
  <!-- End watch mode -->


  <!-- Start watch mode -->
  <section class='aboutus section background-parallax bg-image-2' id="sobre-nosotros">
    <div class='overlay'></div>
    <div class='container'>
        <div class='row'>
          <div class='col-sm-12'>
            <div class='hero-content'>
              <h1 class='section-title text-center animated' data-animation-delay='0' data-animation='fadeInUp'>
                Acerca de <strong class="highlight">nosotros</strong>
              </h1>
            </div>
            <div class='col-sm-12 center-block'>
                <div class='col-sm-offset-4 col-sm-4 mg-b'>
                  <p class='animated text-center' data-animation-delay='100' data-animation='fadeInUp'>
                    Somos un grupo de estudiantes del grado de Tecnologías Interactivas de la Universidad Politécnica
                    de Valencia. Hemos realizado proyectos previos tanto de web xomo de app, así como el desatollo de un
                    videojuego y dispositivos basados en IOT.
                  </p>
                </div>
            </div>
          </div>
          <div class='col-sm-12 text-center'>
            <img src="images/marselo-team.jpg" width="927px" height="auto" alt="Foto de los integrantes de marselo team">
          </div>
        </div>
    </div>
  </section>
  <!-- End watch mode -->

<!-- colaboradores -->
  <section class='colaboradores section background-parallax section-no-space bg-image-2' id="collaborators">
    <div class='overlay'></div>
    <div class="container">
      <div class="row align-items-end" style="margin-right: 0.5rem" id="caja-colab-texto">
        <div class="col-md-5">
          <div class="faq-img text-right">
            <img src="images/logos-icons.png" alt="img" class="img">
          </div>
        </div>
        <div class="col-md-offset-2 col-md-5">
          <div class="section-title left-align mb-50">
            <h2>Nuestros colaboradoes</h2>
          </div>
          <div class="faq-wrap">
            <div class="accordion" id="accordionExample">
              <div class="card">
                <div class="card-header" id="headingThree">
                  <h2 class="mb-0">
                    <button class="faq-btn btn btn-outline waves-effect waves-light" type="button" data-toggle="collapse"
                            data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                      ANGLETRONICS
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" class="collapse show" aria-labelledby="headingThree"
                     data-parent="#accordionExample">
                  <div class="card-body">
                    Sus miembros también colaboran en un proyecto de investigación dedicado a la inteligencia artificial con
                    robots con la finalidad de aportar buenas ideas y ayuda a nuestra sociedad.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingOne">
                  <h2 class="mb-0">
                    <button class="faq-btn btn btn-outline waves-effect waves-light collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      SBOCK
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div class="card-body">
                    Sus miembros también colaboran en un proyecto de investigación dedicado a la inteligencia artificial con
                    robots con la finalidad de aportar buenas ideas y ayuda a nuestra sociedad.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                  <h2 class="mb-0">
                    <button class="faq-btn btn btn-outline waves-effect waves-light collapsed" type="button" data-toggle="collapse"
                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      YSOLVE
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div class="card-body">
                    Sus miembros también colaboran en un proyecto de investigación dedicado a la inteligencia artificial con
                    robots con la finalidad de aportar buenas ideas y ayuda a nuestra sociedad.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!--End colaborators-->

  <!-- Start Contacts -->
  <section class='section-content contacts section background-parallax bg-image-4'>
    <div class='overlay'></div>
    <div class='container'>
      <div class='row'>
        <div class='col-sm-6'>
          <h1 class='section-title animated' data-animation-delay='50' data-animation='fadeInUp'>
            Contáctanos
          </h1>
          <form action='#' id='contact-form'>
            <div class='form-wrap'>
              <div class='form-group animated' data-animation-delay='100' data-animation='fadeInUp'>
                <input class='form-control form-control-no-space border-bottom' id='contact-form-name' name='name' placeholder='Nombre' type='text'>
              </div>
              <div class='form-group animated' data-animation-delay='200' data-animation='fadeInUp'>
                <input class='form-control form-control-no-space border-bottom' id='contact-form-email_contact-form-email' name='email' placeholder='Email' type='text'>
              </div>
              <div class='form-group animated' data-animation-delay='300' data-animation='fadeInUp'>
                <textarea class='form-control form-control-no-space border-bottom' cols='30' id='contact-form-message' name='message' placeholder='Mensaje' rows='5'></textarea>
              </div>
              <div class='form-group mg-t'>
                <button class='btn btn-color btn-lg btn-submit animated' data-animation-delay='350' data-animation='fadeInUp' type='submit'>
                  Enviar mensaje
                  <i class='fa fa-paper-plane'></i>
                </button>
              </div>
            </div>
            <div class='mgs'>
              <div class='success-message'>
                <i class='fa fa-check'></i>
                Su mensaje se ha enviado correctamente.
              </div>
              <div class='error-message'>
                <i class='fa fa-warning'></i>
                Debe se un email valido
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contacts -->

</div>
<!-- Start Footer -->
<footer class='page-footer'>
  <div class='container-full'>
    <div class='row'>
      <div class='col-sm-12'>
        <div>
          Web desarrollada por <i class="fa fa-heart highlight" aria-hidden="true"></i>
          <a href='#' > Marselo studios</a>
        </div>
        <div class='copyright'>© 2022 Todos los derechos reservados</div>
      </div>
    </div>
  </div>
</footer>
<!-- End Footer -->

</template>

<script>
import LoaderMarselotech from '@/components/LoaderMarselotech.vue';

export default{
    name: "HomeMarselotech",
    components: { LoaderMarselotech }
}
</script>

<style>

</style>