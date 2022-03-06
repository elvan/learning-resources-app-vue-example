import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/elements/BaseButton.vue';
import BaseCard from './components/elements/BaseCard.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);

app.mount('#app');
