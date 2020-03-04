
window.onload = function() {
	$.get( "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", function( data ) {
		console.log(data);
	});	
}
