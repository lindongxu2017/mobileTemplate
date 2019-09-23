// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import qs from 'qs'

import Vant from 'vant'
import 'vant/lib/index.css'

import lib from '../static/main.js'

axios.interceptors.request.use(config => {
    if (config.method == 'post') config.data = qs.stringify(config.data);
    return config
}, error => {
    return Promise.reject(error)
})

var ajax = function (method, data,api) {
  return new Promise((resolve, reject) => {
    axios({
        method, data, url: '/api/' + api, params: method === 'get' ? data : '',
        headers: {
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + localStorage.access_token
        }
    }).then(res => {
        console.log(res)
    }).catch(error => {
        console.log(error)
    })
  })
}

Vue.prototype.lib = lib
Vue.prototype.axios = axios

Vue.use(Vant)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
