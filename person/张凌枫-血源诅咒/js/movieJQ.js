$(function(){



	// 视频播放条件
	$("#CGshow").find("a").click(function(){
		$(".playBlock").css("display","block");
		$("body").css("overflow","hidden");
	})

	$(".playBlock").find("a").click(function(){
		$(this).next().trigger("pause");
		$(this).parent().css("display","none");
		$("body").css("overflow","visible");
	}).prev().click(function(){
		$(this).next().next().trigger("pause");
		$(this).parent().css("display","none");
		$("body").css("overflow","visible");
	})

	// 分页触发术式
	$("#sort").find("span").eq(0).css({"color":"darkred","font-weight":"bold"});
	
	$("#sort").find("span").eq(0).click(function(){
		
		$(this).css({"color":"darkred","font-weight":"bold"}).siblings().css({"color":"white","font-weight":"normal"});

		$("#CGshow").fadeIn(500).next().next().fadeOut(500);

	}).siblings().click(function(){

		$(this).css({"color":"darkred","font-weight":"bold"}).siblings().css({"color":"white","font-weight":"normal"});

		$("#CGshow").fadeOut(500).next().next().fadeIn(500);

	})

})