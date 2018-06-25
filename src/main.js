// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Area ,Button, Row, Col,Tab, Tabs ,Toast ,Search ,Switch ,SwitchCell , Swipe , SwipeItem ,Uploader ,Icon ,ContactCard, ContactList, ContactEdit,SubmitBar,
  CouponCell, CouponList ,Dialog,Popup,AddressEdit   } from 'vant'
Vue.use(Area).use(Button).use(Row).use(Col).use(Tab).use(Tabs).use(Toast).use(Search).use(Switch).use(SwitchCell).use(Swipe).use(SwipeItem).use(Uploader).use(Icon).use(ContactCard)
.use(ContactList).use(ContactEdit).use(SubmitBar).use(CouponCell).use(CouponList).use(Dialog).use(Popup).use(AddressEdit);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// })
