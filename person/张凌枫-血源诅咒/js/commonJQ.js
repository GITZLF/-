$(function(){

	// 导航移出术式
	$("#nav").find("dl").mouseenter(function(){
		$(this).stop().animate({"height":"245px"});
	}).mouseleave(function(){
		$(this).stop().animate({"height":"65px"});
	});

	// 导航字体变色术式
	$("#nav").find("dd").find("a").mouseenter(function(){
		$(this).css({color:"white"});
	}).mouseleave(function(){
		$(this).css({color:"#999"});
	})

	// 构建血源诅咒导航触发术式
	$("#gameNav").find("a").mouseenter(function(){
		$(this).addClass("colorChange");
	}).mouseleave(function(){
		$(this).removeClass("colorChange");
	})

	
})