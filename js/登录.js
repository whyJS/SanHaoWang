function suiji2(){
		var codes = [];
		for (var i = 0; i < 10; i++) {
			codes.push(i.toString());
		}
		//通过Unicode编码将大写字母加入数组
		for (var i = 65; i < 91; i++) {
			codes.push(String.fromCharCode(i));//通过Unicode编码得到对应的字符
		}
		//通过Unicode编码，将小写字母存入数组
		for (var i = 97; i < 123; i++) {
			codes.push(String.fromCharCode(i));
		}
		function getCode () {
			var codes1 = [];
			
			for (var i = 0; i < 4; i++) {
				var ch = Math.floor(Math.random()*62);
				codes1.push(codes[ch]);
				var a = document.getElementById('bb2');
                a.innerHTML= (codes1.join(""));
			}

		}
		getCode();
}
function X() {
	var $X = $("#X");
	$X.css("display","none");
	var $Y = $("#Y");
	$Y.css("display","none");
}
function Y() {
	var $X = $("#X");
	$X.css("display","block");
	var $Y = $("#Y");
	$Y.css("display","block");
}