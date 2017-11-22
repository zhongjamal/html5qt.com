NProgress.start();
	$(window).load(function(){
		setTimeout(function() {
			NProgress.done();
			$('.fade').removeClass('out');
		}, 1000)
	});
 var bBtn = true;
$(".menu_btn:not(.active)").click(function(){
	if(bBtn){
		$(this).addClass("active");
		$(".side-navigation").css({opacity:1, visibility:"visible"})
	}else{
		$(this).removeClass("active");
		$(".side-navigation").css({opacity:0, visibility:"hidden"})
	}
	bBtn = !bBtn;
})

	$('.side-navigation ul li a').hover(
		function(){
			$('body').addClass('hover-nav');
			$(this).addClass('hover-this');
		},
		function(){
			$('body').removeClass('hover-nav');
			$(this).removeClass('hover-this');
		}
	);
	$('#menu-item-45').hover(
		function(){
			$('.background.home').addClass('show');
		},
		function(){
			$('.background.home').removeClass('show');
		}
	);
    $('#menu-item-193').hover(
		function(){
			$('.background.design').addClass('show');
		},
		function(){
			$('.background.design').removeClass('show');
		}
	);
    $('#menu-item-47').hover(
		function(){
			$('.background.marketing').addClass('show');
		},
		function(){
			$('.background.marketing').removeClass('show');
		}
	);
	$('#menu-item-46').hover(
		function(){
			$('.background.case').addClass('show');
		},
		function(){
			$('.background.case').removeClass('show');
		}
	);
	$('#menu-item-66').hover(
		function(){
			$('.background.company').addClass('show');
		},
		function(){
			$('.background.company').removeClass('show');
		}
	);
	$('#menu-item-48').hover(
		function(){
			$('.background.news').addClass('show');
		},
		function(){
			$('.background.news').removeClass('show');
		}
	);

	$('#menu-item-7').hover(
		function(){
			$('.background.contact').addClass('show');
		},
		function(){
			$('.background.contact').removeClass('show');
		}
	);
