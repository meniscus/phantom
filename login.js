var page = require('webpage').create();
var fs = require('fs');

page.open("http://tenhou.nosns.net/", function(status) {
	page.render("sns.png"); 
	var hoge = page.evaluate(function(arg) {
		var form = document.querySelector("#login");
		form.querySelector("#username").value = arg[0];
		form.querySelector("#password").value = arg[1];
		form.querySelector("#button_login").click();
		},['mailaddr','passwd']);
	page.render('mypage.png');
	
	setTimeout(function(){
		page.render('logined.png');
		console.log('make logined.png');
		next();
		
	}
	,1000);

	}
);

function next() {
page.open("http://tenhou.nosns.net/?m=pc&a=page_fh_diary&target_c_diary_id=84959", function(status) {
	console.log('hoge');
	setTimeout(function(){
		page.render("hoge.png");
		console.log("rendering...");
	}
	,3000);
	console.log('hoge');

});
}

