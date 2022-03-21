import React from 'react'
import is from 'is_js'
import css from './Auth.module.scss'
import Input from '../../UI/Input/Input'
import Button from '../../UI/Button/Button'

class Auth extends React.Component {

	state = {
		isFormValid: false,
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'E-mail',
				errorMessage: 'invalid value',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			pass: {
				value: '',
				type: 'password',
				label: 'Password',
				errorMessage: 'invalid value',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}


	loginHandler() {

	}

	regHandler() {

	}

	submitHandler(event) {
		return event.preventDefault()
	}

	cls = [css.Auth]

	validateCtrl(value, validation) {
		if (!validation) {
			return true
		}
		let isValid = true
		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}
		if (validation.email) {
			isValid = is.email(value) && isValid
		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}
		return isValid
	}
	
	onChangeHandler(event, ctrl) {
		const formControls = this.state.formControls
		const formCtrl = formControls[ctrl]
		formCtrl.value = event.target.value
		formCtrl.touched = true
		formCtrl.valid = this.validateCtrl(formCtrl.value, formCtrl.validation)
		formControls[ctrl] = formCtrl

		let isFormValid = true
		Object.keys(formControls).forEach(name => {
			isFormValid = formControls[name].valid && isFormValid
		})
		this.setState({
			formControls, isFormValid
		})

	}

	renderInputs()  {
		return Object.keys(this.state.formControls).map((ctrl, index) => {
			const control = this.state.formControls[ctrl]
			return(
				<Input
					key={ctrl + index}
					type={control.type}
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					errorMessage={control.errorMessage}
					shouldValidate={!!control.validation}
					onChange={(event) => this.onChangeHandler(event, ctrl)}
				/>
			)
		})
	}
	
	render() {
		return(
			<div className={css.Auth}>
				<h2>Auth</h2>
				<form onSubmit={this.submitHandler} className={css.AuthForm}>
					{this.renderInputs()}
					<Button type='success' onClick={this.loginHandler} disabled={!this.state.isFormValid} >Enter</Button>
					<Button type='primary' onClick={this.regHandler} disabled={!this.state.isFormValid} >Registration</Button>
				</form>
			</div>
		)
	}
	
}

export default Auth