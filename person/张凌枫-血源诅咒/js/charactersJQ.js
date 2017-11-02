$(function(){
	// 文字显现
	$(window).scroll(function(){
		if($(this).scrollTop() > 200 ){
			$(".shortSay").fadeIn(1500);
		}
	})

	// 延时加载
	$("img.lazy").lazyload({
		effect:"fadeIn",
    	event : "scroll"
	});
	$(window).on("scroll", function() {
	    var timeout = setTimeout(function() {
	        $("img.lazy").trigger("sporty")
	    }, 5000);
	});

	// 分页触发术式
	$("#sort").find("span").eq(0).css({"color":"darkred","font-weight":"bold"});
	
	$("#sort").find("span").eq(0).click(function(){
		
		$(this).css({"color":"darkred","font-weight":"bold"}).siblings().css({"color":"white","font-weight":"normal"});

		$("#information").fadeOut().next().fadeIn().next().fadeIn();

	}).siblings().click(function(){

		$(this).css({"color":"darkred","font-weight":"bold"}).siblings().css({"color":"white","font-weight":"normal"});

		$("#information").fadeIn().next().fadeOut().next().fadeOut();

	})

	// 轮播图术式
	var pNow = 0;
	$(".story").find("li").eq(0).css("display","block");
	$(".story").find(".prev").click(function(){
		$(".story").find("li").eq(pNow).fadeOut();

		--pNow < 0 ? pNow = $(".story").find("li").length - 1 : pNow;

		$(".story").find("li").eq(pNow).fadeIn();

		changeColor();
	}).next().click(function(){

		$(".story").find("li").eq(pNow).fadeOut();

		++pNow > $(".story").find("li").length - 1 ? pNow = 0 : pNow;

		$(".story").find("li").eq(pNow).fadeIn();		

		changeColor();
	}).next().children().each(function(index){

		$(this).css("background-position",(-144 * index) + "px 0");

		changeColor();
	}).click(function(){
		$(".story").find("li").eq(pNow).fadeOut();

		pNow = $(this).index();

		$(".story").find("li").eq(pNow).fadeIn();

		changeColor();

		// $(this).css("background-position-y","-112px").siblings().css("background-position-y","0")
	})

	function changeColor(){
		$(".story").find("a").eq(pNow).css("background-position-y","-112px").siblings().css("background-position-y","0");
	}


})