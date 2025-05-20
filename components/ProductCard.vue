<template>
  <v-card class="product-card">
        <!-- Indicador de descuento -->
    <div class="discount-badge" v-if="product.discount">
      {{ product.discount }}%
    </div>
    <v-img :src="product.image" height="200px"/>
    <v-card-title>{{ product.name }}</v-card-title>
   <v-card-subtitle>
  <span v-if="product.discount" class="old-price">${{ product.price }}</span>
  <span v-if="product.discount" class="new-price">
    ${{ (product.price * (1 - product.discount / 100)).toFixed(2) }}
  </span>
  <span v-else>${{ product.price }}</span>
</v-card-subtitle>

    <v-card-actions class="d-flex justify-center">
      <v-btn @click="$emit('agregar', product)">Comprar</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  top: 100px;
  text-align: center;
  width: 250px;
  position: relative;
  overflow: visible;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
}

.old-price {
  text-decoration: line-through;
  color: #888;
  margin-right: 8px;
  font-size: 18px;
}

.new-price {
  color: #2ecc40;
  font-weight: bold;
  font-size: 20px;
}

.discount-badge {
  position: absolute;
  top: -15px;
  right: -20px;
  background-color: red;
  color: white;
  font-size: 20px;
  font-weight: bold;
  padding: 14px;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

</style>

<script setup>
defineProps({
  product: Object
})
</script>
