//Pulls page for given term
function lookupbyID(){
    var $searchTerm = $('#searchIngName').val();
    console.log($searchTerm);
    $.ajax({
        url: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+ $searchTerm,
        success: function(data) {
            createListing(data);
            writetohtml(data);
            //tests(25, 50);
        }
    });
}

function createListing(data){
    // console.log(data);
    console.log(data.drinks[0].strDrink)
}

function writetohtml(data){
    var html = "<h1> Drink information</h1>"; 
    html += "\n <h2>drink name:" 
    html += data.drinks[0].strDrink
    html += "</h2>"
    document.getElementById("response").innerHTML=html;
    

}