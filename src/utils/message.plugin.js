export default {
	install(Vue, options) {
		Vue.prototype.$message = function(value) {
			console.log(value)
			document.body.appendChild(document.createElement('div')).appendChild(document.createElement('span')).innerHTML= value	
			
			
		}
	}
}