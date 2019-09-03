export default {
	install(Vue, options) {
		Vue.prototype.$message = function(value) {
			
			let message = document.createElement('div')
			message.className = "message"
			message.innerHTML = value

			document.body.append(message);
			setTimeout(() => message.remove(), 2000)
		}

	Vue.prototype.$error = function(value) {
			
			let error = document.createElement('div')
			error.className = "message"
			error.innerHTML = '[Ошибка]:' + ' ' + value

			document.body.append(error);
			setTimeout(() => error.remove(), 2000)
		} 
	}
}