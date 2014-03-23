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

var storeLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Enter Store Name.",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: 'left',
	top: '25%',
	width: 'auto'
	
});
var editStoreInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	height: 30,
	width: 250,
	top: 10
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
	height: 30,
	width: 250,
	top: 10
});

var aisleLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Enter aisle number",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: 'left',
	top: 10,
	width: 'auto'
});

var editAisleInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#336699",
	height: 30,
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
	height: 30,
	width: 250,
	top: 10
});

var saveBtn = Ti.UI.createButton({
	title: "Save",
	backgroundColor: "green",
	color: "black",
	borderRadius: 5,
	height: 30,
	width: 250,
	top: 10
});

var cancelBtn = Ti.UI.createButton({
	title: "Cancel",
	backgroundColor: "red",
	color: "black",
	borderRadius: 5,
	height: 30,
	width: 250,
	top: 10
});


editWin.add(storeLabel, editStoreInput, productLabel, editProductInput, aisleLabel, editAisleInput, priceLabel, editPriceInput, saveBtn, cancelBtn);

table.addEventListener('click', function(e){
	var id = e.rowData.id;
	
	var currentEntryRow = db.execute('SELECT * FROM groceryInfo WHERE ID =?', id);
	
	var rowEntryData = {};
		rowEntryData.id = currentEntryRow.fieldByName('id');
		rowEntryData.store = currentEntryRow.fieldByName('storeName');
		rowEntryData.product = currentEntryRow.fieldByName('productName');
		rowEntryData.aisle = currentEntryRow.fieldByName('aisleNumber');
		rowEntryData.price = currentEntryRow.fieldByName('price');
		
	var options = Ti.UI.createOptionDialog(selections);

	options.addEventListener('click', function(e){
		if (e.index === 0) {
			
			editStoreInput.value = rowEntryData.store;
			editProductInput.value = rowEntryData.product;
			editAisleInput.value = rowEntryData.aisle;
			editPriceInput.value = rowEntryData.price;
			
			editWin.open();
			
			var editSave = function() {
				if (editStoreInput.value == '' && editProductInput.value == '' && editAisleInput.value == '' && editPriceInput.value == ''){
					alert("All Fields are required!");
				}else if (editStoreInput.value == ''){
					alert("Please Enter Store Name");
				}else if (editProductInput.valur == ''){
					alert("Please Enter Product.");
				}else if (editAisleInput.value == ''){
					alert("Please Enter Aisle Number.");
				}else if (editPriceInput.value == ''){
					alert("Please Enter the Price of the Item.");
				}else {
					var userInput = {};
						userInput.storeName = editStoreInput.value;
						userInput.productName = editProductInput.value;
						userInput.aisleNumber = editAisleInput.value;
						userInput.price = editPriceInput.value;
		
				//clear
				editStoreInput.value = '';
				editProductInput.value = '';
				editAisleInput.value = '';
				editPriceInput.value = '';
		
				//keyboard
				editStoreInput.blur;
				editProductInput.blur;
				editAisleInput.blur;
				editPriceInput.blur;
				
				db.execute('UPDATE groceryInfo SET storeName=?, productName=?, aisleNumber=?, price=? WHERE id=?', userInput.storeName, userInput.productName, userInput.aisleNumber, userInput.price, id);
				
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