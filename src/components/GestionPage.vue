<template>
  <div class="gestionpage">
     <v-layout column>
    <v-flex xs12 md6>
      <v-toolbar color="indigo" dark>
        <v-icon>mdi-tennis</v-icon>
        <v-toolbar-title>Gestion</v-toolbar-title>
      </v-toolbar>
      <v-card>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${card.flex}`]: true }"
              v-for="card in cards"
              :key="card.title"
            >
              <v-card>
                <v-card-media
                  :src="card.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="card.title"></span>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn @click="newElement(card.title)" icon>
                    <v-icon >mdi-shape-circle-plus</v-icon>
                  </v-btn>
                  <v-btn @click="listElement(card.title)" icon>
                    <v-icon >mdi-format-list-bulleted</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'GestionPage',
  data: () => ({
    cards: [
      { title: 'Joueurs', src: '/static/player.jpg', flex: 12 },
      { title: 'Arbitres', src: '/static/racket.jpg', flex: 6 },
      { title: 'Terrains', src: '/static/terrain.jpg', flex: 6 }
    ]
  }),
  methods: {
    newElement (title) {
      if (title === 'Joueurs') {
        this.$router.push({ path: '/PagePlayer' })
      }
      if (title === 'Arbitres') {
        this.$router.push({ path: '/PageReferee' })
      }
      if (title === 'Terrains') {
        this.$router.push({ path: '/PageStadium' })
      }
    },
    listElement (title) {
      if (title === 'Joueurs') {
        this.$router.push({ path: '/GestionPlayer' })
      }
      if (title === 'Arbitres') {
        this.$router.push({ path: '/GestionReferee' })
      }
      if (title === 'Terrains') {
        this.$router.push({ path: '/GestionStadium' })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
