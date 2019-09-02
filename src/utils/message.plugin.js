export default {
	install(Vue, options) {
		Vue.prototype.$message = function(value) {
		
			

			let div = document.createElement('div')
			div.className = "message"
			div.innerHTML = value

			document.body.append(div);
			setTimeout(() => div.remove(), 2000)
			
			
		}
	}
}