<template>
  <div class="shop-list">
    <h4>购物车</h4>
    <div class="cart-list">
      <ol type="1">
        <li>
          <span>名称</span>
          <span>单价</span>
          <span>数量</span>
          <span>总价</span>
          <span>Action</span>
        </li>
        <li v-for="(cart,index) in cartList" :key="index">
          <span>{{cart.name}}</span>
          <span>{{cart.price}}</span>
          <span>{{cart.num}}</span>
          <span>{{cart.price*cart.num}}</span>
          <span>
            <div @click='action_cart(index,"add_db")' class="btn btn-info">+</div>
            <div @click='action_cart(index,"reduce_db")' class="btn btn-warning">-</div>
            <div @click='action_cart(index,"delete_db")' class="btn btn-danger" title="删除">X</div>
          </span>
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cart-list',
  /*
  data () {
    return {
      cartList: [
        {
          name: '潮流外套',
          price: 120,
          num: 1,
          id: 1
        },
        {
          name: '休闲裤子',
          price: 98,
          num: 1,
          id: 2
        }
      ]
    }
  },
  */
  computed: {
    cartList () {
      return this.$store.getters.getCartList
    }
  },
  methods: {
    /**
         * 购物车加减删操作
         * @param  {number} index 当前操作的索引
         * @param  {string} type  对应的mutations值
         * @param  {string} type=add_db  增加
         * @param  {string} type=reduce_db  减少
         * @param  {string} type=delete_db  删除
         */
    action_cart (index, type) {
      this.$store.dispatch('update_cur_shop_status', {
        index
      })
      this.$store.dispatch(type)
    }
  },
  mounted () {
  }
}
</script>
<style scoped lang="scss">
.shop-list {
  width: 90%;
  margin: 30px auto;
  padding: 10px 2px;
   border: 1px solid rgb(231,230,230);
   box-shadow: 1px 2px 1px 2px #eee;
  .cart-list {
    margin: 15px auto;
    ol {
      li {
        width: 100%;
        height: 26px;
        line-height: 25px;
        display: flex;
        margin-top: 10px;
        span{
          flex: 1;
          div{
            float: left;
            width: 27%;
            margin-right: 3%;
          }
          .btn{
            display: inline-block;
            text-align: center;
            border: 1px solid transparent;
            color: #fff;
            background: #5bc0de;
            border-color: #46b8da;
            }
            .btn-warning{
            background: #f0d807e8;
            border-color: #fce40ee8;
            }
        }
      }
    }
  }
}
</style>
