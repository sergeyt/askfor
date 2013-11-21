var read = require('read');

function ask(q, cb) {
	var silent = q.indexOf('password') >= 0 || q.indexOf('pwd') >= 0;
	read({ prompt: q + ':', silent: silent }, cb);
}

module.exports = function(questions, callback) {

	var i = 0;
	var answers = {};

	function handler(error, value) {
		if (error) throw error;
		answers[questions[i]] = value;
		if (i == questions.length - 1) {
			callback(answers);
		} else {
			ask(questions[++i], handler);
		}
	}

	ask(questions[0], handler);
};