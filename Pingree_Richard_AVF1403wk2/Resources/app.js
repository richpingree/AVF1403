// Main App Window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "Blue",
	layout: "vertical"
});

var picBtn = Ti.UI.createButton({
	title: "Camera",
	color: "white",
	backgroundColor: "green",
	borderRadius: 10,
	top: 100,
	height: 60,
	width: 250
});

var geoBtn = Ti.UI.createButton({
	title: "Geolocation",
	color: "white",
	backgroundColor: "green",
	borderRadius: 10,
	top: 20,
	height: 60,
	width: 250
});

var mapBtn = Ti.UI.createButton({
	title: "Map",
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
require('map');
mainWin.add(picBtn);
mainWin.add(geoBtn);
mainWin.add(mapBtn);
mainWin.open();
