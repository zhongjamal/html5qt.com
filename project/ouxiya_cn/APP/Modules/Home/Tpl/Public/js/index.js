    var __height = $(window).height();
    $("#intro").height(__height);


    jQuery(document).ready(function() {
	//MobileMenu
	if ($(window).width() < 768){
    var Newsswiper = new Swiper('#swiper-container2', {
        pagination: '#swiper-pagination3',
        paginationClickable: true,
        slidesPerView: 1,
    });
	}else {
    var Newsswiper = new Swiper('#swiper-container2', {
        pagination: '#swiper-pagination3',
        paginationClickable: true,
        slidesPerView: 2,
        spaceBetween:25,
    });
  };
});
