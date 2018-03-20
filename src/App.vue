<template>
<v-app>
  <div id="main">
    <img src="./assets/logo.png">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffee00;
  margin-top: 60px;
}
</style>
