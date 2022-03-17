import css from './Sidebar.module.scss'
import Backdrop from '../../UI/Backdrop/Backdrop'
import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
	{to: '/auth', label: 'auth', end: true},
	{to: '/', label: 'list', end: false},
	{to: '/quiz-creator', label: 'create Test', end: false}
]

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
					{ links.map((link, index) => {
						return(
							<li key={index}>
								<NavLink 
									to={link.to} 
									end={link.end}
									onClick={props.onClose}
								>{link.label}</NavLink>
							</li>
						)
					})}
				</ul>
			</nav>
			{props.isOpen ? <Backdrop onClick={props.onClose}/> : null}
		</React.Fragment>
		
	)
}

export default Sidebar