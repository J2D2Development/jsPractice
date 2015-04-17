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
function tellTime() {
	var timer = setInterval(function() {
		var date = new Date(),
			currentTime, hour, minute, second,
			replace = document.getElementById('replace');

		if(date.getHours().toString().length === 1) {
			hour = '0' + date.getHours();
		} else {
			hour = date.getHours();
		}

		if(date.getMinutes().toString().length === 1) {
			minute = '0' + date.getMinutes();
		} else {
			minute = date.getMinutes();
		}

		if(date.getSeconds().toString().length === 1) {
			second = '0' + date.getSeconds();
		} else {
			second = date.getSeconds();
		}

		currentTime = hour + ':' + minute + ':' + second;
		replace.innerHTML = currentTime;
	}, 1000);
}
tellTime();

function changeColor() {
	var boxesClass = document.getElementsByClassName('changeme');
	var boxes = Array.prototype.slice.call(boxesClass);
	var colorArray = ['red', 'green'];
	var timer;

	boxes.forEach(function(box) {
		colorArray.forEach(function(color) {
			box.style.background = color;
			box.innerHTML = "Hi";
		});
	});
}
var colorButton = document.getElementById('changeColors');
colorButton.addEventListener('click', changeColor);


// Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
function circleAreaPerimiter(radius) {
	var area, perimeter;

	area = Math.PI * Math.pow(radius, 2);
	perimeter = 2 * Math.PI * radius;

	console.log('A circle with radius ' + radius + ' has ' +
				'an area of ' + area + ' and a perimeter of ' + perimeter);
}
//circleAreaPerimiter(5);

// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
function checkIfArray(arr) {
	//the isArray function exists on the array prototype
	console.log(Array.isArray(arr));
}
//checkIfArray([1, 2, 4, 0]);
//checkIfArray('w3resource');

// Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]
function cloneArray(arr) {
	//use slice function (built in) to take 'slice' of entire array
	var newArr = arr.slice('');
	console.log(newArr);
}
//cloneArray([1, 2, [4, 0]]);
//cloneArray([1, 2, 4, 0]);

// Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []
function getFirstEl(arr, n = 0) {
	if(n === 0) {
		console.log(arr[n]);
	} else {
		console.log(arr.slice(0, n));
	}
}
// getFirstEl([7, 9, 0, -2]);
// getFirstEl([],3);
// getFirstEl([7, 9, 0, -2],3);
// getFirstEl([7, 9, 0, -2],6);
// getFirstEl([7, 9, 0, -2],-3);

// Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"
function makeString(arr) {
	var str = arr.join(',');
	console.log(str);
}
// var myColor = ["Red", "Green", "White", "Black"];
// makeString(myColor);

// Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
function dashEven(num) {
	var addMe = '';
	var numStr = num.toString();
	var numArray = numStr.split('');
	numArray.forEach(function(num) {
		if(num % 2 == 0) {
			console.log(num);
			addMe += num + '-';
		} else {
			addMe += num;
		}
	});
	console.log(addMe);

}
//dashEven(025468);

// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8
function sortArray(arr) {
	console.log(arr.sort());
}
// var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
// sortArray(arr1);

//!!!
// Write a JavaScript program to find the most frequent item of an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
function findFrequent(arr) {
	var most,
		count = 0,
		mostArr = [];

	for(var i = 0, l = arr.length; i < l; i++) {
		if(arr[i] === arr[i+1]) {
			count += 1;
			most = {name: arr[i], times: count};
		}
	}
	console.log(most.name + ' ' + most.times);
}
//var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//findFrequent(arr1);

// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

// Write a JavaScript program which prints the elements of the following array.
// Note : Use nested for loops.
// Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
// Sample Output :
// "row 0"
// " 1"
// " 2"
// " 1"
// " 24"
// "row 1"

// Write a JavaScript program to find the sum of squares of a numeric vector.

// Write a JavaScript program to compute the sum and product of an array of integers.
var lostArr = [4,8,15,16,33,42];
function computeArray(arr, choice) {
	var result;

	if(choice[0] === 'a') {
		result = arr.reduce(function(x,y) {
			return x + y;
		});
	} else if(choice[0] === 'm') {
		result = arr.reduce(function(x,y) {
			return x * y;
		});
	} else {
		result = 'Unknown operator';
	}
	console.log(result);
}
// computeArray(lostArr, 'add');
// computeArray(lostArr, 'm');
// computeArray(lostArr, 'fuck');

// Write a JavaScript program to add items in an blank array and display the items.
// Sample Screen :
// add elements in an blank array

// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// We have the following arrays
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -
// Note : Use ordinal numbers to tell their position.

// Find the leap years in a given range of years.

// !!!Write a JavaScript program to shuffle an array.
function shuffleArray(arr) {
	var shuffled = [],
		init = [],
		newPos;

	for(var i = 0, l = arr.length; i < l; i++) {
		newPos = Math.floor(Math.random() * (arr.length - 0)) + 0;
		var newNum = arr.pop(arr[newPos]);
		shuffled.push(newNum);
	}
	console.log("Initial: " + arr);
	console.log("Shuffled: " + shuffled);
}
//shuffleArray(lostArr);

// Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4
var items = [1, 2, 3, 4, 5, 7, 8, 9];
function binarySearch(arr, num) {
	if(arr.indexOf(num) !== -1) {
		console.log(num + ' found at position ' + arr.indexOf(num));
	} else {
		console.log(num + ' not found in array');
	}
}
binarySearch(items, 1);
binarySearch(items, 5);
binarySearch(items, 17);

// There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

// Write a JavaScript program to find duplicate values in a JavaScript array

// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

// Write a JavaScript function to find the difference of two arrays.
// Sample Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "10", "100"]
// ["1", "2", "3", "4", "5", "6"]

// Write a JavaScript function that accepts an array and a delimiter and returns a string containing the array elements with the delimiter string between each element.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "10", "100"]
// ["1", "2", "3", "4", "5", "6"]

// Primitive types: write a program that takes as input an integer, N, and prints all the integers from 1 to N, replacing numbers divisible by 3 with "fizz", numbers divisible by 5 with "buzz", and numbers divisible by both with "fizz buzz".
function fizzbuzzagain(limit) {
	for(var i = 1; i < limit + 1; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			console.log('Fizz Buzz!');
		} else if(i % 3 === 0) {
			console.log('fizz');
		} else if(i % 5 === 0) {
			console.log('buzz');
		} else {
			console.log(i);
		}
	}
}
//fizzbuzzagain(100);

//  Arrays: Write a program that tests if a 2D square array is symmetric about the diagonal from (0,0) to (n-1,n-1).


// Strings: Write a program to find the longest substring that consists of a single character in an input string.


// Linked Lists: Implement a doubly linked list of integers class. Write a reverse method for your list class that reverses a list without changing the node contents.


// Stacks and Queues: Write a programt to evaluate arithmetical expressions that use + and * applied to nonnegative integer arguments. Expressions are in reverse-Polish notation, e.g., 3 4 + 5 *, 1 3 + 5 7 + *.


// Binary Trees: Write inorder, preorder and postorder traversal methods for a binary tree. (You will need to implement a class suitable for representing binary trees, but do not need to implement add, lookup, delete, etc. methods.)


// Heaps: Write a program that builds a max-heap from an integer array. (You will need to implement a class suitable for representing heaps, but do not need to implement extract-max, insert key, etc.)


// Searching: Write a nonrecursive program to perform binary search over a sorted array.


// Hash tables: Write a program that finds the most common object in an array of objects. The objects consists of pairs of strings. Treat strings as being the same if they are equal when converted to lower case.


// BSTs: Write a program that searches a BST on integer keys for a given value. (You will need to implement a class suitable for representing BSTs, but do not need to implement add, lookup, delete, etc. methods.)


// Write a recursive program that takes as input positive integers x and N, and returns x to the power N. You should use O(log N) multiplications.
function recursivePow(x, N) {
	return x * x
}


// Dynamic Programming: Write a program that takes a positive integer N, and returns the number of binary strings of length N such that there are no consecutive 1s. For example, if N = 3, the result is 5, corresponding to the strings 000, 001, 010, 100, 101.


// Greedy Algorithms and Invariants: Write a program that takes an input a positive integer N, and returns the minimum number of coins in the US coinage system to create N cents. For example, if N = 37, the answer is 4, corresponding to a quarter, a dime, and two pennies.


// Graphs: Implement Depth First Search and Breadth First Search. (You will need to implement classes suitable to representing graphs.)


// Parallel Computing: Write a program which uses two threads to print the numbers from 1 to 100 in order. One thread can only print odd numbers, the other can only print even numbers.