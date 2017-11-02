
	// 定位图

	$(function(){
		$("#close").click(function(){
			$("#position").css("display","none");
		})
		setTimeout(function(){
			$("#position").css("display","none");
		},5000)
	})

	// 导航

	$(function(){
		for (var j = 0; j < $("#nav").find("dd").length; j++) {
			$("#nav").find("dd").eq(j).mouseenter(function(){
				$("#nav").find(".down").slideUp(500);
				$("#nav").find(".down").eq($(this).index()-1).stop().slideDown(500);	
			})	
		}
		$("#nav").find("dd").mouseleave(function(){
			$("#nav").find(".down").stop(false,true).slideUp(500);
		})
	})
	//轮播图
	$(function(){
		var num = 0;
		$("#ul").find("li").eq(0).show().siblings().hide();
		$("#ol").find("li").mouseover(function(){

			num = $(this).index();	
			fun(num);
		})
		$("#left").click(function(){
			if (num <= 0) {
				num = 7;
			}else{
				--num;	
			}
			fun(num);
		})
		$("#right").click(function(){
			if (num >= 7) {
				num = 0;
			}else{
				++num;	
			}
			fun(num);
		})

		function fun(num){
			$("#ol").find("li").eq(num).addClass("con").siblings().removeClass("con");
			$("#ul").find('li').eq(num).fadeIn().siblings().fadeOut();

		}
		var clear = null; 
		clear = setInterval(play,3000)

		function play(){
			if (num >= 7) {
				num = 0;
			}else{
				++num;
			}
			fun(num);
		}

		$("#solider").mouseover(function(){
			clearInterval(clear);
		});
		$("#solider").mouseout(function(){
			clear = setInterval(play,3000)

		});
	})

	$(function(){
		//微信
		$("#tubiao").mouseenter(function(){
			$("#weixin").css("display","block");
		}).mouseleave(function(){
			$("#weixin").css("display","none");
		})
		//返回顶部
		$("#back").click(function(){
		window.scrollTo(0, 0);
	})
	})