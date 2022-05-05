import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import gestionnaire from '@/components/gestionnaire.vue'
import research from '@/components/research.vue'
import stats from '@/components/statistiques.vue'
import DATA from '../../data.min.js'

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
      component: gestionnaire,
      props : {
        DATA : DATA,
        data2 : stats.computed["statLivre"],
      }
    },
    {
      path: '/recherche',
      name : 'research',
      component: research,
      props : { DATA : DATA}
    },
    {
      path: '/statistiques',
      name : 'stats',
      component: stats,
      props : { DATA : DATA}
    }
  ]
})
