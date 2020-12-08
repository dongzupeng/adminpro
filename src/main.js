import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.config.productionTip = false

// 引入Ant Design of Vue组件
import {
  Button,
  Card, 
  Avatar,
  Icon} from 'ant-design-vue'

Vue.use(Button)
   .use(Avatar)
   .use(Card)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
