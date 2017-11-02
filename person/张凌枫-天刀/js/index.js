/*
* @Author: Administrator
* @Date:   2017-05-30 18:08:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-19 08:22:06
*/

'use strict';



function ppp(e){
		console.log((e));
		console.log(JSON.parse(e));
	}

$(function(){

	
		for (var k in guids) {
			var gu = guids[k];
			var list ="";
			var on;
			        for (var i = 0; i < gu.datas.length; i++) {				//遍历新闻
			        	
				         list += "<li><a href=''>["+ gu.name;
				         list +="]<span>" + gu.datas[i];
				         list +="</span><span class='time'>" + gu.times[i];
				         list +="</span></a></li>";
			        };
			        k==0? on = "on":on="";
			       
			var val = "<dl class='" + on 
			val +="'><dd><img class='pic' src='images/inn_banner" + (k*1+1);
			val +=".png' /><div class='list'><h2>" + gu.name;
			val +="</h2><p class='xq'>" + gu.bg;
			val +="<a href=''>详情</a></p><div class='text'><p>操作难度</p><p class='clear diff'><i></i><i></i><i></i><i class='cla'></i></p>";
			val +="<span>主武器："+ gu.arm;
			val +="</span><span>副武器："+ gu.arms;
			val +="</span><a href='><img src='images/inn_play.jpg' alt=''></a></div><div class='sources'><h3>详情</h3>";
			val +="<em><img src='images/img_19.png' alt=''></em><ul>"+ list;
			val +="</ul></div></div></dd></dl>";
			
			$(".guide_banner").append(val);

			//门派指导遍历
			
	    }



	    for (var k in iden) {

	    	var gu = iden[k];
	    	var list =  "";

	    	 for (var i = 0; i < gu.datas.length; i++) {		//遍历新闻
			        	
				         list += "<li><a href=''>["+ gu.name;
				         list +="]<span>" + gu.datas[i];
				         list +="</span><span class='time'>" + gu.times[i];
				         list +="</span></a></li>";
			        };

	    	 var data = "<dl ><dt>";
			 data += "</dt><dd><img src='images/inn_img_" + ( 2+k );
			 data += ".jpg' alt=''><div class='text'><h2>" + gu.name;
			 data += " </h2><p>" + gu.bg;
			 data += "<span>详情</span></p><div class='list'><div><h4>攻略心得</h4><em><img src='images/img_19.png' alt=''></em></div>";
			 data += "<ul>"+ list;
			 data +="</ul></div></div></dd></dl>";
			 $(".guide_banner_list").append(data);	

	    };
			//身份玩法遍历
	    $(".guide_banner dd").eq(0).remove(".pic")
	    //	遍历图片
			
    	$(".new_banner").eq(0).find('.new_list_c').append(ergodic(listNow));
    	$(".new_banner").eq(1).find('.new_list_c').append(ergodic(listNew));
    	$(".new_banner").eq(2).find('.new_list_c').append(ergodic(list1));



	    function ergodic(arr){			//封装遍历函数
		    var list ="";
		    for (var k in arr) {
		    	var gu = arr[k];
		    	list +="<ul class='clear'>"
		    	for (var i = 0; i < gu.datas.length; i++) {
				        	
				        	if (gu.datas[i].indexOf("【") == -1) {	//截取内容
				        		var tit = "";
				        		var con = gu.datas[i].slice(0 ,gu.datas[i].indexOf("<"));
				        	}else{
				        		var tit = gu.datas[i].slice(0,gu.datas[i].indexOf("】")+1);
				        		var con = gu.datas[i].slice(gu.datas[i].indexOf("】")+1 ,gu.datas[i].indexOf("<"));
				        	};
				        	var time = gu.datas[i].slice(gu.datas[i].indexOf("<") + 1,gu.datas[i].indexOf(">"));
					        list +="<li><a href='#'><span>" + tit;
	                        list +="</span><span class='a'>"+ con;
	                        list +="</span><span class='b'>" + gu.times[i];
	                        list +="</span></a></li>";
				};
				list += "</ul>";
		    };			// for in end
				return  list;
	    }
				







	var packs = 0, pack_tt;
	$("#main .packs_banner li").eq(packs).show();
	$("#main .packs_banner i").mouseover(function(event) {
		 clearInterval(pack_tt);
		packs = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$("#main .packs_banner li").eq(packs).fadeIn(500).siblings().fadeOut(500);
	});
	//鼠标经过
	$("#main .packs_banner").mouseenter(function(event) {
		clearInterval(pack_tt);
	});

	$("#main .packs_banner").mouseleave(function(event) {
		pack_tt = setInterval(pack,3000);
	});

	pack_tt = setInterval(pack,3000);
	function pack(){
		++packs > 4 ? packs = 0 :packs;
		$("#main .packs_banner i").eq(packs).addClass('on').siblings().removeClass('on');
		$("#main .packs_banner li").eq(packs).fadeIn(500).siblings().fadeOut(500);
	}

	//  main packs_banner   轮播图
	//   
	
	
	$("#list dt").mouseenter(function(event) {

		$(this).parent().addClass('on').animate({width:"559px"},90).siblings().removeClass("on").animate({width:"63px"},90);
	});

	//#list   手风琴

// ---------------------------------------------------------------

	$("#main .middle .rotate li").mouseover(function(event) {	//	鼠标经过
		clearInterval(web_time);
		$(this).addClass('on').siblings().removeClass('on');
		var len = $(this).index() * $(this).parents(".main_banner").width();
		$(this).parents(".main_banner").find(".list ul").stop().animate({left:-len +"px"},1000)
	});

	$("#main .middle .rotate li").mouseleave(function(event) {	//鼠标离开
		 web_time = setInterval(web_times,4000);
	});
	var web_time = setInterval(web_times,4000);
	function web_times(){				//定时器
		var t = $("#main .middle .rotate").find('.on').index();			//获取图片位置
		++t > $("#main .middle .rotate li").length/2 - 1 ? t = 0 :t;
		 var l = t * $("#main .middle .main_banner").width();
		 $("#main .middle .rotate li").eq(t).addClass('on').siblings().removeClass('on');
		 $("#main .main_banner .list ul").stop().animate({left:-l +"px"},1000)

	}
			//滑动轮播图
	$("#main .middle .main_banner").eq(1).hide();		//隐藏轮播图
	$("#main .middle .cur a").click(function(event) {
		$(this).addClass('on').siblings().removeClass('on');		
			$("#main .middle .main_banner").eq($(this).index()).show().siblings(".main_banner").hide();
	});
			//切换轮播图

	$(".new_banner .new_list li").click(function(event) {
		var ind = $(this).index();					//获取当前位置
		$(this).addClass('on').siblings().removeClass('on').parent().siblings().animate({left:(ind * 50) + "px"},600) 
		var l = (ind) * ($(".new_banner ").width() + 19);
		$(this).parents(".new_banner").find(".new_list_c").stop().animate({left:-l +"px"},600)
	});
			//新闻轮播图
	

	$("#item .item_banner dt").each(function(i){
		$(this).css('background-position', -68 * i + "px 0");
	})
		//遍历官网手风琴
	var check = 0;
	$("#item .item_banner dl").click(function(event) {

		if ($(this).index() == check) {			//判断是否连续点击
			check = -1;

			$(this).animate({width:"68px"},300,function(){							//回调函数
				$(this).removeClass('on');
			}).next().addClass('on').stop().animate({width:"459px"},300);

		}else{
			check = $(this).index();
			$(this).addClass('on').stop().animate({width:"459px"},300).siblings("dl")
				.animate({width:"68px"},300,function(){							//回调函数
					$(this).removeClass('on');
			})
		};
	});
			//官网手风琴
	




	// -----------------------------------------------------
	


	$(".guide_banner .nav li a").each(function(i, el) {
		if (i ==0) {
			$(this).css('background-position', "right " + -60 * i + "px");
		}else{
			$(this).css('background-position', "0px " + -60 * i + "px");
			
		};
	});
		//门派指引小图片遍历
		
	$(".guide_banner_list dt").each(function(i, el) {
		$(this).css('background-position', -i*59 + "px 0px");
		$(".guide_banner li").css('background-position', "0px " + 60 * i + "px");
	});
		//身份玩法图片遍历
		

	$(".guide_banner .nav li"). click(function(event) {
		var i = $(this).index();
		$(".guide_banner .nav li a").each(function(i, el) {
			$(this).css('background-position', "0px " + -60 * i + "px");
		});
		$(this).find('a').css('background-position', "right " + -60 * i + "px");
		$(".guide_banner dl").eq(i).addClass('on').siblings().removeClass('on');

	});
			//门派指导轮播图

	$(".guide_banner_list dl").eq(0).css('width', '420px').addClass('on');

	$(".guide_banner_list dl").click(function(event) {
		$(this).addClass('on').stop().animate({width:"420px"},600).siblings('dl').animate({width:"59px"},600).removeClass('on');

	});
		//身份玩法轮播图


})