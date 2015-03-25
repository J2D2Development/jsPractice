var _;
(function shoDate() {
	var date = new Date(),
		day,
		month,
		daydiv = document.getElementById('date-display');
		// timediv = document.getElementById('time-display');

	switch(date.getDay()) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			day = "Huh?";
			break;
	}

	switch(date.getMonth()) {
		case 0:
			month = "January";
			break;
		case 1:
			month = "February";
			break;
		case 2:
			month = "March";
			break;
		case 3:
			month = "April";
			break;
		case 4:
			month = "May";
			break;
		case 5:
			month = "June";
			break;
		case 6:
			month = "July";
			break;
		case 7:
			month = "August";
			break;
		case 8:
			month = "September";
			break;
		case 9:
			month = "October";
			break;
		case 10:
			month = "November";
			break;
		case 11:
			month = "December";
			break;
		default:
			month = "Month!";
			break;
	}

	daydiv.innerHTML = "Today is: " + day + ", " + month + " " + date.getDate() + ", " + date.getFullYear();;

	// var timer = setInterval(function() {
	// 	var update = new Date();
	// 	var newTime = update.getHours() + ":" + update.getMinutes() + ":" + update.getSeconds();
	// 	timediv.innerHTML = "Current time is: " + newTime;
	// }, 1000);
})();

(function triangle(base, height) {
	var tridisplay = document.getElementById('triangle');
	tridisplay.innerHTML = "A triangle with a base of " + base + " and a height of " + height + " has an area of: " + (base * height) / 2;
})(5,6);

// (function reverseme() {
// 	var reverseme = document.getElementById('reverseme'),
// 		reversemeTxt = reverseme.innerHTML,
// 		reversed = '';

// 	//using a for loop, backwards
// 	for(var i = reversemeTxt.length - 1; i > 0; i--) {
// 		reversed += reversemeTxt[i];
// 	}

// 	//using split/reverse/join method	
// 	//var reversed = reversemeTxt.split('').reverse().join('');

// 	reverseme.innerHTML = reversed;
// })();

(function scrollThrough(word) {
	var reverseme = document.getElementById('reverseme'),
		after = 'here: ',
		letter;

	var timer = setTimeout(function() {
		for(var i = 0, len = word.length; i < len; i++) {
			letter = word[i];
			//console.log(word[i]);
		}
		after += letter;
	}, 1000);

	reverseme.innerHTML = after;
})("w3resource");

(function pizzaFinder() {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];

	//given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)
	var i, j, hasShrooms, canEat = [];

	for(var i = 0, len = products.length; i < len; i++) {
		if(!products[i].containsNuts) {
			hasShrooms = false;
		}

		for(var j = 0, leng = products[i].ingredients.length; j < leng; j++) {
			if(products[i].ingredients[j] === "mushrooms") {
				hasShrooms = true;
			}
		}
		if(!hasShrooms) { canEat.push(products[i].name) };
	}
	console.log(canEat);

    //!!!given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)
    var canEat = [];

    products.filter(function(x) {
    	if(x.containsNuts !== true) {
    		canEat.push(x.name);
    	}
    });

    console.log(canEat);
})();

(function addEmUp() {
	//should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)
	// var total = 0;
	// for(var i = 0, l = 1000; i < l; i++) {
	// 	if(i % 3 === 0 || i % 5 === 0) {
	// 		total += i;
	// 	}
	// }
	// console.log(total);

	//should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)
	var sum = _.range(1000).filter(function(n) {
		return n % 3 === 0 || n % 5 === 0;
	})
		.reduce(function(x, y) {
			return x + y;
		});

	console.log(sum);
})();