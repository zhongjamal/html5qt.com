var __height = $(window).height();
    $("#swiper-container").height(__height);
    $(window).resize(function() {
        var __height = $(window).height();
        $("#swiper-container").height(__height);
    });
function swiperWheel(){
    var Bannerswiper = new Swiper('#swiper-container', {
        pagination: '#swiper-pagination1',
        direction: 'vertical',
        slidesPerView: 1,
        height: __height,
        paginationClickable: true,
        mousewheelControl: true,
		autoplay: 5000,
        loop: true,
        onInit: function(swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素 
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSetTransition: function(swiper, translate) {
            if (swiper.activeIndex == 3) {
                swiper.params.onlyExternal = true;
                swiper.disableMousewheelControl();
            } else {
                swiper.params.onlyExternal = false;
                swiper.enableMousewheelControl();
            }
        },
        onSlideChangeEnd: function(swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });
   
        $(window).scroll(function() {
            if ($(window).scrollTop() <= 0) {
                Bannerswiper.params.onlyExternal = false;
                Bannerswiper.enableMousewheelControl();
            } else {
                Bannerswiper.params.onlyExternal = true;
                Bannerswiper.disableMousewheelControl();
            }
        });
   }
    sizeGridItems();
    $(window).resize(function() {
        sizeGridItems();
        $('.grid').packery();
    });
    $('.grid').packery({
        'itemSelector': '.grid-item',
        isLayoutInstant: true,
        gutter: 0
    });

    function sizeGridItems() {
        var windowW = $('.grid').width();
        //console.log(windowW);
        //jQuery('.grid-item').height($('.grid-item').width()*3.35);
        jQuery('.grid-item1').height($('.grid-item').width() * 1.35);
        jQuery('.grid-item2').height($('.grid-item').width() * 1);
    }

    var v_count = '0';
    jQuery(window).scroll(function() {
        jQuery('.timer').each(function() {
            var imagePos = jQuery(this).offset().top;

            var topOfWindow = jQuery(window).scrollTop();
            if (imagePos < topOfWindow + 700 && v_count == '0') {

                jQuery(function($) {

                    // start all the timers
                    jQuery('.timer').each(count);


                    function count(options) {
                        v_count = '1';
                        var $this = jQuery(this);
                        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                        $this.countTo(options);
                    }
                });

            }
        });
    });
    var Happenswiper = new Swiper('#swiper-container1', {
        pagination: '#swiper-pagination2',
        paginationClickable: true,
        autoplay: 5000,
        loop: true
    });
    var Newsswiper = new Swiper('#swiper-container2', {
        pagination: '#swiper-pagination3',
        paginationClickable: true,
        autoplay: 5000,
        loop: true
    });
    var Partnerswiper = new Swiper('#swiper-container3', {
        pagination: '#swiper-pagination4',
        slidesPerView: 5,
        slidesPerColumn: 2,
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 20,
        loop: false,
        speed: 600,
        breakpoints: {
            767: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 5
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: 1
            },
            1199: {
                slidesPerView: 3,
                slidesPerGroup: 2,
                spaceBetween: 10
            }
        }
    });

    function setGradient() {
        $(".grid_c").each(function(index, el) {
            var bgStart = $(this).attr("data-bg-start"),
                bgEnd = $(this).attr("data-bg-end");
            $(this).find('.gradient').css({
                background: '-webkit-linear-gradient(135deg,' + bgStart + ' 0%, ' + bgEnd + ' 100%)',
                background: '-moz-linear-gradient(135deg,' + bgStart + ' 0%, ' + bgEnd + ' 100%)',
                background: '-o-linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)',
                background: 'linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)'
            });
        });
    };
    setGradient();

    function setImg() {
        $('.lazyImage').each(function(index, el) {
            var src = $(this).attr('data-src');
            $(this).find("img").attr("src", src).parents(".grid_c").css("height", "auto");
        });
    };
    setImg();
   NProgress.start();
	$(window).load(function(){
		setTimeout(function() {
			NProgress.done();
			swiperWheel();
			$('.fade').removeClass('out');		
		}, 1000)
		
	});