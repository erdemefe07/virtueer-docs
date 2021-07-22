import { createApp } from 'vue'
import App from './App.vue'

import router from "./router";
import store from "./store";

import mitt from 'mitt'
const emitter = mitt()

const app = createApp(App)
app.config.globalProperties.$bus = emitter;
app.use(router)
app.use(store)

app.mixin({
  methods: {
    openModal({ type, referance }) {
      this.$bus.emit("open", { type, referance });
    },
  },
})

app.mount('#app')