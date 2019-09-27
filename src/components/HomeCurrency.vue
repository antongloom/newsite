<template>
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
				<ul v-for="cur in currencies" :key="cur">
					<li>{{cur}}</li>
					<li>{{rates[cur].toFixed(5)}}</li>
					<li>{{date}}</li>
				</ul>
			</div>
		</div>
</template>

<style lang="stylus" scoped>
.Home
	&-Price
		width 67%
		background #FF8C00
		border-radius 3px
		box-sizing border-box
		color #fff
		padding 20px 20px 40px 20px
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
		props: ['rates','date'],
		data: () => ({
			currencies: ['RUB', 'USD', 'EUR']
		})
	}
</script>