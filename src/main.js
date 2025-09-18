import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router) // Make sure the router is used
  .mount('#app');  // Mounts to the element with id="app"