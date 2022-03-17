import React from 'react'
import css from './Layout.module.scss'
import MenuToggle from '../Navigation/MenuToggle/MenuToggle'
import Sidebar from '../Navigation/Sidebar/Sidebar'

class Layout extends React.Component {

	state = {
		menu: false
	}

	toggleMenuHandler = () => {
		this.setState({
			menu: !this.state.menu
		})
	}

	menuCloseHandler = () => {
		this.setState({
			menu: false
		})
	}
	render(){
		return(
			<div className={css.Layout}>
				<Sidebar
					isOpen={this.state.menu}
					onClose={this.menuCloseHandler}
				/>
				<MenuToggle
					onToggle={this.toggleMenuHandler}
					isOpen={this.state.menu}
				/>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
	
}

export default Layout