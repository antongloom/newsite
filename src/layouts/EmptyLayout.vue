<template>
	<div class="EmptyLayout">
		<router-view />
	</div>
</template>
<style lang="stylus" scoped>
	.EmptyLayout
		height 100vh
		background #ccc
</style>

<script>
import messages from '@/utils/messages'
export default {
	computed: {
		error() {
			return this.$store.getters.error
		}
	},
	watch: {
		error(fbError) {
			console.log(fbError)
			this.$error(messages[fbError.code] || 'Что-то пошло не так')
		}
	}	
}
	
</script>