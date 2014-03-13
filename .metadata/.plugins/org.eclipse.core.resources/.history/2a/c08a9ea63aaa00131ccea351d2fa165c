// Main App Window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "Blue"
});

var geoView = Ti.UI.createView({
	backgroundColor: "#000",
	bottom: 15,
	width: Ti.UI.SIZE,
	height: 250,
	layout: "vertical"
});

var takePicBtn = Ti.UI.createButton({
	title: "Camera",
	color: "white",
	backgroundColor: "green",
	borderRadius: 10,
	top: 20,
	height: 60,
	width: 250
	
});
//require('compass');
require('geolocation');
require('camera');
mainWin.add(takePicBtn);
mainWin.add(geoView);
mainWin.open();
