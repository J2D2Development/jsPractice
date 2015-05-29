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

//6) Function that takes function and argument and can be given a 2nd argument to return function's result on 1st and 2nd arg
function curry(fun, ar) {
  return function(x) {
    return fun(ar, x);
  };
};

// add3 = curry(add, 3);
// console.log(add3(4));
// console.log(curry(mul, 5)(6));

//7) Write 'methodize', a function that converts a binary function to a method
function methodize(fn) {
  return function(x) {
    return fn(this, x);
  }
}

// Number.prototype.add = methodize(add);
// console.log((3).add(4));

//8) Write 'demothodize', a function that converts a method to a binary function
function demethodize(fn) {
  return function(that, y) {
    return fn.call(that, y);
  }
}
//in this case, 'that' becomes 'this' keyword (can't use this as it's reserved)
//console.log(demethodize(Number.prototype.add)(5, 6));

//9) Write 'twice' that takes a binary function and returns a unary function that passes its argument to the binary function twice
function twice(fn) {
  return function(x) {
    return fn(x, x);
  }
}
//var double = twice(add);
//double(11); // = 22

//10) Write 'composeu' that takes two unary functions and returns a unary function that calls them both
function composeu(fn1, fn2) {
  return function(x) {
    return fn2(fn1(x));
  }
}
//composeu(double, square)(3); // = 36

//11) Write 'composeb' that takes two binary functions and returns a function that calls them both
function composeb(fn1, fn2) {
  return function(x, y, z) {
    return fn2(fn1(x, y), z);
  }
}
//composeb(add, mul) (2, 3, 5); // -> 25

//12) Write 'add_once' that allows another function to only be called once
function once(fx) {
  return function() {
    var f = fx;
    fx = null;
    f.apply(this, arguments);
  }
}
//add_once = once(add);
//add_once(3, 4); -> 7
//add_once(3, 4); -> error!

//13) Write counterf that returns two functions that implement and up/down counter
function counterf(start) {
  return {
    inc: function() {
      return start += 1;
    },
    dec: function() {
      return start -= 1;
    }
  }
}
// var counter = counterf(10);
// counter.inc() // -> 11
// counter.dec() // -> 10

//14) Write 'revocable' that takes a nice function and returns a 'revoke' function tha tdenies access to the function, and an invoke function, that can invoke the nice function until it's revoked
function revocable(fx) {
  return {
    invoke: function() {
      return fx.apply(this, arguments);
    },
    revoke: function() {
      fx = null;
    }
  }
}
// var temp = revocable(alert);
// temp.invoke(7); // -> alert: 7
// temp.revoke();
// temp.invoke(8); // -> error