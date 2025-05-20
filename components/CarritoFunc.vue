<script setup>
const props = defineProps({
  cartItems: Array
})

const emit = defineEmits(['vaciar'])

const vaciarCarrito = () => {
  emit('vaciar')
}
</script>

<template>
  <v-card v-if="cartItems.length > 0" class="pa-4" outlined>
    <v-card-title>Carrito de Compras</v-card-title>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="(item, index) in cartItems" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>${{ item.price }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="primary" @click="vaciarCarrito">Vaciar carrito</v-btn>
      <v-btn color="success">Finalizar compra</v-btn>
    </v-card-actions>
  </v-card>

  <v-card v-else class="pa-4" outlined>
    <v-card-title>No hay productos en el carrito</v-card-title>
  </v-card>
</template>
