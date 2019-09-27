<template>
	<div class="Home-Price">
		<div class="Home-Subtitle">Счет в валюте</div>
		<div class="Home-PriceNumber" 
				 v-for="cur in currencies"	
				 :key="cur"
				 ><span>{{ getCurrency(cur) | currency(cur) }}</span></div>
	</div>
</template>

<style lang="stylus" scoped>
.Home
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
</style>



<script>
export default {
  props: ['rates'],
  data: () => ({
    currencies: ['RUB', 'USD', 'EUR']
  }),
  computed: {
    base() {
      return this.$store.getters.info.bill / (this.rates['RUB'] / this.rates['EUR'])
    }
  },
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency])
    }
  }
}
</script>