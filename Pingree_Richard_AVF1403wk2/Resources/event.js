/**
 * @author Richard Pingree
 */
var table = Ti.UI.createTableView({ 	
});

var dataWin = Ti.UI.createWindow({
	backgroundColor: "blue"
});
var remoteData = require('remote');

var event = table.addEventListener("click", function(e){
	var newWin = Ti.UI.createWindow({
		backgroundColor: "blue",
		title: e.source.title
	});
	var remoteData1 = Ti.UI.createLabel({
		top: 100,
		font: {fontSize: 15, FontFamily: "Times New Roman"},
		backgroundColor: "white",
		text: "Title: " + e.source.state, 
		textalign: "center",
		height: 100,
		width: "auto"
	});
	var remoteData2 = Ti.UI.createLabel({
		font: {fontSize: 15, FontFamily: "Times New Roman"},
		backgroundColor: "gray",
		text: "Score: " + e.source.score,
		textalign: "center",
		width: "auto",
		top: (remoteData1.height + remoteData1.top) + 10
		
	});
	newWin.add(remoteData1, remoteData2);
	newWin.add(table);
	dataWin.add(newWin);

});	
remoteBtn.addEventListener('click', function(){
	dataWin.open();
});
exports.event = event;
