<template>
  <v-app-bar color="blue" app dark class="px-3">
    <v-app-bar-title class="text-h5 font-weight-bold mx-auto text-center">
      <v-icon left>mdi-store</v-icon>
      Heladeria "El Frio"
    </v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn icon @click="abrirCarrito" class="mr-4">
      <v-badge
        :content="cartItemsCount.toString()"
        color="success"
        v-if="cartItemsCount > 0"
      >
        <v-icon>mdi-cart</v-icon>
      </v-badge>
      <v-icon v-else>mdi-cart</v-icon>
    </v-btn>

    <!-- Modal para mostrar carrito cuando se hace clic -->
    <v-dialog v-model="carritoVisible" max-width="500px">
      <v-card>
        <v-card-title class="headline">Carrito de Compras</v-card-title>
        <v-card-text>
          <v-list v-if="cartItems.length > 0">
            <v-list-item v-for="item in cartItems" :key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>${{ item.price }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          
          <!-- Si no hay productos en el carrito -->
          <v-card v-else class="pa-4" outlined>
            <v-card-title>No hay productos en el carrito</v-card-title>
          </v-card>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn color="primary" @click="vaciarCarrito">Vaciar carrito</v-btn>
          <v-btn color="success">Finalizar compra</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { computed, ref } from 'vue'

// Props recibidos desde el componente padre
const props = defineProps({
  cartItems: Array,
  agregarAlCarrito: Function,
  vaciarCarrito: Function
})

// Estado para manejar la visibilidad del carrito
const carritoVisible = ref(false)

// Contador de items en el carrito
const cartItemsCount = computed(() => props.cartItems.length)

// Función para abrir/cerrar el carrito
const abrirCarrito = () => {
  carritoVisible.value = !carritoVisible.value
}
</script>
