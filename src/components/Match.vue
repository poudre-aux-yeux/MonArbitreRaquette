<template>
  <v-card class="match" v-if="match">
    <v-card-title v-if="match.stadium">
      <h1>{{ match.stadium.name }}</h1>
    </v-card-title>
    <v-card-title>
      <h2>{{ new Date(match.date).toLocaleString() }}</h2>
    </v-card-title>
    <v-card-text>
      <v-layout row flex>
        <v-flex xs12 md6
          class="team"
          v-for="(player, i) in [...match.homePlayers, ...match.awayPlayers]"
          :key="player.id"
          @click="scorePoint(i % 2 == 0)"
        >
          {{ player.name }}
          <img :src="player.image" height="200" />
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-btn flat>Carton jaune</v-btn>
      <v-spacer />
      <v-btn flat>Appeler le soigneur</v-btn>
      <v-spacer />
      <v-btn flat>Carton jaune</v-btn>
    </v-card-actions>
    <v-card-actions>
      <v-btn flat>Carton rouge</v-btn>
      <v-spacer />
      <!-- <v-btn flat>Appeler le soigneur</v-btn>
      <v-spacer /> -->
      <v-btn flat>Carton rouge</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import getMatch from '@/graphql/getMatch.gql'
import scorePoint from '@/graphql/scorePoint.gql'
export default {
  name: 'Match',
  methods: {
    async scorePoint (homeTeam) {
      if (homeTeam === undefined) {
        return
      }

      try {
        const data = await this.$apollo.mutate({
          // Query
          mutation: scorePoint,
          variables: {
            homeTeam,
            match: this.$route.params.id
          }
        })

        console.log(data)
      } catch (e) {
        console.error(`couldn't save the point: ${e}`)
      }
    }
  },
  apollo: {
    match: {
      query: getMatch,
      variables () {
        return {
          id: this.$route.params.id
        }
      }
    }
  }
}
</script>

<style scoped>
.match {
  width: 500px;
  height: 800px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.team {
  cursor: pointer;
}

.team:hover {
  border: 2px solid #ccc;
}
</style>
