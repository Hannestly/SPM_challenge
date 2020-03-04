

$(document).ready(function() {
    $("#Random").click(function(){
        $.get( "https://www.thecocktaildb.com/api/json/v1/1/random.php", function( data ) {
		    console.log(data);
	    });	
    }); 
});
