import css from './QuizList.module.scss'
import { NavLink } from 'react-router-dom'


const QuizList = props => {

	const links = [1,2,3]

	return(
		<div className={css.QuizList}>
			<h1>List of Tests</h1>
			<ul>
				{
					links.map((link, index) => {
						return(
							<li key={index}>
								<NavLink to={'/quiz/' + link}>
									link {link}
								</NavLink>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default QuizList