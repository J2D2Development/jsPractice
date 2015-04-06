//include underscore.js library (helper functions)
var _;

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
//countLetters('w3resource.com', 'o');

//Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"
function countryName(ctylist) {

	/*
	**This version uses traditional for loops.  kind of ugly
	*/
	// var namelen = [],
	// 	longest,
	// 	index;

	// for(var i = 0, l = ctylist.length; i < l; i++) {
	// 	namelen.push(ctylist[i].length);
	// }

	// longest = getMaxOfArray(namelen);

	// for(var j = 0, n = ctylist.length; j < n; j++) {
	// 	if(ctylist[j].length === longest) {
	// 		index = ctylist[j];
	// 	}
	// }

	//console.log(index);
	/*
	**End of for loop nastiness
	*/

	/*
	**Now trying higher order functions
	*/
	//reduce takes an array and returns only the items that pass the test of the function
	console.log(ctylist.reduce(function(longname, ctyname) {
		return longname.length > ctyname.length ? longname : ctyname;
	}));
}
//countryName(["Australia", "Germany", "United States of America"]);

//Write a JavaScript function that returns array elements larger than a number.
function largerThan(arr, num) {
	//using higher order functions
	var larger = arr.map(function(n) {
		if(n > num) {return n}
	});

	//using for loops
	// var larger = [];

	// for(var i = 0, l = arr.length; i < l; i++) {
	// 	if(arr[i] > num) {
	// 		larger.push(arr[i]);
	// 	}
	// }

	console.log(larger);
}
//largerThan([1,2,3,4,5,6,7,8,9,10], 4);

//Write a JavaScript program that accept two integers and display the larger.
function largerInt(n1, n2) {
	console.log(n1 > n2 ? n1 : n2);
}
//largerInt(2, 4);

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Sample numbers : 3, -7, 2
// Output : The sign is -
function productSign(n1, n2, n3) {
	var result = n1 * n2 * n3;
	console.log(result < 0 ? "-" : "+");
}
//productSign(3, 7, 2);

// Write a JavaScript conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
function sort3Num(n1, n2, n3) {
	var arr = [];

	arr.push(n1, n2, n3);

	console.log(arr.sort().reverse());
}
//sort3Num(0, -1, 4);

// !!!Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
// function largestOfFive(n1, n2, n3, n4, n5) {
// 	var numArray = [n1,n2,n3,n4,n5];

// 	for(var i = 0; i < 5; i++) {
// 		var largest;
// 		if(numArray[i+1] > numArray[i]) {
// 			largest = numArray[i+1];
// 		}
// 	}
// 	console.log(largest);
// }
// largestOfFive(-5,-2,-6,0,-1);
// largestOfFive(10,4,3,2,9);
// largestOfFive(15, 19, -4, 0, 14);


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
//decided to let user input limit of counting
function evenOdd(limit) {
	for(var i = 0, l = limit + 1; i < l; i++) {
		if(i % 2 === 0) {
			console.log(i + " is even");
		} else {
			console.log(i + " is odd");
		}
	}
}
//evenOdd(50);

// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. Go to the editor
// Student Name 	Marks
// David 	80
// Vinoth 	77
// Divya 	88
// Ishitha 	95
// Thomas 	68

// The grades are computed as follows :
// Range 	Grade
// <60 	F
// <70 	D
// <80 	C
// <90 	B
// <100 A
function grade(student, score) {
	var message;

	if(score >= 90) {
		message = "You got an A!";
	} else if(score < 90 && score >= 80) {
		message = "You nailed a B.  Not bad...";
	} else if(score < 80 && score >= 70) {
		message = "C is a passing grade.  C's get degrees!";
	} else if(score < 70 && score >= 60) {
		message = "D stands for Dumbass";
	} else {
		message = "Did you cheat?  I don't recognize that score.";
	}
	console.log("Hello " + student + ". " + message);
}
// grade("Frank", 95);
// grade("Sheila", 88);
// grade("Doofus", 66);

// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function fizzBuzz(limit) {
	for(var i = 0, l = limit + 1; i < l; i++) {
		if(i % 5 === 0 && i % 3 === 0) {
			console.log("FizzBuzz");
		} else if(i % 5 === 0) {
			console.log("Buzz");
		} else if(i % 3 === 0) {
			console.log("Fizz");
		} else {
			console.log(i);
		}
	}
}
//fizzBuzz(10);


// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern(times) {
	var stars;

	for(var i = 1; i <= times; i++) {
		for(var j = 1; j < i; j++) {
			stars = stars + ('*');
		}
		console.log(stars);
		stars = '';
	}
}
//pattern(12);

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000
function sumMult(limit) {
	//functional (using higher order functions)

	//use underscore lib to create array within range
	var addThese = _.range(limit + 1);

	var sum = addThese.filter(function(x) {
		return x % 3 === 0 && x % 5 === 0;
	}).reduce(function(x,y) {
		return x + y;
	});

	console.log(sum);

	//traditional method- using for loop
	// var addThese = [],
	// 	sum;

	// for(var i = 0; i < limit; i++) {
	// 	if(i % 3 === 0 && i % 5 === 0) {
	// 		addThese.push(i);
	// 	}
	// }

	// sum = addThese.reduce(function(x,y) {
	// 	return x + y;
	// });

	// console.log(sum);
}
//sumMult(100);

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12
};
// Sample Output : name,sclass,rollno
function listObj(obj) {
	//use for-in, I think listing object properties is what it's made for
	for(prop in obj) {
		console.log(prop);
	}
}
//listObj(student);

// Write a JavaScript program to delete the rollno property from the above object. Also print the object before or after deleting the property.
function deleteProp(obj, p) {
	console.log(obj);

	for(prop in obj) {
		if(prop === p) {
			console.log(p + ' will be deleted');
			delete obj[p];
		}
	}

	console.log(obj);
}
//deleteProp(student, 'rollno');


//Write a JavaScript program to get the length of an JavaScript object
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
var library = [
   {
       title: 'The Road Ahead',
       author: 'Bill Gates',
       readingStatus: true
   },
   {
       title: 'Steve Jobs',
       author: 'Walter Isaacson',
       readingStatus: true
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
      readingStatus: false
   }
];

function readingStatus(lib) {
	lib.forEach(function(obj) {
		if(obj.readingStatus) {
			//using dot notation
			console.log('Congrats, you\'ve read ' + obj.title);
		} else {
			//using brackets
			console.log('You still need to read ' + obj['title']);
		}
	});
}
//readingStatus(library);


// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

// Write a Bubble Sort algorithm in JavaScript.
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data : [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]


// Write a JavaScript program which returns a subset of a string.
// Sample Data : dog
// Expected Output : ["d", "do", "dog", "o", "og", "g"]


// Write a JavaScript program to create a Clock.
// Note : The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"


// Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.