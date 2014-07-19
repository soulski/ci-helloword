var should = require('should')
		app = require('../app/index');

describe('test', function () {
	describe('hello world', function() {
		it('should say hello', function (done) {
			app.sayHello().should.equal('hello');
			done();
		})

		it('should be robot', function (done) {
			app.isHuman().should.be.false;
			done();
		})

		it('should not be human', function (done) {
			app.isRobot().should.be.false;
			done();
		})

		it('should be shout', function (done) {
			var shout = 'hello';
			app.shout(shout).should.equal('Shout : ' + shout);
			done();
		})
	})
});