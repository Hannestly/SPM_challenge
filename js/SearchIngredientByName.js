//Pulls page for given term
function lookupIngredient(){
    var $searchTerm = document.getElementById("searchIngName").innerText;
    console.log($searchTerm);
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?i="+ $searchTerm,
        success: function(data) {
            createListing(data);
            //tests(25, 50);
        }
    });
}

function createListing(data){
    console.log(data);
    console.log(data.ingredients[0]);

    for(var i = 0; i < data.ingredients.length; i++){

    }

}