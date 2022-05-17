<template>
 
 <HomeMarselotech/>
</template>

<script>

import HomeMarselotech from '@/components/HomeMarselotech.vue'


export default {
    name: "App",
    data() {
        return {
            followers: 0,
            user: {
                id: 1,
                username: "johnhr710",
                firstname: "John",
                lastname: "Hernández",
                email: "johnhr710@gmail.com",
                isAdmin: true
            }
        };
    },
    watch: {},
    computed: {
        fullName() {
            return `${this.user.firstname} ${this.user.lastname}`;
        }
    },
    methods: {
        followUser() {
            this.followers++;
        }
    },
    mounted() {
        this.followUser();
    },
    components: { HomeMarselotech }
}
</script>

<style>
</style>
