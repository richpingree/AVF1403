// (function() { 
	// // load the Cloud Module
	// var Cloud = require('ti.cloud');
	// // set .debug property to 'true' as we are in Development mode
	// Cloud.debug = true;
	// var loginUser = function(){
		// Cloud.Users.login({
			// login: 'com.fullsail.demoApp',
			// password: '12345'
		// }, function(e){
			// // use .info method to view login info in the Console, if successful
			// if (e.success){
				// var user = e.users[0];
				// Ti.API.info('Success!\n' + 
					// 'ACS User ID: ' + user.id + '\n' + 
					// 'ACS App sessionId: ' + Cloud.sessionId + '\n' + 
					// 'ACS App Username: ' + user.username);
			// } else {
				// alert((e.error && e.message) || JSON.stringify(e));
			// }
		// });
	// }; // loginUser ends
	// loginUser();
	// // now your app is ready to access ACS network and data services
// })();



var win = Ti.UI.createWindow({
	backgroundColor: "#ccc",
	layout: 'vertical'
});

var headingView = Ti.UI.createView({
	width: '100%',
	height: '5%',
	backgroundcolor: "#000"
});

var headingLabel = Ti.UI.createLabel({
	color: '#fff',
	text: 'Weather Data',
	height: Ti.UI.SIZE,
	textAlign: 'center',
	verticalAlign: Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER,
	font: {fontSize: 20, fontFamily: "Times New Roman"}
});

headingView.add(headingLabel);
win.add(headingView);
win.open();
// var btnView = Ti.UI.createView({
	// width: "100%",
	// height: "5%"
// });
// 
// var getDataBtn = Ti.UI.createButton({
	// title: 'Get Weather Data',
	// color: "#000",
	// width: "80%",
	// font: {fontSize: 15, fontFamily: "Times New Roman"}
// });
// 
// btnView.add(getDataBtn);
// win.add(btnView);

// function runCompass(){
	// if(Ti.Geolocation.hasCompass) {
		// Ti.Geolocation.showCalibration = false;
		// Ti.Geolocation.headingFilter = 90;
		// Ti.Geolocation.getCurrentHeading(function(e){
			// if(e.error) {
				// currentHeading.text = 'error: ' + e.error;
				// return;
			// }else {
				// Ti.API.info
			// }
		// });
	// }
// };
//win.open();
