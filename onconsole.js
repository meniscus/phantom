var page = require('webpage').create();
page.onConsoleMessage = function(msg) {
	console.log('Page title is ' + msg);
};

page.open('http://www.yahoo.co.jp', function(status) {
	page.evaluate( function() {
		console.log(document.title);
	});
});
