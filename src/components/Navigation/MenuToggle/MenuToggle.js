import css from './MenuToggle.module.scss'

const MenuToggle = props => {
	const cls = [
		css.MenuToggle,
		'fa'
	]
	if (props.isOpen) {
		cls.push('fa-times')
		cls.push(css.open)
	} else {
		cls.push('fa-bars')
	}
	return(
		<i className={cls.join(' ')}
			onClick={props.onToggle}
		></i>
	)
}

export default MenuToggle