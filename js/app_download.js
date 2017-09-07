window.onload=function(){
	
}
function fun1(){
	var div=document.getElementById("dv");
	div.style.display="none";
	console.log("11")
}
function fun2(){
	var div=document.getElementById("dv");
	div.style.display="block";
	console.log("11")
}
function fun3(){
	var div1=document.getElementById("dv1");
	div1.style.display="none";
	console.log("22")
}
function fun4(){
	var div1=document.getElementById("dv1");
	div1.style.display="block";
	
}
function aa(){
	var $aa=$("#aa");
	
	$aa.animate({"top":"1000px"},1000);
	
}
function dv2(){
	var div=document.getElementById("dv2");
	var height=div.scrollTop;
	var div1=document.getElementById("dv21");
	console.log(height);
	if(height>=600){
		
		div1.style.display="block";
	}else{
		div1.style.display="none";
	}
}
function fun5(){
	window.open("http://www.bai.com")
}
