<template>
  <v-container>
    <v-navigation-drawer>
        <v-row cols="12">
            <div v-if="this.$route.name == 'TablePublications'">
                <v-col cols="12">
                    <v-btn text>Publicaciones</v-btn>
                </v-col>
                <div class="ml-8 mr-3">
                    <v-col cols="10" class="ml-4 ma-0 pa-0">
                        <p>Estado</p>
                    </v-col>
                    <v-col cols="9" class="ml-12 ma-0 pa-0">
                        <v-checkbox label="Planificada" value="Planificada" class="ma-0 pa-0"></v-checkbox>
                        <v-checkbox label="Finalizada" value="Finalizada" class="ma-0 pa-0"></v-checkbox>
                    </v-col>
                    <v-col cols="10" class="ml-4 ma-0 pa-0">
                        <p>Materia</p>
                    </v-col> 
                    <v-col cols="9" class="ml-12 ma-0 pa-0">
                        <div>
                            <v-checkbox label="Cs Sociales" value="Cs Sociales" class="ma-0 pa-0"></v-checkbox>
                            <v-checkbox label="Cs Naturales" value="Cs Naturales" class="ma-0 pa-0"></v-checkbox>
                        </div>
                    </v-col>
                    <v-col cols="10" class="ml-4 ma-0 pa-0">
                        <p>Curso</p>
                    </v-col>
                    <v-col cols="9" class="ml-12 ma-0 pa-0">
                        <v-checkbox label="4to A" value="4to A" class="ma-0 pa-0"></v-checkbox>
                        <v-checkbox label="4to B" value="4to B" class="ma-0 pa-0"></v-checkbox>
                    </v-col>
                    <v-col cols="10" class="ml-4 ma-0 pa-0">
                        <p>Tematica</p>
                    </v-col>
                    <v-col cols="9" class="ml-12 ma-0 pa-0">
                        <v-checkbox label="Metodos anticonceptivos" value="Metodos anticonceptivos" class="ma-0 pa-0"></v-checkbox>
                        <v-checkbox label="Genero" value="Genero" class="ma-0 pa-0"></v-checkbox>
                    </v-col>
                </div>
            </div>
            <div v-if="this.$route.name == 'Glossary'">
                <v-col>
                    <v-btn text>Glosario</v-btn>
                </v-col>
            </div>
        </v-row>
    </v-navigation-drawer>
  </v-container>
</template>

<script>


export default {
  name: 'Home',

  components:{
  }
}
</script>
