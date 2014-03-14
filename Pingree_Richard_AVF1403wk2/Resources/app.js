// Main App Window
var mainWin = Ti.UI.createWindow({
	backgroundColor: "Blue",
	layout: "vertical"
});

var picBtn = Ti.UI.createButton({
	title: "Camera",
	color: "black",
	backgroundColor: "green",
	borderRadius: 10,
	top: 100,
	height: 60,
	width: 250
});

var geoBtn = Ti.UI.createButton({
	title: "Geolocation",
	color: "black",
	backgroundColor: "green",
	borderRadius: 10,
	top: 20,
	height: 60,
	width: 250
});

var remoteBtn = Ti.UI.createButton({
	title: "Remote Data",
	color: "black",
	backgroundColor: "green",
	borderRadius: 10,
	top: 20,
	height: 60,	
	width: 250
});
var compassBtn = Ti.UI.createButton({
	title: "Compass",
	color: "black",
	backgroundColor: "green",
	borderRadius: 10,
	top: 20,
	height: 60,	
	width: 250
});

require('geolocation');
require('camera');
//require('map');
//require('compass');
require('event');
mainWin.add(picBtn);
mainWin.add(geoBtn);
mainWin.add(remoteBtn);
mainWin.add(compassBtn);
mainWin.open();
