<template>
<v-layout row wrap class="login-screen">
    <v-flex md4 offset-md4 class="card-container">
        <v-card dark class="elevation-10 login-card" height="100%">
          <v-card-text>
            <v-container fluid>
              <v-layout row wrap>
                <v-flex md12>
                  <h1 class="text-xs-center">Welcome !</h1>
                </v-flex>
                <v-flex md12>
                  <v-text-field
                    name="login"
                    label="Identifiant"
                    id="input-login"
                    color="mattemonred"
                  ></v-text-field>
                </v-flex>
                <v-flex md12>
                  <v-text-field
                    type="password"
                    name="password"
                    label="Mot de passe"
                    id="input-password"
                    color="mattemonred"
                  ></v-text-field>
                </v-flex>
                <v-flex md6 offset-md6>
                  <v-btn @click="connect" color="mattemonred">Se connecter</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'LoginPage',
  methods: {
    connect () {
      this.$store.dispatch('LOG_IN')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>

.login-screen{
  height: 100%;
  align-items: center
}

.card-container{
  padding: 4px;
}

.login-screen .card-container .login-card{
  background: #000000ad;
}

</style>
