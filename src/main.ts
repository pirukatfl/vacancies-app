import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import PrimeVue from 'primevue/config'
import Material from '@primevue/themes/material'
import ToastService from 'primevue/toastservice'
import { definePreset } from '@primevue/themes'
import router from './router'
import 'primeicons/primeicons.css'


const myPreset = definePreset(Material, {
    semantic: {
        primary: {
            50: '{teal.50}',
            100: '{teal.100}',
            200: '{teal.200}',
            300: '{teal.300}',
            400: '{teal.400}',
            500: '{teal.500}',
            600: '{teal.600}',
            700: '{teal.700}',
            800: '{teal.800}',
            900: '{teal.900}',
            950: '{teal.950}'
        },
        colorScheme: {
            light: {
                formField: {
                    hoverBorderColor: '{primary.color}'
                }
            },
        }
    }
    
})

const app = createApp(App)

app.use(router).use(PrimeVue, {
    locale: {
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
    },
    theme: {
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false,
        },
        preset: myPreset
    }
}).use(ToastService).mount('#app')
