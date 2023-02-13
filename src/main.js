import { createApp } from 'vue'
import App from './App.vue'
import Todos from './components/Todos.vue'

// import './assets/todos.css'

const app = createApp(App)
app.component('Todos', Todos)
app.mount('#app')
