import {
    configure,
    addParameters,
    addDecorator
} from '@storybook/vue';
import {
    setOptions
} from '@storybook/addon-options'

// config.js：Storybook 的基本設定，
// 有些外掛會可以在這裡以全域的方式 執行addDecorator，讓 Storybook 知道 stories 可以支援這個外掛並使用他


// import Vuetify from 'vuetify'
//``````````
// import theme from './vuetify.config.js'
// Vue.use(Vuetify, {
//     theme
// })
//

// setOptions({
//     name: 'nuxt blog',
//     addonPanelInRight: true
// })

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/)

addParameters({
    options:{
        hierarchyRootSeparator:/\|/,
    },
    docs:{
        inlineStories:true,
        iframeHeight:'60px',
    },
})

function loadStories() {
    // addDecorator(withKnobs);
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);