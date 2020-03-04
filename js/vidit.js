$(document).ready(function() {
    $("#Vodka").click(function(){
        $.get( "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka", function( data ) {
		    console.log(data);
	    });	
    }); 
});
