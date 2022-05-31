<template>
    <!--<LoaderMarselotech/>-->
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
                            <form @submit.prevent="onSubmit" class="mb-5">
                                <div class="mb-4">
                                    <label for="exampleInputEmail1" class="form-label font-weight-bold text-light">Email</label>
                                    <input v-model="form.email" type="email" class="form-control bg-dark-x border-0" id="exampleInputEmail1" placeholder="Ingresa tu email" aria-describedby="emailHelp">
                                </div>
                                <div class="mb-4">
                                    <label for="exampleInputPassword1" class="form-label font-weight-bold text-light">Código del robot</label>
                                    <input v-model="form.robotid" type="password" class="form-control bg-dark-x border-0 mb-2" placeholder="Ingresa tu código del robot" id="exampleInputPassword1">
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
import LoaderMarselotech from '@/components/LoaderMarselotech.vue';
import {autenticatUser} from '@/firebase'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'


export default{
    name: "LogiDashboard",
    setup() {

        const router = useRouter();
    

        const form = reactive({email:'',robotid:''});

        const onSubmit =  async () => {

           const responseAuth =  await  autenticatUser({...form});
           switch(responseAuth.status){
               case 0:
                   router.push({
                        name: "dashboard",
                        params:{
                            robotid: responseAuth.data.robotid,
                        }
                    });
                break;
                
                case 1:
                    form.email = '';
                    form.robotid = '';
                break;

                case 2:
                    form.email = '';
                    form.robotid = '';
                break;

                default:
                    form.email = '';
                    form.robotid = '';
           }

        }

        return { form, onSubmit};
    },
    components: { LoaderMarselotech }
}
</script>


<style>

</style>