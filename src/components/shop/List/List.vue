<template>
  <div class="shop-list">
    <h4><input id="allCheck" type="checkbox"><label for="allCheck"></label>Nico小家</h4>
    <div class="shop-content">
      <div class="shop-f" v-for='(shop,index) in shop_list' :key="index">
        <div class="shop-left"><input id="myCheck" class="mycheck" type="checkbox"><label for="myCheck"></label></div>
        <div class="shop-right">
          <div class="shop-pic"><img :src="shop.imgUrl"></div>
          <div class="shop-content">
          <div class="shop-name">{{shop.name}}</div>
          <div class="shop-message">
            <div class="shop-message-left">¥{{shop.price}}</div>
            <div class="shop-message-right">{{shop.num || ''}}</div>
            <div class="shop-bt">
              <div class="btn btn-plus" @click='add_db(shop)'>{{shop.num ? '+' : '加入购物车'}}</div>
              <div class="btn btn-minus" @click='reduce_db(shop)' v-if='shop.num && shop.num > 0'>-</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'shop-list',
  data () {
    return {
      shop_list: [
        {
          imgUrl: require('@/assets/img/chaoliu.jpg'),
          name: '潮流外套2018年秋冬新款女装韩版修身',
          price: 120
        },
        {
          imgUrl: require('@/assets/img/gexing.jpg'),
          name: '个性外套2018年秋冬新款韩版超级流行超美',
          price: 220,
          num: 1
        },
        {
          imgUrl: require('@/assets/img/kuzi.jpg'),
          name: '休闲裤子2018chic秋冬韩版潮流休闲款',
          price: 98
        },
        {
          imgUrl: require('@/assets/img/maoyi.jpg'),
          name: 'nico早秋新款毛衣女2018年新款修身保暖',
          price: 118
        }
      ]
    }
  },
  mounted () {
    let list = this.$store.state.cart.cartList
    console.log(this)
    for (let i = 0; i < this.shop_list.length; i++) {
      for (var j = 0; j < list.length; i++) {
        if (list[j].name === this.shop_list[i].name) {
          this.$set(this.shop_list, i, list[j])
          break
        }
      }
    }
    console.log(this.shop_list[0].mun)
  },
  methods: {
    add_db (shop) { // 点击菜品列表中的加号
      let name = shop.name
      this.$store.dispatch('check_db', {
        name
      })
      if (this.$store.state.cartIndex !== 1) {
        console.log('add_db')
        this.$store.dispatch('add_db')
      } else {
        console.log('create_db')
        this.$set(shop, 'num', 1)
        this.$store.dispatch('create_db', {
          shop
        })
      }
    },
    reduce_db (shop) {
      let name = shop.name
      this.$store.dispatch('check_db', {
        name
      })
      shop.num = parseInt(shop.num)
      this.$store.dispatch('reduce_db')
    }
  }
}
</script>
<style scoped lang="scss">
.shop-list {
  h4 {
    text-align: left;
    width: 90%;
    margin: 0 auto;
    position: relative;
    #allCheck{
      width: 26px;
      height: 26px;
      position: absolute;
      top: 8px;
      left: -2px;
    }
    #allCheck + label {
      width: 20px;
      height: 20px;
      background: rgb(247, 218, 54);
      border-radius: 50%;
      border: 1px solid #d3d3d3;
      display: inline-block;
      margin-right: 5%;
      vertical-align: middle;
      text-align: center;
      line-height: 20px;
    }
    #allCheck:checked + label:after{
      content: "\2714";
    }
    #allCheck {
      opacity: 0;
    }
  }
  .shop-content {
  width: 100%;
  .shop-f {
    display: flex;
    width: 90%;
    margin: 10px auto;
    .shop-left {
      width: 5%;
      line-height: 68px;
      position: relative;
      #myCheck {
        width: 26px;
        height: 26px;
        position: absolute;
        top: 20px;
        left: 2px;
      }
      #myCheck + label{
        background-color: rgb(247, 218, 54);
        border-radius: 50%;
        border: 1px solid #d3d3d3;
        width: 20px;
        height: 20px;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
       line-height: 20px;
      }
      #myCheck:checked + label:after{
        content: "\2714";
      }
     #myCheck {
       opacity: 0;
     }
    }
    .shop-right {
      width: 90%;
      display: flex;
      border: 1px solid rgb(231, 230, 230);
      border-radius: 3px;
      margin-left: 3%;
      box-shadow: 1px 2px 1px 2px #eee;
      .shop-content {
        text-align: left;
        padding-top: 10px;
        .shop-message {
          display: flex;
          padding-right: 10px;
          line-height: 30px;
          border-radius: 5px;
          .shop-message-left {
            flex: 1;
          }
          .shop-message-right {
            flex: 1;
            background: #fff;
          }
          .shop-bt {
            .btn{
              display: inline-block;
              padding: 0px 8px;
              font-size: 14px;
              text-align: center;
              border-radius: 4px;
              border: 1px solid transparent;
              color: #fff;
            }
            .btn-plus {
              background: #5bc0de;
              border: 1px solid #46b8da;
            }
            .btn-minus {
              background: #f0ad4e;
              border-color: #eea236;
            }
          }
        }
      }
    }
  }
 }
}
</style>
