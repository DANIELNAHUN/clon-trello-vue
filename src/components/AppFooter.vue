<template>
  <v-footer
    dark
    padless
  >
    <v-card
      color="primary"
      class="flex"
      flat
      tile
    >
      <v-card-title>
        <strong class="subheading">Testeando Vuex</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>DNCF</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
  export default {
    data(){
      return{
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
      }
    },
  }
</script>