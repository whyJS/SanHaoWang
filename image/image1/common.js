//Browser
if(!window.BASE_URL){
    var ht = location.host.split('.')[1];
    window.HT = window.HT || ht;
	window.BASE_URL = 'http://www.' + ht + '.com/';
}
!function(){function j(a,b){if(0===arguments.length)return"";if(String.prototype.trim&&!b)a=String.prototype.trim.call(a);else{var c=b?/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g:/(^(\s|　)+)|((\s|　)+$)/g;a=a.replace(c,"")}return a}function k(){var a;return a=b.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/),a&&(a[1]||a[2])?(e="MSIE",f=a[1]||a[2],void 0):(a=b.match(/Firefox\/([^\s]*)/),a&&a[1]?(e="Firefox",f=a[1],void 0):(a=b.match(/Chrome\/([^\s]*)/),a&&a[1]?(e="Chrome",f=a[1],void 0):(a=b.match(/Version\/([^\s]*).+Safari/),a&&a[1]?(e="Safari",f=a[1],void 0):(a=b.match(/Opera.+Version[\s\/]([^\s]*)/),a&&a[1]?(e="Opera",f=a[1],a=b.match(/Opera Mini[^;]*/),a&&(e=a[0]),void 0):(a=b.match(/AppleWebKit\/([^\s]*)/),a&&a[1]?(e="AppleWebKit",f=a[1],void 0):void 0)))))}function l(){var a;return(a=b.match(/MetaSr/i))?(g="Sogou",void 0):(a=b.match(/Maxthon/i))?(g="Maxthon",void 0):(a=b.match(/TencentTraveler/i))?(g="TencentTraveler",void 0):(a=b.match(/QQBrowser/i))?(g="QQBrowser",void 0):(a=b.match(/TheWorld/i))?(g="TheWorld",void 0):(a=b.match(/360[S|E]E/i),a?(g="360",void 0):void 0)}function m(){var a,b,c,d;if("MSIE"===e)a=new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a&&(h=a.getVariable("$version").split(" ")[1]);else if(navigator.plugins&&navigator.plugins.length>0&&(a=navigator.plugins["Shockwave Flash"]))for(b=a.description.split(" "),c=0,d=b.length;d>c;c++)if(Math.floor(b[c])>0){h=b[c];break}}var a,b,c,d,e,f,g,h;if(!window.Browser&&(window.Browser={},!Browser._isInited)){if(a=j,b=window.navigator.userAgent,c="",d="",e="",f="",g="",h="",/windows|win32/i.test(b)){c="windows";try{d=b.match(/Windows\sNT\s(\d+\.\d+)/)[1]}catch(i){}}else if(/linux/i.test(b)){c="linux";try{d=b.match(/Linux\s([^;]+)/)[1]}catch(i){}}else if(/macintosh/i.test(b)){c="macintosh";try{d=b.match(/Mac\sOS\sX\s(\d+\.\d+)/)[1]}catch(i){}}else if(/rhino/i.test(b))c="rhino";else if(/ipad/i.test(b))c="ipad";else if(/iphone/i.test(b))c="iphone";else if(/ipod/i.test(b))c="ipod";else if(/android/i.test(b))c="android";else if(/adobeair/i.test(b))c="adobeair";else try{c=navigator.platform.toLowerCase()}catch(i){}Browser.os=c,Browser.system=d;try{k()}catch(i){}try{l()}catch(i){}Browser.appName=a(e).toLowerCase(),Browser.version=a(f).toLowerCase(),Browser.shell=a(g).toLowerCase(),Browser.screenWidth=window.screen.width,Browser.screenHeight=window.screen.height;try{m()}catch(i){}Browser.hasFlash=!!h,Browser.flashVersion=h,Browser._isInited=!0}}();
;(function(w){
    //tips
    w.tip_timer = 0;
    w.tip_this = null;
    var isIE8 = w.Browser.appName == 'msie' && w.Browser.version == '8.0';
    //右侧边栏首页是鼠标移动显示
    if(!window.isHomePage)
    {
        var closeBtn = $('<span class="t-lxb-close">X</span>');
        $(".t-lxb").prepend(closeBtn);
        closeBtn.click(function(){
            var $tip = $('.s-wrap').find('.t-des').removeClass('fadeInLeft').addClass('fadeOutLeft');
            if(isIE8) {//ie8 bug
                $tip.hide();
            } else {
                $tip.fadeOut();
            }
        });
        w.tip_this =$('.s-wrap:first');
		//工作室右侧边栏挡住购买课程问题处理
		if($(window).width()>1550){
			w.tip_timer = w.setTimeout(function(){
				
					var $tip = w.tip_this.find('.t-des').removeClass('fadeOutLeft').addClass('animated fadeInLeft');
					if(isIE8) {
						$tip.show();
					} else {
						$tip.fadeIn();
					}
				
			}, 300);
		}
		$('.s-wrap .s-tips').click(function(){
			w.tip_this = $(this).parent('.s-wrap');
			var $tip = w.tip_this.find('.t-des').removeClass('fadeOutLeft').addClass('animated fadeInLeft');
			if(isIE8) {
				$tip.show();
			} else {
				$tip.fadeIn();
			}
		})
    }
	else
	{
		$('.s-wrap').hover(function(){
			w.tip_this = $(this);
			w.tip_timer = w.setTimeout(function(){
				var $tip = w.tip_this.find('.t-des').removeClass('fadeOutLeft').addClass('animated fadeInLeft');
				if(isIE8) {
					$tip.show();
				} else {
					$tip.fadeIn();
				}
			}, 300);
		}, function(){
			w.clearTimeout(w.tip_timer);
			var $tip = $(this).find('.t-des').removeClass('fadeInLeft').addClass('fadeOutLeft');
			if(isIE8) {//ie8 bug
				$tip.hide();
			} else {
				$tip.fadeOut();
			}
		});
	}
	
	$(".top-t").click(function(){
		$('html,body').animate({'scrollTop':0},300);
	});
})(window);

window.Util = {
    getCookie: function(name){
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    },
    setCookie: function (name, value, day) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + day);
        document.cookie = name + "=" + escape(value) + ((day == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/;domain=." + HT + ".com";
    },
    delCookie: function (name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = getCookie(name);
        if (cval != null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    getQueryStringByName: function (url, name) {
        url = url.replace(/&amp;/gi, '&');
        var result = url.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    },
    checkmail: function (m) {//检查邮箱
        return /^\w+\@[\.A-Za-z0-9]+\.[A-Za-z0-9]+$/.test(m);
    },
    districtArray: function (array) {//数组 去重
        var result = [];
        for (var i in array) {
            if (result.indexOf(array[i]) == -1 && array[i] != '') {

                result[i] = array[i];
            }
        }
        return result;
    },
    extractDomain: function (url) {
        var domain;
        //find & remove protocol (http, ftp, etc.) and get domain
        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        }
        else {
            domain = url.split('/')[0];
        }
        //find & remove port number
        domain = domain.split(':')[0];
        return domain;
    },
    isCrossDomin: function(d1, d2){
        return d1 != window.Util.extractDomain(d2);
    }
};

//region 用于SEM，注册时捕捉来源渠道
if(Util.getQueryStringByName(location.href, 'f_source') != ''
    && Util.getQueryStringByName(location.href, 's_source') != '') {
    var net_pro = Util.getQueryStringByName(location.href, 'net_pro'),
        parse_type = Util.getQueryStringByName(location.href, 'parse_type'),
        f_source = Util.getQueryStringByName(location.href, 'f_source'),
        s_source = Util.getQueryStringByName(location.href, 's_source'),
        pro_man_id = Util.getQueryStringByName(location.href, 'pro_man_id');
    Util.setCookie('CHANNEL_INFO', '&net_pro=' + net_pro + '&parse_type=' + parse_type + '&f_source=' + f_source + '&s_source=' + s_source + '&pro_man_id=' + pro_man_id, null);
}
if(Util.getCookie('CHANNEL_INFO')) {
    $('a[href*="login.php?do=reg&type=s"]').on('click', function(e){
        event.preventDefault();
        var href = $(this).attr('href');
        if(Util.getQueryStringByName(href, 'f_source') != ''
            && Util.getQueryStringByName(href, 's_source') != '') {
            window.location.href = href;
        } else {
            window.location.href = href + Util.getCookie('CHANNEL_INFO');
        }
        return false;
    });
}
//endregion


//检查手机号
function checkmobile(m) {
    return /^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1}|17[0-9]{1})+\d{8})$/.test(m);
}

$(function () {
    /*头部搜索*/
    var searchtype = 0;
    $(".search-list").click(function () {
        $(".search-box").toggle();
    });
    $(".search-box-list").click(function () {
        $(".search-list").html($(this).html());
        $(".search-box").toggle();
        searchtype = $(this).index();
    });
    $(".index-search-submit").click(function () {
        var keyword = $(".index-search-name").val();
        keyword = encodeURI(keyword);
        if (keyword != '') {
            sht.track('search', {'keyword': keyword});
            location.href = base_url + 'course-list.php?keyword=' + keyword;
        } else {
            MessageShow('请输入搜索内容');
        }
    });

    //热词搜索事件
    $("a[name='search_a']").click(function(){
    	var select_val = $(this).html().split('</span>')[1];
    	$(".index-search-name").val(select_val);
    	$(".index-search-submit").click();
    });

    $(".index-search-name").keyup(function (e) {
        if (e.keyCode == 13) {  //判断是否单击的enter按键(回车键)
            $(".index-search-submit").click();
        }
    });

    $('a').each(function () {
        var $this = $(this),
            href = $this.attr('href') + '';
        if (href.indexOf('#') == -1 || href.indexOf('javascript') == -1) {
            $this.on('click', function () {
                sht.track('click', {refer: document.referrer, url: href});
            });
        }
    });

    //注册统计
    $('a[href*="login.php?do=reg"]').on('click', function () {
        sht.track('register', {refer: document.referrer, url: $(this).attr('href') + '', uid: ''});
    });

});

//加入课程夹
function addcourse(id) {
    $.post("course.php?do=addclip", {'id': id}, function (d) {
        if (d.status == 0) {
            //教师收藏统计
            sht.track('care', {tid: id});
            $(".focus").html('已收藏');
            $(".focus").attr('href', '#');
			if($("#clip_count").length>0){
				$("#clip_count").html(parseInt($("#clip_count").text())+1);
			}
            //alerts('添加成功');
        } else {
            MessageShow(d.error);
        }
    }, "json")
}

//删除课程夹
function deleteClip(id) {
	 var cfm = new SH.confirmBox({
        centent: {
            title: '<span class="fs14">提示</span>',
            centent: '<p class="fs16 tac lh25 mt25">确认是否删除收藏？</p>'
        }
    });

    cfm.ok(function () {
    	cfm.hide();
    	$.post("course.php?do=deleteClip", {'id': id}, function (d) {
		if (d.status == 0) {
			MessageShow('删除成功');
			setTimeout('location.reload();', '1000');
        } else {
            MessageShow(d.error);
        }
    }, "json");
    }).cancel(function () {
        return false;
    });
    
}

// 加入到购物车
function moveToCart(curCourseId, teacher_id, tt_num) {
    var order_id = arguments[3] ? arguments[3] : false;
    if (curCourseId > 0 && teacher_id > 0 && tt_num > 0) {
        $.post('teacher.php?act=add_cart', {
            course_id: curCourseId,
            teacher_id: teacher_id,
            tt_num: tt_num
        }, function (res) {
            if (res['status'] == 0) {
                //更新右侧边栏购物车数量
                MessageShow('加入购物车成功');
                calcCartCount();
                if (order_id) {
                    deleoctall(order_id, true);
                }
            } else {
                MessageShow(res['error']);
            }
        }, 'json');
    }
}


function getPar(par){
    //获取当前URL
    var local_url = document.location.href;
    //获取要取得的get参数位置
    var get = local_url.indexOf(par +"=");
    if(get == -1){
        return false;
    }
    //截取字符串
    var get_par = local_url.slice(par.length + get + 1);
    //判断截取后的字符串是否还有其他get参数
    var nextPar = get_par.indexOf("&");
    if(nextPar != -1){
        get_par = get_par.slice(0, nextPar);
    }
    return get_par;
}

//弹出命名空间
window.SH = {};
//弹出父类
SH.alertBox = function () {
    var _self = this;
    this.argumentsArry = arguments;

}
SH.alertBox.protype = {
    //显示
    show: function () {
        var _self = this;
        this.BoxWrap.fadeIn(250, function () {
            _self.Box.css({"marginTop": -_self.Box.height() / 2, "marginLeft": -_self.Box.width() / 2});
        });
        return this;
    },
    //关闭
    hide: function () {
        this.BoxWrap.fadeOut(250);
        return this;
    },
    //设置弹出窗的宽高及样式（只是盒子的样式和可继承样式）
    setbox: function (boxStyle) {
        this.Box.css(boxStyle);
        return this;
    },
    //添加内容
    addCentent: function () {
        if (arguments[0]["title"]) {
            this.Titile.html(arguments[0]["title"])
        }
        ;
        if (arguments[0]["centent"]) {
            this.Centent.html(arguments[0]["centent"])
        }
        ;
        return this;
    },
    //关闭按钮
    cancel: function (fn) {
        var cancelBtn = this.CloseButton;
        var _self = this;
        cancelBtn.unbind("click");
        cancelBtn.click(function () {
            fn();
            _self.hide();
        });
        return this;
    },
    init: function () {
        var _self = this;
        //如果只有字符串
        if (typeof this.argumentsArry[0] == 'string') {
            this.addCentent({"title": "提示", "centent": this.argumentsArry[0]});

            if (this.argumentsArry.length = 2 && this.argumentsArry[1]) {
                this.BoxWrap.find(".bg").show();

            }
            else {
                this.BoxWrap.find(".bg").hide();
            }
        }
        else if (typeof this.argumentsArry[0] == 'object')//如果是传的是对象
        {
            if (this.argumentsArry[0] && this.argumentsArry[0]["box"]) {
                this.setbox(this.argumentsArry[0]["box"])
            }
            //是否改变内容；
            if (this.argumentsArry[0] && this.argumentsArry[0]["centent"]) {
                this.addCentent(this.argumentsArry[0]["centent"])
            }
        }
        ;
        this.CloseButton.one('click', function () {
            _self.hide();
        })
        this.show();
        return this;
    }
}
//错误弹出框
SH.ErrorBox = function () {
    SH.alertBox.call(this);
    this.argumentsArry = arguments;
    this.BoxWrap = $(arguments[0]["boxName"] || "#errorBox");
    this.Box = this.BoxWrap.find(".errbox");
    this.Titile = this.BoxWrap.find('h2 .title');
    this.Centent = this.BoxWrap.find('.errCentent');
    this.CloseButton = this.BoxWrap.find(".errClose,.err-sure");
    return this.init();

}
SH.ErrorBox.prototype = SH.alertBox.protype;

//确认框
SH.confirmBox = function () {
    SH.alertBox.call(this);
    this.argumentsArry = arguments;
    this.BoxWrap = $(arguments[0]["boxName"] || "#confirmBox");
    this.Box = this.BoxWrap.find(".confBox");
    this.Titile = this.BoxWrap.find('h2 .title');
    this.Centent = this.BoxWrap.find('.confCentent');
    this.CloseButton = this.BoxWrap.find(".confClose,.no");
    //确认按钮，避免向上继承，不写成原型方法
    this.ok = function (fn) {
        var _yes = this.BoxWrap.find(".yes");
        _yes.unbind("click");
        _yes.click(function () {
            fn();
        })
        return this;
    };
    return this.init();
}
SH.confirmBox.prototype = SH.alertBox.protype;


//下拉菜单模拟/
$(function () {
    LIKE_SELECT = {};//命名空间
    LIKE_SELECT.ismosdown = false;//鼠标状态保存
    LIKE_SELECT.li_h = 39;//li行高
    LIKE_SELECT.li_len = 4;
    LIKE_SELECT.pBox_h = 155;//下拉菜单高度
    //点击展开下拉菜单
    $(".like_select").find(".like_select_control,.like_select_value").click(function (event) {
        event.stopPropagation();
        $(".like_select").not($(this).parent(".like_select")).removeClass("on").find(".like_select_Options").stop().slideUp(100);
        $(this).parent().toggleClass("on");
        $(this).siblings(".like_select_Options").stop().slideToggle(100);
    });
    //点击选项；
    $(".like_select .like_select_Options").delegate("li", "click", function () {
        $(this).addClass("current").siblings("li").removeClass("current");
        $(this).parents(".like_select:first").find(".select_value:first").val($(this).attr("data-value"));
        $(this).parents(".like_select:first").find(".like_select_value").html($(this).find("a").html());
        $(this).parents(".like_select_Options:first").slideUp(100);
        $(".like_select").removeClass("on");
    });
    //高度有溢出时，添加滚动条
    //更新下拉
    LIKE_SELECT.update = function () {
        var obj = arguments[0] || $(".like_select_Options");
        obj.each(function () {
            var a = $(this).find("li").length * LIKE_SELECT.li_h;
            var b = LIKE_SELECT.pBox_h;
            if ($(this).find("li").length < LIKE_SELECT.li_len) {
                $(this).css("height", a - 1);
                $(this).find(".sol_box").hide();
            }
            if ($(this).find("ul").length > 0) {
                if (LIKE_SELECT.pBox_h < $(this).find("li").length * LIKE_SELECT.li_h - 1) {
                    if ($(this).find(".sol_box").length == 0) {
                        var sol = $('<div class="sol_box"><div class="sol"></div></div>');
                        $(this).append(sol);
                    }
                    $(this).css("height", LIKE_SELECT.pBox_h);
                    $(this).find(".sol_box").show();
                    $(this).find(".sol").css("height", b * b / a);
                }
            }
        });
    }
    LIKE_SELECT.update();
    //选项hover 时的scroll事件
    $(".like_select_Options ul").scroll(function () {
        var top = $(this).scrollTop();
        var a = $(this).find("li").length * LIKE_SELECT.li_h;
        var b = LIKE_SELECT.pBox_h;
        var c = b * b / a;
        $(this).parent().find(".sol").css("top", top * (b - c) / (a - b));
    });
    //点击滚动条背景部分
    $(document).delegate('.sol_box', 'click', function (event) {
        event.stopPropagation();
        var p_y = event.pageY;
        var p_s = $(this).offset().top;
        var a = $(this).parent().find("ul li").length * LIKE_SELECT.li_h;
        var b = LIKE_SELECT.pBox_h;
        var c = $(this).find(".sol").height();
        var top = p_y - p_s > LIKE_SELECT.pBox_h - c ? LIKE_SELECT.pBox_h - c : p_y - p_s - c / 2 > 0 ? p_y - p_s - c / 2 : 0;
        $(this).find(".sol").css("top", top);
        $(this).parent().find("ul").scrollTop(top * (a - b) / (b - c));
    });
    //点击滚动条 1. 按下
    $(document).delegate('.sol', 'mousedown', function (event) {
        event.stopPropagation();
        $(this).addClass("sol_this");
        LIKE_SELECT.ismosdown = true;
    });
    //点击滚动条 2.拖动
    $(document).mousemove(function (event) {
        event.stopPropagation();
        if (LIKE_SELECT.ismosdown) {
            var p_y = event.pageY;
            var p_s = $(".sol_this").parent().offset().top;
            var a = $(".sol_this").parents(".like_select_Options:first").find("ul li").length * LIKE_SELECT.li_h;
            var b = LIKE_SELECT.pBox_h;
            var c = $(".sol_this").height();
            var top = p_y - p_s > LIKE_SELECT.pBox_h - c ? LIKE_SELECT.pBox_h - c : p_y - p_s - c / 2 > 0 ? p_y - p_s - c / 2 : 0;
            $(".sol_this").css("top", top);
            $(".sol_this").parents(".like_select_Options:first").find("ul").scrollTop(top * (a - b) / (b - c));
        }
    });
    //点击滚动条 3.停止
    $(document).mouseup(function (event) {
        event.stopPropagation();
        LIKE_SELECT.ismosdown = false;
        $(".sol_this").removeClass("sol_this");
    });
    //点击空白处
    $(document).click(function () {
        $(".like_select.on").removeClass("on");
        $(".like_select_Options").stop().slideUp(100);
    });

    // end 下拉菜单模拟

    //MessageShow
    //插入节点
    if ($("#errorBox").length == 0) {
        $("body").append('<div class="errorBox" id="errorBox"><div class="errorBoxWarp"><div class="bg"></div><div class="errbox"><h2 class="errtitle"><a href="javascript:void(0)" class="errClose">×</a><span class="title">提示</span></h2><div class="errCentent"></div><div class="errorBox-sure"><a class="button_sty1 err-sure" href="javascript:;">确定</a></div></div></div></div>');
    }
    $("#errorBox .errClose,#errorBox .err-sure").click(function () {
        $("#errorBox").hide();
    });
});

function MessageShow(Content, isMask) {
    $("#errorBox .errCentent").html(arguments[0]);
    if (arguments.length = 2 && arguments[1]) {
        $("#errorBox .bg").show();
    }
    else {
        $("#errorBox .bg").hide();
    }
    $("#errorBox").show();
}

//登录的弹窗
$(function () {
    $('#weixin').show();
    //input输入框效果
    $(".popup-login-input input").bind({
        'focus': function () {
            $(this).parent("div").css({"border": "1px solid #2D9258"});
        }, 'blur': function () {
            $(this).parent("div").css({"border": "1px solid #E7E7E7"});
        }, 'input propertychange': function () {

        }
    })
    //设置radio单选
    $(".poloradio input").click(function () {
        $(this).parent().siblings().children("input").attr("checked", false);
    })
    //关闭登录窗口
    $(".login-esc").click(function () {
        $("#popup-login").hide();
    })
    //请求数据
    $("#poplogin").click(function () {
        var $account = $("#account").val();
        var $passWord = $("#password").val();

        var type = $(".logintype:checked").val();

        $.ajax({
            type: 'post',
            url: 'http://sso.sanhao.com/',
            async: true,
            data: {'account': $account, 'password': $passWord, 'type': type},
            dataType: 'JOSN',
            success: function (data) {
                if (data.status == 0) {
                    //denglu
                } else {
                    MessageShow(data.error);
                }
            }

        });
    });

    //左侧导航事件
    $(".course_indxe_centent").hover(
        function(){},
        function(){

            $(".course_indxe_centent li").removeClass("on");
            $(".course_indxe_depth2").hide();
            $(".course_indxe_depth2 .depth2_cent").hide();
        }
    );
    $(".course_indxe_centent li").hover(
        function(){
            var index = $(".course_indxe_centent li").index(this);
            $(".course_indxe_centent li").removeClass("on");
            $(this).addClass("on");
            $(".course_indxe_depth2").show();
            $(".course_indxe_depth2 .depth2_cent").hide().eq(index).stop(true,true).fadeIn(200);
        },
        function(){
            var index = $(".course_indxe_centent li").index(this);
        }
    );
    $(".hasson").hover(
        function(){
            $(this).addClass("current").find(".nav_bax_depth2").stop().slideDown(300);
        },
        function(){
            $(this).removeClass("current").find(".nav_bax_depth2").stop().slideUp(100);
        }
    );
    $(".nav_menu").hover(
        function(){
            $(".course_indxe_centent").stop().slideDown(150);
        },
        function(){
            $(".course_indxe_centent").stop().slideUp(150);
        }
    );

});

/***********登录和注册的弹框开始****************/
	var num = 60;
	var ord = 1;
	var isSubmit = false;

	function checkpwd() {
		var pwd1 = $('#banner-password1-reg').val(),
			pwd2 = $('#banner-password2-reg').val();
		if (pwd1 == pwd2 && pwd1.length >= 6 && pwd1.length <= 20) {
			return true;
		}
		else if (pwd1 == '' || pwd2 == '') {
			MessageShow('密码不能为空！');
			return false;
		}
		else if (pwd1.length < 6 || pwd1.length > 20 || pwd2.length < 6 || pwd2.length > 20) {
			MessageShow('密码为6到20位字符组合！');
			return false;
		}
		else if (pwd1 != pwd2) {
			MessageShow('两次输入的密码不一致');
			return false;
		}
		else {
			return false;
		}
	}

	function changeTime() {
		var currobj = $('#'+$('#verify').attr('fid')).find('[name="reg-act-code"]');
		if (num > 0) {
			num--;
			currobj.html('等待(' + num + ')');
		} else {
			clearInterval(timedesc);
			currobj.html('验证码');
			currobj.removeClass('get_v_grey');
			$('#verify_code').attr('type','text');
			ord = 1;
			num = 60;
		}
	}


	//登录
	function c_log(fid){
		var $f = $('#' + fid),
			$phone = $f.find('[name="log-phone"]'),
			$pwd = $f.find('[name="log-pwd"]'),
			$sbt = $f.find('[name="log-submit"]');
		$f.IsIndexLoginFree = true;
		$sbt.on('click', function(){
			var $this = $(this);
			if (!$f.IsIndexLoginFree) {
				MessageShow("请稍后再试！");
				return false;
			}
			$f.IsIndexLoginFree = false;
			var account = $phone.val();
			var password = $pwd.val();
			if (account == '') {
				MessageShow('请填写用户名');
				return false;
			}

			if (password == '') {
				MessageShow('请填写密码');
				return false;
			}
		
			$this.val("正在登录");
			//登录
			function pp_login(d){
				if (d.status == 0) {
					if (d.data.user_type != 0) {
						$.ajax({
							url: 'http://sso.' + HT + '.com/index.php?act=ajax_sign',
							type: 'GET',
							dataType: 'jsonp',
							jsonp: 'callback',
							data: {'account': account, 'password': password, 'type': d.data.user_type},
							success: function (data) {
								$f.IsIndexLoginFree = true;
								//console.log(data)
								if (data.status != 0) {
									$this.val("登录");
									MessageShow(data.data.error);
								} else {
									$this.val("登录成功");
									if (d.data.user_type == 1) {
										location.href = "user.php";
									} else {
										window.location.reload();
										//window.location.href = window.location.href;
									}
								}
							}
						});
					}
					else {
						$f.IsIndexLoginFree = true;
						$this.val("登录");
						MessageShow(d.error);

					}

				} else {
					$f.IsIndexLoginFree = true;
					$this.val("登录");
					MessageShow(d.error);
				}
			}
			//pp_login 
			shSDK.api('user', 'user_type_get', pp_login, {'user_account': account});
			
		});
		return this;
	}
	//注册
	function c_reg(fid, isAll) {
		var _self = this;
		var $f = $('#' + fid),
                $phone = $f.find('[name="reg-phone"]'),
                $code = $f.find('[name="reg-code"]'),
                $actCode = $f.find('[name="reg-act-code"]'),
                $pwd = $f.find('[name="reg-pwd"]'),
                $pwdr = $f.find('[name="reg-pwd-rep"]'),
                $sbt = $f.find('[name="reg-submit"]');
                //this.callback1 = function(){alert('aa')};
		var IsOpenImageverify = true;//控制是否需要图片验证码码的开关
		function checkmobile(m) {
			if (m.length == 0) {
				return { valid: 0, msg: '请输入手机号' };
			} else if (/^(((13[0-9]{1})|15[0-9]{1}|18[0-9]{1}|14[0-9]{1}|17[0-9]{1})+\d{8})$/.test(m)) {
				return { valid: 1 };
			} else {
				return  { valid: 0, msg: '手机号输入错误' };
			}
		}

		function checkcode(c) {
			if (c.length == 0) {
				return { valid: 0, msg: '请输入验证码' };
			} else if (/^[0-9]{6}$/.test(c)) {
				return { valid: 1 };
			} else {
				return  { valid: 0, msg: '输入验证码的格式错误' };
			}
		}

		function checkpwd($pwd, $pwdr) {
			var pwd1 = $pwd.val(),
				pwd2 = $pwdr.val();
			if (pwd1 == pwd2 && pwd1.length >= 6 && pwd1.length <= 20) {
				return { valid: 1 };
			} else if (pwd1 == '' || pwd2 == '') {
				return { valid: 0, msg: '密码不能为空' };
			} else if (pwd1.length < 6 || pwd1.length > 20 || pwd2.length < 6 || pwd2.length > 20) {
				return { valid: 0, msg: '密码为6到20位字符组合' };
			} else if (pwd1 != pwd2) {
				return { valid: 0, msg: '两次输入的密码不一致' };
			} else {
				return { valid: 1 };
			}
		}

		$actCode.on('click', function(){
			var mobile = $phone.val(),
				validMobile = checkmobile(mobile),
				step = true;
			if(!validMobile.valid) {
				step = false;
				MessageShow(validMobile.msg);
			}

			if(!step){ return false};
			function repeatCallback(data){
                if (data.status == 0) {
                    MessageShow('该手机号已注册。');
                    return;
                }
                if(IsOpenImageverify)
                {
                    //需要图片验证码时
                    $('.check-float-bg').show();
                    $('#phone-code').attr('type','text');
                    $('#phone-code').val('');
                    $('#verify_code').val('');
                    $('#verify').attr('src',BASE_URL+'verify.php?rand='+Math.random());
                    $('#verify').attr('curr-reg-phone',$phone.val());
                    $('#verify').attr('fid',fid)
                }
            }
			shSDK.api('user', 'repeat', repeatCallback, { account: mobile});
		});

		$sbt.on('click', function () {
			if(_self.callback1)
			{
				_self.callback1();
			}
			
			if (isSubmit) {
				MessageShow('正在处理，请稍等...');
				return false;
			}
			var mobile = $phone.val(),
				vcode = $code.val(),
				pwd1 = $pwd.val(),
				pwd2 = $pwdr.val(),
				usertype = 2;//学生

			//valid
			var validMobile = checkmobile(mobile),
				validCode = checkcode(vcode),
				validPwd = checkpwd($pwd, $pwdr);

			var step = true;
			if(!validMobile.valid) {
				step = false;
				MessageShow(validMobile.msg);
				return false;
			}
			if(!validCode.valid) {
				step = false;
				MessageShow(validCode.msg);
				return false;
			}
			if(!validPwd.valid) {
				step = false;
				MessageShow(validPwd.msg);
				return false;
			}

			if(!step) return false;

			if (checkmobile(mobile) && checkpwd($pwd, $pwdr)) {
				//发送请求
				isSubmit = true;
				//注册
				function reg_newCallback(data){
					isSubmit = false;
					if (data.status === 0) {
	
						//百度注册统计
						var ifm="<iframe id='ifm' style='display:none'></iframe>";
						$('body').append($(ifm));
						document.getElementById("ifm").src = "http://s.sanhao.com/rec-count.html";
	
						//注册统计
						sht.track('register', {
							refer: document.referrer,
							url: window.location.href,
							uid: mobile,
							type: usertype == 1 ? 't' : 's'
						});
						MessageShow('恭喜您注册成功,免费送您一小时课时券！');
						//登录
						$.ajax({
							url: 'http://sso.' + HT + '.com/index.php?act=ajax_sign',
							type: 'GET',//sso登录使用get方式请求
							dataType: 'jsonp',
							jsonp: 'callback',
							data: {
								'account': mobile,
								'password': pwd1,
								'type': usertype
							},
							success: function (data) {
								setTimeout(function () {
									window.location.reload();
								}, 2000);
							}
						});
					} else {
						MessageShow(data.error);
					}
				}

                if(window.Util.isCrossDomin(document.domain, window.BASE_URL)){
                    $.ajax({
                        url: window.BASE_URL + shConf.api + "?act=user&method=register",
                        data: {user_account: mobile, user_password:pwd1, user_type:usertype, user_code:vcode},
                        dataType: "jsonp",
                        jsonp: "callback",
                        success: reg_newCallback,
                        error:function(){
                            alert('通信失败');
                        }
                    });
                } else {
                    shSDK.api('user', 'register', reg_newCallback, {user_account: mobile, user_password:pwd1, user_type:usertype, user_code:vcode});
                }
			} else {
				isSubmit = false;
				MessageShow('请输入正确的手机号码');
			}
		});
		return this;
	}
	
 	c_log('form-log-dialog');//弹出层登录调用

	var x = c_reg('form-reg-dialog', false);//弹出成注册调用

	//点击刷新验证码
	$('#verify').click(function(){
		var randNumber = Math.random();
		$(this).attr('src',BASE_URL+'verify.php?random='+randNumber);
	});

	// 图片验证码
	$('.img_confirm').click(function(){
		 var verifyCode = $('#verify_code').val();
		 if(!verifyCode){
			alert('请输入正确图片验证码');
			return false;
		 }
		var mobile = $('#verify').attr('curr-reg-phone');
		var smstype = 'reg';
		if(!mobile){
			alert('请输入正确的手机号码');
			return false;
		}
		if(ord){
			function codeCallback(data){
				  //console.log(data);
				  if (data.status == 0) {
					  alert('已向手机' + mobile + '发送验证码，请查收');
					  //重发计时
					  timedesc = setInterval('changeTime()', 1000);
					  ord = 0;
					  $('.check-float-bg').hide();
					  $('#verify_code').attr('type','hidden');
				  } else {
					  $(".reg-yzm").removeClass("get_v_grey").html('获取验证码');
					  alert(data.error);
				  }
			}
			//调用
			if (checkmobile(mobile)) {
                if(window.Util.isCrossDomin(document.domain, window.BASE_URL)) {
                    $.ajax({
                        url: window.BASE_URL + shConf.action + "?act=sms&method=reg",
                        data: {mobile:mobile, verifyCode:verifyCode},
                        dataType: "jsonp",
                        jsonp: "callback",
                        success:function(d){
                            //console.log(d);
                            if(typeof(d.status)=='undefined'){
                                alert('请求服务器失败');
                                return false;
                            }
                            if(shConf.userCheck && d.code==205){
                                alert(shConf.sso);
                                //location.href = shConf.sso;
                                return false;
                            }

                            codeCallback(d);
                        },
                        error:function(d){
                            //console.log(d);
                            alert('通信失败');
                        }
                    });
                } else {
                    shSDK.action('sms', 'reg', codeCallback, {mobile:mobile, verifyCode:verifyCode});
                }
			} else {
			  MessageShow('请输入正确的手机号码');
			  return false;
			}
		}
	});


	 // 弹出注册框滑动效果
	$('.index-reg-box-cen-col a').click(function(){
		if(!$(this).hasClass('cent'))
		{
			$(this).addClass('cent').siblings().removeClass('cent')
		}
		var index = $(this).index();
		//$(".index-reg-box-cen-in").css('marginLeft',-index*440)
		$(".index-reg-box-cen-in").animate({"marginLeft":-index*440},400)
	});

	//关闭弹出注册框
	$('.close-this').click(function(){
		$(".teacher-list-reg-bg").fadeOut(300);
	});
	//图片验证码弹窗的关闭
	$('.check-float .cancel').click(function(){
		$('.check-float-bg').hide();
	});
	//图片验证码刷新
	$('.check-float .value span').click(function(){
		$('#verify').attr('src',BASE_URL+'verify.php?rand='+Math.random());
	});

/***********登录和注册的弹框结束****************/
/*
 *shSDK 静态化处理
 */
 //静态化配置
var shConf = {
    userCheck: false,//用户验证
    api:'/api.php',
    action:'/do.php',
    sso:'http://sso.sanhao.com/'
};

var shSDK = (function(isCheck){

    var __this = this;

    __this.user = {};//用户对象

    //ajax请求
    __this.request = function(url, act, method, func, data){
		var data_type = 'json';
		if(window.Util.isCrossDomin(document.domain, window.BASE_URL)) {
			data_type = 'jsonp';
		}
    	$.ajax({
            url: window.BASE_URL + url + "?act=" + act + "&method=" + method,
            data: data,
            dataType: data_type,
            success:function(d){
                //console.log(d);
                if(typeof(d.status)=='undefined'){
                    alert('请求服务器失败');
                    return false;
                }
                if(shConf.userCheck && d.code==205){
                    alert(shConf.sso);
                    //location.href = shConf.sso;
                    return false;
                }
                func(d);
            },
            error:function(){
                alert('通信失败');
            }
        });
    }

    __this.api = function(act, method, func, data){
      __this.request(shConf.api, act, method, func, data);
    }
    __this.action = function(act, method, func, data){
     	 __this.request(shConf.action, act, method, func, data);
    }

    //初始化请求，同步
    __this.init = function(isCheck){
        //console.log(isCheck);
        if(isCheck){//用户是否必需验证登录
            $.ajax({
                url: BASE_URL+shConf.action + "?act=user&method=info",
                async: false,//必需开启为同步
                dataType: 'jsonp',
                success:function(d){
                    if(typeof(d.status)=='undefined'){
                        alert('请求服务器失败');
                        return false;
                    }
                    if(d.code==205){
                        //alert(shConf.sso);
                        location.href = shConf.sso;
                        return false;
                    }
                    if(d.status==0){
                        __this.user = d.data;
                    }else{
                        alert(d.error);
                    }
                },
                error:function(){

                }
            });
        }
    }

    __this.init(isCheck);

    return {
        user:__this.user,
        api:__this.api,
        action:__this.action

    }
})(shConf.userCheck);
//意见反馈
$('.head_login_left li .feedback').click(function(){
	var feedback = new SH.confirmBox({"boxName":"#feedback"});
    feedback.ok(function(){
        if($("#fkyj").val() == "")
        {
            MessageShow("请输入内容");
            return;
        }
        $("#feedback_submit").click();
        feedback.hide();
        //MessageShow("提交成功");
    });
});
$(function() {
	//IE也能用textarea
	$("textarea[maxlength]").keyup(function() {
		var area = $(this);
		var max = parseInt(area.attr("maxlength"), 10); //获取maxlength的值
		if (max > 0) {
			if (area.val().length > max) { //textarea的文本长度大于maxlength
				area.val(area.val().substr(0, max)); //截断textarea的文本重新赋值
			}
		}
	});
	//复制的字符处理问题
	$("textarea[maxlength]").blur(function() {
		var area = $(this);
		var max = parseInt(area.attr("maxlength"), 10); //获取maxlength的值
		if (max > 0) {
			if (area.val().length > max) { //textarea的文本长度大于maxlength
				area.val(area.val().substr(0, max)); //截断textarea的文本重新赋值
			}
		}
	});
});
