<template>
  <div class="Home">
		<div class="Home-Content">
	    <div class="Home-Header">
	    	<div class="Home-Btn">
	    		<div class="Home-Img">
	    			<img src="@/assets/images/menu.svg" alt="Icon">
	    		</div>
	    		<div class="Home-Time">12.12.12</div>
	    	</div>
	    	<div class="Home-User">User Name <img src="@/assets/images/arrow-top.png" alt="Icon"></div>
	    </div>
	    <div class="Home-Item">
	    	<div class="Home-Sidebar">
	    		<ul class="Home-List">
	    			<li>Счет</li>
	    			<li>История</li>
	    			<li>Планирование</li>
	    			<li>Новая запись</li>
	    			<li>Категории</li>
	    		</ul>
	    	</div>
	    	<div class="Home-Info">
	    		<div class="Home-Title">
	    			<div class="Home-Text">Счет</div>
	    			<div class="Home-Update"></div>
	    		</div>
	    	</div>
	    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="stylus" scoped>
	.Home
		&-Content
			max-width 1920px
			margin 0 auto
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
		&-Btn
			display flex
			align-items center
		&-Img
			cursor pointer
		&-Time
			margin-left 15px
		&-User
			text-transform uppercase
			img
				margin-left 5px
</style>