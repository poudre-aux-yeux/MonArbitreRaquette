<template>
  <div class="adminpage">
    <v-layout>
      <v-flex xs12 sm6 v-for="(option, index) in options" :key="index" class="card-option-container">
        <v-card class="card-option" :hover="true" :to="option.redirect" width="80%">
          <v-card-media :src="option.image" height="300px" class="card-option-media">
          </v-card-media>
          <v-card-title primary-title class="option-name">
            <div>
              <h3 class="headline mb-0">{{option.name}}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'AdminPage',
  data () {
    return ({
      options: [
        {
          name: 'Créer un match',
          redirect: '/GameCreation/',
          image: 'https://images.pexels.com/photos/171568/pexels-photo-171568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          icon: 'add'
        },
        {
          name: 'Page de gestion',
          redirect: '/gestionpage/',
          image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          icon: 'add'
        }
      ]
    })
  }
}
</script>

<style>
h1 {
  color: #F44336;
  font-size: 30px;
  padding-bottom: 50px;
}

h2 {
  color: rgb(22, 149, 223);
  font-size: 30px;
  padding-bottom: 30px;
  padding-top: 50px;
}

.card-option-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-option-container .card-option {
  background: #00000050;
  color: white;
}

.card-option-container .card-option .option-name {
  justify-content: center;
}

.card-option-container .card-option-media {
  opacity: 0.6;
}

.card-option-container:hover .card-option-media {
  opacity: 1;
}

.adminpage {
  height: 100%;
  align-items: center;
  display: flex;
}
</style>
