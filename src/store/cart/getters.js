export default {
  getInfos (state) {
    state.cartInfos.total_price = 0
    state.cartInfos.total_nums = 0
    let list = state.cartList
    for (let i = 0; i < list.length; i++) {
      let price = parseInt(list[i].price)
      let num = parseInt(list[i].num)
      state.cartInfos.total_price += price * num
      state.cartInfos.total_num += num
    }
    return state.cartInfos
  },
  getCartList (state) {
    return state.cartList
  }
}
