var user = [{
	username: 'andreyivanov',
	password: 'password',
	age: 31,
	likesIceCream: true,
	sayHi: function () {
		var sentence = "my username is: " + this.username;
		console.log(sentence);
	}
},
{},
{}];

user[0].sayHi();

// function addProperty(object, newProperty, newValue) {
// 	object[newProperty] = newValue;
	
// }

// //addProperty(user, 'livesInUS', false);
// console.log(user);

// delete user.likesIceCream;

// for (var key in user) {
// 	console.log(">>>key", key);
// 	console.log(">>>value", user[key]);
// }

