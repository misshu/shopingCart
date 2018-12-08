<template>
  <div id="app">
    <h3>商品信息</h3>
    <List/>
    <Cart/>
    <Info/>
  </div>
</template>

<script>
import List from '@/components/shop/List/List.vue'
import Cart from '@/components/shop/Cart/Cart.vue'
import Info from '@/components/shop/Info/Info.vue'
export default {
  components: {
    List,
    Cart,
    Info
  }
}
</script>
<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 20px;
  background: rgb(255,254,252);
  h3{
    padding: 10px;
    font-size: 2em;
  }
}
</style>
