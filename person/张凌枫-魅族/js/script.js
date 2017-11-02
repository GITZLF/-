

	$(function(){

		// 首页

		//第一个轮播图
		
		$("#dian").find("b").click(function(){
			var a = $(this).index();
			$(this).addClass("con").siblings().removeClass("con");
			$("#solider1").find("ul").animate({left:a * (-1920)},300);
		})

		//第二个轮播图
		
		$("#lun").find("li").eq(0).css("left","0px").siblings().css("left","1376px");
			var num = 0;
			$("#yuanleft").click(function(){

				$("#lun").find("li").eq(num).stop(true,false).animate({"left":"1376px"},300);

				 if ((num-1) < 0) {
				 	num = 2;
				 }else{
				 	num--
				 }
				 $("#lun").find("li").eq(num).css("left","-1376px").stop(true,false).animate({"left":"0px"}, 300)
				 con();
			})

			$("#yuanright").click(function(){

				$("#lun").find("li").eq(num).stop(true,false).animate({"left":"-1376px"},300);

				 if ((num+1) > 2) {
				 	num = 0;
				 }else{
				 	num++
				 }
				 $("#lun").find("li").eq(num).css("left","1376px").stop(true,false).animate({"left":"0px"}, 300)
				 con();
			})

			$("#sandian").find("span").click(function(){
				var b = $(this).index();
				if (b > num) {

					$("#lun").find("li").eq(num).stop(true,false).animate({"left":"-1376px"},300);
					num = b;
					$("#lun").find("li").eq(num).css("left","1376px").stop(true,false).animate({"left":"0px"}, 300);
					con();
				}else{

					$("#lun").find("li").eq(num).stop(true,false).animate({"left":"1376px"},300);
					num = b;
					$("#lun").find("li").eq(num).css("left","-1376px").stop(true,false).animate({"left":"0px"}, 300);

				}
				con();
			})
			function con(){
				$("#sandian").find("span").eq(num).addClass("con").siblings().removeClass("con");
			}


			//返回顶部
			$(window).scroll(function(){
				if($(window).scrollTop() > 1000 ){
					$("#backtop").css("display","block");
				}else{
					$("#backtop").css("display","none");
				}
			})

			// 变大
			$("#bianda").find("img").mouseenter(function(){
				$(this).css("transform","scale(1)");
			}).mouseleave(function(){
				$(this).css("transform","scale(0.9)");
			})

			//
			$("#span").mouseenter(function(){
				$("#login").css("display","block");
			}).mouseleave(function(){
				$("#login").css("display","none");
			})

			$("#login").mouseenter(function(){
				$("#login").css("display","block");
			}).mouseleave(function(){
				$("#login").css("display","none");
			})
	})
	
	
	$(function(){
		// 商品列表页
		
		//顶部广告
		$(".x").click(function(){
			$(".topbanner").animate({height:"0px"},300);
			$(".topimg").css("display","none");
		})

		//导航条特效
		
		$("#nav").find("li").eq(0).siblings().mouseenter(function(){
			var nav = $(this).index()-1;
			$(".hnav").find(".hidenav").eq(nav).stop(false,true).slideDown("400").siblings().hide().find("a").css({"transform":"translateX(80px)","opacity": 0});
			$(".hnav").find(".hidenav").eq(nav).find("a").css({"transform":"translateX(0px)","opacity": 1});
			$(".topnav").css({"backgroundColor":"#fff"});
		})

		$(".nav_1").mouseleave(function(){
			$(".hidenav").stop(false,true).slideUp("400");
			$(".hidenav").find("a").css({"transform":"translateX(80px)","opacity": 0});
			setTimeout(function(){
				$(".topnav").css({"backgroundColor":""});
			},310);
		});

		$(".hnav").find(".hidenav").eq(0).find("a").each(function(index, el) {
			$(el).css("transition-delay",50*index + "ms");
		});

		$(".hnav").find(".hidenav").eq(1).find("a").each(function(index, el) {
			$(el).css("transition-delay",50*index + "ms");
		});

		$(".hnav").find(".hidenav").eq(2).find("a").each(function(index, el) {
			$(el).css("transition-delay",50*index + "ms");
		});

		$(".hnav").find(".hidenav").eq(3).find("a").each(function(index, el) {
			$(el).css("transition-delay",50*index + "ms");
		});

		$(".hnav").find(".hidenav").eq(4).find("a").each(function(index, el) {
			$(el).css("transition-delay",50*index + "ms");
		});
		//大轮播图
		
			var inow = 0;
			$("#ul1").find("li").eq(0).show().siblings().hide();
			$("#ol").find("li").mouseover(function(){
				inow = $(this).index();	
				fun(inow);
			}).mouseout(function(){
				clear = setInterval(play,3000);
			})
			$("#left").click(function(){
				clearInterval(clear);
				if (inow <= 0) {
					inow = 3;
				}else{
					--inow;	
				}
				fun(inow);
			})
			$("#right").click(function(){
				clearInterval(clear);
				if (inow >= 3) {
					inow = 0;
				}else{
					++inow;	
				}
				fun(inow);
			})

			function fun(inow){
				$("#ol").find("li").eq(inow).stop().addClass("con").siblings().removeClass("con");
				$("#ul1").find('li').eq(inow).stop().fadeIn().siblings().fadeOut();

			}
			var clear = null; 
			clear = setInterval(play,3000)

			function play(){
				if (inow >= 3) {
					inow = 0;
				}else{
					++inow;
				}
				fun(inow);
			}

			$("#ol").find("li").mouseover(function(){
				clearInterval(clear);
			});
			$("#solider").mouseover(function(){
				clearInterval(clear);
			});
			$("#solider").mouseout(function(){
				clear = setInterval(play,3000)

			});


			// 导航
			// 
			var nav = 0;
			$("#leftnav").find("li").mouseenter(function(){

				$(this).addClass("con").siblings().removeClass("con");
				$(".l_content").css("display","block");
				nav = $(this).index();
			}).mouseleave(function(){
				$("#leftnav").find("li").removeClass("con");
				$(".l_content").css("display","none");
			})
			$(".l_content").mouseenter(function(){
				$("#leftnav").find("li").eq(nav).addClass("con").siblings().removeClass("con");
				$(".l_content").css("display","block");
			}).mouseleave(function(){
				$(".l_content").css("display","none");
				$("#leftnav").find("li").removeClass("con");
			});

		})
		

		$(function(){
			//商品详情页
			
			
			//顶部定位
			$(window).scroll(function(){
				if ($(window).scrollTop() >= 700) {
					$("#htop").show();
				}else{
					$("#htop").hide();
				}
			})
			$("#htop").click(function(){
				$('body,html').animate({scrollTop:0},500);
			})

			//放大镜
			

			//放大镜-切换图片
			$(".xiaotubiao").find("li").click(function(){
				$(this).addClass("bor").siblings().removeClass("bor");
				$(".small").find("img").attr("src", "images/Cn"+ $(this).index() +".jpg"); 
				$(".big").find("img").attr("src", "images/Cn"+ $(this).index() +".jpg"); 
			})

			//参数选择
			
			$(".button").find("button").click(function(){
				$(this).addClass('but').siblings().removeClass('but');
			})
		})

		var fdj = document.getElementById("fdj");  // 获得最大的盒子
    var small = fdj.children[0];  // 获得small 小图片 350盒子
    var big = fdj.children[1];  // 获得 大图片 800 盒子
    var mask = small.children[1];  // 小的黄色盒子
   var bigImage = big.children[0]; // 大盒子里面的图片
    small.onmouseover = function() {   // 鼠标经过显示出他们
        mask.style.display = "block";
        big.style.display = "block";
    }
    small.onmouseout = function() {
        mask.style.display = "none";
        big.style.display = "none";
    }
    //  鼠标在small 内移动
   var x = 0;
   var y = 0;
    small.onmousemove = function(event) {
        var event = event || window.event;
         x = event.pageX - this.offsetParent.offsetLeft - mask.offsetWidth /2;  // 再某个盒子内的坐标
         y = event.pageY - this.offsetParent.offsetTop - mask.offsetHeight /2;
         if(x < 0)
         {
             x = 0;
         }
         else if(x > small.offsetWidth - mask.offsetWidth)
         {
             x = small.offsetWidth - mask.offsetWidth;
         }
         if(y<0)
         {
            y = 0;
         }
         else if(y > small.offsetHeight - mask.offsetHeight)
         {
             y = small.offsetHeight - mask.offsetHeight;
         }
         mask.style.left = x + "px";
         mask.style.top = y + "px";
         /*计算  ：  夫子 一顿吃 2个馒头    娇子  一顿 4个馒头
         问  夫子今天吃了 3个馒头  娇子应该吃几个？  */
         /*计算出他们的倍数   4 / 2    2倍
          3 * 2  == 6个  */
         /* 大图盒子 /  小图盒子  倍数
          我们 再小图移动的距离 *  倍数  ==  大图的位置*/
         bigImage.style.left =  -x *  big.offsetWidth /small.offsetWidth + "px";
         bigImage.style.top =  -y *  big.offsetHeight /small.offsetHeight + "px";

    }








