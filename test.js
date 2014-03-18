var funcs = [
	function() {
		console.log("1");
	},
	function() {
		console.log("2");
	},
	function() {
		console.log("3");
	}
];

var recursive = function(i) {
	if(i < funcs.length) {
		console.log("continue");
		recursive(i+1);
	} else {
		console.log("exit");
		phantom.exit();
	}
}

recursive(0);
