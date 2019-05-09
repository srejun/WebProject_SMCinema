<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">
          <button class="nav-link">Home</button>
    </router-link>
    <router-link to="/selectPosition">
          <button class="nav-link">Select</button>
    </router-link> -->

    <div class="ui inverted segment">
      <div class="ui inverted secondary menu">
        <span class="item">
          <img class="ui image" src="./assets/sm.png" height="60px" width="60px" > 
        </span>

        <a class="item">
          <i class="home icon"></i>
          Home
        </a>
        <a class="item">
          <i class="film icon"></i>
          Movies
        </a>
        <a class="item">
          <i class="address book outline icon"></i>
          About us
        </a>
        <a class="right floated item">
          <i class="user outline icon"></i>
          Login / Register
        </a>
      </div>
    </div> 
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
</style>
