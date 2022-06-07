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
                const jspath = 'http://localhost:8080/js/';
                var jslibs = ['jquery-3.2.1.min.js', 'jquery.easing.1.3.js', 'bootstrap.min.js', 'popper.min.js', 'jquery.countdown.js','jquery.mb.YTPlayer.js','mdb.min.js', 'jquery.fullPage.min.js', 'jquery.appear.js', 'jquery.fitvids.js', 'jquery.backstretch.min.js', 'owl.carousel.min.js','mjpegcanvas.min.js' ,'jquery.ajaxchimp.js', 'particles.js', 'moment.js', 'main.js'];
                var externaljslibs = ["https://cdn.jsdelivr.net/npm/eventemitter2@5.0.1/lib/eventemitter2.min.js", "https://static.robotwebtools.org/mjpegcanvasjs/current/mjpegcanvas.min.js", "https://static.robotwebtools.org/roslibjs/current/roslib.min.js"];

                jslibs.forEach(function(lib){
                    var customLib = document.createElement("script");
                    customLib.setAttribute('src',jspath+lib);
                    document.body.appendChild(customLib);
                });

                externaljslibs.forEach(function(lib){
                    var customLib = document.createElement("script");
                    customLib.setAttribute('src',lib);
                    document.body.appendChild(customLib);
                });

            }, 1500);
               
        });
    
        return {}
    }
}
</script>

<style>
</style>
