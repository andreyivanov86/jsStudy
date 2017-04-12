//============================================
// Easy iterate over an array
//============================================
// var numbers = [1, 3, 5, 5,2, 5,7];
// numbers.forEach(function(number, index){
// 	console.log(index, number);
// });
//============================================
// Callback function example
//============================================
// function invokeCallback(cb) {
// 	cb();
// }

// function sayHi(){
// 	console.log('Hi');
// }

// function syNiHao() {
// 	console.log('ni hao')
// }

// invokeCallback(sayHi);
// invokeCallback(syNiHao);
//============================================
// Reduce method
//============================================
// var number = [1,4,5,6,3,6,8];
// var sum = number.reduce(function(runningTotal, number) {
// 	return runningTotal += number;;
// })
// console.log(sum);
//============================================
// Map method
//============================================
// var numbers = [1,4,5,6,3,6,8];

// var newArray = numbers.map(function(number){
// 	return number * number;
// })
// console.log(newArray);
//============================================
// Constructor
//============================================
// function User(options){
// 	this.username = options.username;
// 	this.password = options.password;
// }
// var Andrey = new User({
// 	username: 'AndreyIvanov',
// 	password: 'Nadejda'
// });
// console.log(Andrey);
// var Anton = new User({
// 	username: 'Anton',
// 	password: 'afasf'
// });
// console.log(Anton);
//============================================
// Consturctor: properties + method
//============================================
// function Cat(options){
// 	this.name = options.name;
// 	this.age = options.age;	
// }
// Cat.prototype.talks = function () {
// 		console.log('meow. My name is ' + this.name);
// 	}
// var snowball = new Cat({
// 	name: 'Snowball',
// 	age: 5
// });
// snowball.talks();
// var fluff = new Cat({
// 	name: 'Fluff',
// 	age: 3
// });
// fluff.talks();
//============================================
// Prototype
//============================================
// Array.prototype.sayHi = function(){
// 	console.log('I\'m on the array');
// }

// var array = [4,5,6,4,7];
// array.sayHi();
//============================================
// Clousure
//============================================
// function outer() {
// 	var x = 10;
// 	return function() {
// 		console.log(x);// The X is available to outer function since it is gets returned
// 	};
// }
// var inner = outer();
// inner();
//============================================
// Clousure. Another Example.
//============================================
// function limitFunctionCallCount(cb, limit) {
// 	var callCount = 0;
// 	return function() {
// 		if (callCount >= limit) return;
// 		callCount++;
// 		cb();
// 	};}

// function sayHi() {
// 	console.log('hi');
// }
// var newSayhi = limitFunctionCallCount(sayHi, 5);

// newSayhi();
// newSayhi();
// newSayhi();
// newSayhi();
// newSayhi();
// newSayhi();
//============================================
// Recursion
//============================================
function nFibonacci(num){
	if (num < 3)  
		return 1;
		return nFibonacci(num - 2) + nFibonacci(num - 1);	
}
var result = nFibonacci(5);
console.log(result);