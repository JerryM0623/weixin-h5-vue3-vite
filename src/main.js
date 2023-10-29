import { createApp } from 'vue'
// import '@/style.css'

// 引入路由
import App from '@/App.vue'
import router from '@/router/index.js'


// 引入 pinia
import pinia from '@/store/index.js'

// 引入初始化 css ，将不同浏览器直接的默认样式全部统一起来，方便后续样式开发
import 'normalize.css';

const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount('#app');
