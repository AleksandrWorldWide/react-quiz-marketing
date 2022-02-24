
import css from './AswersList.module.scss'
import AnswerItem from './AnswersItem/AnswersItem'

const AnswersList = props => {

	return(
		<ul className={css.AnswersList}>
			{ props.answers.map((answer, index) => {
				return(
					<AnswerItem
						key={index}
						answer={answer}
						onAnswerClick={props.onAnswerClick}
						state={props.state ? props.state[answer.id] : null}
				/>
				)
			})}
		</ul>
	)
}

export default AnswersList