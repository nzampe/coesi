<template>
    <v-app-bar
        app
        color="primary"
        dark
        v-bind:style="{ left: '0px' }"
    >
        <div class="d-flex align-center">
            <router-link to="/">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                transition="scale-transition"
                width="40"
            /></router-link>

            <v-img
                alt="Vuetify Name"
                class="shrink mt-1 hidden-sm-and-down"
                contain
                min-width="100"
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                width="100"
            />
            <router-link to="/publicacion" class="active">
                <v-btn text>Publicaciones</v-btn>
            </router-link>
            <router-link to="/glosario" class="active">
                <v-btn text>Glosario</v-btn>
            </router-link>
        </div>

        <v-spacer></v-spacer>

        <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        text
        >
        <span class="mr-2">Nombre usuario</span>
        <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>