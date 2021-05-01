let users = {
	wanda: {
		id: 'wanda',
		name: 'Wanda Maximoff',
		avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
		answers: {
			'8xf0y6ziyjabvozdd253nd': 'optionOne',
			'6ni6ok3ym7mf1p33lnez': 'optionOne',
			am8ehyc8byjqgar0jgpub9: 'optionTwo',
			loxhs1bqm25b708cmbf3g: 'optionTwo'
		},
		questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
	},
	vision: {
		id: 'vision',
		name: 'Vision',
		avatarURL: 'https://tylermcginnis.com/would-you-rather/tyler.jpg',
		answers: {
			vthrdm985a262al8qx3do: 'optionOne',
			xj352vofupe1dqz9emx13r: 'optionTwo'
		},
		questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do']
	},
	loki: {
		id: 'loki',
		name: 'Loki Odinson',
		avatarURL: 'https://tylermcginnis.com/would-you-rather/dan.jpg',
		answers: {
			xj352vofupe1dqz9emx13r: 'optionOne',
			vthrdm985a262al8qx3do: 'optionTwo',
			'6ni6ok3ym7mf1p33lnez': 'optionOne'
		},
		questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r']
	}
};

let questions = {
	'8xf0y6ziyjabvozdd253nd': {
		id: '8xf0y6ziyjabvozdd253nd',
		author: 'wanda',
		timestamp: 1567166872634,
		optionOne: {
			votes: ['wanda'],
			text: 'be forced to read everyone\'s minds'
		},
		optionTwo: {
			votes: [],
			text: 'have everyone read yours'
		}
	},
	'6ni6ok3ym7mf1p33lnez': {
		id: '6ni6ok3ym7mf1p33lnez',
		author: 'loki',
		timestamp: 1568479767190,
		optionOne: {
			votes: [],
			text: 'fight thor'
		},
		optionTwo: {
			votes: ['loki', 'wanda'],
			text: 'fight hulk'
		}
	},
	am8ehyc8byjqgar0jgpub9: {
		id: 'am8ehyc8byjqgar0jgpub9',
		author: 'wanda',
		timestamp: 1588579767190,
		optionOne: {
			votes: [],
			text: 'be telekinetic'
		},
		optionTwo: {
			votes: ['wanda'],
			text: 'be telepathic'
		}
	},
	loxhs1bqm25b708cmbf3g: {
		id: 'loxhs1bqm25b708cmbf3g',
		author: 'vision',
		timestamp: 1582579767190,
		optionOne: {
			votes: [],
			text: 'see the future, but forget the past'
		},
		optionTwo: {
			votes: ['wanda'],
			text: 'be caught in a for-loop of the same 30 days'
		}
	},
	vthrdm985a262al8qx3do: {
		id: 'vthrdm985a262al8qx3do',
		author: 'vision',
		timestamp: 1594579767190,
		optionOne: {
			votes: ['vision'],
			text: 'be rich and ugly'
		},
		optionTwo: {
			votes: ['loki'],
			text: 'be extremely attractive and broke'
		}
	},
	xj352vofupe1dqz9emx13r: {
		id: 'xj352vofupe1dqz9emx13r',
		author: 'loki',
		timestamp: 1593579767190,
		optionOne: {
			votes: ['loki'],
			text: 'visit 30 cities in 30 days'
		},
		optionTwo: {
			votes: ['vision'],
			text: 'watch Discovery channel for 30 days'
		}
	}
};

function generateUID() {
	return (
		Math.random()
			.toString(36)
			.substring(2, 15) +
		Math.random()
			.toString(36)
			.substring(2, 15)
	);
}

export function _getUsers() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...users }), 1000);
	});
}

export function _getQuestions() {
	return new Promise((res, rej) => {
		setTimeout(() => res({ ...questions }), 1000);
	});
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
	return {
		id: generateUID(),
		timestamp: Date.now(),
		author,
		optionOne: {
			votes: [],
			text: optionOneText
		},
		optionTwo: {
			votes: [],
			text: optionTwoText
		}
	};
}

export function _saveQuestion(question) {
	return new Promise((res, rej) => {
		const authedUser = question.author;
		const formattedQuestion = formatQuestion(question);

		setTimeout(() => {
			questions = {
				...questions,
				[formattedQuestion.id]: formattedQuestion
			};

			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					questions: users[authedUser].questions.concat([formattedQuestion.id])
				}
			};

			res(formattedQuestion);
		}, 1000);
	});
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			users = {
				...users,
				[authedUser]: {
					...users[authedUser],
					answers: {
						...users[authedUser].answers,
						[qid]: answer
					}
				}
			};

			questions = {
				...questions,
				[qid]: {
					...questions[qid],
					[answer]: {
						...questions[qid][answer],
						votes: questions[qid][answer].votes.concat([authedUser])
					}
				}
			};

			res();
		}, 500);
	});
}
