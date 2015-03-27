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
// palCheck("N");
// palCheck("nurses run");
// palCheck("fuck you bitch");

//Write a JavaScript function that generates all combinations of a string.
//!!!
function strCombo(w) {
	//blank string variable to update
	var intWord = '',
		count = 0,
		wordArray = [];
	//loop through all letters
	while(count < w.length) {
		for(var i = 0, l = w.length; i < l; i++) {
			intWord += w[i];
		}
		count += 1;
	}
	wordArray.push(intWord);
	console.log(wordArray);
}
//strCombo('dog');


//Write a JavaScript function that returns a passed string with letters in alphabetical order.
function sortString(w) {
	//split string into array to use the sort function
	console.log(w.split('').sort().join(''));
}
//sortString("webmaster");

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '
//!!!
// function capConvert(w) {
// 	//split str into array
// 	var wArray = w.split(' ');

// 	for(var i = 0, l = wArray.length; i < l; i++) {
// 		var newStr(wArray[i][0].toUpperCase());
// 	}

// 	//console.log(wArray);
// }
//capConvert("the quick brown fox");


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function getMaxOfArray(numArray) {
	//helper function for Math module
	return Math.max.apply(null, numArray);
}

function findLongest(str) {
	//split into array
	var strArray = str.split(' '),
	//initialize var for final word
		finalLongest = '';
	//create new array for length of each word
		newArray = [];

	//first loop - get length of each word in array
	for(var i = 0, l = strArray.length; i < l; i++) {
		newArray.push(strArray[i].length);
	}
	var longestLen = getMaxOfArray(newArray);

	//second loop - compare length of each word with longest
	for(var j = 0, len = strArray.length; j < len; j++) {
		if(strArray[j].length == longestLen) {
			finalLongest = strArray[j];
		}
	}
	console.log(finalLongest);
}
//findLongest("Web Development Tutorial");



// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5
function vowelCount(str) {
	var vowels = 'aeiou',
		vowelArr = vowels.split(''),
		strArr = str.split(''),
		count = 0;

	//traditional nested for loops
	// for(var i = 0, l = str.length; i < l; i++) {
	// 	for(var j = 0, len = vowels.length; j < len; j++) {
	// 		if(str[i] === vowels[j]) {
	// 			count += 1;
	// 		}
	// 	}
	// }

	//using higher order functions
	strArr.forEach(function(c) {
		vowelArr.forEach(function(x) {
			if(c === x) { count += 1 }
		});
	});
	console.log(count);
}
//vowelCount('The quick brown fox');



// Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//type: Num->Boolean
function primeCheck(n) {
}


//Write a JavaScript function which accepts an argument and returns the type.
//Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function typeCheck(arg) {
	console.log(typeof arg);
}
// typeCheck(3);
// typeCheck('string');
// typeCheck(typeCheck);


//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.
//Sample arguments : 'w3resource.com', 'o'
//Expected output : 2
//type: (Str,Str->Num)
function countLetters(string, letter) {
	var count = 0,
		strArray = string.split('');

	//use for loop
	// for(var i = 0, l = string.length; i < l; i++) {
	// 	if(string[i] === letter) { count += 1 }
	// }

	//use higher order functions
	strArray.forEach(function (x) {
		if(x === letter) { count += 1 }
	});

	console.log(count);
}
countLetters('w3resource.com', 'o');