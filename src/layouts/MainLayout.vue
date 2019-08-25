<template>
	<div class="MainLayout">
		<div class="MainLayout-Content">
			<Navbar />
			<div class="MainLayout-Item">
				<Sidebar />
				<router-view />	
			</div>
		</div>
	</div>
</template>


<style lang="stylus" scoped>
	.MainLayout
		&-Content
			max-width 1920px
			margin 0 auto
		&-Item
			display flex
			justify-content space-between
			padding-top 67px
</style>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'main-layout',
  components: {
		Navbar,
		Sidebar
	}
}	
</script>