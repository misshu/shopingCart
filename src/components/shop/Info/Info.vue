<template>
  <div>
    <div class="cart-info">
    <div><input id="ownCheck" type="checkbox"><label for="ownCheck"></label><span>全选</span></div>
    <div>合计：¥<span>{{cartInfos.total_price}}</span></div>
    <div>去结算(<span>{{cartInfos.total_nunms}}</span>)</div>
  </div>
  </div>
</template>
<script>
export default{
  computed: {
    cartInfos () {
      return this.$store.getters.getInfos
    }
  },
  methods: {
    clear_db () {
      this.$store.displatch()
    }
  }
}
</script>
<style scoped></style>
