var should = require('should');
var grade = require('../app/grader').grade;

describe('GradeUnitTest', function () {
	describe('grade', function () {
		it('should return A+ when score is greater than 94', function () {
			grade(96).should.equal('A+');
		});

		it('should return A when score is greater than 85', function () {
			grade(93).should.equal('A');
		});

		it('should return A- when score is greater than 80', function () {
			grade(82).should.equal('A-');
		});
	});
});