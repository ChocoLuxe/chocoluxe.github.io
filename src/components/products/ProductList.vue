<template>
  <div class="product-list">
    <ProductFilter @filter="applyFilter" />
    <div class="products">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        @click="redirectToWhatsApp(product)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import ProductFilter from './ProductFilter.vue';

const products = ref([
  { id: 1, name: 'Charm Pandora 100% real no fake', category: 'Charm' },
  { id: 2, name: 'Brazalete de beba', category: 'Brazalete' },
  { id: 3, name: 'Collar de iridio', category: 'Collar' },
  { id: 4, name: 'Anillo para gordo', category: 'Anillo' },
  // Add more produc  ts as needed
]);

const selectedCategory = ref(null);

const filteredProducts = computed(() => {
  return selectedCategory.value
    ? products.value.filter(product => product.category === selectedCategory.value)
    : products.value;
});

const applyFilter = (category) => {
  selectedCategory.value = category;
};

</script>

<style scoped>
.product-list {
  padding: 20px;
}

.products {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
