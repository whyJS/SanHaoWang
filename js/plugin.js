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

function zover() {
	var $zhou = $("#zhou");
	var $li = $("#li");
	var $table3 = $("#table3");
	$zhou.css("color","green");
	$zhou.css("border-bottom","3px solid green");
	$li.css("color","black");
	$li.css("border-bottom","none");
	$table3.css("display","none");
}
function lover() {
	var $zhou = $("#zhou");
	var $li = $("#li");
	var $table3 = $("#table3");
	$li.css("color","green");
	$li.css("border-bottom","3px solid green");
	$zhou.css("color","black");
	$zhou.css("border-bottom","none");
	$table3.css("display","block");
}
function jiazai() {
	$("#tr1").css("display","block");
	$("#tr2").css("display","block");
	$("#aa").css("margin-top","-723px");
	$("#bb").css("margin-top","-503px");
	$("#cc").css("margin-top","-423px");
}
function ta1() {
	var $aaa = $("#aaa");
	$aaa.css("border-top","5px solid green");
	$aaa.css("border-bottom"," none");
	$aaa.css("border-right"," 1px solid rgb(242,242,242)");
	var $bbb = $("#bbb");
	$bbb.css("border-top","none");
	$bbb.css("border-bottom","1px solid rgb(242,242,242)");
	$bbb.css("border-right"," none");
	var $ccc = $("#ccc");
	$ccc.css("border-top","none");
	$ccc.css("border-bottom","1px solid rgb(242,242,242)");
	$ccc.css("border-right","1px solid rgb(242,242,242)");
    var $table21 = $("#table21");
    $table21.css("display","block");
    var $table22 = $("#table22");
    $table22.css("display","none");
    var $table23 = $("#table23");
    $table23.css("display","none");
    $("#aa").css("margin-top","-540px");
	$("#bb").css("margin-top","-320px");
	$("#cc").css("margin-top","-240px");
}
function ta2() {
	var $aaa = $("#aaa");
	$aaa.css("border-top","none");
	$aaa.css("border-bottom","1px solid rgb(242,242,242)");
	$aaa.css("border-right","1px solid rgb(242,242,242)");
	var $bbb = $("#bbb");
	$bbb.css("border-top","5px solid green");
	$bbb.css("border-bottom","none");
	$bbb.css("border-right","1px solid rgb(242,242,242)");
	var $ccc = $("#ccc");
	$ccc.css("border-top","none");
	$ccc.css("border-bottom","1px solid rgb(242,242,242)");
	$ccc.css("border-right","1px solid rgb(242,242,242)");
    var $table21 = $("#table21");
    $table21.css("display","none");
    var $table22 = $("#table22");
    $table22.css("display","block");
    var $table23 = $("#table23");
    $table23.css("display","none");
    $("#tr1").css("display","none");
	$("#tr2").css("display","none");
	$("#aa").css("margin-top","-540px");
	$("#bb").css("margin-top","-320px");
	$("#cc").css("margin-top","-240px");
}
function ta3() {
	var $aaa = $("#aaa");
	$aaa.css("border-top","none");
	$aaa.css("border-bottom","1px solid rgb(242,242,242)");
	$aaa.css("border-right","none");
	var $bbb = $("#bbb");
	$bbb.css("border-top","none");
	$bbb.css("border-bottom","1px solid rgb(242,242,242)");
	$bbb.css("border-right","1px solid rgb(242,242,242)");
	var $ccc = $("#ccc");
	$ccc.css("border-top","5px solid green");
	$ccc.css("border-bottom","none");
	$ccc.css("border-right","1px solid rgb(242,242,242)");
    var $table21 = $("#table21");
    $table21.css("display","none");
    var $table22 = $("#table22");
    $table22.css("display","none");
    var $table23 = $("#table23");
    $table23.css("display","block");
    $("#tr1").css("display","none");
	$("#tr2").css("display","none");
	$("#aa").css("margin-top","-540px");
	$("#bb").css("margin-top","-320px");
	$("#cc").css("margin-top","-240px");
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