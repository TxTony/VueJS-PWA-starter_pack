// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import StoreIndex from './store/index.js'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'
import messages from './translations/appTranslation.js'
import Axios from 'axios'
Vue.config.productionTip = false
Vue.use(Vuex)
var store = new Vuex.Store(StoreIndex)
Vue.use(Vuetify)
Vue.use(VueI18n)

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'en', // set locale
    messages // set locale messages
})

// Add axios as a "service"
Object.defineProperty(Vue.prototype, '$axios', {
    get(){
        return Axios;
    }
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    i18n,
    render: h => h(App),
    template: '<App/>',
    components: { App }
})
