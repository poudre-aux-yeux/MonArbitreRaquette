<template>
  <div class="gestionstadium">
    <h1>Joueurs</h1>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
           <v-icon>mdi-soccer-field</v-icon>
          <v-toolbar-title>Liste des terrains</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="item in items" :key="item.title" @click="changeRoute()">
            <v-list-tile-action>
              <v-icon v-if="item.icon" color="pink">star</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text= "item.title"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="item.avatar" alt="avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    <v-btn v-on:click="buttonCreation" large color="success">
         <v-icon>mdi-shape-rectangle-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'GestionStadium',
  data () {
    return ({
      items: [
        { icon: true, title: 'Roland Garros', avatar: '/static/stade-roland-garros.jpg' },
        { title: 'Terre Battue', avatar: '/static/terrain.jpg' },
        { title: 'Gazon', avatar: '/static/terrain.jpg' },
        { title: 'Synthétique', avatar: '/static/terrain.jpg' }
      ]
    })
  },
  methods: {
    buttonCreation: function () {
      this.$router.push({ path: '/PageStadium/' })
    }
  }
}
</script>

<style>
  h1 {
    color: rgb(54, 130, 244);
  }
</style>
