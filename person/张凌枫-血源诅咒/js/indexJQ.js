$(function(){
	// 滚动条变化术式
	$(window).scroll(function(){
		if($(this).scrollTop() > 450){
			$("#gameNav").addClass("lock");
		}else{
			$("#gameNav").removeClass("lock");
		}
	})

	// 播放模态框
	$("#video").find("div").eq(1).mouseenter(function(){
		$(this).addClass("vHover");
	}).mouseleave(function(){
		$(this).removeClass("vHover");
	}).click(function(){
		$("#hiddenVideo").css("display","block");
		$("body").css("overflow","hidden");
	})

	// 模态框关闭术式一
	$(document).click(function(e){
		var e = e || window.e;
		var targetId = event.target? event.target.id : event.srcElement.id;
			if(targetId == "hiddenVideo"){
				$("#hiddenVideo").children().eq(0).trigger("pause");
				$("#hiddenVideo").css("display","none");
				$("body").css("overflow","visible");
			}
	})

	// 模态框关闭术式二
	$("#hiddenVideo").find("a").click(function(){
		$(this).prev().trigger("pause");
		$(this).parent().css("display","none");
		$("body").css("overflow","visible");
	})

	//图片放大术式
	$("#picShow").find("img").mouseenter(function(){
		$(this).css({"transform":"scale(1)"});
	}).mouseleave(function(){
		$(this).css({"transform":"scale(0.9)"});
	})

	

})