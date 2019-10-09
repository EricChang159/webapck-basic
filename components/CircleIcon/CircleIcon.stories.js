import Vue from 'vue'

// import centerDecorator from '@/plugins/storybook/centerDecorator'
import {
  storiesOf
} from '@storybook/vue'
import {
  action
} from '@storybook/addon-actions'
import {
  withReadme
} from 'storybook-readme'
import '@storybook/addon-console'
import README from './README.md'

import CircleIcon from './CircleIcon.vue'

Vue.component('CircleIcon', CircleIcon)

storiesOf('CircleIcon', module)
  // .addDecorator(centerDecorator)
  .add('CircleIcon', withReadme(README, () => ({
    methods: {
      log() {
        action('CircleIcon')()
      },
    },
    template: (`<div >
      <CircleIcon/>
      </div>`)
  })))