$(function(){
	$(".i-ban").height($(window).height() - 100);

	$(".float-right-box").removeClass('on');

	$(".i-ban li .link").on('click', function() {
		$("body,html").stop().animate({scrollTop: $(window).height() - 100}, 500, "easeOutQuint");
	});
	$(".i-m-ban .link").on('click', function() {
		$("body,html").stop().animate({scrollTop: $(".i-fir-wrap").offset().top - 60}, 500, "easeOutQuint");
	});

	scrollactive();
	$(window).scroll(function() {
		scrollactive();
	});

    var swiper = new Swiper('.i-m-ban', {
        loop : true,
        slidesPerView: 1,
        autoplay : 4000,
        speed: 500,
        pagination : '.i-m-ban .page-btns',
        onAutoplay: function(swiper){
			// console.log(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
			var q = swiper.activeIndex;
			var s;
			if (q == $(".i-m-ban .page-btns span").length+1) {
				s = 0;
			}else{
				s = swiper.activeIndex-1;
			}
			$(".i-m-ban .page-btns span i").stop().attr("style","");
			if (s == 0) {
				$(".i-m-ban .page-btns span").eq(s).children('i').stop().width("100%");
			}else{
				$(".i-m-ban .page-btns span").eq(s).children('i').stop().width("100%");
			}
			for (var a = 0; a <= s-1; a++) {
				$(".i-m-ban .page-btns span").eq(a).children('i').stop().width("100%");
			};
	    },
	    onSlideNextEnd: function(swiper, event){
	      	var q = swiper.activeIndex;
			var s;
			if (q == $(".i-m-ban .page-btns span").length+1) {
				s = 0;
			}else{
				s = swiper.activeIndex-1;
			}
			// console.log(s)
			$(".i-m-ban .page-btns span i").stop().attr("style","");
			for (var a = 0; a <= s; a++) {
				$(".i-m-ban .page-btns span").eq(a).children('i').stop().width("100%");
			};
	    },
	    onSlidePrevEnd: function(swiper, event){
	      	var q = swiper.activeIndex;
			var s;
			if (q == 0) {
				s = $(".i-m-ban .page-btns span").length;
			}else{
				s = swiper.activeIndex-1;
			}
			// console.log(s)
			$(".i-m-ban .page-btns span i").stop().attr("style","");
			for (var a = 0; a <= s; a++) {
				$(".i-m-ban .page-btns span").eq(a).children('i').stop().width("100%");
			};
	    }
    });
    for (var i = 0; i < $(".i-m-ban .page-btns span").length; i++) {
    	$(".i-m-ban .page-btns span").eq(i).append("<i></i>");
    };
    $(".i-m-ban .page-btns span").eq(0).children('i').stop().width("100%");

	var swiper1 = new Swiper('.i-thi-wrap .mobile-scroll', {
        loop : true,
        slidesPerView: 1,
        paginationClickable : true,
        autoplay : 3000,
        pagination : '.i-thi-wrap .pagination'
    });

	var hudongvideo = document.getElementById("hudong-video");
    $(".i-fiv-wrap .img").hover(function() {
    	hudongvideo.play();
    }, function() {
    	hudongvideo.pause();
    });


	$(".i-thi-wrap .nav-box .left-link span").eq(0).addClass('cur');
})
window.onload = function(){
	FullBg($(".i-fiv-wrap .img"), $(".i-fiv-wrap .video-lab"));
}
function scrollactive(){
	if ($(window).scrollTop() > 10 && $(window).width() > 1030) {
		$(".i-fir-wrap .right-wrap .about-recom").stop().animate({marginTop: -190}, 300, "linear");
	};
	if ($(window).scrollTop() > $(".i-fir-wrap").offset().top - $(window).height() + 300 && !$(".i-fir-wrap").hasClass('active')) {
		$(".i-fir-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-sec-wrap").offset().top - $(window).height() + 200 && !$(".i-sec-wrap").hasClass('active')) {
		$(".i-sec-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-thi-wrap").offset().top - $(window).height() + 200 && !$(".i-thi-wrap").hasClass('active')) {
		$(".i-thi-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-fou-wrap").offset().top - $(window).height() + 200 && !$(".i-fou-wrap").hasClass('active')) {
		$(".i-fou-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-fiv-wrap").offset().top - $(window).height() + 200 && !$(".i-fiv-wrap").hasClass('active')) {
		$(".i-fiv-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-sex-wrap").offset().top - $(window).height() + 200 && !$(".i-sex-wrap").hasClass('active')) {
		$(".i-sex-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-sev-wrap").offset().top - $(window).height() + 200 && !$(".i-sev-wrap").hasClass('active')) {
		$(".i-sev-wrap").addClass('active');
	};
	if ($(window).scrollTop() > $(".i-eig-wrap").offset().top - $(window).height() + 200 && !$(".i-eig-wrap").hasClass('active')) {
		$(".i-eig-wrap").addClass('active');
	};
}
