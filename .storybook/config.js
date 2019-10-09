import {
    configure
} from '@storybook/vue'
import {
    setOptions
} from '@storybook/addon-options'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入 reset.styl 和 base.styl
import '!!style-loader!css-loader!../src/styles/reset.css'


// @storybook/addon-options/register 基礎設置
setOptions({
    name: 'nuxt blog',
    // url: 'https://github.com/hunterliu1003/blog',
    addonPanelInRight: true
})

const req = require.context('../components', true, /stories\.js$/)

function loadStories() {
    req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)