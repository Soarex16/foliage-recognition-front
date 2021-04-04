import {createApp} from 'vue';
import App from './App.vue';

import './styles.css';

const app = createApp(App);

// TODO: провернуть трюк с пробрасыванием переменных в контейнер
app.config.globalProperties.$appConfig = {
    API_ENDPOINT: "http://localhost://3000"
};

app.mount('#app');
