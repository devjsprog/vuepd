import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI'

const app = createApp(App);

components.forEach(comp => {
  app.component(comp.name, comp)
})

app.mount('#app');
