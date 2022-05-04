<template>
  <div id="stat" class="container">
    <div class="row">
      <p class="titre-page title is-2">Statistiques</p>
        
        <div class="card">
            <p class="card-header-title">Nombre de livres : {{statLivre.length}}</p>
        </div>
        
        <div class="card">
          <p class="card-header-title">Nombre de sort total : {{DATA.length}}</p>
        </div>
        
        <div class="card">
            <p class="card-header-title">Nombre de sorts par livre :</p>

            <div class="card-content">
              <div class="content has-text-left">
                <p v-for="(nombre, sort) in nombreSort" :key="sort">
                  {{ sort }} : {{ nombre }}
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'stats',
  data () {
    return {
    
    }
  },
  props : ["DATA"],

  computed : {
    statLivre() {
    let tabLivres = [];
      this.DATA.forEach(sort => {
        if (!tabLivres.includes(sort[0])) {
          tabLivres.push(sort[0])
        }
      });
      return tabLivres;
    },

    nombreSort(){
      let tabLivre = {};

      this.DATA.forEach(sort => {
        if (tabLivre[sort[0]] != undefined) {
          tabLivre[sort[0]] = tabLivre[sort[0]] + 1;
        } else {
          tabLivre[sort[0]] = 1;
        }
      });

      return tabLivre;
    },


  },
  

}
</script>

<style>
#stat {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>