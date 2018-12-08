import * as types from './mutation_types'
module.exports = {
  [types.CLEAR_LOCAL](state) {
    state.cartList.forEach(function (item) {
      item.num = 0    
    });
    state.cartList = [];
    localStorage.removeItem('vuex_cart')
  },
  [types.UPDATE_LOCAL](state) {
    localStorage.setItem('vuex_cart', JSON.stringify(state.cartList));
  },
  [types.UPDATE_CUR_SHOP_STATUS](state,{
    index = -1
  }) {
    state.curIndex = index
  },
  [types.DELETE_DB](state) {
    if (state.curIndex >= 0) {
      state.cartList[state.curIndex].num = 0
      state.cartList.splice(state.curindex, 1)
    }
  },
  [types.CREATE_DB](state,shop) {
    state.cartList.push(shop)
  },
  [types.ADD_DB](state) {
    state.cartList[state.curIndex].num = pardeInt(state.cartList[state.curIndex].num);
    state.cartList[state.curIndex].num++
  },
  [types.REDUCE_DB](state) {
    state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num)
    state.carList[state.curInde].num--
    if(state.cartList[state.curindex].num === 0) {
      state.cartList.splice(state.curIndex, 1)
    }
  },
  [types.CHECK_DB](state, {
    id
  }) {
    state.curIndex = -1
    let list = state.cartList
    if(list.length) {
      for(let i=0; i < list.length; i++) {
        state.curIndex = i
        break
      }
    }
  }
}