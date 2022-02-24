import React from "react";
import Layout from './components/Layout/Layout'
import Quiz from './components/Quiz/Quiz'

class App extends React.Component {

	render() {
		return (
			<Layout>
				<Quiz/>
			</Layout>
		 )
	}
  
}

export default App
