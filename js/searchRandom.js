


$(document).ready(function() {
    $("#Random").click(function(){
        $.get( "https://www.thecocktaildb.com/api/json/v1/1/random.php", function( data ) {
        console.log(data.drinks[0]);
        var img = data.drinks[0].strDrinkThumb ;
        console.log(data.drinks[0].strCategory);
            $("#random").ready(function() {
                console.log(img);
                $("#random").attr("src", img);
                document.getElementById('random').style.display='block';
            });
        });	
        
    }); 
}); 
