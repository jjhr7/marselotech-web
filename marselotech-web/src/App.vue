<template>
 
<router-view/>

</template>

<script>
import { onMounted } from 'vue';


export default {
    name: "App",
    setup(){

        onMounted(()=>{

            setTimeout(() => {
                const jspath = 'js/';
                var jslibs = ['jquery-3.2.1.min.js', 'jquery.easing.1.3.js', 'bootstrap.min.js', 'jquery.countdown.js', 'jquery.fullPage.min.js', 'jquery.appear.js', 'jquery.fitvids.js', 'jquery.backstretch.min.js', 'owl.carousel.min.js', 'jquery.ajaxchimp.js', 'particles.js', 'moment.js', 'main.js'];
                for(var i=0;i<13;i++){
                    
                    var customLib = document.createElement("script");
                    customLib.setAttribute('src',jspath+jslibs[i]);
                    document.body.appendChild(customLib);

                }
            }, 1500);
               
        });
    
        return {}
    }
}
</script>

<style>
</style>
