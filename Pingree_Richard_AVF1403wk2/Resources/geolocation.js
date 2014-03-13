/**
 * @author Richard Pingree
 */
var geoWin = Ti.UI.createWindow({
	backgroundColor: "blue",
	
});
var geoView = Ti.UI.createView({
	backgroundColor: "black",
	top: 100,
	width: Ti.UI.SIZE,
	height: 250,
	layout: "vertical"
});
var closeBtn = Ti.UI.createButton({
	title: "Close",
	color: 'white',
	backgroundColor: "red",
	borderRadius: 10,
	top: (geoView.top + geoView.height) + 20,
	width: 150,
	height: 60
});


geoBtn.addEventListener('click', function(){
	geoWin.open();
});

closeBtn.addEventListener('click', function(){
	geoWin.close();
});


var runGeo = function(){
	Ti.Geolocation.purpose = "Location is required to get lat/long coords.";
	Ti.Geolocation.getCurrentPosition(function(e){
		var lat = e.coords.latitude;
		var lng = e.coords.longitude;
		var coordLabel = Ti.UI.createLabel({
			color: "#fff",
			text: "Latitude: " + lat + " , Longitude: " + lng,
			height: Ti.UI.SIZE,
			textAlign: "center",
			font: {fontSize: 20, fontWeight: 'bold', fontFamily: 'Times New Roman'}
		});
		geoView.add(coordLabel);
		geoWin.add(geoView);
		geoWin.add(closeBtn);
	});
};
Ti.Geolocation.addEventListener('location', runGeo);
