<template>
  <div id="rech" class="container">
    <p class="titre-page title is-2">Recherche</p>
    <div class="row">
      <!--Recherche-->
      <div class="field is-grouped">
        <p class="control ">
          <input v-model="cherche" :placeholder="'Nom du sort'" type="input" class="input-recherche" >   
        </p>
      </div>

      <!--Carte de sorts-->
      <div v-for="item in DATA_filtre" :key="item[1] + item[2]">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ item[1] }}
            </p>
            <button class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </button>
          </header>
          <div class="card-content">
            <div class="content">
              <p>Type : {{ item[2] }}</p>
              <br>
              <p>Livre : {{ item[0] }}</p>
              <br>
              <p class="join">{{ item[3].join(", ") }}</p>
              <br>
              <p>{{ item[4] .join(", ")}}</p>
              <br>
              <p>{{ item[5].join(", ") }}</p>
              <br>
              <p>{{ item[6] }}</p>
            </div>
          </div>
        </div>
      </div>

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
      let mesSorts = this.DATA;
      let filtre = localStorage.getItem('filtreLivre') || 'data';

      if (filtre != "data"){
        mesSorts = mesSorts.filter(sort => sort[0] == filtre);
      }

      return mesSorts.filter((uneDATA) => uneDATA[1].toLowerCase().includes(this.cherche.toLowerCase()))
    }
  }
}
</script>

<style>
  .card{
      margin-bottom: 20px;
  }

</style>