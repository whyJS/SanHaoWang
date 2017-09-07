window.onload = function(){


	//第三导航栏悬浮效果
	//悬浮navParent出现所有
	$("#navParent").mouseover(function(){
		$("#navBar dd").css("display","block");
		$(".dlBelow").css("display","block");
		$("#navBar dd").css("z-index",11);
		$(".dlBelow").css("z-index",10);
	});
	//悬浮dt改变颜色
	$("#navBar dt").mouseover(function(){
		this.style.backgroundColor = "rgb(68,188,2)";
		if (this.nextElementSibling) {
			var dd = this.nextElementSibling;
			this.nextElementSibling.style.backgroundColor = "rgba(24,142,0,0.8)";
	}
		
	});
	$("#navBar dt").mouseout(function(){
		this.style.backgroundColor = "rgb(64,178,43)";
		if (this.nextElementSibling) {
			var dd = this.nextElementSibling;
			this.nextElementSibling.style.backgroundColor = "rgba(45,153,25,0.8)";
		}
		
	});
//	//悬浮dd改变颜色
	$("#navBar dd").mouseover(function(){
	this.style.backgroundColor = "rgba(24,142,0,0.8)";
		this.previousElementSibling.style.backgroundColor = "rgb(68,188,2)";
		
	});
	$("#navBar dd").mouseout(function(){
		this.style.backgroundColor = "rgba(45,153,25,0.8)";
		this.previousElementSibling.style.backgroundColor = "rgb(64,178,43)";
	});
	//悬浮dlBelow出现所有
	$(".dlBelow").mouseover(function(){
		$("#navBar dd").css("display","block");
		$(this).css("display","block");
	});
	//移出dlBelow消失
	$(".dlBelow").mouseout(function(){
		$("#navBar dd").css("display","none");
		$(this).css("display","none");
	});
	$("#navBar").mouseout(function(){
		$("#navBar dd").css("display","none");
		$(".dlBelow").css("display","none");
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
		//热门老师悬浮效果
		$("[class^='hotTeacher']").mouseover(function(){
			var index = parseInt(this.className.charAt(10))-1;
			$(this).css("background-color","rgb(248,253,247)");
			$($("[class^='hotTeacher'] a")[index]).css({
								color:"rgb(253,120,0)",
								textDecoration: "none"
			});
			
		});
		$("[class^='hotTeacher']").mouseout(function(){
			var index = parseInt(this.className.charAt(10))-1;
			$(this).css("background-color","white");
			$($("[class^='hotTeacher'] a")[index]).css({
								color:"black",
								textDecoration: "none"
			});
		});
	//第二导航栏搜索text获取焦点悬浮框效果
	$("#searchText").focus(function(){
		$("#ulSearch").slideDown(2000);
	});
	$("#searchText").blur(function(){
		$("#ulSearch").slideUp(2000);
	});
	
	
	//分页显示部分分享图标悬浮效果
	var divShare = document.createElement("div");
	var share = document.getElementsByClassName("shareA");
	divShare.innerHTML = "<a href='http://service.weibo.com/share/share.php?url=http%3A%2F%2Fwww.s.com%2Fnews-detail.php%3Fnews%3D9997%230-tsina-1-3508-397232819ff9a47a7b7e80a40613cfe1&title=%E7%8E%B0%E4%BB%A3%E6%96%87%E9%98%85%E8%AF%BB%E8%80%83%E5%AF%9F7%E8%A6%81%E7%82%B9%EF%BC%8C%E4%BD%A0%E7%8C%9C%E9%AB%98%E4%B8%89%E8%AF%AD%E6%96%87%E6%9C%9F%E4%B8%AD%E8%80%83%E8%AF%95%E5%87%BA%E7%8E%B0...-%E4%B8%89%E5%A5%BD%E7%BD%91%E6%95%99%E8%82%B2%E5%A4%B4%E6%9D%A1%20-%20%E4%B8%89%E5%A5%BD%E7%BD%91%E8%B6%85%E7%BA%A7%E5%9C%A8%E7%BA%BF1%E5%AF%B91%21&appkey=1343713053&searchPic=true&sudaref=s.share.baidu.com&retcode=6102'><img src='../image/image1/sinaShare.png' class='sinaShare'></a><a><img src='../image/image1/weixinShare.png' class='weixinShare'></a><a href='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http%3A%2F%2Fwww.sanhao.com%2Fnews-detail-10009.html#0-qzone-1-55588-d020d2d2a4e8d1a374a433f596ad1440&title=【2017年高考】地理考试大纲-三好网教育头条 - 三好网超级在线1对1!'><img src='../image/image1/qzoneShare.png' class='qzoneShare'></a>";
	$(divShare).addClass('divShare');
	$(share).prepend(divShare);
	//$(".sinaShare").css("display","none");
	//$(".weixinShare").css("display","none");
	//$(".qzoneShare").css("display","none");
	//悬浮改变颜色（src）
	$(".sinaShare").mouseover(function(){
		$(this).attr("src","../image/image1/sinaShareRed.png");
	});
	$(".sinaShare").mouseout(function(){
		$(this).attr("src","../image/image1/sinaShare.png");
	});
	$(".weixinShare").mouseover(function(){
		$(this).attr("src","../image/image1/weixinShareGreen.png");
	});
	$(".weixinShare").mouseout(function(){
		$(this).attr("src","../image/image1/weixinShare.png");
	});
	$(".qzoneShare").mouseover(function(){
		$(this).attr("src","../image/image1/qzoneShareYellow.png");
	});
	$(".qzoneShare").mouseout(function(){
		$(this).attr("src","../image/image1/qzoneShare.png");
	});
	$(".shareA").mouseover(function(){
//		console.log(this.firstElementChild);
		$(this.firstElementChild).css("display","block");
		$(this.lastChild).css("color","rgb(30,200,0)");
		$(this.lastChild.previousElementSibling).attr("src","../image/image1/shareGreen.png");
		$(".sinaShare").css("display","inline");
		$(".weixinShare").css("display","inline");
		$(".qzoneShare").css("display","inline");
	});
	$(".shareA").mouseout(function(){
		$(this.firstElementChild).css("display","none");
		$(this.lastChild).css("color","black");
		$(this.lastChild.previousElementSibling).attr("src","../image/image1/share.png");
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
	//weixinShare点击出现二维码
	$(".qrBtn").click(function(){
		$("#qrCode").css("display","none");
	});
	$(".weixinShare").click(function(){
		$("#qrCode").css("display","block");
	});
//	console.log($('#phoneCall')[0].style);

	$("#imp_sec_u1_l1_d2_d1").mouseover(function(){
		$(this).css({"background-position":"0px -310px"});
	});
	$("#imp_sec_u1_l1_d2_d1").mouseout(function(){
		$(this).css({"background-position":"0px -288px"});
	});
	
	$("#imp_sec_u1_l1_d2_d2").mouseover(function(){
		$(this).css({"background-position":"-1px -352px"});
	});
	$("#imp_sec_u1_l1_d2_d2").mouseout(function(){
		$(this).css({"background-position":"-1px -330px"});
	});
	
	$("#imp_sec_u1_l1_d2_d3").mouseover(function(){
		$(this).css({"background-position":"-2px -104px"});
	});
	$("#imp_sec_u1_l1_d2_d3").mouseout(function(){
		$(this).css({"background-position":"-2px -80px"});
	});
	
	$("#imp_sec_u1_u1_l2").mouseover(function(){
		$(this).css({"color":"green","border":"1px solid green"});
	});
	$("#imp_sec_u1_u1_l2").mouseout(function(){
		$(this).css({"color":"black","border":"1px solid gray"});
	});
	$("#imp_sec_u1_u1_l3").mouseover(function(){
		$(this).css({"color":"green","border":"1px solid green"});
	});
	$("#imp_sec_u1_u1_l3").mouseout(function(){
		$(this).css({"color":"black","border":"1px solid gray"});
	});
	$("#imp_sec_u1_u1_l4").mouseover(function(){
		$(this).css({"color":"green","border":"1px solid green"});
	});
	$("#imp_sec_u1_u1_l4").mouseout(function(){
		$(this).css({"color":"black","border":"1px solid gray"});
	});
	
	$("#imp_sec_u1_l1_d2_d9_u1_l1").mouseover(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l1 div").css({"color":"rgb(255,116,63)","background-position":"0px -625px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l1").mouseout(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l1 div").css({"color":"black","background-position":"0px -575px"});
	});
	
	$("#imp_sec_u1_l1_d2_d9_u1_l2").mouseover(function(){
		$(this).css({"background":"rgb(64,178,43)"});
		$("#imp_sec_u1_l1_d2_d9_u1_l2 div").css({"color":"white","background-position":"-2px -400px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l2").mouseout(function(){
		$(this).css({"background":"white"});
		$("#imp_sec_u1_l1_d2_d9_u1_l2 div").css({"color":"gray","background-position":"-2px -374px"});
	});
	
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d1").mouseover(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d1 img").css({"top":"-307px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d1").mouseout(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d1 img").css({"top":"-285px"});
	});
	
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d2").mouseover(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d2 img").css({"top":"-352px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d2").mouseout(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d2 img").css({"top":"-330px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d3").mouseover(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d3 img").css({"top":"-103px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3_d3").mouseout(function(){
		$("#imp_sec_u1_l1_d2_d9_u1_l3_d3 img").css({"top":"-79px"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3").mouseover(function(){
		$("#yidong_d1").css({"transform":"translateX(-166px)","transition":"transform 0.5s"});
	});
	$("#imp_sec_u1_l1_d2_d9_u1_l3").mouseout(function(){
		$("#yidong_d1").css({"transform":"translateX(0px)","transition":"transform 0.5s"});
	});
	var isHow3 = false;
	var isHow = true;
	var isHow1 = true;
	$("#top_img3,#top_u1_a2").click(function(){
				if(isHow1==true){
					$("#top_xuke div").animate({"height":"100px"},200);
					$("#top_xuke div").css({"border":"1px solid rgb(221,221,221)"});
					var img = document.getElementById("top_img3");
					img.src = "../image/image2/top_shang.png";
					isHow1 = false;
				}else
				{
					$("#top_xuke div").animate({"height":"0px"},200);
					$("#top_xuke div").css({"border":"0px"});
					var img = document.getElementById("top_img3");
					img.src = "../image/image2/top_xia.png";
					isHow1 = true;
				}
			});
			$("#top_img1,#top_u1_a1").click(function(){
				if(isHow==true)
				{
					$("#top_d1").animate({"height":"115px"},500);
					var img = document.getElementById("top_img1");
					img.src = "../image/image2/top_shang.png";
					isHow = false;
				}else
				{
					$("#top_d1").animate({"height":"0px"},500);
					var img = document.getElementById("top_img1");
					img.src = "../image/image2/top_xia.png";
					isHow = true;
				}
				
			});
	$("#footer_d2_d").click(function(){
						$("#footer_d2_d2").text("﹀");
						$("#footer_d2_d2").css({"padding-top":"5px"});


						
						if(isHow3==true)
						{
						
//							$("#large_d").css({"margin-top":"0px"});
							$("#footer_d2_d2").text("︿");
							$("#footer_d2_d2").css({"line-height":"35px"});
							$("#large_d").css({"transform":"translateY(0px)","transition":"transform 1.5s"});
							
							isHow3=false;
							  $(window).bind("scroll", function () {
								$("#large_d").css({"margin-top":"0px"});
								
							});
						}else{
							
							$("#footer_d2_d2").text("﹀");
							$("#footer_d2_d2").css({"line-height":"48px"});
							$("#large_d").css({"transform":"translateY(300px)","transition":"transform 1.5s"});
//							$("#large_d").css({"margin-top":"-300px"});
				
							isHow3=true;
							$(window).bind("scroll", function () {
								
								$("#large_d").css({"margin-top":"-300px"});
								
							});
						}
					
					});
						$("#header_u2_d1_u1 li").click(function(){
							$("#header_u2_inp1").val($(this).text().slice(3,5));
						});
			$("#header_u2_inp1").click(function(){
					$("#header_u2_d1").animate({"height":"270px"},500);
			});
			$("#header_u2_inp1").blur(function(){
					$("#header_u2_d1").animate({"height":"0px"},300);
			});
			$("#imp_sec_u1_l2_d3_d1").mouseover(function(){
				$(this).css({"border":"1px solid green","color":"green"});
			});
			$("#imp_sec_u1_l2_d3_d1").mouseout(function(){
				$(this).css({"border":"1px solid rgb(150,150,150)","color":"gray"});
			});
			
			 //右侧导航栏
            $("#rightNav_u1_l1").mouseover(function(){
            	$("#rightNavl1").fadeIn(1);
//$("#rightNavl1").css({"display":"block"});
            	$("#rightNavl1").css({"transform":"translateX(10px)","transition":"transform 0.35s"});
            });
             $("#rightNav_u1_l1").mouseout(function(){
            	$("#rightNavl1").fadeOut(1);
//$("#rightNavl1").css({"display":"none"});
            	$("#rightNavl1").css({"transform":"translateX(0px)","transition":"transform 0.35s"});
            });
            
            $("#rightNav_u1_l2").mouseover(function(){
            	$("#rightNavl2").fadeIn(350);
            	$("#rightNavl2").css({"transform":"translateX(10px)","transition":"transform 0.35s"});
            });
             $("#rightNav_u1_l2").mouseout(function(){
            	$("#rightNavl2").fadeOut(350);
            	$("#rightNavl2").css({"transform":"translateX(0px)","transition":"transform 0.35s"});
            });
            
             $("#rightNav_u1_l3").mouseover(function(){
            	$("#rightNavl3").fadeIn(350);
            	$("#rightNavl3").css({"transform":"translateX(10px)","transition":"transform 0.35s"});
            });
             $("#rightNav_u1_l3").mouseout(function(){
            	$("#rightNavl3").fadeOut(350);
            	$("#rightNavl3").css({"transform":"translateX(0px)","transition":"transform 0.35s"});
            });
            
             $("#rightNav_u1_l4").mouseover(function(){
            	$("#rightNavl4").fadeIn(350);
            	$("#rightNavl4").css({"transform":"translateX(10px)","transition":"transform 0.35s"});
            });
             $("#rightNav_u1_l4").mouseout(function(){
            	$("#rightNavl4").fadeOut(350);
            	$("#rightNavl4").css({"transform":"translateX(0px)","transition":"transform 0.35s"});
            });
            
              $("#rightNav_u1_l5").mouseover(function(){
            	$("#rightNavl5").fadeIn(350);
            	$("#rightNavl5").css({"transform":"translateX(10px)","transition":"transform 0.35s"});
            });
             $("#rightNav_u1_l5").mouseout(function(){
            	$("#rightNavl5").fadeOut(350);
            	$("#rightNavl5").css({"transform":"translateX(0px)","transition":"transform 0.35s"});
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