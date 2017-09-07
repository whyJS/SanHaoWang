window.onload = function(){
	var isShow1 = true;
	var isShow2 = true;
	//手机学习app悬浮框
	$("#mobileApp").click(function(){
		if (isShow1) {
			$("#app").slideDown(500);
			this.lastChild.attributes['src'].value = "../image/image1/pointUp.png";
			isShow1 = false;
		}else{
			$("#app").slideUp(500);
			this.lastChild.attributes['src'].value = "../image/image1/pointDown.png";
			isShow1 = true;
		}
	});
	//办学许可证悬浮框
	$("#permitA").click(function(){
		if (isShow2) {
			$("#ulPermit").slideDown(500);
			this.lastChild.attributes['src'].value = "../image/image1/pointUp.png";
			isShow2 = false;
		}else{
			$("#ulPermit").slideUp(500);
			this.lastChild.attributes['src'].value = "../image/image1/pointDown.png";
			isShow2 = true;
		}
	});
	//下拉单选select构建
	var select = document.getElementsByTagName('select')[0];
	provinceArray = new Array("北京","上海","天津","重庆","河北省","山西省","内蒙","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","山东省","河南省","湖北省","湖南省","广东省","广西省","海南省","四川省","贵州省","云南省","西藏","陕西省","甘肃省","宁夏","青海省","新疆","香港","澳门","台湾","其它");
	for (var i = 0; i < provinceArray.length; i++) {
		var option = document.createElement('option');
		option.innerHTML = provinceArray[i];
		// select.appendChild(option);
	}
	//第二导航栏搜索框
	$("#searchText").focus(function(){
		$("#ulSearch").slideDown(500);
	});
	$("#searchText").blur(function(){
		$("#ulSearch").slideUp(500);
	});
	
	$(function(){
			$("#section1_u1 li").mouseover(function(){
				$("#section1_u1").css({"height":"500px","transition":"height 1s"});
				$("#section1_u1_l").css({
					"width":"200px"
				});
				$("#section_div1").css({"width":"650px"});
			});
			$("#section1_u1").mouseout(function(){
				$("#section1_u1").css({"height":"50px","transition":"height 1s"});
				$("#section_div1").css({"width":"200px"});
			});
	});
	$("#section1_u1_l"+1).mouseover(function(){
		$("#section1_l"+1).css({"display":"block"});
	});	
	$("#section1_u1_l"+1).mouseout(function(){
		$("#section1_l"+1).css({"display":"none"});
	});	
	$("#section1_u1_l"+2).mouseover(function(){
		$("#section1_l"+2).css({"display":"block"});
	});	
	$("#section1_u1_l"+2).mouseout(function(){
		$("#section1_l"+2).css({"display":"none"});
	});	
	$("#section1_u1_l"+3).mouseover(function(){
		$("#section1_l"+3).css({"display":"block"});
	});	
	$("#section1_u1_l"+3).mouseout(function(){
		$("#section1_l"+3).css({"display":"none"});
	});	
	$("#section1_u1_l"+4).mouseover(function(){
		$("#section1_l"+4).css({"display":"block"});
	});	
	$("#section1_u1_l"+4).mouseout(function(){
		$("#section1_l"+4).css({"display":"none"});
	});	
	$("#section1_u1_l"+5).mouseover(function(){
		$("#section1_l"+5).css({"display":"block"});
	});	
	$("#section1_u1_l"+5).mouseout(function(){
		$("#section1_l"+5).css({"display":"none"});
	});	
	$("#section1_u1_l"+6).mouseover(function(){
		$("#section1_l"+6).css({"display":"block"});
	});	
	$("#section1_u1_l"+6).mouseout(function(){
		$("#section1_l"+6).css({"display":"none"});
	});	
	$(".teacherShare").mouseover(function(){
		$(".btnBox1").css({
			display:"block",
			marginTop:"0px",
			marginLeft:"5px",
			paddingTop:"1px",
			height:"26px"
		});
		
	});
	$(".teacherShare").mouseout(function(){
		$(".btnBox1").css("display","none");
	});
	$(".wechatShare").mouseover(function(){
		$("#qrCode").css("display","block");
	});
	$(".qrBtn").click(function(){
		$("#qrCode").css("display","none");
	});
	$(".plus").mouseover(function(){
		$("#btnBox2").css("display","block");
	});
	$(".plus").mouseout(function(){
		$("#btnBox2").css("display","none");
	});
	$("#btnBox2").mouseover(function(){
		$("#btnBox2").css("display","block");
	});
	$("#btnBox2").mouseout(function(){
		$("#btnBox2").css("display","none");
	});
//	$(".teacher-ban-center-par3 li").mouseover(function(){
//		this.style.backgroundColor = "rgb(117,131,135)"; 
//	});
//	$(".teacher-ban-center-par3 li").mouseout(function(){
//		this.style.backgroundColor = "rgb(179,184,188)"; 
//	});
	$(".teacher-ban-center-par3 li").click(function(){
		$(".teacher-ban-center-par3 li").css("background","rgb(179,184,188)");
		this.style.backgroundColor = "rgb(101,117,120)";
	});
//	$(".teacher-ban-center-par3 li").click(function(){
//		$(".teacher-ban-center-par3 li").removeAttr("class"); 
//		this.ClassName = "active";
//		console.log(this.ClassName)
//	});
//	var lis = document.getElementsByClassName("teacher-ban-center-par3")[0].childElementCount;
//	console.log(lis);
//	for (i = 0;i<lis;i++) {
//		if ($(".teacher-ban-center-par3 li")[i].className == "active") {
//			console.log("aa")
//		}
//	}
	//加减课时
	$(".calcu").click(function(){
//		console.log($("#classHour")[0].innerHTML)
		if ($(this).val() == "+") {
			$("#classHour")[0].innerHTML = parseInt($("#classHour")[0].innerHTML)+1;
		}else if ($(this).val() == "-") {
			if(parseInt($("#classHour")[0].innerHTML) != 1){
				$("#classHour")[0].innerHTML = parseInt($("#classHour")[0].innerHTML)-1;
			}
			
		}
	});
	$(".eva li").mouseover(function(){
		this.style.borderLeftColor = "rgb(30,200,0)";
	});
	$(".eva li").mouseout(function(){
		this.style.borderLeftColor = "rgb(238,238,238)";
	});
	$(window).bind("scroll",function(){
		var winPos = parseInt($(window).scrollTop());
//		console.log(winPos);
		if (winPos>623) {
//			console.log($(".sectionLeft")[0].style.top);
			$(".sectionLeft").css({
				'position':"fixed",
				'top':"0px",
				'marginLeft':"0px"
				});
		}else{
			$(".sectionLeft").css({
				'position':"relative",
				'marginLeft':"0px"
				});
		}

    });
    //日期
  	var date1 = new Date();//获取当前时间
    var day1 = date1.getDate();//日
    var year1 = date1.getYear();
    var month1 = date1.getMonth()+1;//月
    
    var date2 = new Date(date1.getTime()+518400000);
    console.log(date2)
    var day2 = date2.getDate() ;
    var month2 = date2.getMonth()+1;
    console.log(month2);
    $(".date1_month")[0].innerHTML = month1;
    $(".date1_day")[0].innerHTML = day1;
    $(".date2_month")[0].innerHTML = month2;
    $(".date2_day")[0].innerHTML = day2;
    var date = date1;
    for (i=0;i<7;i++) {
    	var date = new Date(date1.getTime()+86400000*i);
 		var year = date.getYear();
    	var day = date.getDate();
    	var month = date.getMonth()+1;
    	var weekDay1 = date.getDay();//星期
    	var weekDay = "";
    	switch (weekDay1){
    		case 1:
    			weekDay = "周一";
    			break;
    		case 2:
    			weekDay = "周二";
    			break;
    		case 3:
    			weekDay = "周三";
    			break;
    		case 4:
    			weekDay = "周四";
    			break;
    		case 5:
    			weekDay = "周五";
    			break;
    		case 6:
    			weekDay = "周六";
    			break;
    		case 0:
    			weekDay = "周日";
    			break;
    		default:
    			break;
    	}
    	$(".dates")[i].innerHTML = month+"."+day;
    	$(".days")[i].innerHTML = weekDay;
    }
    $(".dateCal").click(function(){
    	console.log("$(this).contents()");
    	if(this.firstChild.textContent == "<"){
    		var date3 = new Date(date.getTime()-518400000-86400000);
    		if((month!=month1)&&(day!=day1)&&(year!=year1)){
    				
    			for (i=6;i>-1;i--) {
			    	date = new Date(date3.getTime()-86400000*i );
			    	var day = date.getDate();
			    	var year = date.getYear();
			    	var month = date.getMonth()+1;
			    	var weekDay1 = date.getDay();//星期
			    	var weekDay = "";
			    	switch (weekDay1){
			    		case 1:
			    			weekDay = "周一";
			    			break;
			    		case 2:
			    			weekDay = "周二";
			    			break;
			    		case 3:
			    			weekDay = "周三";
			    			break;
			    		case 4:
			    			weekDay = "周四";
			    			break;
			    		case 5:
			    			weekDay = "周五";
			    			break;
			    		case 6:
			    			weekDay = "周六";
			    			break;
			    		case 0:
			    			weekDay = "周日";
			    			break;
			    		default:
			    			break;
			    	}
			    	$(".dates")[6-i].innerHTML = month+"."+day;
			    	$(".days")[6-i].innerHTML = weekDay;
			    }
    		}
    	}else if(this.firstChild.textContent == ">"){
    		for (i=0;i<7;i++) {
		    	date = new Date(date.getTime()+86400000 );
		    	var day = date.getDate();
		    	var year = date.getYear();
		    	var month = date.getMonth()+1;
		    	var weekDay1 = date.getDay();//星期
		    	var weekDay = "";
		    	switch (weekDay1){
		    		case 1:
		    			weekDay = "周一";
		    			break;
		    		case 2:
		    			weekDay = "周二";
		    			break;
		    		case 3:
		    			weekDay = "周三";
		    			break;
		    		case 4:
		    			weekDay = "周四";
		    			break;
		    		case 5:
		    			weekDay = "周五";
		    			break;
		    		case 6:
		    			weekDay = "周六";
		    			break;
		    		case 0:
		    			weekDay = "周日";
		    			break;
		    		default:
		    			break;
		    	}
		    	$(".dates")[i].innerHTML = month+"."+day;
		    	$(".days")[i].innerHTML = weekDay;
		    }
    	}
    });
    //右边栏悬浮框note提交反馈按钮
	$(".recommendNote").click(function(){
		$("#myModal").modal("toggle");
	});
	$(".feedbackType1").css("border-color","rgb(70,156,53)");
	$(".feedbackType1 .arrow1").css("display","block");
	$(".feedbackType").click(function(){
		$(".feedbackType").css("border-color","rgb(185,185,185)");
		$(".arrow1").css("display","none");
		$(this).css("border-color","rgb(70,156,53)");
		$(this.lastElementChild).css("display","block");
	});
	//右边栏悬浮出现框
	 $(".boxParent").mouseover(function(){
		this.lastElementChild.style.display = "block";
	}); 
	$(".boxParent").mouseout(function(){
		this.lastElementChild.style.display = "none";
	});
	$(".btnDismiss").click(function(){
		console.log(this);
		this.parentNode.style.display = "none";
	});
	//页尾动画
	var isShow3 = false;
	$(".aToggle").click(function(){
		// $("#footer1").slideToggle(1000);
		if(!isShow3){
			$(".spanToggle").html("∨");
			$("#footer1").css("height","0px");
			$("#foot").css("height","190px");
			// $("#footer1").slideDown(1000);
			isShow3 = true;
		}else{
			$(".spanToggle").html("∧");
			// $("#footer1").slideUp(1000);
			// $("#footer1").css("top","270px");
			$("#footer1").css("height","270px");
			$("#foot").css("height","460px");
			isShow3 = false;
		}
	});
}
function fun1(){
		var div=document.getElementById("dv");
		div.style.display="none";
//		console.log("11")
	}
	function fun2(){
		var div=document.getElementById("dv");
		div.style.display="block";
//		console.log("11")
	}
	function fun3(){
		var div1=document.getElementById("dv1");
		div1.style.display="none";
//		console.log("22")
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