<template>
  <v-app>
       <HeaderCard
      :cartItems="cartItems"
      :vaciarCarrito="vaciarCarrito"  
      @abrirCarrito="abrirCarrito"
    />
    <ProduCongelados
      :cartItems="cartItems"
      :agregarAlCarrito="agregarAlCarrito"
    />
  </v-app>
</template>

<script setup>
import { ref } from 'vue'
import HeaderCard from '@/components/HeaderCard.vue'
import ProduCongelados from '@/components/ProduCongelados.vue'

// Estado para los productos en el carrito
const cartItems = ref([])  

// Función para agregar productos al carrito
const agregarAlCarrito = (producto) => {
  cartItems.value.push(producto)
}

// Función para vaciar el carrito
const vaciarCarrito = () => {
  cartItems.value = []
}

// Función para abrir el carrito desde el HeaderCard
const abrirCarrito = () => {
  // Cambia el estado para mostrar el carrito en el HeaderCard
  carritoVisible.value = !carritoVisible.value
}
</script>
