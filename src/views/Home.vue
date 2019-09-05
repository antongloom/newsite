<template>
  <div class="Home Main-Content">
  		<div class="Home-Title">
  			<div class="Home-Text">Счет</div>
  			<div class="Home-Update">&#8634;</div>
  		</div>
  		<div class="Home-InfoBlock">
  			<HomeBill />
  			<HomeCurrency />
  		</div>
  </div>
</template>

<style lang="stylus" scoped>
	.Home
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
		&-InfoBlock
			display flex
			justify-content space-between

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


<script>
import Sidebar from '@/components/app/Sidebar'
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  name: 'home',
  components: {
		Sidebar,
		HomeBill,
		HomeCurrency
	}
}
</script>