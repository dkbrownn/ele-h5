import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* import { Tabbar, TabbarItem } from 'vant' */
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css'
const rootValue = 16
const rootWidth = 390
const deviceWidth = document.documentElement.clientWidth
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px'
const app = createApp(App)
app.use(createPinia())
app.use(router)
/* app.use(Tabbar)
app.use(TabbarItem) */
app.mount('#app')
