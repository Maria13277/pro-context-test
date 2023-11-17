import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'


import List from './components/List.vue'
import Item from './components/Item.vue'


import ResultList from './components/ResultList.vue'
import ResultItem from './components/ResultItem.vue'
import ResultItemMix from './components/ResultItemMix.vue'
import ResultItemSquare from './components/ResultItemSquare.vue'

// UI
import Button from './components/ui/Button.vue'

import './assets/styles/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.component('List', List)
app.component('Item', Item)

app.component('ResultList', ResultList)
app.component('ResultItem', ResultItem)
app.component('ResultItemMix', ResultItemMix)
app.component('ResultItemSquare', ResultItemSquare)

app.component('Button', Button)

app.use(pinia)
app.mount('#app')
