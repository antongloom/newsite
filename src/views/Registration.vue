<template>
	<div class="Registration">
		<div class="Registration-Content Main-Content">
			<div class="Registration-Title">Домашняя бухгалтерия</div>
			<form class="Registration-Block" @submit.prevent="submitHandler">
				<div class="Registration-BlockInput">
					<input type="text" 
								 placeholder="Email" 
								 class="Registration-Input"
								 v-model.trim="email"
								 :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
								 >
					<span class="Registration-Error"
								v-if="$v.email.$dirty && !$v.email.required"
							>
							Поле Email не должно быть пустым
					</span>
					<span class="Registration-Error"
								v-if="$v.email.$dirty && !$v.email.email"
							>
							Введите корректный Email
					</span>	
				</div>
				<div class="Registration-BlockInput">
					<input type="password" 
								 placeholder="Пароль" 
								 class="Registration-Input"
								 v-model.trim="password"
								 :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
								 >
					<span class="Registration-Error"
								v-if="$v.password.$dirty && !$v.password.required">
								Введите пароль
					</span>
					<span class="Registration-Error"
								v-if="$v.password.$dirty && !$v.password.minLength">
								Пароль должен быть {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}} 
					</span>
				</div>
				<div class="Registration-BlockInput">
					<input type="text" 
								 placeholder="Имя" 
								 class="Registration-Input"
								 v-model.trim="name"
								 :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
								 >
					<span class="Registration-Error"
								v-if="$v.name.$dirty && !$v.name.required">
								Введите ваше имя
					</span>
				</div>
				<div class="Registration-Checkbox">
					<div>
				    <input type="checkbox" v-model="agree" id="check"  />
				    <label for="check"> С правилами согласен</label>
					</div>
				</div>
				<button	type="submit" class="Registration-Btn">войти</button>
			</form>
			<div class="Registration-Text">Уже есть аккаунт? <router-link to="/login"><span>Войти</span></router-link></div>	
		</div>
		<router-view />
	</div>
</template>

</script>
<style lang="stylus" scoped>
	.Registration
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
			margin-bottom 25px
		&-Checkbox
			margin-top -10px
			margin-bottom 20px
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

input[type=checkbox], input[type=radio] {display: none;}
input[type=checkbox] + label:before {
    content: "\2713";
    color: transparent;
    display: inline-block;
    border: 1px solid #ced4da;
    font-size: 30px;    
    line-height: 22px;
    margin: -5px 5px 0 0;
    height: 20px;
    width: 20px;
    text-align: center;
    vertical-align: middle;
    transition: color ease .3s;
    outline: none;
}
input[type=checkbox]:checked + label:before {
    color: green;
}


@media (max-width: 500px){
	.Registration {
		width: 300px;
		padding: 0px 0px 20px 0px;
	}
	.Registration-Title {
		font-size: 20px;
	}
}
</style>


<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: 'Registration',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    name: {required},
    agree: {chacked: v => v}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
      	email: this.email,
      	password: this.password,
      	name: this.name
      }

      try {
      	await this.$store.dispatch('register', formData)
	  	this.$router.push('/')
      } catch(e){}
      
    }
  }
}
</script>
