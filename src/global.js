import Vue from 'vue'

export const baseApiUrl = 'http://localhost:3000'

export function showError(e) {
    if (e && e.response && e.response.data) {
        if (Array.isArray(e.response.data)) {
            e.response.data.forEach(erro => {
                Vue.toasted.global.defaultError({ msg: erro })
            })
        } else {
            Vue.toasted.global.defaultError({ msg: e.response.data })
        }
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError }