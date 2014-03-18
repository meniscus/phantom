var page = require('webpage').create();
var fs = require('fs');


var func_arr = [
	function() {
	// ログインをする
		page.open("http://tenhou.nosns.net/", function(status) {
			page.evaluate(function(arg) {
			var form = document.querySelector("#login");
			form.querySelector("#username").value = arg[0];
			form.querySelector("#password").value = arg[1];
			form.querySelector("#button_login").click();

			// TODO ユーザ名とパスワードはハードコーディングではなく別ファイルにするなどする
			},['mailaddr','passwd']);
			page.render('./ss/login.png');

			page.render('./ss/logined.png');

		});
	},
	function() {
		page.open("http://tenhou.nosns.net/?m=pc&a=page_fh_diary&target_c_diary_id=84959", function(status){
			setTimeout(function(){
				page.render('./ss/20131230風邪.png');
			},1000);
		});
	}
];


var recursive = function(i) {

	if(i < func_arr.length) {
		page.onLoadFinished = function(){recursive(i+1);};
		func_arr[i]();
	} else {
		phantom.exit();
	}
	
}

recursive(0);
