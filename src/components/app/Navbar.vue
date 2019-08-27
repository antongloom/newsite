<template>
	<div class="Navbar">
		<div class="Navbar-Header">
	  	<div class="Navbar-Btn">
	  		<div class="Navbar-Img" @click="Menu">
	  			<img src="@/assets/images/menu.svg" alt="Icon">
	  		</div>
	  		<div class="Navbar-Time">12.12.12</div>
	  	</div>
	  	<div class="Navbar-User">User Name <img src="@/assets/images/arrow-top.png" alt="Icon"></div>
  	</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Navbar
		&-Header
			padding 15px
			display flex
			justify-content space-between
			align-items center
			background #FF8C00
			-webkit-box-shadow 0px 2px 4px 1px rgba(0,0,0,0.32)
			-moz-box-shadow:0px 2px 4px 1px rgba(0,0,0,0.32)
			box-shadow 0px 2px 4px 1px rgba(0,0,0,0.32)
			position fixed
			left 0px
			right 0px
			z-index 100
		&-Btn
			display flex
			align-items center
		&-Img
			cursor pointer
		&-Time
			margin-left 15px
		&-User
			text-transform uppercase
			cursor pointer
			img
				margin-left 5px
				vertical-align middle				
</style>

<script>
	export default {
		methods: {
			Menu() {
				this.$emit('menu') 
			}
		}
	}
</script>