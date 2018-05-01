import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods.vue'
import Seller from '@/components/seller/seller.vue'
import Ratings from '@/components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '*',
      redirect: '/goods'
    }
  ]
})
