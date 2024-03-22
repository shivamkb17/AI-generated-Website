import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router' // Import router

console.log("Initializing Vue application...");

const app = createApp(App);

app.use(store);
app.use(router); // Use router

app.mount('#app');

console.log("Vue application mounted successfully.");