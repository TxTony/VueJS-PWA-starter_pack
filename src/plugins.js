import Vuex from 'vuex'
import Vuetify from 'vuetify'
import VueI18n from 'vue-i18n'
import messages from './translations/appTranslation.js'
import StoreIndex from './store/index.js'

export default {

    addPlugins: function (Vue) {
        // define your plugins here
        Vue.use(Vuex)
        Vue.use(Vuetify)
        Vue.use(VueI18n)
        // Create VueI18n instance with options
        return Vue
    },
    getI18nInstance: function(){
        return new VueI18n({
            locale: 'en', // set locale
            messages // set locale messages
        })
    },
    getVuexInstance: function(){
        return new Vuex.Store(StoreIndex)
    }
}