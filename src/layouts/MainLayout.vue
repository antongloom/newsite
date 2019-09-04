<template>
	<div class="MainLayout">
		<div class="MainLayout-Content">
			<Navbar @menu="onClick" />
			<div class="MainLayout-Item">
				<transition name="fade">
					<Sidebar v-if="show"/>
				</transition>
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

.fade-enter-active {
  transition: all .2s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

</style>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
export default {
  name: 'main-layout',
  data: () => ({
  	show: false
  }),
  components: {
		Navbar,
		Sidebar
	},
	methods: {
		onClick() {
			this.show = !this.show
		}
	},
	async mounted() {
		if(!Object.keys(this.$store.getters.info).length) {
			await this.$store.dispatch('fetchInfo')
		}
	}
}	
</script>