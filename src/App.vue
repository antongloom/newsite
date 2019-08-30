<template>
  <div id="app">
  	<component :is="layout">
    	<router-view/>
  	</component>
  </div>
</template>
<style lang="stylus">
@import 'assets/style/main.styl'

</style>

<script>
import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
export default {
	computed: {
		layout() {
			return (this.$route.meta.layout || 'empty') + '-layout'
		}
	},
	components: {
		EmptyLayout,
		MainLayout
	}
}
</script>
