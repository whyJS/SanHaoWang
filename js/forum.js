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
	// $a.css("background","rgb(62,176,52)");
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
function on1() {
	if ($("#on1").html()=="-") {
	$("#on1").html("+");
	$("#div1").css("display","none");
    }   
    else{
	$("#on1").html("-");
	$("#div1").css("display","block");
    }
}
function on3() {
	if ($("#on3").html()=="-") {
	$("#on3").html("+");
	$("#div3").css("display","none");
    }   
    else{
	$("#on3").html("-");
	$("#div3").css("display","block");
    }
}
function on5() {
	if ($("#on5").html()=="-") {
	$("#on5").html("+");
	$("#div5").css("display","none");
    }   
    else{
	$("#on5").html("-");
	$("#div5").css("display","block");
    }
}
function on4() {
	if ($("#on4").html()=="-") {
	$("#on4").html("+");
	$("#div4").css("display","none");
    }   
    else{
	$("#on4").html("-");
	$("#div4").css("display","block");
    }
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
