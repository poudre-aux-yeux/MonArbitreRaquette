<template>
  <div>
      <h1>
        {{ msg }}
      </h1>
  </div>
</template>

<script>
export default {
  name: 'MyMatches',
  data () {
    return {
      msg: 'Liste de mes matchs à arbitrer :'
    }
  }
}
</script>

<style>
.content {
  background-image: url("../assets/bg.png");
  background-size: cover;
}
</style>
