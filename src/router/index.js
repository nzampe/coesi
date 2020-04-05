import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publication from '../views/publication/Publication.vue'
import NewPublication from '../views/publication/FormPublication.vue'
import TablePublications from '../views/publication/TablePublications.vue'
import Glossary from '../views//glossary/Glossary.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/publicacion/nueva', name: 'NewPublication', component: NewPublication},
  { path: '/publicacion/:title', name: 'Publication', component: Publication},
  { path: '/publicacion', name: 'TablePublications', component: TablePublications },
  { path: '/glosario', name: 'Glossary', component: Glossary},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router