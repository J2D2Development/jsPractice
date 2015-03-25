//Write a JavaScript function that reverse a number
(function reverseNum(num) {
	//reverses given number (sort of cheap- uses conversion to str, splits out to array, reverse/join, then convert back to num)
	num = String(num);
	var finalNum = Number(num.split('').reverse().join(''));
	//console.log(finalNum);
})(244412);

//Write a JavaScript function that checks whether a passed string is palindrome or not
function palCheck(w) {
	//first, reverse given word
	var rev = w.split('').reverse().join('');

	//remove empty spaces from both
	var finalW = w.replace(/ +?/g, "");
	var finalRev = rev.replace(/ +?/g, "");

	//check for equality
	console.log(finalW === finalRev);
};
palCheck("N");
palCheck("nurses run");
palCheck("fuck you bitch");

//Write a JavaScript function that generates all combinations of a string.