<template>
	<div class="Navbar">
		<div class="Navbar-Header">
	  	<div class="Navbar-Btn">
	  		<div class="Navbar-Img" @click="Menu">
	  			<img src="@/assets/images/menu.svg" alt="Icon">
	  		</div>
	  		<div class="Navbar-Time">{{date | date('datetime')}}</div>
	  	</div>
	  	<div @click="showInfo" class="Navbar-User">User Name <img src="@/assets/images/arrow-top.png" alt="Icon"></div>
	  	<div v-if="info" class="Navbar-Info">
	  		<ul class="Navbar-InfoText">
	  			<li>
	  				<router-link to="/profile">Профиль</router-link>
	  			</li>
	  			<li @click="logout">Выйти</li>
	  		</ul>
	  	</div>
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
			position relative
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
		&-Info
			position absolute
			right 15px
			top 55px
		&-InfoText
			background #fff
			-webkit-box-shadow 0px 0px 15px -5px rgba(0,0,0,0.75)
			-moz-box-shadow 0px 0px 15px -5px rgba(0,0,0,0.75)
			box-shadow 0px 0px 15px -5px rgba(0,0,0,0.75)
			padding 15px 15px 5px 15px
			li
				margin-bottom 10px
				font-size 18px
				cursor pointer



</style>

<script>
	export default {
		data: () => ({
			info: false,
			date: new Date(),
			interval: null
		}),
		methods: {
			Menu() {
				this.$emit('menu') 
			},
			showInfo() {
				this.info = !this.info
			},
			logout() {
				console.log('Logout')
				this.$router.push('/login?message=logout')
			}
		},
		mounted() {
			this.interval = setInterval(() => {
				this.date = new Date()	
			}, 1000) 
		},
		beforeDestroy() {
			clearInterval(this.interval)
		}
	}
</script>