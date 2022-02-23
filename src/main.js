import { createApp } from 'vue'
import mitt from 'mitt';
const emitter = mitt();
import Game from './Game.vue'

const app = createApp(Game)
app.config.globalProperties.emitter = emitter
app.mount('#game')
