<template>
  <div>
    <div class="cart-info">
      <div class="info-content"><input id="ownCheck" type="checkbox"><label for="ownCheck"></label><span>全选</span></div>
      <div class="info-content">合计：¥<span>{{cartInfos.total_price}}</span></div>
      <div class="info-content">去结算(<span>{{cartInfos.total_nums}}</span>)</div>
  </div>
  <div @click='clear_db'>清空购物车</div>
  </div>
</template>
<script>
export default {
  name: 'shop-info',
  computed: {
    cartInfos () {
      return this.$store.getters.getInfos
    }
  },
  methods: {
    clear_db () {
      this.$store.dispatch('clear_local')
    }
  }
}
</script>
<style scoped lang="scss">
 .cart-info{
   display: flex;
   width: 90%;
   margin: 10px auto;
   padding: 10px 0px;
   border:1px solid rgb(231,230,230);
   box-shadow: 1px 2px 1px 2px #eee;
   .info-content{
     flex: 1;
   }
 }
</style>
