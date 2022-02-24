import css from './FinishedQuiz.module.scss'
import Button from '../UI/Button/Button'

const FinishedQuiz = props => {
	const successCount = Object.keys(props.results).reduce((total,key) => {
		if (props.results[key] === 'success') {
			total++
		}
		return total
	},0)
	return (
		<div className={css.FinishedQuiz}>
			<ul>
				{props.quiz.map((quizItem, index) => {
					const cls = [
						'fa',
						props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
						css[props.results[quizItem.id]]
					]
					return(
						<li key={index}>
							<strong>{index+1}</strong>.&nbsp;
							{quizItem.question}
							<i className={cls.join(' ')}></i>
						</li>
					)
				})}
			</ul>
			<p> {successCount} von {props.quiz.length}</p>
			<div>
				<Button onClick={props.onRetry} type='primary'>
					wiederholen
				</Button>
			</div>
		</div>
	)
}

export default FinishedQuiz