import Vue from 'vue'
import Vuex from 'vuex'
import cart from './cart/'

Vue.use(Vuex)

module.export = new Vuex.Store({
  modules: {
    cart
  }
})
