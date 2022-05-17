import { createApp } from 'vue';
import App from './App.vue';
import 'vue2-animate/dist/vue2-animate.min.css';
import store from './store';
import './index.css';
import router from './router';
import VeeValidatePlugins from '@/plugins/VeeValidatePlugins';

const app = createApp(App);
app.use(VeeValidatePlugins);
app.use(store);
app.use(router).mount('#app');
