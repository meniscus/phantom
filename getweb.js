var page = require('webpage').create();
page.open('http://www.yahoo.co.jp', function() {
	page.render('example.png');
	phantom.exit();
	})
