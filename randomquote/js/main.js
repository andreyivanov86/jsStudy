var allQuotes = [];
$(document).ready(function() {
	$("#getQuote").on("click", function(){
		$.getJSON("https://andreyivanov86.github.io/jsStudy/randomquote/quotes.json", function(data){
			
			var random = Math.floor(Math.random()*(74 - 0)) + 0;
			var quotes = '"' + data[random].quote + '"';
			var authors = '-' + data[random].author.toLowerCase().replace(/\b[a-z]/g, function(letter){return letter.toUpperCase();});
			
			$("#quote").html(quotes);
			allQuotes.push(quotes);
			$("#author").html(authors);
			allQuotes.push(authors);
			console.log(allQuotes);
		});
	});

	$("#tweet").on("click", function(){
		//$.getJSON("https://andreyivanov86.github.io/jsStudy/randomquote/quotes.json", function(data){

			var tweetUrl = "";
			quote = $("#quote").html();
			author = $("#author").html();
			tweetUrl = 'https://twitter.com/intent/tweet?text=' + quote + '%0A' + "- " + author;
			window.open(tweetUrl);
		//})
	})
});



