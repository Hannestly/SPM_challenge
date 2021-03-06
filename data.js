//refreshes the page to reload the table
function removeTable(){
	window.location.reload(true);
}
//this uses ajax to request a json document from the webpage
function getdata(aURL){
	console.log("Getting " + aURL);
	$.ajax({
	crossOrigin: false,
	//dataType: 'text',
	url: aURL,
	type: 'GET'
	}).done(function(data){tableformat(data)
	})
}

function tableformat(jsonData){
	console.log(jsonData);
	//if the array length is 4, aka empty array, it alerts that there is no data
	if(jsonData.length == 4)
	{
		alert("Sorry, there is no data for that. Try again!");
		removeTable();
	}
	else
	{
		var data_drinks = jsonData.drinks
		var columns = [];
			$.each(data_drinks[1], function(key,value){
			var records = {};
			records.title = key;
			records.data = key;
			columns.push(records);
			console.log("key: "+ key + " value: "+ value);
		});
			//creates a table using Datatables
		console.log(columns);
		$(document).ready(function(){
			table = $('#outtable').DataTable({
				data: data_drinks,
				"columns": columns
			});
		});
	}
}