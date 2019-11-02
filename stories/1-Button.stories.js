// import {linkTo} from '@storybook/addon-links';
// import {text,boolean} from '@storybook/addon-knobs'

import {action} from '@storybook/addon-actions';
import Vue from 'vue'
// import centered from '@storybook/addon-centered/vue'
// 套件配置
import {withReadme} from 'storybook-readme'
import {storiesOf} from '@storybook/vue';
// import '@storybook/addon-console'
// 組建
import README from './README.md'
import Mybutton from "./mybutton.vue";
import Axios from 'axios';


Vue.component('Mybutton', Mybutton)
export default {
  title: 'My Button',
}

storiesOf('Mybutton', module)
  // .addDecorator(centered)
  .addDecorator(withReadme([README]))
  // .add('MOVIE', withReadme(README, () => ({
    .add('with text',  () => ({
    data() {
      return {
        datas: ''
      }
    },
    methods: {
      action: action(''),
    },
    template: `
      <div @click="action">
        <Mybutton :movieAPIDataFromProps="datas" @checkPropsData="action" ></Mybutton>
      </div>
    `,
    mounted() {
      Axios.get('https://api.themoviedb.org/3/discover/movie?api_key=192102bc85d3156ffe17c011468b1fb5&include_adult=ture&include_video=ture')
        .then(res => {
          this.datas = res.data.results
        })
    },
  }), {
    //... 外掛的相關設定
    notes: `
    #it's a component which can be use to display the movie data ,
    but need to connect with the movie API,
    
    **component number : xxxxxxx,

    **props name: movieAPIDataFromProps
  
    **DATA TYPE REQUIRE :
    
    {
      items.vote_average  : String,
      items.release_date  : String,
      poster_path : URL
    }
    `,
    note:README
  })
  // }))
  .add('second', () => ({
    template: `
        <div>
          <div>qwe</div>
        </div>
      `
  }))