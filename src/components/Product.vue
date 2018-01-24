<template>
  <div>
    {{ name }}
    <img :src="image" :alt="name" height="200">
  </div>
</template>

<script>
export default {
  name: 'product',
  props: [
    'image',
    'name'
  ]
}
</script>

<style>

</style>
