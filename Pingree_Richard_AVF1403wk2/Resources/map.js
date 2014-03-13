/**
 * @author Richard Pingree
 */
Ti.Map = require('ti.map');

var appWin = function() {
	
	var mainUrl = "http://maps.google.com/maps/api/geocode/json?address=";
	var error = "An error occured. Please try again.";
	var latOrigin = 41.0592;
	var lngOrigin = 94.3644;
	
	var geoData = function(title, latitude, longitude) {
		this.title = title,
		this.coords = {latitude: latitude, longitude: longitude};
	};

	var geocodeNative = function(address, callback) {
		var url = mainUrl + address.replace(' ', '+');
		url += "&sensor=" + (Ti.Geolocation.locationServicesEnabled == true);
	
		var xhr = Ti.Network.createHTTPClient();
		xhr.open('GET', url);
		xhr.onload = function() {
			var json = JSON.parse(this.responseText);
			if (json.status == 'OK') {
				alert("Unable to find address.");
				return;
			}
		
			callback(new geoData(
				address,
				json.results[0].geometry.location.lat,
				json.results[0].geometry.location.lng
			));
		};
		xhr.onerror = function(e) {
			Ti.API.error(e.error);
			alert(error);
		};
		xhr.send();
	};

	var mapWin = Ti.UI.createWindow({
		backgroundColor: "black"
	});
	
	var view = Ti.UI.createView({
		backgroundColor: "black",
	});
	
	var textField = Ti.UI.createTextField({
		height: 60,
		top: 5,
		left: 5,
		right: 50,
		style: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		hintText: "Enter an address",
		backgroundColor: "#fff",
		paddingLeft: 5
	});
	var button = Ti.UI.createButton({
		title: "add",
		font: {fontSize: 20, FontWeight: 'bold', FontFamily: "Times New Roman"},
		top: 5,
		height: 40,
		width: 40,
		right: 5
	});
	var mapView;
	
	mapWin.addEventListener('open', function() {
		mapView = Ti.Map.createView({
			mapType: Ti.Map.STANDARD_TYPE,
			region: {latitude: latOrigin, longitude: lngOrigin},
			animate: true,
			top: 70
		});
		
		mapView.addAnnotaion(Ti.Map.createAnnotation({
			animate: true,
			pinColor: Ti.Map.ANNOTATION_RED,
			title: 'Creston',
			latitude: latOrigin,
			longitude: lngOrigin
		}));
		
		button.addEventListener('click', function(){
			textfield.blur();
			geocodeNative(textfield.value, function(geoData){
				mapView.addAnnotation(Ti.Map.createAnnotation({
					animate: true,
					pinColor: Ti.Map.ANNOTATION_RED,
					title: geoData.title,
					latitude: geoData.coords.latitiude,
					longitude: geoData.coords.longitude
				}));
				mapView.setLocation({
					latitude: geoData.coords.latitude,
					longitude: geoData.coords.longitude
				});
			});
		});
		
		view.add(textField);
		view.add(button);
		mapWin.add(view);
		mapWin.open();
		
	});
	
};
mapBtn.addEventListener('click', appWin);

