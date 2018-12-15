<template>
    <div id="app">
        <router-view v-wechat-title='$route.meta.title'></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        } 
    },
    components: {
      
    },
}
</script>

<style>
@import "./assets/css/public";
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
