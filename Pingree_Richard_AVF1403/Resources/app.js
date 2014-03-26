(function() { 
	// load the Cloud Module
	var Cloud = require('ti.cloud');
	// set .debug property to 'true' as we are in Development mode
	Cloud.debug = true;
	var loginUser = function(){
		Cloud.Users.login({
			login: 'com.fullsail.demoApp',
			password: '12345'
		}, function(e){
			// use .info method to view login info in the Console, if successful
			if (e.success){
				var user = e.users[0];
				Ti.API.info('Success!\n' + 
					'ACS User ID: ' + user.id + '\n' + 
					'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
					'ACS App Username: ' + user.username);
			} else {
				alert((e.error && e.message) || JSON.stringify(e));
			}
		});
	}; // loginUser ends
	loginUser();
	// now your app is ready to access ACS network and data services
})();

//Background Color
Ti.UI.setBackgroundColor('#000');

var db = Ti.Database.open("groceryInfo");
db.execute('CREATE TABLE IF NOT EXISTS groceryInfo (id INTEGER PRIMARY KEY, productName TEXT, price INTEGER)');

data = getRowData();

var table = Ti.UI.createTableView({
	data:data
});

var table2 =Ti.UI.createTableView({
	data:data
});

var table3 =  Ti.UI.createTableView({	
});

// create tab group
var tabGroup = Ti.UI.createTabGroup();



// create base UI tab and root window
var win1 = Ti.UI.createWindow({  
    title:'Grocery Entry',
    backgroundColor:'blue',
    layout: "vertical"
});
var tab1 = Ti.UI.createTab({  
    title:'Grocery List Entry',
    backgroundColor: '#025',
    color: 'blue',
    window:win1
});

var productLabel = Ti.UI.createLabel({
	color: "#fff",
	text: "Enter Product Name",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	textAlign: 'left',
	top: 100,
	width: 'auto'
});

var productInput = Ti.UI.createTextField({
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

var priceInput = Ti.UI.createTextField({
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
picBtn = Ti.UI.createButton({
	title: 'Take a Picture',
	height: 60,
	width: 250,
	top: 10,
	borderRadius: 10,
	color: 'black',
	backgroundColor: 'green'
});
require('camera');
var remoteSave = require('save');
require('cloud');

win1.add(productLabel);
win1.add(productInput);
win1.add(priceLabel);
win1.add(priceInput);
win1.add(saveBtn);
win1.add(picBtn);


// create controls tab and root window
var win2 = Ti.UI.createWindow({  
    title:'Grocery List',
    backgroundColor:'#fff'
});
var tab2 = Ti.UI.createTab({  
    title:'Grocery List',
    backgroundColor: '#025',
    window:win2
});
function getRowData(){
	var newEntry = [];
	
	var rows = db.execute('SELECT * FROM groceryInfo');
	while (rows.isValidRow()){
		var id, store, product, aisle, price;
		
		id = rows.fieldByName('id');
		product = rows.fieldByName('productName');
		price = rows.fieldByName('price');
		
		newEntry.push({
			title: product + "		" + "		$" + price,
			id:id 
		});
		rows.next();
	}
	return newEntry;
};

require('edit');

win2.add(table);

var win3 = Ti.UI.createWindow({
	title:'Cloud Storage',
	backgroundColor:'#fff',
});
var tab3 = Ti.UI.createTab({
	title:'Cloud Storage',
	backgroundColor: '#025',
	window:win3
});

win3.add(table2);


var win4 = Ti.UI.createWindow({
	title: 'Recipes',
	backgroundColor: '#fff'
});

var tab4 = Ti.UI.createTab({
	title: 'Recipes',
	backgroundColor: '#025',
	window:win4
});
require('remote');

win4.add(table3);

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4); 


// open tab group
tabGroup.open();