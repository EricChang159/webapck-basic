import Vue from 'vue'
import App from './components/app.vue'
import './styles/test.css'

var root = document.createElement('div')
document.body.appendChild(root)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // component:


}).$mount(root)