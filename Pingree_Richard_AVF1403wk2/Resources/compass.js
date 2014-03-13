/**
 * @author Richard Pingree
 */
var compassWin = Ti.UI.createWindow({
	backgroundColor: "black"
});

var compassView = Ti.UI. createView({
	backgroundColor: "black",
	top: 100,
	width: Ti.UI.SIZE,
	height: 500
});

var closeBtn = Ti.UI.createButton({
	title: "Close",
	color: 'white',
	backgroundColor: "red",
	borderRadius: 10,
	top: (compassView.top + compassView.height) + 20,
	width: 150,
	height: 60
});

compassBtn.addEventListener('click', function(){
	compassWin.open();
});

closeBtn.addEventListener('click', function(){
	compassWin.close();
});

var compass = Ti.Geolocation.getCurrentHeading(function(e){
	var trueHeading = e.heading.trueHeading;
	var compassLabel = Ti.UI.createLabel({
		color: "white",
		text: "Heading: " + trudHeading,
		height: Ti.UI.SIZE,
		textAlign: "center",
		font: {fontSize: 20, fontWeight: 'bold', fontFamily: 'Times New Roman'}
	});
	compassView.add(compassLabel);
	compassWin.add(compassView);
	compasswin.add(closeBtn);
});
Ti.Geolocation.addEventListener('heading', compass);
