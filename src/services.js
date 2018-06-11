
import Axios from 'axios'

export default {

    addServices: function (Vue) {
        // define your services here
        Object.defineProperty(Vue.prototype, '$axios', {
            get () {
                return Axios
            }
        })
        return Vue
    }
}