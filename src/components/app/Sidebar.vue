<template>
	<div class="Sidebar">
		<ul class="Sidebar-List">
			<router-link 
			  v-for="link in links"
			  :key = "link.url"
				tag="li"
				active-class="active"
				:to="link.url"
				:exact="link.exact"
				>
				{{link.title}}
			</router-link>
		</ul>
	 </div>
</template>


<style lang="stylus" scoped>
.Sidebar
	width 400px
	-webkit-box-shadow 9px 0px 8px -5px rgba(0,0,0,0.19)
	-moz-box-shadow 9px 0px 8px -5px rgba(0,0,0,0.19)
	box-shadow 9px 0px 8px -5px rgba(0,0,0,0.19)
	height 100vh
	margin-right 35px
	&-List
		margin-top 30px
		li
			list-style-type none
			color #000
			font-weight bold
			font-size 18px
			padding 10px 15px
			cursor pointer
			-webkit-transition all 0.5s ease
			-moz-transition all 0.3s ease
			transition all 0.3s ease
			&:hover
				background #ddd

.active{
	background #ddd
}

@media (max-width: 992px){
	.Sidebar{
		width: 230px;
		background: #fff;
		position: absolute;
	}
}
</style>

<script>
	export default {
		data: () => ({
			links: [
				{
					title: 'Счет',
					url: '/',
					exact: true
				},
				{
					title: 'История',
					url: '/history'
				},
				{
					title: 'Планирование',
					url: '/planning'
				},
				{
					title: 'Новая запись',
					url: '/record'
				},
				{
					title: 'Категории',
					url: '/categories'
				}
			]
		})
	}
</script>