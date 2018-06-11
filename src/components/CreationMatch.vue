<template>
  <div class="creationmatch">
       <v-text-field
          name="input-2"
          :label="label"
          v-model="msg"
          class="input-group--focused"
        ></v-text-field>
      <p>{{msg}}</p>
      <p>{{yadutext}}</p>
      <hr/>
      <v-btn @click="increment">{{ping}}</v-btn>
      <v-btn @click="decrement">{{ping}}</v-btn>
      <v-btn @click="multiplier">{{ping}}</v-btn>
      <hr/>
      <v-btn @click="classes.colorful.redish = !classes.colorful.redish">RED</v-btn>
      <p :class="classes.colorful">TeXT</p>
  </div>
</template>

<script>
export default {
  name: 'CreationMatch',
  data () {
    return {
      msg: 'Welcome to Your Match creation',
      ping: 0,
      label: 'Enter a text',
      classes: {
        colorful: {
          redish: false
        }
      }
    }
  },
  computed: {
    yadutext () {
      if (this.msg) {
        return "Y'a un putain de texte"
      }
      return "OMG y'a pas de texte"
    }
  },
  methods: {
    increment () {
      this.ping++
    },
    decrement () {
      this.ping--
    },
    multiplier () {
      this.ping *= 2
    }
  },
  watch: {
    ping: function (val) {
      if (val > 50) {
        alert('ARRETE TOI')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.redish {
  color: red;
  font-size: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #4ba6bd;
}
</style>
