$(function(){
    //顶部导航列表显示
    function Topnav(obj1,obj2){
        $("#Top").find(obj1).hover(function(){
            $(this).find(obj2).css({"display":"block"});
        },function(){
            $(this).find(obj2).css({"display":"none"});
        })
    }
    Topnav('.Headset','.topcontent');
    Topnav('.urbeats','.topcontent');
    Topnav('.hold_2_img','.search');

    //返回顶部
    $('.returnTop').click(function(){
        $('body,html').animate({ scrollTop: 0 }, 300);
        return false;
    })

    //顶部导航的显示与隐藏
    var cubuk_seviye = $(document).scrollTop();           //获取当前滚动条距离顶部的位置
    var header_yuksekligi = $('#Top').outerHeight();        //获取顶部的高度

    $(window).scroll(function() {
        var kaydirma_cubugu = $(document).scrollTop();      //获取滚动的时候  滚动条距离顶部的位置

        if (kaydirma_cubugu > header_yuksekligi){
            $('#Top').addClass('gizle');
        }else {
            $('#Top').removeClass('gizle');
        }

        if (kaydirma_cubugu > cubuk_seviye){
            $('#Top').removeClass('sabit');
        }else {
            $('#Top').addClass('sabit');
        }

        cubuk_seviye = $(document).scrollTop();
    });

    //按钮的效果

    function butchange(obj1,obj2,col1,col2){
        obj1.find(obj2).hover(function(){
            $(this).find(".mask").css({"transform":"translate(0%, -100%) translate3d(0px, 0px, 0px)","background-color":col1});
            $(this).find("b").eq(0).css("color",col2);
        },function(){
            $(this).css("color",col2).find(".mask").css({"transform":"translate(0%, 0%) translate3d(0px, 0px, 0px)"});
            $(this).find("b").eq(0).css("color",col1);
        })
    }
    function butchange1(obj1,obj2,col1,col2){
        obj1.find(obj2).hover(function(){
            $(this).find(".mask").css({"top":"40px","transform":"translateY(-40px) translate3d(0px, 0px, 0px)","background-color":col1});
            $(this).find("span").css("color",col2);

        },function(){
            $(this).css("color",col2).find(".mask").css({"transform":"translateY(40px) translate3d(0px, 0px, 0px)"});
            $(this).find("span").css("color","#fff");
        })
    }
    function butchange3(obj1,obj2,col1,col2){
        obj1.find(obj2).hover(function(){
            $(this).find(".mask").css({"transform":"translate(0%, -100%) translate3d(0px, 0px, 0px)","background-color":col1});
            $(this).find("b").eq(0).css("color",col2);
        },function(){
            $(this).css("color",col2).find(".mask").css({"transform":"translate(0%, 0%) translate3d(0px, 0px, 0px)"});
            $(this).find("b").eq(0).css("color","#fff");
        })
    }
    butchange($(".topcontent"),".tansuo","#fff","#000");
    butchange1($(".topcontent"),".fromabuy","#fff","#000");
    butchange($(".head"),".tansuo","#000","#fff");
    butchange1($(".head"),".fromabuy","#fff","#000");
    butchange($(".Motherday"),".tansuo","#000","#fff");
    butchange1($(".Motherday"),".fromabuy","#FFF","#000");
    butchange($(".sell"),".tansuo","#fff","#000");
    butchange($(".listening"),".tansuo","#000","#fff");
    butchange($(".collection"),".tansuo","#fff","#000");
    butchange($(".wang"),".tansuo","#000","#fff");
    butchange($(".KM"),".tansuo","#000","#fff");
    butchange3($(".product"),".tansuo","#000","#fff");
    butchange1($(".price"),".fromabuy","#FFF","#000");
    butchange($(".tansuoear"),".tansuo","#000","#fff");
    butchange($(".joinarmy"),".write","#000","#fff");


})

$(function(){
    var index;
    //产品展示
    $(".showproduct").find(".color").find("b").click(function () {
        $(this).parents(".showproduct").data("aa",$(this).parent("span").index());
        var ind = $(this).parents(".showproduct").data("aa");
        $(this).parent().css({"border":"2px solid #8C8C8C"}).siblings().css({"border":"2px solid #fff"});
        var a = 180+(-180* ind)+"px";
        $(this).parents("._product").find("ul").stop().animate({"left":a});
        $(this).parents("._product").find("ul").find("li").eq(ind).css("opacity",1).siblings().css("opacity",0.4);

    })

    $(".showproduct").hover(function(){
        var inds = $(this).data("aa");
        $(this).find("ul").find("li").eq(inds).css("opacity",1).siblings().css("opacity",0.4);
        $(this).find(".content").find("span").eq(0).css("display","none");
        $(this).find(".color").stop().fadeIn();

    },function(){
        var inds = $(this).data("aa");
        $(this).find(".content").find("span").eq(0).stop().fadeIn();
        $(this).find(".color").css("display","none");
        $(this).find("ul").find("li").eq(inds).css("opacity",1).siblings().css("opacity",0);

    })

})

$(function () {

    //可选颜色
    $(".choose").find("li").click(function(){
        var index = $(this).index();
        $(".choose").find(".pic").find("img").eq(index).addClass("con").siblings().removeClass("con");
        $(this).css({"border":"2px solid #8C8C8C","width":"142px","height":"28px"}).siblings().css({"border":0,"width":"142px","height":"32px"})
    })

})


//导航侧边导航栏效果
$(function () {

    $(".list_left").find("a").mouseenter(function () {
        $(this).find(".line").stop().animate({width:"30px",marginLeft:"-10px"});
    })
    $(".list_left").find("a").mouseleave(function () {
        $(this).find(".line").stop().animate({width:"0px",margin:0});
    })

})