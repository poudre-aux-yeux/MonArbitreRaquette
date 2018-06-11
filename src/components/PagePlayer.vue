<template>
  <div class="pageplayer">
   <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="https://randomuser.me/api/portraits/men/11.jpg" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn dark icon class="mr-3" @click="editing=!editing">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn dark icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">
                <v-text-field
                  v-model="player.name"
                  placeholder="Player name"
                ></v-text-field>
              </div>
            </v-card-title>
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="indigo">mdi-baby</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Date de naissance</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-menu
                  ref="menu"
                  :close-on-content-click="false"
                  v-model="menu"
                  :nudge-right="40"
                  :return-value.sync="player.birth"
                  lazy
                  transition="scale-transition"
                  offset-y
                  full-width
                  min-width="290px"
                >
                  <v-text-field
                    slot="activator"
                    v-model="player.birth"
                    label="Picker in menu"
                    readonly
                  ></v-text-field>
                  <v-date-picker v-model="player.birth" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn flat color="primary" @click="$refs.menu.save(player.birth)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Nationalité</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.nationality"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Poids</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.weight"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action></v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Rang</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.ranking"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile click="">
            <v-list-tile-action>
              <v-icon color="indigo">mdi-format-title</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Titre</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.titles"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
             </v-list-tile>
            <v-list-tile click="">
                 <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-title>Taille</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.height"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-title>Image</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-text-field
                  v-model="player.image"
                ></v-text-field>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile click="">
            <v-list-tile-action>
            </v-list-tile-action>
             <v-list-tile-content>
              <v-list-tile-title>Submit</v-list-tile-title>
              <v-list-tile-sub-title>
                <v-btn v-on:click="addPlayer" large color="success">
                    <v-icon>mdi-account-plus</v-icon>
                </v-btn>
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>

<script>
// import newPlayer from '../graphql/newPlayer.gql'
import getPlayer from '../graphql/getPlayer.gql'
export default {
  name: 'PagePlayer',
  data () {
    return ({
      editing: false,
      menu: false,
      player: {}
    })
  },
  methods: {
    convertDate (date) {
      let d = new Date(date)
      return d.toISOString()
    },
    addPlayer () {
      console.log({...this.player,
        birth: this.convertDate(this.player.birth),
        height: parseFloat(this.player.height),
        titles: parseInt(this.player.titles),
        ranking: parseFloat(this.player.ranking),
        weight: parseFloat(this.player.weight)
      })
      /* this.$apollo.mutate({
        // Query
        mutation: newPlayer,
        variables: {...this.player,
          birth: this.convertDate(this.player.birth),
          height: parseFloat(this.player.height),
          titles: parseInt(this.player.titles),
          ranking: parseFloat(this.player.ranking),
          weight: parseFloat(this.player.weight)
        }
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.error(error)
      }) */
    },
    apollo: {
      player: {
        query: getPlayer
      }

    }
  }
}
</script>

<style>
</style>
