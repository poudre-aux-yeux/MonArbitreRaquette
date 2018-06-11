<template>
  <div class="gestionplayer">
    <h1>Joueurs</h1>
    <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark>
           <v-icon>mdi-account-group</v-icon>
          <v-toolbar-title>Liste des joueurs</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile avatar v-for="player in players" :key="player.id" @click="changeRoute()">
            <v-list-tile-content>
              <v-list-tile-title v-text="player.name"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar>
              <img :src="player.image" alt="avatar">
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
    <v-btn v-on:click="buttonCreation" large color="success">
         <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
import allPlayers from '../graphql/allPlayers.gql'
export default {
  name: 'GestionPlayer',
  data () {
    return ({
      players: []
    })
  },
  methods: {
    changeRoute (id) {
      this.$router.push({ path: '/PagePlayer' }, this.player.id)
    },
    buttonCreation: function () {
      this.$router.push({ path: '/PagePlayer/' })
    }
  },
  apollo: {
    players: {
      query: allPlayers
    }

  }
}
</script>

<style>
  h1 {
    color: rgb(54, 130, 244);
  }
</style>
