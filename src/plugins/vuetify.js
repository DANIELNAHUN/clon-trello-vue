import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken4, // #E53935
        secondary: colors.green.accent1, // #FFCDD2
        accent: colors.lightGreen.lighten1, // #3F51B5
      },
    },
  },
});
