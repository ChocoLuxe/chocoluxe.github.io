<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const redirectToWhatsApp = () => {
  const message = `Hola, estoy interesado en el producto: ${props.product.name}`;
  const whatsappUrl = `https://wa.me/51906580578?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
  <div class="product-card">
    <h2>{{ props.product.name }}</h2>
    <p>{{ props.product.description }}</p>
    <button @click="redirectToWhatsApp">Contactar por WhatsApp</button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}
</style>
