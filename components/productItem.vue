<template>
  <div class="product-item">
    <p>{{product.name}}</p>
    <p>${{product.retail_price}}</p>
    <a>Add To Cart</a>
    <a>See Full Description</a>
  </div>
</template>

<script>
  export default {
    name: "productItem",
    props: ["product"],
    data(){
      return {
        products: this.product
      }
    }
  }
</script>

<style scoped>

  .product-item{
    padding: 10px;
    border-bottom: 1px #ccc dotted;
    color: #f4f4f4;
  }

  a{
    font-size: 12px;
    padding: 0px 25px 0px 0px;
  }

</style>