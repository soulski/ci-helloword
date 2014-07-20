var grade = function (score) {
	if (score >= 95 && score <= 100) {
		return 'A+'
	}
	else if (score >= 85 && score <= 94) {
		return 'A'
	}
	else if (score >= 80 && score <= 84) {
		return 'A-'
	}
	else if (score >= 70 && score <= 79) {
		return 'B'
	}
	else if (score >= 65 && score <= 69) {
		return 'C'
	}
	else if (score >= 60 && score <= 64) {
		return 'D+'
	}
	else if (score >= 55 && score <= 59) {
		return 'D'
	}
	else if (score >= 50 && score <= 54) {
		return 'D-'
	}
	else if (score >= 40 && score <= 49) {
		return 'F+'
	}
	else {
		return 'F'
	}
};

exports.grade = grade;