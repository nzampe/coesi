<template>
  <v-app>
    <app-header></app-header>
    <app-menu v-if="this.$route.name == 'TablePublications' || this.$route.name == 'Glossary'"></app-menu>
    <v-content>
      <router-view></router-view>
    </v-content>
    
  </v-app>
</template>

<script>

import Header from '@/components/Header.vue'
import Menu from '@/components/Menu.vue'

export default {
  name: 'App',

  components: {
    appHeader: Header,
    appMenu: Menu
  },

  data: () => ({
    //
  }),
};
</script>