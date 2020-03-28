import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Publicacion from '../views/publicacion/Publicacion.vue'
import TablePublicaciones from '../views/publicacion/TablePublicaciones.vue'
import Glossary from '../views/Glossary.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/publicacion/:id', name: 'Publicacion', component: Publicacion},
  { path: '/publicaciones', name: 'Publicaciones', component: TablePublicaciones },
  { path: '/glosario', name: 'Glossary', component: Glossary},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router