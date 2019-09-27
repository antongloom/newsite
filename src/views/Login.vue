<template>
	<div class="Login">
		<div class="Login-Content Main-Content">
			<div class="Login-Title">Домашняя бухгалтерия</div>
			<form class="Login-Block" @submit.prevent="submitHandler">
				<div class="Login-BlockInput">
					<input type="text" 
								 placeholder="Email" 
								 class="Login-Input"
								 v-model.trim="email"
								 :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
								 >
					<span class="Login-Error"
								v-if="$v.email.$dirty && !$v.email.required"
							>
							Поле Email не должно быть пустым
					</span>
					<span class="Login-Error"
								v-if="$v.email.$dirty && !$v.email.email"
							>
							Введите корректный Email
					</span>	
				</div>
				<div class="Login-BlockInput">
					<input type="password" 
								 placeholder="Пароль" 
								 class="Login-Input"
								 v-model.trim="password"
								 :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
								 >
					<span class="Login-Error"
								v-if="$v.password.$dirty && !$v.password.required">
								Введите пароль
					</span>
					<span class="Login-Error"
								v-if="$v.password.$dirty && !$v.password.minLength">
								Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}} 
					</span>
				</div>
				<button	type="submit" class="Login-Btn">войти</button>
			</form>
			<div class="Login-Text">Нет аккаунта? <router-link to='/registration'><span> Зарегестрироваться</span></router-link></div>	
		</div>
		<router-view />
	</div>
</template>

</script>
<style lang="stylus" scoped>
	.Login
		box-sizing: border-box;
		&-Content
			box-sizing border-box
		  width 450px
		  padding 20px
		  margin 0
		  background #fff
		  position absolute
		  top 50%
		  left 50%
		  margin-right -50%
		  transform translate(-50%, -50%)
		  -webkit-transform translate(-50%,-50%) 
		  -moz-transform translate(-50%,-50%)
		  -ms-transform translate(-50%,-50%)
		  -o-transform translate(-50%,-50%)
		&-Title
			font-size 24px
			padding-bottom 20px
		&-BlockInput
			padding-bottom 30px
			position relative
			margin-bottom 10px
		&-Input
			width 100%
			height 35px
			box-sizing border-box
			font-size 14px
			border none
			border-bottom 1px solid #ccc
			outline none
		&-Block
			padding-bottom 15px
		&-Error
			color red
			font-size 12px
			position absolute
			left 0
			top 45px
		&-Btn
			margin-top 15px
			width 100%
			height 35px
			border none
			background #008B8B
			text-transform uppercase
			line-height 35px
			color #fff
			cursor pointer
			border-radius 2px
		&-Text
			text-align center
			font-size 14px
			span
				text-transform uppercase
				color #DAA520
				cursor pointer

.invalid{
	border-bottom: 1px solid red;
}

@media (max-width: 500px){
	.Login {
		width: 300px;
		padding: 0px 0px 20px 0px;
	}
	.Login-Title {
		font-size: 20px;
	}
}
</style>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'

export default {
  name: 'login',
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
      	email: this.email,
      	password: this.password
      }
       try{
       	await this.$store.dispatch('login', formData)
	  	this.$router.push('/')	
       } catch(e){}
    }	
  },
  mounted() {
  	if (messages[this.$route.query.message]) {
  		this.$message(messages[this.$route.query.message])
  	}
  }
}
</script>
