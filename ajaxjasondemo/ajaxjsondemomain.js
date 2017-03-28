
var pageCounter = 1;
//Choose empty HTML element where to render data  
var animalContainer = document.getElementById("animal-info");

//take Button html element by ID
var btn = document.getElementById("btn");

//Set click listener and call function
btn.addEventListener("click", function(){
	//Ajax call to the host within the click listener
	var outRequest = new XMLHttpRequest();

	outRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');

	outRequest.onload = function(){
		if (outRequest.status >= 200 && outRequest.status < 400){
			var ourData = JSON.parse(outRequest.responseText);
		renderHTML(ourData);
		} else {
			console.log("Connected to the server, but it returned an error.");
		} 
		
	};
	//Error handling
	outRequest.onerror = function(){
		console.log("Error");
	};

	outRequest.send();
	//increment page counter (3 different pages)
	pageCounter++;
	//Hide the button after 3rd click
	if (pageCounter > 3) {
		btn.classList.add("hide-me");
	}
});

//function that takes in data and loops through each json object
function renderHTML(data){
	//empty string
	var htmlString = "";
	//Loop through the objects and concat empty string
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + "that likes to eat ";

		//loop through foods.likes property
		for (ii = 0; ii < data[i].foods.likes.length; ii++){
			//if only one element then just one
			if (ii == 0){
				htmlString += data[i].foods.likes[ii];
			}//if more thean one -> add " and "
			else {
				htmlString += " and " + data[i].foods.likes[ii];
			}
		}

		htmlString += ' and dislikes ';

		//loop through foods.dislikes property
		for (ii = 0; ii < data[i].foods.dislikes.length; ii++){
			//if only one element then just one
			if (ii == 0){
				htmlString += data[i].foods.dislikes[ii];
			}//if more thean one -> add " and "
			else {
				htmlString += " and " + data[i].foods.dislikes[ii];
			}
		}
		htmlString += '.</p>'
	}
	//render the string to the HTML object
	animalContainer.insertAdjacentHTML('beforeEnd', htmlString);
}
