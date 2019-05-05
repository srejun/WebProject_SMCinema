<template>
<div id="app">
  <div class="ui inverted segment">
    <div class="ui inverted secondary menu">
      <span class="item">
        <img class="ui image" src="./assets/sm.png" height="60px" width="60px" > 
      </span>
      <a href="#/" class="item">
        <i class="home icon"></i>
        Home
      </a>
      <a href="#/movie" class="item">
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
  body  {
        background-image: url("./assets/bg.jpg") !important;
        background-size: cover !important;
        }
</style>
