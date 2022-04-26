<template>
  <div id="app">
    <div id='nav'>
      <router-link to='/'>Home</router-link>
      <router-link to='/gestionnaire'>Gestionnaire</router-link>
      <router-link to='/recherche'>Recherche</router-link>
      <router-link to='/statistiques'>Statistiques</router-link>
    </div>
    
    <img src="./assets/Book.png">
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
  },
  mounted(){
    //console.log(DATA); //Ca debeug
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
  position:absolute;
  top:0px;
  left:160px;
}
</style>
