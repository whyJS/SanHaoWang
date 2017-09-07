$(function(){
			var isHow = true;
			var isHow1 = true;
			var isHow2 = true;
			var isHow3 = false;
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
			//聚焦
			$("#header_u2_inp1").click(function(){
					$("#header_u2_d1").animate({"height":"270px"},500);
			});
			$("#header_u2_inp1").blur(function(){
					$("#header_u2_d1").animate({"height":"0px"},300);
			});

			//下拉
			$("#header_sel").click(function(){
				$("#mymodal").modal("toggle");
			});
			$(".carousel").carousel({
				interval:2000
			});
	
				$("[data-toggle='popover']").popover();	
				
				
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
				
					$("#logAndreg_d2").click(function(){
						 if(isHow2 ==true)
						{
							$("#logAndreg,#logAndreg_d1,#logAndreg_d2,#logAndreg_d4").css({"transform-origin":"50% 50%","transform":"rotateY(-180deg)","transition":"transform 0.5s"});
							$("#logAndreg_d1").css({"background":"rgb(61,61,61)"});
							$(this).css({"background":"rgb(13,11,0)"});
							$("#logAndreg_d3").css({"display":"none"});
							$("#logAndreg_d4").css({"display":"block","transition":"display 0.5s"});
							$("#logAndreg_d2").text("学生注册");
							$("#logAndreg_d1").text("学生登录");
							isHow2=false;
						}else{
							$("#logAndreg,#logAndreg_d1,#logAndreg_d2").css({"transform-origin":"50% 50%","transform":"rotateY(0deg)","transition":"transform 0.5s"});
							$("#logAndreg_d1").css({"background":"rgb(61,61,61)"});
							$(this).css({"background":"rgb(13,11,0)"});
							$("#logAndreg_d4").css({"display":"none"});
							$("#logAndreg_d3").css({"display":"block"});
							$("#logAndreg_d1").text("学生注册");
							$("#logAndreg_d2").text("学生登录");
							isHow2=true;
						}
					});
					
					$("#mymodal_btn1").click(function(){
						var str = $("#modal_sel").val();
						$("#header_sel_span").text(str);
						$("#mymodal").modal('hide');
					});
					
					//头部点击科目
						$("#header_u2_d1_u1 li").click(function(){
							$("#header_u2_inp1").val($(this).text().slice(3,5));
						});
					
				
					//内容栏轮播图
					$("#cont_sec1_u1_u1 div").mouseover(function(){
						var imgd = Array();
						var d = $(this).attr("id");
						if($(this).css("width")=="120px")
						{
							$(this).css({"width":"288px","transition":"width 0.5s"});
							var imd = this.children[0].id;
							$('#'+imd).css({"transform":"translateX(-120px)","transition":"transform  0.5s"});
						}
						var s = "#"+d;
						$("div[id^=cont_sec1_u1_u1_]:not("+s+")").css({"width":"120px","transition":"width 0.5s"});
						for(var i=0;i<$("div[id^=cont_sec1_u1_u1_]:not("+s+")").length;i++)
						{
							imgd[i] = $("div[id^=cont_sec1_u1_u1_]:not("+s+")")[i].children[0].id;
						}
						for(var i=0;i<imgd.length;i++)
						{
							$('#'+imgd[i]).css({"transform":"translateX(0)"});
						}
												
					});
					
					//新闻
					$("#cont_sec1_u1_l2_ul_d1").mouseover(function(){
						$(this).css({"background":"white"});
						$("#cont_sec1_u1_l2_ul_d2").css({"background":"rgb(242,242,242)"});
						$("#cont_sec1_u1_l2_u2").css({"transform":"translateX(0px)","transition":"transform 0.5s"});
						$("#cont_sec1_u1_l2_u3").css({"transform":"translateX(220px)","transition":"transform 0.5s"});
					});
					$("#cont_sec1_u1_l2_ul_d2").mouseover(function(){
						$(this).css({"background":"white"});
						$("#cont_sec1_u1_l2_ul_d1").css({"background":"rgb(242,242,242)"});
						$("#cont_sec1_u1_l2_u2").css({"transform":"translateX(-220px)","transition":"transform 0.5s"});

						$("#cont_sec1_u1_l2_u3").css({"transform":"translateX(-220px)","transition":"transform 0.5s"});
					});
					
					//高中span
					$("#cont_sec3_g_d1_u1_l8_span").mouseover(function(){
						$("#cont_sec3_g_d1_u1_l8 div").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec3_g_d1_u1_l8_span").mouseout(function(){
						$("#cont_sec3_g_d1_u1_l8 div").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});
					//初中span
					$("#cont_sec3_cz_d1_u1_l8_span").mouseover(function(){
						$("#cont_sec3_cz_d1_u1_l8_d1").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec3_cz_d1_u1_l8_span").mouseout(function(){
						$("#cont_sec3_cz_d1_u1_l8_d1").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});

					//小学span
					$("#cont_sec3_xx_d1_u1_l8_span").mouseover(function(){
						$("#cont_sec3_xx_d1_u1_l8_d1").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec3_xx_d1_u1_l8_span").mouseout(function(){
						$("#cont_sec3_xx_d1_u1_l8_d1").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});
					//4楼span
					$("#cont_sec4_d1_u1_span").mouseover(function(){
						$("#cont_sec4_d1_u1_d1").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec4_d1_u1_span").mouseout(function(){
						$("#cont_sec4_d1_u1_d1").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});
					//5楼span
					$("#cont_sec5_d1_u1_span").mouseover(function(){
						$("#cont_sec5_d1_u1_d1").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec5_d1_u1_span").mouseout(function(){
						$("#cont_sec5_d1_u1_d1").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});
					//6楼span
					$("#cont_sec6_d1_u1_span").mouseover(function(){
						$("#cont_sec6_d1_u1_d1").css({"color":"green","border":"1px solid green"});
						$(this).css({"color":"green"});
					});
					$("#cont_sec6_d1_u1_span").mouseout(function(){
						$("#cont_sec6_d1_u1_d1").css({"color":"black","border":"1px solid rgb(212,212,212)"});
						$(this).css({"color":"black"});
					});
					// -----------------------------------------------------
					$("#cont_sec3_g_d1_u1_l8_d1").mouseover(function(){
						$("#cont_sec3_g_d1_u1_l8_span").css({"color":"green"});
						$(this).css({"color":"green","border":"1px solid green"});
					});
					$("#cont_sec3_g_d1_u1_l8_d1").mouseout(function(){
						$("#cont_sec3_g_d1_u1_l8_span").css({"color":"black"});
						$(this).css({"color":"black"});
					});
				
					//高考
					for(var i=3;i<8;i++)
					{
						$("#cont_sec3_g_d1_u1_l"+i).mouseover(function(){
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
							}
						});	
					}
					for(var i=3;i<8;i++){
						$("#cont_sec3_g_d1_u1_l"+i).mouseout(function(){
								
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}else{
								$(this).removeClass("active_cont_sec3_g_d1_u1_l");
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}
							
						});
					}
					
					for(var i=3;i<8;i++){
						$("#cont_sec3_g_d1_u1_l"+i).click(function(){
							
							for(var j=3;j<8;j++)
							{
								if($("#cont_sec3_g_d1_u1_l"+j).hasClass("active_cont_sec3_g_d1_u1_l2"))
								{
									$("#cont_sec3_g_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l2");
									$("#cont_sec3_g_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l");
								}
							}
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
								$(this).addClass("active_cont_sec3_g_d1_u1_l2");
							}
							var len = $(this).attr("id").length;
							var num = $(this).attr("id").charAt(len-1);
							$("#cont_sec3_g_d2_u"+num).css({"display":"block"});
//							$("ul[id^=cont_sec3_g_d2_u]:not(#cont_sec3_g_d2_u num)")
							
							$("ul[id^=cont_sec3_g_d2_u]:not(#cont_sec3_g_d2_u"+num+")").css({"display":"none"});
						});
					}
					//初中
					for(var i=3;i<8;i++)
					{
						$("#cont_sec3_cz_d1_u1_l"+i).mouseover(function(){
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
							}
						});	
					}
					for(var i=3;i<8;i++){
						$("#cont_sec3_cz_d1_u1_l"+i).mouseout(function(){
								
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}else{
								$(this).removeClass("active_cont_sec3_g_d1_u1_l");
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}
							
						});
					}
					
					for(var i=3;i<8;i++){
						$("#cont_sec3_cz_d1_u1_l"+i).click(function(){
							
							for(var j=3;j<8;j++)
							{
								if($("#cont_sec3_cz_d1_u1_l"+j).hasClass("active_cont_sec3_g_d1_u1_l2"))
								{
									$("#cont_sec3_cz_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l2");
									$("#cont_sec3_cz_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l");
								}
							}
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
								$(this).addClass("active_cont_sec3_g_d1_u1_l2");
							}
							var len = $(this).attr("id").length;
							var num = $(this).attr("id").charAt(len-1);
							$("#cont_sec3_cz_d2_u"+num).css({"display":"block"});
//							$("ul[id^=cont_sec3_g_d2_u]:not(#cont_sec3_g_d2_u num)")
							
							$("ul[id^=cont_sec3_cz_d2_u]:not(#cont_sec3_cz_d2_u"+num+")").css({"display":"none"});
						});
					}

					//小学
					for(var i=3;i<8;i++)
					{
						$("#cont_sec3_xx_d1_u1_l"+i).mouseover(function(){
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
							}
						});	
					}
					for(var i=3;i<8;i++){
						$("#cont_sec3_xx_d1_u1_l"+i).mouseout(function(){
								
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}else{
								$(this).removeClass("active_cont_sec3_g_d1_u1_l");
//								$(this).removeClass("active_cont_sec3_g_d1_u1_l2");
							}
							
						});
					}
					for(var i=3;i<8;i++){
						$("#cont_sec3_xx_d1_u1_l"+i).click(function(){
							
							for(var j=3;j<8;j++)
							{
								if($("#cont_sec3_xx_d1_u1_l"+j).hasClass("active_cont_sec3_g_d1_u1_l2"))
								{
									$("#cont_sec3_xx_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l2");
									$("#cont_sec3_xx_d1_u1_l"+j).removeClass("active_cont_sec3_g_d1_u1_l");
								}
							}
							if($(this).hasClass("active_cont_sec3_g_d1_u1_l2"))
							{
								
							}else{
								$(this).addClass("active_cont_sec3_g_d1_u1_l");
								$(this).addClass("active_cont_sec3_g_d1_u1_l2");
							}
							var len = $(this).attr("id").length;
							var num = $(this).attr("id").charAt(len-1);
							$("#cont_sec3_xx_d2_u"+num).css({"display":"block"});
//							$("ul[id^=cont_sec3_g_d2_u]:not(#cont_sec3_g_d2_u num)")
							
							$("ul[id^=cont_sec3_xx_d2_u]:not(#cont_sec3_xx_d2_u"+num+")").css({"display":"none"});
						});
					}

					//预约体验点击
					$(".yuyue").click(function(){
						//渐显
						setTimeout(function(){
							$("#yuyuetiyan").fadeIn(600);
						},50);
//						$("#yuyuetiyan").css({"display":"block"});
					});
					$("#close_img1").click(function(){
						setTimeout(function(){
							$("#yuyuetiyan").fadeOut(600);
						},50);
//						$("#yuyuetiyan").css({"display":"none"});
					});
					
					//高中简介
					$("ul[id^=cont_sec3_g_d2_u] li:not(#cont_sec3_g_d2_c1)").mouseover(function(){
					
						$(this).children(".cont_sec3_g_d2_det").css({"display":"block"});
						$(this).css({"border":"1px solid rgb(238,97,0)"});
//						$("ul[id^=cont_sec3_g_d2_u] li:not(.cont_sec3_g_d2_c1)").css({"border":"1px solid rgb(238,97,0)"});
					});
					$("ul[id^=cont_sec3_g_d2_u] li").mouseout(function(){
						$(this).children(".cont_sec3_g_d2_det").css({"display":"none"});
						$(this).css({"border":"1px solid rgb(224,224,224)"});
					});

					// ------------------------初中简介
					$("ul[id^=cont_sec3_cz_d2_u] li:not(#cont_sec3_cz_d2_c1)").mouseover(function(){
					
						$(this).children(".cont_sec3_cz_d2_det").css({"display":"block"});
						$(this).css({"border":"1px solid rgb(238,97,0)"});
//						$("ul[id^=cont_sec3_g_d2_u] li:not(.cont_sec3_g_d2_c1)").css({"border":"1px solid rgb(238,97,0)"});
					});
					$("ul[id^=cont_sec3_cz_d2_u] li").mouseout(function(){
						$(this).children(".cont_sec3_cz_d2_det").css({"display":"none"});
						$(this).css({"border":"1px solid rgb(224,224,224)"});
					});
					//小学简介
					$("ul[id^=cont_sec3_xx_d2_u] li:not(#cont_sec3_xx_d2_c1)").mouseover(function(){
					
						$(this).children(".cont_sec3_xx_d2_det").css({"display":"block"});
						$(this).css({"border":"1px solid rgb(238,97,0)"});
//						$("ul[id^=cont_sec3_g_d2_u] li:not(.cont_sec3_g_d2_c1)").css({"border":"1px solid rgb(238,97,0)"});
					});
					$("ul[id^=cont_sec3_xx_d2_u] li").mouseout(function(){
						$(this).children(".cont_sec3_xx_d2_det").css({"display":"none"});
						$(this).css({"border":"1px solid rgb(224,224,224)"});
					});
					
					//5楼jq
					$("#cont_sec5_d2_u1 li").mouseover(function(){
						var len = $(this).attr("id").length;
						var s = $(this).attr("id")[len-1];
						$("#cont_sec5_d2_u1_l"+s+"_d").css({"display":"block"});
					});
					$("#cont_sec5_d2_u1 li").mouseout(function(){
						var len = $(this).attr("id").length;
						var s = $(this).attr("id")[len-1];
						$("#cont_sec5_d2_u1_l"+s+"_d").css({"display":"none"});
					});
					
					//6楼jq
					$("#cont_sec6_d2_u1 li").mouseover(function(){
						var len = $(this).attr("id").length;
						var s = $(this).attr("id")[len-1]; 
						$("#cont_sec6_d2_u1_l"+s+"_d1").css({"display":"block"});
						$("#cont_sec6_d2_u1_l"+s+"_d2").css({"background":"rgb(70,176,54)"});
						$("#cont_sec6_d2_u1_l"+s+"_d3").css({"color":"rgb(255,120,0)"});
					});
					$("#cont_sec6_d2_u1 li").mouseout(function(){
						var len = $(this).attr("id").length;
						var s = $(this).attr("id")[len-1]; 
						$("#cont_sec6_d2_u1_l"+s+"_d1").css({"display":"none"});
						$("#cont_sec6_d2_u1_l"+s+"_d2").css({"background":"white"});
						$("#cont_sec6_d2_u1_l"+s+"_d3").css({"color":"black"});
					});
					
					//底部点击网站导航
					$("#footer_d2_d").click(function(){
						$("#footer_d2_d2").text("﹀");
						$("#footer_d2_d2").css({"padding-top":"5px"});

//						if($("#footer_d2_d2").text()=="︿")
//						{
//							$("#footer_d2_d2").text("﹀");
//							$("#footer_d2_d2").css({"padding-top":"5px"});
//							$("#footer_d3").css({"height":"0px","transition":"height 1.5s"});
//							
//						}else{
//							$("#footer_d3").css({"height":"300px","transition":"height 1.5s"});
//						}
						
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
					
			//绑定滚动条事件  
              //绑定滚动条事件  
            $(window).bind("scroll", function () {  
                var sTop = $(document).scrollTop();  
                var sTop = parseInt(sTop); 
                var dTop = $("#footer_d2").position().top;
                var dTop1 = $("#cont_sec3_g").position().top;
                var dTop2 = $("#cont_sec3_cz").position().top;
                var dTop3 = $("#cont_sec3_xx").position().top;
                var dTop4 = $("#cont_sec4").position().top;
                var dTop5 = $("#cont_sec5").position().top;
                var dTop6 = $("#cont_sec6").position().top;
                var lTop = $(window).height();
                if((sTop+lTop)<=dTop)
                {
                		$("#footer_dd1").css({"display":"block"});
                }else{
                		$("#footer_dd1").css({"display":"none"});
                }
                if((sTop+lTop)<=dTop1+500)
                {
                	$("#sideNav").fadeOut(200);
                	
                }else{
                	$("#sideNav").fadeIn(200);
                }
                if((sTop+lTop)<=dTop1+800)
                {
                	$("#sideNav_ul_l1").css({"background":"rgb(67,201,144)"});
                	$("#sideNav_ul_l1").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l1)").removeClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l1)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l1 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l1) a").css({"color":"black"});
                }else if((sTop+lTop)<=dTop2+800){
                	$("#sideNav_ul_l2").css({"background":"rgb(104,190,19)"});
                	$("#sideNav_ul li:not(#sideNav_ul_l2)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l2 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l2) a").css({"color":"black"});
                	$("#sideNav_ul_l2").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l2)").removeClass("sideNav");
                }else if((sTop+lTop)<=dTop3+800)
                {
                	$("#sideNav_ul_l3").css({"background":"rgb(32,199,199)"});
                	$("#sideNav_ul li:not(#sideNav_ul_l3)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l3 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l3) a").css({"color":"black"});
                	$("#sideNav_ul_l3").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l3)").removeClass("sideNav");
                }else if((sTop+lTop)<=dTop4+800)
                {
                	$("#sideNav_ul_l4").css({"background":"rgb(28,184,225)"});
                	$("#sideNav_ul li:not(#sideNav_ul_l4)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l4 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l4) a").css({"color":"black"});
                	$("#sideNav_ul_l4").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l4)").removeClass("sideNav");
                }else if((sTop+lTop)<=dTop5+800)
                {
                	$("#sideNav_ul_l5").css({"background":"rgb(245,193,49)"});
                	$("#sideNav_ul li:not(#sideNav_ul_l5)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l5 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l5) a").css({"color":"black"});
                	$("#sideNav_ul_l5").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l5)").removeClass("sideNav");
                }else 
                {
                	$("#sideNav_ul_l6").css({"background":"rgb(242,134,19)"});
                	$("#sideNav_ul li:not(#sideNav_ul_l6)").css({"background":"rgb(240,240,240)"});
                	$("#sideNav_ul_l6 a").css({"color":"white"});
                	$("#sideNav_ul li:not(#sideNav_ul_l6) a").css({"color":"black"});
                	$("#sideNav_ul_l6").addClass("sideNav");
                	$("#sideNav_ul li:not(#sideNav_ul_l6)").removeClass("sideNav");
                }
                
   			}); 
			
			$("#sideNav_ul_l1").mouseover(function(){
			
					$("#sideNav_ul_l1").css({"background":"rgb(67,201,144)"});
					$("#sideNav_ul_l1 a").css({"color":"white"});
			});
            $("#sideNav_ul_l1").mouseout(function(){
            	if($("#sideNav_ul_l1").hasClass("sideNav"))
            	{
            		console.log("aaa");
            	}else{
            		$("#sideNav_ul_l1").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l1 a").css({"color":"black"});
            	}
            	
            });
            $("#sideNav_ul_l2").mouseover(function(){
				$("#sideNav_ul_l2").css({"background":"rgb(104,190,19)"});
				$("#sideNav_ul_l2 a").css({"color":"white"});
			});
            $("#sideNav_ul_l2").mouseout(function(){
            	if($("#sideNav_ul_l2").hasClass("sideNav"))
            	{
            		
            	}else{
            		$("#sideNav_ul_l2").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l2 a").css({"color":"black"});
            	}
            	
            });
             $("#sideNav_ul_l3").mouseover(function(){
				$("#sideNav_ul_l3").css({"background":"rgb(32,199,199)"});
				$("#sideNav_ul_l3 a").css({"color":"white"});
			});
            $("#sideNav_ul_l3").mouseout(function(){
            	if($("#sideNav_ul_l3").hasClass("sideNav"))
            	{
            		
            	}else{
            		$("#sideNav_ul_l3").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l3 a").css({"color":"black"});
            	}
            	
            });
            $("#sideNav_ul_l4").mouseover(function(){
				$("#sideNav_ul_l4").css({"background":"rgb(28,184,225)"});
				$("#sideNav_ul_l4 a").css({"color":"white"});
			});
            $("#sideNav_ul_l4").mouseout(function(){
        		if($("#sideNav_ul_l4").hasClass("sideNav"))
            	{
            		
            	}else{
            		$("#sideNav_ul_l4").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l4 a").css({"color":"black"});
            	}
            	
            });
            $("#sideNav_ul_l5").mouseover(function(){
				$("#sideNav_ul_l5").css({"background":"rgb(245,193,49)"});
				$("#sideNav_ul_l5 a").css({"color":"white"});
			});
            $("#sideNav_ul_l5").mouseout(function(){
            	if($("#sideNav_ul_l5").hasClass("sideNav"))
            	{
            		
            	}else{
            		$("#sideNav_ul_l5").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l5 a").css({"color":"black"});
            	}
            	
            });
            $("#sideNav_ul_l6").mouseover(function(){
				$("#sideNav_ul_l6").css({"background":"rgb(242,134,19)"});
				$("#sideNav_ul_l6 a").css({"color":"white"});
			});
            $("#sideNav_ul_l6").mouseout(function(){
            	if($("#sideNav_ul_l6").hasClass("sideNav"))
            	{
            		
            	}else{
            		$("#sideNav_ul_l6").css({"background":"rgb(240,240,240)"});
            		$("#sideNav_ul_l6 a").css({"color":"black"});
            	}
            	
            });
            
            $("#cont_sec4_d2_d1_d1").mouseover(function(){
            	$("#cont_sec4_d2_d1_d1").children(0).css({"transform":"translateX(0px)","transition":"transform 0.5s"});
            	$("#cont_sec4_d2_d1_d1").css({"width":"265px","transition":"width 0.5s"});
            });
             $("#cont_sec4_d2_d1_d1").mouseout(function(){
            	$("#cont_sec4_d2_d1_d1").children(0).css({"transform":"translateX(-265px)","transition":"transform 0.5s"});
            	$("#cont_sec4_d2_d1_d1").css({"width":"100px","transition":"width 0.5s"});
            });
            
             $("#cont_sec4_d2_d1_d2").mouseover(function(){
            	$("#cont_sec4_d2_d1_d2").children(0).css({"transform":"translateX(0px)","transition":"transform 0.5s"});
            	$("#cont_sec4_d2_d1_d2").css({"width":"265px","transition":"width 0.5s"});
            });
             $("#cont_sec4_d2_d1_d2").mouseout(function(){
            	$("#cont_sec4_d2_d1_d2").children(0).css({"transform":"translateX(100px)","transition":"transform 0.5s"});
            	$("#cont_sec4_d2_d1_d2").css({"width":"100px","transition":"width 0.5s"});
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
		});