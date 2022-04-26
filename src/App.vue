<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
         <!-- <img src="./assets/Book.png"> -->
        </a>

        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to='/'>Home</router-link>
          </a>

          <a class="navbar-item">
            <router-link to='/gestionnaire'>Gestionnaire</router-link>
          </a>

          <div class="navbar-item">
            <a class="navbar-link">
              <router-link to='/recherche'>Recherche</router-link>
            </a>
          </div>

          <div class="navbar-item">
            <a class="navbar-link">
              <router-link to='/statistiques'>Statistiques</router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>  
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      costOfApples : 6,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #1e2934;
}
#nav{
  margin: 4%;
}
a { 
  text-decoration: none;
  color:#1e2934;
  padding : 5%;
}
img {
  margin-right: auto;
  display: block;
}
</style>
