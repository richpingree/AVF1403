/**
 * @author Richard Pingree
 */
var cloudSave = function(){
	Cloud.Places.create({
		product:productInput.value,
		price:priceInput.value
	}, function(e){
		if(e.success){
			var place = e.place[0];
		}else{
			alert("Error:\n" + ((e.error && e.message) || JSON.stringify(e)));
		};
	});
	storeInput.value = "";
};

var cloudRefresh = function(){
	Cloud.Places.search({}, function(e){
		if(e.success){
			var cloudRowData = [];
			for(var i = 0; i < e.places.length; i++){
				var place = e.places[i];
				row2 = Ti.UI.createTableViewRow({
				height : "auto"
				});

			}
			table2.setData(cloudRowData);
		}else{
			alert("Error: \n" + ((e.error && e.message) || JSON.stringify(e)));
		}
	});
}; 
saveBtn.addEventListener('click', cloudSave);