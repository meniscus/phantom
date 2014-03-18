var page = require('webpage').create();
page.open("http://yahoo.co.jp", function(status) {
	var title = page.evaluate( function() {
		return document.title;
	});
	console.log('title = ' + title);
})
