import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestionList from './QuestionList';
class Home extends Component {
	render() {
		const { answeredQuestionIds, unansweredQuestionIds } = this.props;
		const mystyle = {
			color: '#fff',
			backgroundColor: '#17a2b8',
		};
		return (
			<Fragment>
				<Tabs> 
					<Tab style={mystyle} eventKey="unanswered" title="Unanswered Questions">
						<QuestionList
							idsList={unansweredQuestionIds}
							emptyListNote="All questions have been answered. Add more!"
						/>
					</Tab>
					<Tab style={mystyle} eventKey="answered" title="Answered Questions">
						<QuestionList
							idsList={answeredQuestionIds}
							emptyListNote="Begin Answering Questions!"
						/>
					</Tab>
				</Tabs>
			</Fragment>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionIds = Object.keys(questions)

  // .filter((id) => users[authedUser].answers.hasOwnProperty(id))
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  
	const unansweredQuestionIds = Object.keys(questions)
  // .filter((id) => !users[authedUser].answers.hasOwnProperty(id))
  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);
  
	return {
    answeredQuestionIds,
		unansweredQuestionIds
	};
}

export default connect(mapStateToProps)(Home);
