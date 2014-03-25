/**
 * @author Richard Pingree
 */
var save = function(){
	if (productInput.value == ''){
		alert("Please Enter a Product!");
	}else {
		var userInput = {};
		userInput.productName = productInput.value;
		userInput.price = priceInput.value;
		
		//clear
		productInput.value = '';
		priceInput.value = '';
		
		//keyboard
		productInput.blur;
		priceInput.blur;
		
		//set data
		db.execute('INSERT INTO groceryInfo (productName, price) VALUES (?,?)', userInput.productName, userInput.price);
		
		data = getRowData();
		table.setData(data);
		
		alert("Item Saved");
	}
};
saveBtn.addEventListener('click', save);
exports.save = save;
