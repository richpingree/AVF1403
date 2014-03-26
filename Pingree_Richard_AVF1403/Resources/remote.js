/**
 * @author Richard Pingree
 */
var sections = [];

var remoteResponse = function(){
	Ti.API.debug(this.responseText);
	
	var remotejson = JSON.parse(this.responseText);
	
//console test for success	
	var testTitle = remotejson.results[0].title;
	var testIngred = remotejson.results[0].ingredients;

	
//creates table sections and rows
	var tableSecs = Ti.UI.createTableViewSection({
		
	});
	
	for(var i = 0; i<remotejson.results.length; i++){
		var theRow = Ti.UI.createTableViewRow({
			title: remotejson.results[i].title,
			state: remotejson.results[i].ingredients,
		});
		tableSecs.add(theRow);
		console.log();
	};
	sections.push(tableSecs);
	table3.setData(sections);
	
//console calls for test
	Ti.API.debug(testTitle);
	Ti.API.debug(testIngred);
};

var remoteError = function(e){
	Ti.API.debug("Status: " + this.status);
	Ti.API.debug("Text: " + this.responseText);
	Ti.API.debug("Error: " + e.error);
	
	
};
var xhr = Ti.Network.createHTTPClient({

	onload: remoteResponse,
	onerror: remoteError,
	timeout: 5000 
});

xhr.open('GET', "http://www.recipepuppy.com/api/");

xhr.send();

exports.remote = xhr;
