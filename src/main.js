import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import './registerServiceWorker'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false


Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)



firebase.initializeApp({
	apiKey: "AIzaSyA3wy_J3p8lj3BWGl-61qyn_dDFscrYOz8",
	authDomain: "newsite-1f887.firebaseapp.com",
	databaseURL: "https://newsite-1f887.firebaseio.com",
	projectId: "newsite-1f887",
	storageBucket: "",
	messagingSenderId: "519296652795",
	appId: "1:519296652795:web:88a111f9ae3be187"
});


let app

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
		  router,
		  store,
		  render: h => h(App)
		}).$mount('#app')	
	}
})


