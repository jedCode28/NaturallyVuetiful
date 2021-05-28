<template>
  <section>
    <h1>{{ title }}</h1>
    <div v-bind:key="product.id" v-for="product in products">
      <product-item v-bind:product="product" />
    </div>
    <!-- <v-alert> Display the products here </v-alert> JED COMMENTED THIS OUT--> 
  </section>
</template>

<script>
// import productItem from "components/productItem.vue";
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
  mounted() { // This will get called when the page begins to load
    this.getProducts(); 
  },
  methods: {
    async getProducts() {
      const products = await ProductService.getProducts();
      this.products = products;
          console.log(products);
    }
  }
};
</script>

<style>
</style>