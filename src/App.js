import React from "react";
import Layout from './components/Layout/Layout'
import Quiz from './components/Quiz/Quiz'
import {Routes, Route} from 'react-router-dom'
import Auth from "./components/other/Auth/Auth";
import QuizCreator from "./components/other/QuizCreator/QuizCreator"
import QuizList from "./components/other/QuizList/QuizList"

class App extends React.Component {

	render() {
		return (
			<Layout>
				<Routes>
					<Route path='/auth' element={<Auth/>}/>
					<Route path='/quiz-creator' element={<QuizCreator/>}/>
					<Route path='/quiz/:id' element={<Quiz/>}/>
					<Route path='/' element={<QuizList/>}/>
				</Routes>
			</Layout>
		 )
	}
  
}

export default App
