
import css from './ActiveQuiz.module.scss'
import AnswersList from './AswersList/AswersList'

const ActiveQuiz = props => {

	return(
		<div className={css.ActiveQuiz}>
			<p className={css.Question}>
				<span>
					<strong>{props.answerNumber}.</strong>&nbsp;
					{props.question}
				</span>
				<small>{props.answerNumber} von {props.quizLength}</small>
			</p>
			<AnswersList
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}
				state={props.state}
			/>
		</div>
	)
}

export default ActiveQuiz