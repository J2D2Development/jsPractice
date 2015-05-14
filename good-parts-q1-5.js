//
//Warm ups
//

// A) What is value of x?
// function funky(o) {
//     o = null;
// }

// var x = [];
// funky(x);
// alert(x);

// B) What is value of x?
// function swap(a, b) {
//     var temp = a;
//     a = b;
//     b = temp
// }
// var x = 1, y = 2;
// swap(x, y);
// console.log(x);

//for first two above- remember that functions don't see variables, they see the value of variables passed to them.  So, when a, b get x, y in the swap function, they don't alter those variables, they alter the values and (can) put them into new variables.  The original variables aren't changed!!!

//
//Easy questions
//

// 1) Write a function that takes an arguement returns that arguement
// ex: identity(3) -> returns 3
// function identity(x) {
//     return x;
// }
// console.log(identity(3));

// 2) Write 2 binary functions, add and mul, that take two numbers and return their sum and product
// ex: add(3, 4) -> 7
//     mul(3, 4) -> 12
function add(n1, n2) {
    return n1 + n2;
}

function mul(n1, n2) {
    return n1 * n2;
}

// 3) Write a function that takes an arguement and returns a function that returns that arguement
// ex: idf = identityf(3);
//     idf() -> 3
function identityf(a) {
    return function() {
        return a;
    };
}

// 4) Write a function that adds from two invocations
// ex: addf(3)(4) -> 7
function addf(n) {
  return function(x) {
    return n + x;
  };
}

// 5) Write a function that takes a binary function and makes it callable with two invocations.
// ex: addf = applyf(add);
//     addf(3)(4) -> 7
//     applyf(mul)(5)(6) -> 30
function applyf(fun) {
    return function (x) {
        return function (y) {
            return fun(x, y);
        };
    };
}
//Above function doesn't seem to work with last method (calling all on same line)