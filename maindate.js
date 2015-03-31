var _;

(function pizzaFinder() {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];

	//given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)
	// var i, j, hasShrooms, canEat = [];

	// for(var i = 0, len = products.length; i < len; i++) {
	// 	if(!products[i].containsNuts) {
	// 		hasShrooms = false;
	// 	}

	// 	for(var j = 0, leng = products[i].ingredients.length; j < leng; j++) {
	// 		if(products[i].ingredients[j] === "mushrooms") {
	// 			hasShrooms = true;
	// 		}
	// 	}
	// 	if(!hasShrooms) { canEat.push(products[i].name) };
	// }
	// console.log(canEat);

    //!!!given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)
    var canEat = [];

    products.filter(function(x) {
    	if(!x.containsNuts) {
    		if(!_.contains(x.ingredients, "mushrooms")) {
    			canEat.push(x.name);
    		}
    	}
    });

    //console.log(canEat);
})();

// (function addEmUp() {
// 	//should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)
// 	// var total = 0;
// 	// for(var i = 0, l = 1000; i < l; i++) {
// 	// 	if(i % 3 === 0 || i % 5 === 0) {
// 	// 		total += i;
// 	// 	}
// 	// }
// 	// console.log(total);

// 	//should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)
// 	var sum = _.range(1000).filter(function(n) {
// 		return n % 3 === 0 || n % 5 === 0;
// 	})
// 		.reduce(function(x, y) {
// 			return x + y;
// 		});

// 	console.log(sum);
// })();

    // products = [
    //    { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
    //    { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
    //    { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
    //    { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
    //    { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    // ];

//count the ingredient occurence - functional
(function funIngCount(productList, ingredient) {
  var count = 0;

  productList.filter(function(x) {
    x.ingredients.filter(function(y) {
      if(y === ingredient) {count += 1}
    });
  });
  // console.log(count);


  // console.log(count);
})(products, "mushrooms");

//count the ingredient occurence - imperitive
// (function ingCount(productList, ingredient) {
//   var count = 0;

//   for(var i = 0, l = productList.length; i < l; i++) {
//     for(var j = 0, n = productList[i].ingredients.length; j < n; j++) {
//       if(productList[i].ingredients[j] === ingredient) {
//         count += 1;
//       };
//     }
//   }

//   console.log(count);
// })(products, "mushrooms");

//!!!find the difference between the sum of the squares and the square of the sums