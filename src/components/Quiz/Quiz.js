import React from "react";
import css from './Quiz.module.scss'
import ActiveQuiz from '../ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../FinishedQuiz/FinishedQuiz'

export default class Quiz extends React.Component {

	state = {
		isFinished: false,
		activeQuestion: 0,
		answerState: null,
		results: {},
		quiz: [
			{
				question: 'Истинная ориентация на рынок начинается с...',
				id: 1,
				rightAnswerId: 3,
				answers: [
					{text: 'участников рынка', id: 1},
					{text: 'структуры маркетинга', id: 2},
					{text: 'запросов покупателей', id: 3},
					{text: 'достоинств товара', id: 4},
					{text: 'стратегии продажи', id: 5}
				]
			},
			{
				question: 'Приведение товара в соответствие с запросами покупателя — это пример',
				id: 2,
				rightAnswerId: 5,
				answers: [
					{text: 'ориентации на спрос потребителя', id: 1},
					{text: 'ориентации на производство товара', id: 2},
					{text: 'ориентации на продажу', id: 3},
					{text: 'ориентации на рынок', id: 4},
					{text: 'маркетинговой ориентации', id: 5}
				]
			},
			{
				question: 'Определение нужд целевого рынка',
				id: 3,
				rightAnswerId: 1,
				answers: [
					{text: 'отражает уровень сегментирования рынка', id: 1},
					{text: 'определение приоритетных целей на каждом сегменте', id: 2},
					{text: 'устанавливает рыночный уровень диверсификации', id: 3},
					{text: 'скорее стратегическое решение, чем тактический вопрос', id: 4},
					{text: 'функция исследований рынка', id: 5}
				]
			}
		]
	}

	isQuizFinished() {
		return this.state.activeQuestion + 1 === this.state.quiz.length
	}

	timeoutAnswer() {
		const timeout = window.setTimeout(() => {
			if (this.isQuizFinished()) {
				this.setState({
					isFinished: true
				})
			} else {
				this.setState({
					activeQuestion: this.state.activeQuestion + 1,
					answerState: null
				})
			}
			
			window.clearTimeout(timeout)
		}, 1000)
	}

	onAnswerClickHandler = (answerId) => {



		// if (this.state.answerState) {
		// 	const key = Object.keys(this.state.answerState)[0]
		// 	// if (this.state.answerState[key] === 'success') {
		// 	// 	return
		// 	// }
		// 	console.log(key)
		// }

		const question = this.state.quiz[this.state.activeQuestion]
		const results = this.state.results

		if (question.rightAnswerId === answerId) {
			if (!results[question.id]) {
				results[question.id] = 'success'
			}
			this.setState({answerState: {[answerId]: 'success'},
				results})
			this.timeoutAnswer()
			
		} else {
			results[question.id] = 'error'
			this.setState({answerState: {[answerId]: 'error'},
				results})
			this.timeoutAnswer()
			
		}
		
		
	}

	retryHandler = () => {
		this.setState({
			isFinished: false,
			activeQuestion: 0,
			answerState: null,
			results: {}
		})
	}

	render() {
		return(
			<div className={css.Quiz}>
				
				<div className={css.QuizWrapper}>
					<h1>Маркетинг</h1>
					{ this.state.isFinished 
					? 
					<FinishedQuiz
						results={this.state.results}
						quiz={this.state.quiz}
						onRetry={this.retryHandler}
					/>
					:
					<ActiveQuiz
						question={this.state.quiz[this.state.activeQuestion].question}
						answers={this.state.quiz[this.state.activeQuestion].answers}
						onAnswerClick={this.onAnswerClickHandler}
						quizLength={this.state.quiz.length}
						answerNumber={this.state.activeQuestion + 1}
						state={this.state.answerState}
					/>
					}
				</div>
			</div>
		)
	}
}