/**
 * @author Richard Pingree
 */
var selections = {
	title: "Edit or Delete Entry?",
	options: ["Edit", "Cancel", "Delete"],
	cancel: 1,
	selectedIndex: 1,
	destructive: 2,
};

var editWin = Ti.UI.createWindow({
	title: "Edit or Delete.",
	backgroundColor: 'blue',
	layout: 'vertical'
});

var productLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Enter Product Name",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: 'left',
	top: 10,
	width: 'auto'
});

var editProductInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	height: 60,
	width: 250,
	top: 10
});



var priceLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Price of Item.",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: 'left',
	top: 10,
	width: 'auto'
});

var editPriceInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	height: 60,
	width: 250,
	top: 10
});

var saveBtn = Ti.UI.createButton({
	title: "Save",
	backgroundColor: "green",
	color: "black",
	borderRadius: 10,
	height: 60,
	width: 250,
	top: 10
});

var cancelBtn = Ti.UI.createButton({
	title: "Cancel",
	backgroundColor: "red",
	color: "black",
	borderRadius: 10,
	height: 60,
	width: 250,
	top: 10
});


editWin.add(productLabel, editProductInput, priceLabel, editPriceInput, saveBtn, cancelBtn);

table.addEventListener('click', function(e){
	var id = e.rowData.id;
	
	var currentEntryRow = db.execute('SELECT * FROM groceryInfo WHERE ID =?', id);
	
	var rowEntryData = {};
		rowEntryData.id = currentEntryRow.fieldByName('id');
		rowEntryData.product = currentEntryRow.fieldByName('productName');
		rowEntryData.price = currentEntryRow.fieldByName('price');
		
	var options = Ti.UI.createOptionDialog(selections);

	options.addEventListener('click', function(e){
		if (e.index === 0) {
			
			editProductInput.value = rowEntryData.product;
			editPriceInput.value = rowEntryData.price;
			
			editWin.open();
			
			var editSave = function() {
				if (editProductInput.value == ''){
					alert("Please Enter a Product");
				}else {
					var userInput = {};
						userInput.productName = editProductInput.value;
						userInput.price = editPriceInput.value;
		
				//clear
				editProductInput.value = '';
				editPriceInput.value = '';
		
				//keyboard
				editProductInput.blur;
				editPriceInput.blur;
				
				db.execute('UPDATE groceryInfo SET productName=?, price=? WHERE id=?', userInput.productName, userInput.price, id);
				
				data = getRowData();
				table.setData(data);
				
				saveBtn.removeEventListener('click', editSave);
				editWin.close();
				alert('Grocery List Updated!');
				}
			};
			saveBtn.addEventListener('click', editSave);
			
			var cancelEdit = function() {
				cancelBtn.removeEventListener('click', cancelEdit);
				editWin.close();
			};
			cancelBtn.addEventListener('click', cancelEdit);
			
			editWin.open();
		}else if (e.index === 2) {
			db.execute('DELETE FROM groceryInfo WHERE id=?', id);
			
			data.getRowData();
			table.setData(data);
			
			alert("Item has been removed!");
		}	
	});
	options.show();
});
