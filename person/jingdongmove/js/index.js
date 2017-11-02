window.onscroll = function(){
    var scro = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0;
    if (scro>50) {
        console.log(scro);
        document.querySelector("header").style.backgroundColor = "red";
    }else if(scro<50){
        document.querySelector("header").style.backgroundColor = "";
    }
}




var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 'auto',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 30,
    loop:true,
    autoplay:1000
});


var swipers = new Swiper('.swiper-containers', {
    pagination: '.swiper-paginations',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30
});
var swiperb = new Swiper('.swiper-containerb', {
    pagination: '.swiper-paginationb',
    // slidesPerView: 3,
    // paginationClickable: true,
    // spaceBetween: 30,
    autoplay:1000
});
 var left = new Swiper('.left-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        paginationClickable: true,
        // spaceBetween: 30,
        mousewheelControl: true,
        onSlideChangeStart: function(left){
            left.update();
    }
});

 var right = new Swiper('.right-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths : true, //防止文字模糊
        // height:400,
        onSliderMove: function(right){
            right.update();
    }
    });