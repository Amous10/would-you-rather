import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NavMenu from "./NavMenu";
import Home from "./Home";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import PageNotFound from "./PageNotFound";

const AuthApp = () => {
	return (
		<Router>
			<Container className='bg-secondary'>
				<NavMenu />
				<main>
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/questions/:id' component={QuestionPage} />
						<Route path='/new' component={NewQuestion} />
						<Route path='/leaderboard' component={Leaderboard} />
						<Route component={PageNotFound} />
					</Switch>
				</main>
			</Container>
		</Router>
	);
};

export default AuthApp;
