var wordList = [
	'hello', 'you', 'battlestar', 'uneven'
];
var ask = prompt("What is the secret word?");

(function (submittedAns) {
  var correctAns = wordList[Math.floor((Math.random() * wordList.length) + 0)];
  console.log(correctAns)
	console.log("You guessed: " + submittedAns);
	if(submittedAns == correctAns) {
		console.log("You're right!  The word was: " + correctAns);
	} else {
		console.log("Incorrect! You're dumb!");
		ask = prompt("Please try again!");
	}
})(ask);