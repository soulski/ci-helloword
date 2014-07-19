var should = require('should');
var grade = require('../app/grader').grade;

describe('GradeUnitTest', function () {
	describe('grade', function () {
		it('should return A+', function () {
			grade(96).should.equal('A+');
		});
	});

	describe('grade', function () {
		it('should return A', function () {
			grade(93).should.equal('A');
		});
	});
});