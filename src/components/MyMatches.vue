<template>
  <div class="matches">
      <h1>
        {{ txt }}
      </h1>
  </div>
</template>

<script>
import ListMatches from './ListMatches'

export default {
  name: 'MyMatches',
  data () {
    return {
      txt: 'Liste de mes matchs à arbitrer :'
    }
  },

  components: {
    ListMatches
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
