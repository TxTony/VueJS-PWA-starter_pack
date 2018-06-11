
import Axios from 'axios'

export default function addServices (Vue) {
    // define your services here
    Object.defineProperty(Vue.prototype, '$axios', {
        get () {
            return Axios
        }
    })
    return Vue
}
