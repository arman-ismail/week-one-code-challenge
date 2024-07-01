const r1 = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});


// Determine the grade based on the average
function getgrade(Avg) {
	if (Avg > 100 || Avg < 0) {
		return "invalid score!";
	}
	if (Avg > 79) {
		return "A";
	} else if (Avg >= 60 && Avg <= 79) {
		return "B";
	} else if (Avg >= 50 && Avg <= 59) {
		return "C";
	} else if (Avg >= 40 && Avg <= 49) {
		return "D";
	} else {
		return "E";
	}
}

r1.question("Enter student marks: ", function (input) {
	const mark = Number(input);

	if (isNaN(mark) || mark > 100 || mark < 0) {
		console.log("The mark you entered is not correct");
	} else {
		let grade = getgrade(mark);
		console.log("The grade is " + grade);
	}

	r1.close();
});
