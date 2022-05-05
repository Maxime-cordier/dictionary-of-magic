<template>
  <div id="gestionnaire">
    <p class="titre-page title is-2">Configuration</p>
    <p> Choisissez un livre pour restreindre la recherche : </p>
    <div>
      <input type="radio" id="all" name="type" value="data" @change="changeFilter($event.target.value)">
      <label for="all">Tous</label>
      <div v-for="sort in livreListe" :key="sort">
        <input type="radio" :id="sort" name="type" :value="sort" @change="changeFilter($event.target.value)">
        <label :for="sort">{{ sort }}</label>
      </div>
      
    </div>
  </div>
</template>

<script>
import statLivre from "../function/listeLivre";

export default {
  name: 'gestionnaire',
  props: ["DATA"],
  methods: {
    changeFilter(Livre){
      localStorage.setItem('filtreLivre', Livre);
    }
  },
  computed : {
      livreListe(){
        return statLivre(this.DATA);
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
