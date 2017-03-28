// function chunkArrayInGroups(arr, size) {
//   // Break it up.
//   var newArray = [];
        
//   //  while (arr.length){
//   //   newArray.push(arr.splice(0, size));
//   //  }
//   // return newArray;
//   for (var i = 0; i < arr.length; i+= size){
//   	newArray.push(arr.slice(i, i + size));
//   }
//   return newArray;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

//Slasher Flick
// function slasher(arr, howMany) {
//   // it doesn't always pay to be first
// var newArray = arr.splice(0, howMany);
// return arr;
// }

// console.log(slasher([1, 2, 3], 1));

//Mutations
// function mutation(arr) {

// var newArray = arr.map(function(value) {return value.toLowerCase();} );

// for (i = 0; i < newArray[1].length; i++){  
//   if (newArray[0].indexOf(newArray[1][i]) === -1){
//     return false;
//   }

// }

// return true;

// }

// console.log(mutation(["sd", "Army"]));

//Sorting with Map
// the array to be sorted
// var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// // temporary array holds objects with position and sort-value
// var mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };

//   mapped.sort(function(a, b) {
//   return (+(a.value > b.value) || +(a.value === b.value) - 1;)}


// console.log(mapped);

//Ceasars Cipher
function rot13(str){
	var a = [];
	
	for (var i = 0; i < str.length; i++){
	
		if (str.charCodeAt(i) == 32) {
			a.push(str.charCodeAt(i));
		} 
		else if (str.charCodeAt(i) > 77) {
			a.push(str.charCodeAt(i) - 13);	
		} 
		else if (str.charCodeAt(i) < 77) {
			a.push(str.charCodeAt(i) + 13);
		}	

	}
	var s = a.join();
	return String.fromCharCode(s);
	
	
	// if (str.charCodeAt(0) > 77) {
	// 	arrayOfCodes.push(str.charCodeAt(0) - 13);
	// 	return arrayOfCodes;	
	// } else if (str.charCodeAt(0) < 77) {
	// 	arrayOfCodes.push(str.charCodeAt(0) + 13);
	// 	return arrayOfCodes;
	// } else if (str.charCodeAt(0) = 32) {
	// 	arrayOfCodes.push(str.charCodeAt(0));
	// 	return arrayOfCodes;
	// }


}

console.log(rot13("SAERR PBQR PNZC"))