<template>
 
 <HomeMarselotech v-if="visible"/>
 <LoginDashboard v-else/>
</template>

<script>

import HomeMarselotech from '@/views/HomeMarselotech.vue'
import LoginDashboard from '@/views/LoginDashboard.vue'

export default {
    name: "App",
    data() {
        return {
            visible: true
        };
    },
    watch: {},
    computed: {

    },
    methods: {
        changeElement(){
            this.visible = false;
        }
    },
    mounted() {
    },
    components: { HomeMarselotech, LoginDashboard }
}
</script>

<style>
</style>
