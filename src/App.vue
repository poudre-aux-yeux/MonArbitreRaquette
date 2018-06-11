<template>
<v-app>
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
      v-if="isLoggedIn"
    >
      <v-list dense>
        <v-list-tile @click="changeRoute('/adminpage/')">
          <v-list-tile-action>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Page Admin</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="changeRoute('/gestionpage/')">
          <v-list-tile-action>
            <v-icon>mdi-table-edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Gestion</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar class="main-toolbar" dark fixed app v-if="isLoggedIn">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Admin raquette</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="changeRoute('/adminpage/')">
        <v-icon>mdi-home-outline</v-icon>
      </v-btn>
      <v-btn icon @click="changeRoute('/gestionpage/')">
        <v-icon>mdi-table-edit</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content app>
      <v-container fluid :class="{'login-container':!isLoggedIn}" grid-list-md>
        <router-view></router-view>
      </v-container>
    </v-content>
</v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return ({
      drawer: false
    })
  },
  computed: {
    ...mapGetters([
      'isLoggedIn'
    ])
  },
  methods: {
    changeRoute (route) {
      this.$router.push({ path: route })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #8A2387;  /* fallback for old browsers */
  background: -webkit-linear-gradient(45deg, #F27121 -75%, #E94057, #8A2387);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(45deg, #F27121 -75%, #E94057, #8A2387) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.login-container{
  background-image: url("https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb");
  background-size: cover;
  height: 100%;
}

#app .main-toolbar.toolbar{
  background: #00000050;
}

#app .container{
  height: 100%;
}

</style>
