
window.onload = function() {
	var search_term = $('id_of_input').val();

	$.get( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+search_term, function( data ) {
		console.log(data);
	});	


	$.get( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka', function( data ) {
		console.log(data.ingredients[0]);
	});	


	$('#test_button').click(function(){
		var search_term = $('search_term').val();
		$.get( 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='+search_term, function( data ) {
			console.log(data);
		});	
	})
}


