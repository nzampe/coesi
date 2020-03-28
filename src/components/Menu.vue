<template>
    <v-navigation-drawer>
        <v-row>
            <v-col cols="12">
                <router-link to="/publicaciones" class="active">
                    <v-btn text>Publicaciones</v-btn>
                </router-link>
            </v-col>
            <div v-if="filtroPublicaciones"  class="ml-8 mr-3">
                <v-col cols="10" class="ml-4 ma-0 pa-0">
                    <p>Estado</p>
                </v-col>
                <v-col cols="9" class="ml-12 ma-0 pa-0">
                    <v-checkbox v-model="selected" label="Planificada" value="Planificada" class="ma-0 pa-0"></v-checkbox>
                    <v-checkbox v-model="selected" label="Finalizada" value="Finalizada" class="ma-0 pa-0"></v-checkbox>
                </v-col>
                <v-col cols="10" class="ml-4 ma-0 pa-0">
                    <p>Materia</p>
                </v-col> 
                <v-col cols="9" class="ml-12 ma-0 pa-0">
                    <div>
                        <v-checkbox v-model="selected" label="Cs Sociales" value="Cs Sociales" class="ma-0 pa-0"></v-checkbox>
                        <v-checkbox v-model="selected" label="Cs Naturales" value="Cs Naturales" class="ma-0 pa-0"></v-checkbox>
                    </div>
                </v-col>
                <v-col cols="10" class="ml-4 ma-0 pa-0">
                    <p>Curso</p>
                </v-col>
                <v-col cols="9" class="ml-12 ma-0 pa-0">
                    <v-checkbox v-model="selected" label="4to A" value="4to A" class="ma-0 pa-0"></v-checkbox>
                    <v-checkbox v-model="selected" label="4to B" value="4to B" class="ma-0 pa-0"></v-checkbox>
                </v-col>
                <v-col cols="10" class="ml-4 ma-0 pa-0">
                    <p>Tematica</p>
                </v-col>
                <v-col cols="9" class="ml-12 ma-0 pa-0">
                    <v-checkbox v-model="selected" label="Metodos anticonceptivos" value="Metodos anticonceptivos" class="ma-0 pa-0"></v-checkbox>
                    <v-checkbox v-model="selected" label="Genero" value="Genero" class="ma-0 pa-0"></v-checkbox>
                </v-col>
            </div>
            <v-col>
                <router-link to="/glosario" class="active">
                    <v-btn text>Glosario</v-btn>
                </router-link>
            </v-col>
        </v-row>
    </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Menu',
    
    data () {
      return {
          filtroPublicaciones: true,
      }
    },
  }
</script>