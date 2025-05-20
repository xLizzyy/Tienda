<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="6" md="4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" @agregar="agregarAlCarrito" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { defineProps } from 'vue'
import ProductCard from '@/components/ProductCard.vue'

const props = defineProps({
  cartItems: Array,
  agregarAlCarrito: Function
})

// Lista de productos
const products = [
  { id: 1, name: 'Helado de Vainilla', price: 10, discount: 50, image: 'https://www.recetasnestle.com.do/sites/default/files/srh_recipes/62099096785a3c939a1a1eefb06bf358.jpg' }
]
</script>

<style>
.img {
  width: 100%;
  height: auto;
}
</style>
