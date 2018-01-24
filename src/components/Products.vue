<template>
  <div>
    <ul v-if="products">
      <li v-for="product in products" :key="product.id">
        <product :name="product.name" :image="product.image_url"></product>
      </li>
    </ul>
    <p v-else>Chargement Wait for it</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import Product from './Product'

export default {
  name: 'products',
  data: () => ({
    products: null,
    error: null
  }),

  components: {
    Product
  },

  async created () {
    const accessKey = 'MDo2NzVkN2I4Ni0wMDU0LTExZTgtYjU0Ny1iZmEzZGFjYzg0OGQ6aHo0VGJ5ZXR3a05JZkJUaFR0UkVTenZ1RTVyUlRMRzVGYllD'
    const result = await axios.get(`https://lcboapi.com/products?access_key=${accessKey}`)

    console.log(result)

    if (result.status !== 200) {
      this.error = 'A sec'
      return
    }

    this.products = result.data.result
  }
}
</script>
