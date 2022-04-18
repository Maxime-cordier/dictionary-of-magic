import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import gestionnaire from '@/components/gestionnaire.vue'
import research from '@/components/research.vue'
import stats from '@/components/statistiques.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/gestionnaire',
      name : 'gestionnaire',
      component: gestionnaire
    },
    {
      path: '/recherche',
      name : 'research',
      component: research
    },
    {
      path: '/statistiques',
      name : 'stats',
      component: stats
    }
  ]
})
