<template>
  <div class="Home">
		<div class="Home-Content">
	    <Navbar />
	    <div class="Home-Item">
	    	<Sidebar />
	    	<div class="Home-Info">
	    		<div class="Home-Title">
	    			<div class="Home-Text">Счет</div>
	    			<div class="Home-Update">&#8634;</div>
	    		</div>
	    		<div class="Home-InfoBlock">
	    			<div class="Home-Price">
	    				<div class="Home-Subtitle">Счет в валюте</div>
	    				<div class="Home-PriceNumber">12.0 <span>Р</span></div>
	    			</div>
	    			<div class="Home-Price Home-Price_Left">
	    				<div class="Home-Subtitle">Курс валют</div>
	    				<div class="Home-PriceText Home-PriceText_Title">
	    					<ul>
	    						<li>Валюта</li>
	    						<li>Курс</li>
	    						<li>Дата</li>
	    					</ul>
	    				</div>
	    				<div class="Home-PriceText">
	    					<ul>
	    						<li>руб</li>
	    						<li>12121</li>
	    						<li>12.12.12</li>
	    					</ul>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'home',
  components: {
		Navbar,
		Sidebar
	}
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
		&-Item
			display flex
			justify-content space-between
			padding-top 67px
		&-Title
			display flex
			justify-content space-between
			align-items center
			padding-bottom 20px
		&-Text
			font-size 24px
		&-Update
			height 30px
			width 45px
			border-radius 3px
			background #00CED1
			position relative
			font-size 24px
			color #fff
			text-align center
			line-height 30px
			cursor pointer
		&-Info
			width 100%
			padding 30px 15px 0px 15px
		&-InfoBlock
			display flex
			justify-content space-between
		&-Price
			width 30%
			background #1E90FF
			border-radius 3px
			box-sizing border-box
			color #fff
			padding 20px 20px 40px 20px
			&_Left
				width 67%
				background #FF8C00
		&-Subtitle
			padding-bottom 20px
			font-size 20px
		&-PriceNumber
			padding 10px 0px 10px 0px
			border-bottom 1px solid #fff
		&-PriceText
			ul
				display flex
				justify-content space-between
				border-bottom 1px solid #fff
				padding 10px 0px
				li
					list-style-type none
					width 33.33%
			&_Title
				font-weight bold

@media (max-width: 768px){
	.Home-InfoBlock {
		display: block;
	}
	.Home-Price{
		margin-bottom: 20px;
		width: 100%;
	}
}

@media (max-width: 480px){
	.Home-Info {
		padding-top: 20px;
	}
	.Home-PriceText {
		font-size: 14px;
	}
	.Home-Subtitle {
		padding-bottom: 10px;
	}
}

</style>