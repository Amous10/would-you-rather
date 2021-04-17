import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import Home from './components/Home'
import LoadingBar from 'react-redux-loading'
import Nav from './components/Nav'
import QuestionList from './components/QuestionList'
import NewQuestion from './components/NewQuestion'


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData());
	}

	render() {
	
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					<div className='container'>
						<Nav />
						{this.props.loading === true ? null : (
							<div>
								<Route path='/' exact component={Home} />
								<Route path='/questions' component={QuestionList} />
								<Route path='/new' component={NewQuestion} />
							</div>
						)}
					</div>
				</Fragment>
			</Router>
		);
	}
}

function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar,
	};
}

export default connect(mapStateToProps)(App);
