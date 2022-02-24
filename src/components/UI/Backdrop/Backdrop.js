import css from './Backdrop.module.scss'

const Backdrop = props => {
	return (
		<div className={css.Backdrop} onClick={props.onClick}></div>
	)
}

export default Backdrop