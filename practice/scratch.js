// var func_multiply = new Function("arg1", "arg2", "return arg1 + arg2;");
// console.log(func_multiply(3, 4)); 

// function callBackDemo(arg1, arg2, callback) {
// 	var number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
// 	callback(number);
// }
// callBackDemo(5, 15, function(num) {
// 	console.log("callback called " + num);
// })

// function nFactorial(n) {
// 	//return the factorial for n
// 	//solve this recursively
// 	//example:
// 	//the factorial of 3 is 6 (3 * 2 * 1)
// 	if (n == 1) {
// 		return 1;
// 	}else {
// 		return n * nFactorial(n-1);
// 	}
// };
// console.log(nFactorial(3));

// function multiplyArguments() {
// 	//use the arguments keyword to multiply all of the arguments together and return the product
// 	//if no arguments are passed in return 0
// 	//if one argument is passed in just return it
// 	var total = 1;
// 	for (var i = 0; i < arguments.length; i++) {
// 		total *= arguments[i];
// 	}
// 	return total;
// }
// var arr = [1,3,4,6,7,3];
// console.log(multiplyArguments(arr));

function cacheFunction(cb) {
	//Extra Credit
	//use closure to create a cache for the cb function
	//the function that you return should accept a single argument and invoke cb with that argument
	//when the function you return is invoked with an argument it should save that argument and its result
	//when the function you return is called again with an argument that it has seen before it should not call cb
	//but should instead directly returned the previous result
	//example:
	//cb -> function(x) { return x * x; }
	//if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
	//if the function you return is invoked again with 5 it will look on an object in the closure scope
	//and return 25 directly and will not invoke cb again
	
}