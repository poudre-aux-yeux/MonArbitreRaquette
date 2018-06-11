<template>
  <div class="gamecreation">
     <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      label="Date"
      v-model="date"
      :rules="dateRules"
      :counter="10"
      required
    ></v-text-field>
    <v-text-field
      label="Players"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-select
      label="Referee"
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      required
    ></v-select>
    <v-text-field
      label="Stadium"
      v-model="email"
      :rules="emailRules"
      required
    ></v-text-field>
    <v-checkbox
      label="Do you agree?"
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      required
    ></v-checkbox>

    <v-btn
      @click="submit"
      :disabled="!valid"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: () => ({
    valid: true,
    date: '',
    dateRules: [
      v => !!v || 'Date is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    players: '',
    playersRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    referee: '',
    refereeRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    stadium: '',
    stadiumRules: [
      v => !!v || 'E-mail is required',
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        'E-mail must be valid'
    ],
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false
  }),

  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          date: this.date,
          players: this.players,
          referee: this.referee,
          stadium: this.stadium,
          select: this.select,
          checkbox: this.checkbox
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
