<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppFooter, AppHeader },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
