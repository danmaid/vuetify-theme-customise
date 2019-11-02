<template>
  <v-app>
    <Cyber>
      <v-app-bar app>
        <v-toolbar-title class="headline text-uppercase">
          <span>Vuetify</span>
          <span class="font-weight-light">MATERIAL DESIGN</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="$vuetify.theme.dark = true">Dark</v-btn>
        <v-btn text @click="$vuetify.theme.dark = false">Light</v-btn>
        <v-btn
          text
          href="https://github.com/vuetifyjs/vuetify/tree/master/packages/vuetify/src/styles"
          target="_blank"
        >
          src
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
        <v-btn text href="https://paletton.com" target="_blank">
          paletton.com
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar>

      <v-content>
        <router-view />
      </v-content>

      <v-footer>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }} 男メイド</div>
      </v-footer>
    </Cyber>
  </v-app>
</template>

<script>
import Cyber from './components/Cyber'

export default {
  name: 'App',
  components: { Cyber },
  data: () => ({
    //
  })
}
</script>
