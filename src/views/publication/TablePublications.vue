<template>
<v-card v-bind:style="{ height: '100%' }">
  <v-card-title>
    Publicaciones
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Buscar publicaciones"
      single-line
      hide-details
    ></v-text-field>
  </v-card-title>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
      @click:row="seePublication"
    ></v-data-table>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount"></v-pagination>
    </div>
  </div>
</v-card>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        page: 1,
        pageCount: 0,
        itemsPerPage: 10,
        headers: [
          {
            text: 'Titulo',
            align: 'start',
            sortable: true,
            value: 'title',
          },
          { text: 'Tematica', value: 'theme' },
          { text: 'Materia', value: 'matter' }, 
          { text: 'Curso', value: 'schoolYear' },
        ],
        desserts: [
          {
            title: 'Frozen Yogurt',
            theme: 159,
            matter: 6.0,
            schoolYear: '1%',
          },
          {
            title: 'Ice cream sandwich',
            theme: 237,
            matter: 9.0,
            schoolYear: '1%',
          },
          {
            title: 'Eclair',
            theme: 262,
            matter: 16.0,
            schoolYear: '7%',
          },
        ],
      }
    },

    methods: {
      seePublication(value) {
        this.$router.push('/publicacion/'+value.title);
      },
    }
  }
</script>