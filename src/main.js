import { createApp } from 'vue';
import { router } from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import AppLoader from './components/partials/AppLoader.vue';
import ErrorAlert from './components/partials/ErrorAlert.vue';

const app = createApp(App);
app.component('AppLoader', AppLoader);
app.component('ErrorAlert', ErrorAlert);
app.use(router);
app.mount('#app')
