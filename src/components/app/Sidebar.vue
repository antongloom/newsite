<template>
	<div class="Sidebar">
		<ul class="Sidebar-List">
			<li>Счет</li>
			<li>История</li>
			<li>Планирование</li>
			<li>Новая запись</li>
			<li>Категории</li>
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
</style>