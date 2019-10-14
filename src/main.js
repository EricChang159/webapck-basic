import Vue from 'vue'
import App from './components/app.vue'
// import './styles/reset.css'
import './image/span2.jpg'
import './styles/test.css'

import Axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,Axios)

var root = document.createElement('div')
document.body.appendChild(root)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // component:


}).$mount(root)