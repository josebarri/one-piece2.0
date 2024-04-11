import './assets/main.css'
import './assets/card.css'
import 'primeflex/primeflex.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('Sidebar', Sidebar)
app.component('Button', Button)

app.mount('#app')
