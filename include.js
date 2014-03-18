var page = require('webpage').create();


page.open('http://www.yahoo.co.jp', function(status) {
	console.log('1');
	page.includeJs('./const.js', function() {
	console.log('2');
		page.evaluate( function() {
			console.log('3');
			phantom.exit();
			});
		});
	});

