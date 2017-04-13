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

function multiplyArguments(arr) {
	//use the arguments keyword to multiply all of the arguments together and return the product
	//if no arguments are passed in return 0
	//if one argument is passed in just return it
	var total = 1;
	for (var i = 0; i < arr.length; i++) {
		total *= arr[i];
	}
	return total;
}
var arr = [1,3,4,6,7,3];
console.log(multiplyArguments(arr));