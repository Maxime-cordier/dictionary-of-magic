<template>
  <div id="app">
    <nav class="navbar navbar.is-fixed-top " role="navigation" aria-label="main navigation">
      <div class="navbar-brand logo_contain">
        <a class="navbar-item">
          <img src="./assets/logo.png" class="logo" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/">Home</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/gestionnaire">Gestionnaire</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/recherche">Recherche</router-link>
          </a>

          <a class="navbar-item">
            <router-link to="/statistiques">Statistiques</router-link>
          </a>
        </div>
      </div>
    </nav>
    <router-view />
    <my-footer></my-footer>
  </div>
</template>

<script>
import footer from "./components/footer";

export default {
  name: "App",
  data() {
    return {
      costOfApples: 6,
    };
  },
  mounted() {
    //console.log(DATA); //Ca debeug
  },
  components: {
    "my-footer": footer,
  },
};
</script>

<style>
#app {
  margin-top: 150px;
}

div .navbar {
  position: fixed;
  top: 0%;
  width: 100%;
  background: #ff5f6d;
  background: -webkit-linear-gradient(to right, #ff5f6d, #ffc371);
  background: linear-gradient(to right, #ff5f6d, #ffc371);
  padding-top: 0px;
  padding-bottom: 0px;
}

a {
  color: rgb(229, 230, 231) !important;
  padding-top:2px;
  border-radius: 5%;
 /* background-color: rgba(255, 255, 255, 0.26);*/
}

a:hover{
  background-color: #ffc47100 !important;
}

a.navbar-item{
  background-color: #ffc47100 !important;
}


my-footer {
  position: absolute;
  bottom: 0%;
  vertical-align: middle;
  width: 100%;
}
</style>
