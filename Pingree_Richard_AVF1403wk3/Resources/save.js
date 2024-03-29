/**
 * @author Richard Pingree
 */
var save = function(){
	if (storeInput.value == '' && productInput.value == '' && aisleInput.value == '' && priceInput.value == ''){
		alert("All Fields are required!");
	}else if (storeInput.value == ''){
		alert("Please Enter Store Name");
	}else if (productInput.valur == ''){
		alert("Please Enter Product.");
	}else if (aisleInput.value == ''){
		alert("Please Enter Aisle Number.");
	}else if (priceInput.value == ''){
		alert("Please Enter the Price of the Item.");
	}else {
		var userInput = {};
		userInput.storeName = storeInput.value;
		userInput.productName = productInput.value;
		userInput.aisleNumber = aisleInput.value;
		userInput.price = priceInput.value;
		
		//clear
		storeInput.value = '';
		productInput.value = '';
		aisleInput.value = '';
		priceInput.value = '';
		
		//keyboard
		storeInput.blur;
		productInput.blur;
		aisleInput.blur;
		priceInput.blur;
		
		//set data
		db.execute('INSERT INTO groceryInfo (storeName, productName, aisleNumber, price) VALUES (?,?,?,?)', userInput.storeName, userInput.productName, userInput.aisleNumber, userInput.price);
		
		data = getRowData();
		table.setData(data);
		
		alert("Item Saved");
	}
};
saveBtn.addEventListener('click', save);
exports.save = save;
