import css from './Sidebar.module.scss'
import Backdrop from '../../../UI/Backdrop/Backdrop'
import React from 'react'

const links = [1,2,3]

const Sidebar = props => {
	const cls = [
		css.Sidebar
	]
	if (!props.isOpen) {
		cls.push(css.close)
	}
	return (
		<React.Fragment>
			<nav className={cls.join(' ')}>
				<ul>
					{ links.map((index, link) => {
						return(
							<li key={index}><a>link {link}</a></li>
						)
					})}
				</ul>
			</nav>
			{props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
		</React.Fragment>
		
	)
}

export default Sidebar