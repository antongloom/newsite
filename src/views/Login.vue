<template>
	<div class="Login">
		<div class="Login-Content Main-Content">
			<div class="Login-Title">Домашняя бухгалтерия</div>
			<form class="Login-Block">
				<div class="Login-BlockInput">
					<input type="text" placeholder="Email" class="Login-Input">
					<span class="Login-Error">Email</span>
				</div>
				<div class="Login-BlockInput">
					<input type="text" placeholder="Пароль" class="Login-Input">
					<span class="Login-Error">Пароль</span>
				</div>
				<button	type="submit" class="Login-Btn">войти</button>
			</form>
			<div class="Login-Text">Нет аккаунта? <router-link to='/registration'><span> Зарегестрироваться</span></router-link></div>	
		</div>
		<router-view />
	</div>
</template>

</script>
<style lang="stylus" scoped>
	.Login
		&-Content
			box-sizing border-box
		  width 450px
		  padding 20px
		  margin 0
		  background #fff
		  position absolute
		  top 50%
		  left 50%
		  margin-right -50%
		  transform translate(-50%, -50%)
		  -webkit-transform translate(-50%,-50%) 
		  -moz-transform translate(-50%,-50%)
		  -ms-transform translate(-50%,-50%)
		  -o-transform translate(-50%,-50%)
		&-Title
			font-size 24px
			padding-bottom 20px
		&-BlockInput
			padding-bottom 30px
		&-Input
			width 100%
			height 35px
			box-sizing border-box
			font-size 14px
			border none
			border-bottom 1px solid #ccc
			outline none
		&-Block
			padding-bottom 15px
		&-Error
			color red
			font-size 12px
		&-Btn
			margin-top 15px
			width 100%
			height 35px
			border none
			background #008B8B
			text-transform uppercase
			line-height 35px
			color #fff
			cursor pointer
			border-radius 2px
		&-Text
			text-align center
			font-size 14px
			span
				text-transform uppercase
				color #DAA520
				cursor pointer






@media (max-width: 480px){
	.Login-Content {
		width: 100%;
	}
	.Login-Content {
		font-size: 20px;
	}
}
</style>