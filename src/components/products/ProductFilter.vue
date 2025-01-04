<template>
  <div class="product-filter">
    <h2>Filter Products</h2>
    <select v-model="selectedCategory" @change="filterProducts">
      <option value="">All Categories</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const categories = ref(['Charm', 'Brazalete', 'Collar', 'Anillo']);
const selectedCategory = ref('');

const emit = defineEmits(['filter']);

const filterProducts = () => {
  // Emit an event to the parent component to filter products based on selectedCategory
  emit('filter', selectedCategory.value);
};
</script>

<style scoped>
.product-filter {
  margin-bottom: 20px;
}
</style>
