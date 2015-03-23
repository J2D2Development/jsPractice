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
	tridisplay.innerHTML = "The triangle's area is: " + (base * height) / 2;
})(5,6);

(function reverseme() {
	var reverseme = document.getElementById('reverseme'),
		reversemeTxt = reverseme.innerHTML,
		reversed = '';

	for(var i = reversemeTxt.length; i > -1; i--) {
		reversed += reversemeTxt[i];
	}
	
	//var reversed = reversemeTxt.split('').reverse().join('');
	reverseme.innerHTML = reversed;
})();