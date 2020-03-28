<template>
  <v-app>
    <Header></Header>
    <v-content>
      <Menu></Menu>
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
    Header,
    Menu
  },

  data: () => ({
    //
  }),
};
</script>