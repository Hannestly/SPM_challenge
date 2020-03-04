//Pulls page for given term
function lookupIngredient(){
    var $searchTerm = $('#searchIngName').val();
    console.log("Search Term:"+ $searchTerm);
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
    //console.log(data.ingredients[0]);

    var html = "<table>";

    for(var i = 0; i < data.ingredients.length; i++){
        console.log(data.ingredients[i]);

        html += "<tr><td>Ingredient</td><td>" + data.ingredients[i].strIngredient + "</td><td>" +  data.ingredients[i].strDescription + "</td></tr>"


    }

    html += "</table>";
    document.getElementById("response").innerHTML = html;
}