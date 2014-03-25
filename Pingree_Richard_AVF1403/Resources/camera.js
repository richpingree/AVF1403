/**
 * @author Richard Pingree
 */
var imgWin = Ti.UI.createWindow({
	backgroundColor: "black",
	layout: "vertical"
});

var closeBtn = Ti.UI.createButton({
	title: "Close",
	color: "white",
	backgroundColor: "red",
	borderRadius: 10,
	width: 150,
	height: 60
});

closeBtn.addEventListener('click', function(){
	imgWin.close();
});

picBtn.addEventListener('click', function(e){
	Ti.Media.showCamera({
		saveToPhotoGallery: true,
		allowEditing: true,
		mediaTypes: [Ti.Media.MEDIA_TYPE_VIDEO,Ti.Media.MEDIA_TYPE_PHOTO],
		success: function(e) {
			if(e.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
				var img = Ti.UI.createImageView({
					width: imgWin.width,
					height: imgWin.height,
					image: e.media
				});
				imgWin.add(img);
				imgWin.add(closeBtn);
				imgWin.open();
			} else {
				alert("Not a Photo, it's a " + e.mediaType);
			}
		},
		error: function(error) {
			if (error.code == Ti.Media.NO_CAMERA) {
				alert("No camera detected");
			} else {
				alert("other error: " + error.code);
			}
		}
	});
});
