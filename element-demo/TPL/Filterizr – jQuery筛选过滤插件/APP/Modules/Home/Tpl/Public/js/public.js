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

$(".nav li").hover(function(){
		$(this).find(".navon").stop().animate({"marginTop":"0"},500);
		$(this).find(".navcur").stop().animate({"marginTop":"52"},500);
		
	},function(){	
		$(this).find(".navon").stop().animate({"marginTop":"-52"},500);
		$(this).find(".navcur").stop().animate({"marginTop":"0"},500);
		
	});
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
	$('#menu-item-1').hover(
		function(){
			$('.background.home').addClass('show');
		},
		function(){
			$('.background.home').removeClass('show');
		}
	);
    $('#menu-item-2').hover(
		function(){
			$('.background.design').addClass('show');
		},
		function(){
			$('.background.design').removeClass('show');
		}
	);
    $('#menu-item-3').hover(
		function(){
			$('.background.marketing').addClass('show');
		},
		function(){
			$('.background.marketing').removeClass('show');
		}
	);
	$('#menu-item-4').hover(
		function(){
			$('.background.case').addClass('show');
		},
		function(){
			$('.background.case').removeClass('show');
		}
	);
	$('#menu-item-5').hover(
		function(){
			$('.background.company').addClass('show');
		},
		function(){
			$('.background.company').removeClass('show');
		}
	);
	$('#menu-item-6').hover(
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
	
	
function setGradient() {
        $(".grid_c").each(function(index, el) {
            var bgStart = $(this).attr("data-bg-start"),
                bgEnd = $(this).attr("data-bg-end");
            $(this).find('.gradient').css({
				background:	'-webkit-linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)',
				background:	'-moz-linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)', 
				background: '-o-linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)',
				background: 'linear-gradient(135deg, ' + bgStart + ' 0%, ' + bgEnd + ' 100%)'
            });
        });
    };
    setGradient();
    function setImg() {
        $('.lazyImage').each(function(index, el) {
            var src = $(this).attr('data-src');
            $(this).find("img").attr("src", src).parents(".grid_c").css("height","auto");
        });
    };
    setImg();	
// 图片全屏 / 图片充满整个父级
	// 默认box自带loading背景图
	// 默认obj hide
function FullBg(box, obj){
	box.css("background", "none")
	obj.eq(0).stop().fadeIn(1000)
	function resizeBg() {
		obj.removeClass("w-f").removeClass("h-f").css("margin", 0)
		var boxR = box.outerWidth() / box.outerHeight(),
			objR = obj.width() / obj.height();
		if( objR < boxR ) {
		    obj.addClass('w-f').css("margin-top", -(obj.height() - box.outerHeight()) / 2);
		}else{
		    obj.addClass('h-f').css("margin-left", -(obj.width() - box.outerWidth()) / 2);
		}
	}
	$(window).resize(resizeBg).trigger("resize");
}	
	// 图片加载 调用方法
// _PreLoadImg([
	// 图片路径(数组形式)
// ],function(){

// })
function _PreLoadImg(b,e){var c=0,a={},d=0;for(src in b){d++}for(src in b){a[src]=new Image();a[src].onload=function(){if(++c>=d){e(a)}};a[src].src=b[src]}};

	
	
	
	
	
	
	
	
	
	
	
	
	