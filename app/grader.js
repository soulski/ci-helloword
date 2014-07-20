var grade = function (score) {
	if (score > 100) {
		return '';
	}
	else if (score >= 95) {
		return 'A+';
	}
	else if (score >= 85) {
		return 'A';
	}
	else if (score >= 80) {
		return 'A-';
	}
	else if (score >= 70) {
		return 'B';
	}
	else if (score >= 65) {
		return 'C';
	}
	else if (score >= 60) {
		return 'D+';
	}
	else if (score >= 55) {
		return 'D';
	}
	else if (score >= 50) {
		return 'D-';
	}
	else if (score >= 40) {
		return 'F+';
	}
	else {
		return 'F';
	}
};

exports.grade = grade;