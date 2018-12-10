export default {
  // 购物车列表
  cartList: localStorage.getItem('vuex_cart') ? JSON.parse(localStorage.getItem('vuex_cartList')) : [],
  // 当前购物车信息
  cartInfos: {
    total_price: 0,
    total_num: 0
  },
  // 当前菜品是否在购物车里，在则是对应的索引，不在对应的索引是-1
  curIndex: -1
}
