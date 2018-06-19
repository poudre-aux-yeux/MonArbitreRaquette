<template>
<v-app>
  <div id="main">
    <router-view/>
  </div>
</v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#main {
  background-image: url("./assets/bg.png");
  background-position: center;
  background-size: cover;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffee00;
}
</style>
