
// 메인화면 작동
$(function() {
	var win = $(window),
		windowHeight = win.height(),
		windowWidth = win.width(),
		request = $(".request-area");

	// fullpage plugin
	$('#contents').fullpage({
		anchors: ['index', 'comfunny', 'communication', 'teamwork', 'location'],
		verticalCentered: false,
		navigation: true,
		scrollingSpeed: 1400,
		css3: false,
		easing: 'easeInOutExpo',
		afterLoad: function(anchorLink, index){
			if(index == '1'){
				$('h1').addClass('active');
				$('.top').addClass('active');
				$('#dHead .btn-scroll a.up').removeClass('active');
				$('#dHead .btn-scroll a.down').delay(500).text('ABOUT US').addClass('active');
				$('#section0').find('.content h2').animate({top:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section0').find('.content .txt').animate({top:0,opacity:0.5}, 800, 'easeInOutExpo');
			}

			if(index == '2'){
				$('#dHead .btn-scroll a.up').text('MAIN');
				$('#dHead .btn-scroll a.down').text('ABOUT US');
				$('#section1').find('.content h2').animate({top:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section1').find('.content .txt').animate({top:0,opacity:0.5}, 800, 'easeInOutExpo');
			}

			if(index == '3'){
				$('#dHead .btn-scroll a.up').text('ABOUT US');
				$('#dHead .btn-scroll a.down').text('ABOUT US');
				$('#section2').find('.content h2').animate({left:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section2').find('.content .txt').animate({left:0,opacity:0.5}, 800, 'easeInOutExpo');
			}

			if(index == '4'){
				$('#dHead .btn-scroll a.up').text('ABOUT US');
				$('#dHead .btn-scroll a.down').text('MAP');
				$('#section3').find('.content h2').animate({top:0,left:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section3').find('.content .txt').animate({top:0,left:0,opacity:0.5}, 800, 'easeInOutExpo');
			}

			if(index == '5'){
				$('#dHead .btn-scroll a.up').text('ABOUT US');
				$('#dHead .btn-scroll a.down').removeClass('active');
				$('#section4').find('.content h2').animate({top:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section4').find('.location h3').animate({top:0,opacity:1}, 800, 'easeInOutExpo');
				$('#section4').find('.location ul').animate({top:0,opacity:1}, 800, 'easeInOutExpo');
			}
		},
		onLeave: function(index, nextIndex, direction){
			if (index == 1 && direction == 'down'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:49}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').text('MAIN').addClass('active');
				$('#section0').find('.content h2').stop().animate({top:-500,opacity:0,}, 1500, 'easeInOutExpo');
				$('#section0').find('.content .txt').stop().animate({top:-500,opacity:0}, 1500, 'easeInOutExpo');
				$('#section1').find('.content h2').css({top:500,opacity:0});
				$('#section1').find('.content .txt').css({top:500,opacity:0});
				$('#section1').find('.content h2').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section1').find('.content .txt').stop().animate({top:0,opacity:0.5}, 1600, 'easeInOutExpo');
			}

			if (index == 2 && direction == 'up'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:0}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').removeClass('active');
				$('#section0').find('.content h2').css({top:-500,opacity:0});
				$('#section0').find('.content .txt').css({top:-500,opacity:0});
				$('#section0').find('.content h2').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section0').find('.content .txt').stop().animate({top:0,opacity:0.5}, 1600, 'easeInOutExpo');
				$('#section1').find('.content h2').stop().animate({top:500,opacity:0}, 1500, 'easeInOutExpo');
				$('#section1').find('.content .txt').stop().animate({top:500,opacity:0}, 1500, 'easeInOutExpo');
			} else if (index == 2 && direction == 'down'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:98}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').text('ABOUT US');
				$('#section1').find('.content h2').stop().animate({top:500,opacty:0}, 1500, 'easeInOutExpo');
				$('#section1').find('.content .txt').stop().animate({top:500,opacity:0}, 1500, 'easeInOutExpo');
				$('#section2').find('.content h2').css({left:-200,opacity:0});
				$('#section2').find('.content .txt').css({left:200,opacity:0});
				$('#section2').find('.content h2').stop().animate({left:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section2').find('.content .txt').stop().animate({left:0,opacity:0.5}, 1600, 'easeInOutExpo');
			}

			if (index == 3 && direction == 'up'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:49}, 1200, 'easeInOutExpo');
				$('#section1').find('.content h2').css({top:500,opacity:0});
				$('#section1').find('.content .txt').css({top:500,opacity:0});
				$('#section1').find('.content h2').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section1').find('.content .txt').stop().animate({top:0,opacity:0.5}, 1600, 'easeInOutExpo');
				$('#section2').find('.content h2').stop().animate({left:-200,opacity:0}, 1500, 'easeInOutExpo');
				$('#section2').find('.content .txt').stop().animate({left:200,opacity:0}, 1500, 'easeInOutExpo');
			} else if (index == 3 && direction == 'down'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:147}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.down').text('MAP').addClass('active');
				$('#section2').find('.content h2').stop().animate({left:-200,opacity:0}, 1500, 'easeInOutExpo');
				$('#section2').find('.content .txt').stop().animate({left:200,opacity:0}, 1500, 'easeInOutExpo');
				$('#section3').find('.content h2').css({top:-300,left:300,opacity:0});
				$('#section3').find('.content .txt').css({top:300,left:-300,opacity:0});
				$('#section3').find('.content h2').stop().animate({top:0,left:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section3').find('.content .txt').stop().animate({top:0,left:0,opacity:0.5}, 1600, 'easeInOutExpo');
			}

			if (index == 4 && direction == 'up'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:98}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').text('ABOUT US').addClass('active');
				$('#dHead .btn-scroll a.down').text('ABOUT US').addClass('active');
				$('#section2').find('.content h2').css({left:-200,opacity:0});
				$('#section2').find('.content .txt').css({left:200,opacity:0});
				$('#section2').find('.content h2').stop().animate({left:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section2').find('.content .txt').stop().animate({left:0,opacity:0.5}, 1600, 'easeInOutExpo');
				$('#section3').find('.content h2').stop().animate({top:-300,left:300,opacity:0}, 1500, 'easeInOutExpo');
				$('#section3').find('.content .txt').stop().animate({top:300,left:-300,opacity:0}, 1500, 'easeInOutExpo');
			} else if (index == 4 && direction == 'down'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:147}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').text('ABOUT US');
				$('#dHead .btn-scroll a.down').removeClass('active');
				$('#section3').find('.content h2').stop().animate({top:-300,left:300,opacity:0}, 1500, 'easeInOutExpo');
				$('#section3').find('.content .txt').stop().animate({top:300,left:-300,opacity:0}, 1500, 'easeInOutExpo');
				$('#section4').find('.content h2').css({top:200,opacity:0});
				$('#section4').find('.content h3').css({top:200,opacity:0});
				$('#section4').find('.content ul').css({top:200,opacity:0});
				$('#section4').find('.content h2').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section4').find('.location h3').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section4').find('.location ul').stop().animate({top:0,opacity:1}, 1600, 'easeInOutExpo');
			}

			if (index == 5 && direction == 'up'){
				// $('#dHead .navi-bar img').delay(100).animate({marginTop:147}, 1200, 'easeInOutExpo');
				$('#dHead .btn-scroll a.up').text('ABOUT US').addClass('active');
				$('#dHead .btn-scroll a.down').text('MAP').addClass('active');
				$('#section3').find('.content h2').stop().animate({top:0,left:0,opacity:1}, 1600, 'easeInOutExpo');
				$('#section3').find('.content .txt').stop().animate({top:0,left:0,opacity:0.5}, 1600, 'easeInOutExpo');
				$('#section4').find('.content h2').stop().animate({top:200,opacity:0}, 1500, 'easeInOutExpo');
				$('#section4').find('.location h3').stop().animate({top:200,opacity:0}, 1500, 'easeInOutExpo');
				$('#section4').find('.location ul').stop().animate({top:200,opacity:0}, 1500, 'easeInOutExpo');
			}
		}
	});

	// page up&down scrolling
	$('.up').click(function(e){
			e.preventDefault();
			$.fn.fullpage.moveSectionUp();
		});

	$('.down').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});

	// fp-nav
	var nav = $('.fp-nav'),
		navLi = nav.find('li'),
		navLen = navLi.length,
		select = navLi.find(".active"),
		navLast = nav.find("li:nth-child(" + navLen + ") > a");

	navLast.css({"height":"19px"});
	// navLast.find("span").css({height:"19px",background:"none"});

	// page navi dot click
	navLi.click(function(){
		var $this = $(this),
			navIdx = $this.index();
		// switch (navIdx) {
		// 	case 0 : $('.navi-bar img').animate({marginTop:'0px'}, 100, 'linear'); break;
		// 	case 1 : $('.navi-bar img').animate({marginTop:'49px'}, 100, 'linear'); break;
		// 	case 2 : $('.navi-bar img').animate({marginTop:'98px'}, 100, 'linear'); break;
		// 	case 3 : $('.navi-bar img').animate({marginTop:'147px'}, 100, 'linear'); break;
		// 	case 4 : $('.navi-bar img').animate({marginTop:'147px'}, 100, 'linear'); break;
		// }
	});

	var section = $('.section');

	// request Layer popup
	if (windowWidth > 640) {

		request.css("height",windowHeight-205);

		$(window).resize(function(){
			var windowHeight = $(window).height();
			request.css("height",windowHeight-205);
		});

		if (windowHeight < 800) {
			$("#section4 .content").css("padding-top","70px");
		}

	} else if (windowWidth <= 640){
		request.css("height",windowHeight);
		nav.hide();
		$(window).resize(function(){
			var windowHeight = $(window).height();
			request.css("height",windowHeight)
		});

	}

	$('.request-call').click(function(e){
		$('.request-area').fadeIn(500);
		e.preventDefault();
		$.fn.fullpage.setAllowScrolling(false);

		return false;
	})

	$('.btn-close').click(function(e){
		$('.request-area').fadeOut(500);
		e.preventDefault();
		$.fn.fullpage.setAllowScrolling(true);

		return false;
	})

});