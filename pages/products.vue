<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-bind:key="product.id" v-for="product in products">
      <product-item v-bind:product="product" />
    </div>
  </section>
</template>

<script>
import ProductService from "@/services/ProductService.js";
import productItem from '../components/productItem.vue';

export default {
  components: { productItem },
  name: "ProductPage",
  data() {
    return {
      title: "Products",
      products: []
    };
  },
  mounted() {
    this.getProducts(); 
  },
  methods: {
    async getProducts() {
      const products = await ProductService.getProducts();
      this.products = products;
    }
  }
};
</script>

<style>
</style>