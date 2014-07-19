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

		it('should return B when score is greater than 70', function () {
			grade(73).should.equal('B');
		});

		it('should return C when score is greater than 64', function () {
			grade(68).should.equal('C');
		});

		it('should return D+ when score is greater than 59', function () {
			grade(61).should.equal('D+');
		});

		it('should return D when score is greater than 54', function () {
			grade(56).should.equal('D');
		});

		it('should return D- when score is greater than 49', function () {
			grade(52).should.equal('D-');
		});

		it('should return F+ when score is greater than 39', function () {
			grade(40).should.equal('F+');
		});

		it('should return F when score is greater than 35', function () {
			grade(38).should.equal('F');
		});
	});
});