import css from './Button.module.scss'

const Button = props => {
	const cls = [
		css.Button,
		css[props.type]
	]
	return(
		<button 
			onClick={props.onClick} 
			className={cls.join(' ')} 
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}

export default Button