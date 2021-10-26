import { createApp } from 'vue'
import App from './app3/choose.vue' 
import router from './router'
import store from './store'
import '../public/common/style.css'

createApp(App).use(store).use(router).mount('#app')
//上一步相当于var app = vue.createapp(APP) app.use().mount()
// createApp是一个函数要求传入一个对象
//mount的含义就是将前面一大堆东西显示到什么位置，此处是指index.html中