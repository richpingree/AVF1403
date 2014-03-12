/**
 * @author Richard Pingree
 */
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
	});
};
Ti.Geolocation.addEventListener('location', runGeo);