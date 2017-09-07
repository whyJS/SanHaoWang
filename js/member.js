function c2over() {
	var $bankuai = $("#bankuai");
	console.log($bankuai.css);
	$bankuai.css("display","block");
	var $a = $(".c2");
	$a.css("background","rgb(46,148,38)");
}
function c2out() {
	var $bankuai = $("#bankuai");
	console.log($bankuai.css);
	$bankuai.css("display","none");
	var $a = $(".c2");
	$a.css("background","rgb(62,176,52)");
}
function c4over() {
	var $mingshi = $("#mingshi");
	console.log($mingshi.css);
	$mingshi.css("display","block");
	var $a = $(".c4");
	$a.css("background","rgb(46,148,38)");
}
function c4out() {
	var $mingshi = $("#mingshi");
	console.log($mingshi.css);
	$mingshi.css("display","none");
	var $a = $(".c4");
	$a.css("background","rgb(62,176,52)");
}
function b1over() {
	var $tie = $("#tie");
	console.log($tie.css);
	$tie.css("display","block");

}
function b1out() {
	var $tie = $("#tie");
	console.log($tie.css);
	$tie.css("display","none");
}
function a1() {
	var $a = $('#div221');
	console.log($a.html());
	$a.html("文章");
}
function a2() {
	var $a = $('#div221');
	console.log($a.html());
	$a.html("贴子");
}
function a3() {
	var $a = $('#div221');
	console.log($a.html());
	$a.html("用户");
}
function p1p1() {
	$("#p1").css("display","inline");
	$("#p1").css("color","black");
	$("#p1").html("用户名由三到十五个字符组成");
}
function p1p2() {
	$("#p1").css("display","none");
}
function p2p1() {
	$("#p2").css("display","inline");
	$("#p2").css("color","black");
	$("#p2").html("请填写密码, 最小长度为 6 个字符");
}
function p2p2() {
	$("#p2").css("display","none");
}
function p3p1() {
	$("#p3").css("display","inline");
	$("#p3").css("color","black");
	$("#p3").html("请再次输入密码");
}
function p3p2() {
	$("#p3").css("display","none");
}
function p4p1() {
	$("#p4").css("display","inline");
	$("#p4").css("color","black");
	$("#p4").html("请输入正确的邮箱地址");
}
function p4p2() {
	$("#p4").css("display","none");
}
function sub() {
	var a = document.getElementById('pswd1');
	var b = document.getElementById('pswd2');
	if (a.value!=b.value) {
		alert("请核对两次密码输入相同");
	}
}






function suiji(){
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
				var a = document.getElementById('bb');
                a.innerHTML= (codes1.join(""));
			}

		}
		getCode();
}
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