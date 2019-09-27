<template>
  <div class="Home Main-Content">
  		<div class="Home-Title">
  			<div class="Home-Text">Счет</div>
  			<div class="Home-Update" @click="Refresh">&#8634;</div>
  		</div>
  		<Loader v-if="loading" />
  		<div v-else class="Home-InfoBlock">
  			<HomeBill :rates = currency.rates />
  			<HomeCurrency :rates = currency.rates
						  :date = "currency.date"
  			 />
  		</div>
  		<div class="loader"></div>
  </div>
</template>

<style lang="stylus" scoped>
	.Home
		&-Title
			display flex
			justify-content space-between
			align-items center
			padding-bottom 20px
			border-bottom 1px solid #000
			margin-bottom 30px
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
  data: () => ({
  	loading: true,
  	currency: null
  }),
  async mounted() {
  	this.currency =  await this.$store.dispatch('fetchCarrency')
  	this.loading = false
  },
  components: {
		Sidebar,
		HomeBill,
		HomeCurrency
	},
	methods: {
		async Refresh() {
			this.loading = true
			this.currency =  await this.$store.dispatch('fetchCarrency')
			this.loading = false
		}
	}
}
</script>