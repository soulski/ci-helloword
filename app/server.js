var express = require('express'),
		engines = require('consolidate'),
		grader = require('./grader');

var app = express();
app.engine('html', engines.hogan);
app.set('view engine', 'html');
app.set('views', 'views');

app.get('/', function (req, res) {
	res.redirect('home');
});

app.get('/home', function (req, res) {
	res.render('index');
});

app.get('/grade', function (req, res) {		
	res.json({
		grade: grader.grade(req.query.score)
	});
});

exports.run = function () {
	app.listen(8089);
}