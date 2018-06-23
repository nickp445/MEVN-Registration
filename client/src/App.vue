<template>
  <div id="app">
    <h1>Powered By</h1>
    <img src="./assets/logo.png">
    <img src="./assets/expressjs.jpg">
    <img src="./assets/mongodb.jpg">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-family: 'Pacifico', cursive;
}
img {
  margin-bottom: 10px;
}
</style>
