<template>
  <div class="hello">
    <h1>Bibliot'ENSSAT</h1>
    <p>Bienvenue à la bibilothèque MAGIQUE de l'ENSSAT! </p>
    <p>Ici vous pouvez rechercher un livre, regarder les statisques, ou gérer les stockes</p>  
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
