<template>
	<div class="Loader" :class='color'></div>
</template>

<script>
	export default {
		computed: {
			color() {
				const colors = ['Loader_Red', 'Loader_Green', 'Loader_Blue']
				return colors[Math.floor(Math.random() *3)]
			}
		}
	}
</script>

<style lang="stylus" scoped>		

.Loader 
	width 35px
	height 35px
	border-radius 100%
	-webkit-animation Loader 1.2s infinite linear
	-moz-animation Loader 1.2s infinite linear
	animation Loader 1.2s infinite linear
	position absolute
	z-index 20
	left 0
	right 0
	margin 0 auto
	top 100px
	&_Red
		border 3px solid red
		border-left-color red
		border-bottom-color red
		border-right-color transparent
	&_Green
		border 3px solid green
		border-left-color green
		border-bottom-color green
		border-right-color transparent
	&_Blue
		border 3px solid blue
		border-left-color blue
		border-bottom-color blue
		border-right-color transparent



@-webkit-keyframes Loader {
	100% {
		-webkit-transform rotate(360deg)
		transform rotate(360deg)
	}
}
 
@-moz-keyframes Loader {
	100% {
		-moz-transform rotate(360deg)
		transform rotate(360deg)
	}
}
 
@keyframes Loader {
	100% {
		transform: rotate(360deg)
	}
}

</style>