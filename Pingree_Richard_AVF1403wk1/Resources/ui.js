/**
 * @author Richard Pingree
 */
var titleView = Ti.UI.createView({
	top: 10,
	left: 10,
	height: 50,
	width: 250,
});
var titleLabel = Ti.UI.createLabel({
	color: "White",
	font: {fontSize: 20, fontFamily: "Times New Roman"},
	text: "Simple Mobile Demo App."
});

var profileView = Ti.UI.createView({
	height: 200,
	width: 200,
	bottom: 10,
	right: 10,
	layout: "vertical"
});
var profileImage = Ti.UI.createImageView({
	height: 100,
	width: 100,
	image: "/img/IMG_0300.jpg"
});

var courseLabel = Ti.UI.createLabel({
	color: "White",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	text: "AVF1403"
});

var nameLabel = Ti.UI.createLabel({
	color: "White",
	font: {fontSize: 15, fontFamily: "Times New Roman"},
	text: "Richard Pingree"
});

profileView.add(profileImage);
profileView.add(nameLabel);
profileView.add(courseLabel);
titleView.add(titleLabel);
mainWin.add(profileView);
mainWin.add(titleView);
