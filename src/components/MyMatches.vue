<template>
  <div>
      <h1>
        {{ msg }}
      </h1>
  </div>
</template>

<script>
import ListMatches from './ListMatches'

export default {
  name: 'MyMatches',
  data () {
    return {
      msg: 'Liste de mes matchs à arbitrer :'
    }
  },

  components: {
    ListMatches
  }
}
</script>

<style>
</style>
