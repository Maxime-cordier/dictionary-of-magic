<template>
  <div id="rech">
    <p>Recherche</p>

    <input v-model="cherche" type="search"/>
    <div v-for="item in DATA_filtre" :key="item[1] + item[2]">
      <p>Nom : {{ item[1] }}</p>
      <p>Type : {{ item[2] }}</p>
      <br>

    </div>


  </div>
</template>

<script>
export default {
  name: 'research',
  data () {
    return {
      cherche: "",
    }
    
  },
  props : ["DATA"],
  computed : {
    DATA_filtre(){
      return this.DATA.filter((uneDATA) => uneDATA[1].toLowerCase().includes(this.cherche.toLowerCase()))
    }
  }
}
</script>

<style>
#gestionnaire {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>