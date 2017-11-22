(function($) {
	jQuery(window).bind('scroll',function(){
    if($(window).scrollTop()>150){
      $('.mu-navbar').addClass('mu-nav-show');
    }
else {
	$('.mu-navbar').removeClass('mu-nav-show');
}
});

$('#mu-event-counter').countdown('2017/10/01').on('update.countdown',function(event) {
	var $this=$(this).html(event.strftime(''
+'<span class="mu-event-counter-block"><span>%D</span> Days</span> '
+'<span class="mu-event-counter-block"><span>%H</span> Hours</span> '
+'<span class="mu-event-counter-block"><span>%M</span> Mins</span> '
+'<span class="mu-event-counter-block"><span>%S</span> Secs</span>'));
});

var lastId,topMenu=$(".mu-menu"),topMenuHeight=topMenu.outerHeight()+13,menuItems=topMenu.find('a[href^=\\#]'),scrollItems=menuItems.map(function() {
	var item=$($(this).attr("href"));if(item.length){return item;
}});

menuItems.click(function(e) {
	var href=$(this).attr("href"),offsetTop=href==="#"?0: $(href).offset().top-topMenuHeight+22;
	jQuery('html, body').stop().animate({scrollTop: offsetTop
},1500);e.preventDefault();
});

jQuery(window).scroll(function() {
var fromTop=$(this).scrollTop()+topMenuHeight;var cur=scrollItems.map(function(){if($(this).offset().top<fromTop)
return this;
});

cur=cur[cur.length-1];var id=cur&&cur.length?cur[0].id:"";if(lastId!==id) {
lastId=id;menuItems.parent().removeClass("active").end().filter("[href=\\#"+id+"]").parent().addClass("active");
}})
$('.mu-video-play-btn').on('click',function(event) {
event.preventDefault();$('.mu-video-iframe-area').addClass('mu-video-iframe-display');
});
$('.mu-video-close-btn').on('click',function(event) {
event.preventDefault();$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
});
$('.mu-video-close-btn').click(function() {
$('.mu-video-iframe').attr('src',$('.mu-video-iframe').attr('src'));
});
$('.mu-video-iframe-area').on('click',function(event) {
event.preventDefault();$('.mu-video-iframe-area').removeClass('mu-video-iframe-display');
});
$('.mu-video-iframe-area, .mu-video-iframe').on('click',function(e) {
e.stopPropagation();
});

$('.mu-speakers-slider').slick( {
slidesToShow: 4,
responsive:[{breakpoint:768,
  settings:{arrows:true,
    slidesToShow:3
}},
{breakpoint:480,
  settings: {
    arrows: true,
    slidesToShow:1
  }
}]
});

$('#accordion .panel-collapse').on('shown.bs.collapse',function() {
$(this).prev().find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
});$('#accordion .panel-collapse').on('hidden.bs.collapse',function() {
$(this).prev().find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
});

jQuery('.mu-menu').on('click','li a',function() {
$('.mu-navbar .in').collapse('hide');
});})(jQuery);
