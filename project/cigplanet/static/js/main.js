//滚动渐隐出现
$(window).scroll(function() {
	if ($(window).scrollTop() > 0) {
		$(".header-cont").addClass('fixed');
	}else{
		$(".header-cont").removeClass('fixed');
	}
});


// 返回顶部
$(function(){
    $(window).scroll(function(){
    if($(window).scrollTop()>120){
    $(".gotop").fadeIn();
    }
    else{
    $(".gotop").fadeOut();
    }
    });
    $(".gotop").click(function(){
    $('html,body').animate({'scrollTop':0},500);
    });
});


// 首页切换
$(function () {
        var $li3 = $('.topsale-nav span');
        var $ul3 = $('.topsale-item');
        $li3.mousedown(function () {
            var $this3 = $(this);
            var $t3 = $this3.index();
            $li3.removeClass();
            $this3.addClass('active');
            $ul3.css('display', 'none');
            $ul3.eq($t3).css('display', 'block');
        })
});




// 产品详情页切换
$(function () {
        var $li = $('.related-products-nav li');
        var $ul = $('.related-products-item');
        $li.mousedown(function () {
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('active');
            $ul.css('display', 'none');
            $ul.eq($t).css('display', 'block');
        });
});

// 产品详情页切换2
$(function () {
        var $li2 = $('.product-cont-bar .tab li');
        var $ul2 = $('.product-tab-item');
        $li2.mousedown(function () {
            var $this2 = $(this);
            var $t2 = $this2.index();
            $li2.removeClass();
            $this2.addClass('active');
            $ul2.css('display', 'none');
            $ul2.eq($t2).css('display', 'block');
        })
});





// Q&A Accordian
var ui_qna_ctr = (function(){
  var el;
  var click;
  var on_off;

  function init(){
    el = $('.ui-qna-accordian');
    click = el.find('>li>a');
    on_off = el.find('>li');

    if(el.length <= 0){
      return;
    }

    bindEvents();
    return this;
  }

  function bindEvents(){
    click.on('click', function(e){
      e.preventDefault();
      var index = $(this).closest('li').index();

      var answer = $(this).next('div.answer-wrap'),
        height = answer.outerHeight();

      if($(this).parent().hasClass('on')){
        // 鞛愱赴鞛愳嫚 雼赴
        answer.animate({height: 0}, 500, function(){
          $(this).parent().removeClass('on');
        });
      }else{
        // 旮半掣 鞐搓碃 雼赴
        answer.find('.answer-area').show();
        answer.data('height', answer.find('.answer-area').outerHeight(true));
        answer.animate({height: answer.data('height')}, 500);

        on_off.filter('.on').find('.answer-wrap').animate({height: 0}, 500, function(){
          $(this).closest('li').removeClass('on');
        });
        //on_off.filter('.on').removeClass('on');
        on_off.each(function(idx, obj){
          if(index == idx){
            $(this).addClass('on');
            $(this).find('.answer-area').show();
          }
        });
      }

    });
  }

  return{
    init: init
  }
})();
$(function(){
  ui_qna_ctr.init();
});


// 弹出框图片切换

//        var obj = new mag('.show', '.bigshow','.smallshow','.mask','.bigitem');
//        obj.init()
function mag(show, bigshow,smallshow,bigitem) {
    this.show = show;
    this.bigshow = bigshow;
    this.smallshow = smallshow;

    this.bigitem = bigitem;
    this.obj = {
        prev: '.prev',
        next: '.next',
        middle: '.middle',
        middleBox: '.middle_box'
    }
}
mag.prototype = {
    init: function () {
        var that = this;
        that.start();
        this.showHover();
        this.smallImgHover();
        this.showMove();
        this.prevClick();
        this.nextClick();
    },
    start: function () {
        var that = this;
        var buil=$(that.show).width()/$(that.mask).width()*$(that.bigshow).width();
        $(that.bigitem).css("width",buil);

        $(that.smallshow + ' img').eq(0).css("border","2px solid #f40");

        var midhei=$(that.obj.middle + ' li').innerWidth()*$(that.obj.middle + ' li').length;
        $(that.obj.middle).width(midhei);

    },
    showHover: function () {
        var that = this;
        $(that.show).hover(function(){
            $(that.bigshow).show();
            $(that.mask).show();
        },function(){
            $(that.bigshow).hide();
            $(that.mask).hide();
        });
    },
    smallImgHover: function () {
        var that = this;
        $(that.smallshow + ' img').click(function(){
            var src=$(this).attr("src");
            $(that.smallshow + ' img').css("border","1px solid #e8e8e8");
            $(this).css("border","2px solid #f40");
            $(that.show + '>img').attr("src",src);
            $(that.bigitem+ '>img').attr("src",src);
        });
    },
    showMove:function(){
        var that = this;
        $(that.show).mousemove(function(e){
            var bigx=$(this).offset().left;
            var bigy=$(this).offset().top;
            var x= e.clientX;
            var y= e.clientY;
            var scrollx=window.scrollX;
            var scrolly=window.scrollY;
            var ox=x+scrollx-bigx-$(that.mask).width()/2;
            var oy=y+scrolly-bigy-$(that.mask).height()/2;
            if(ox<=0){
                ox=0
            }
            if(ox>$(that.show).width()-$(that.mask).width()){
                ox=$(that.show).width()-$(that.mask).width();
            }
            if(oy<=0){
                oy=0
            }
            if(oy>$(that.show).height()-$(that.mask).height()){
                oy=$(that.show).height()-$(that.mask).height();
            }
            $(that.mask).css({left:ox});
            $(that.mask).css({top:oy});
            var bei=$(that.show).width()/$(that.mask).width();
            $(that.bigitem+ '>img').css(
                { marginLeft:-bei*ox,
                    marginTop:-bei*oy
                })
        });
    },
    prevClick: function () {
        var that = this;
        $(that.obj.prev).click(function(){
            if($(that.obj.middle).width()-$(that.obj.middleBox).width()>0){
                if(Math.abs(parseInt($(that.obj.middle).css("marginLeft")))>$(that.obj.middleBox).width()){
                    $(that.obj.middle).css("marginLeft",parseInt($(that.obj.middle).css("marginLeft"))+$(that.obj.middleBox).width())
                }
                if(Math.abs(parseInt($(that.obj.middle).css("marginLeft")))<$(that.obj.middleBox).width()){
                    $(that.obj.middle).css("marginLeft","0px");
                    $(that.obj.next).removeClass("nextnone");
                    $(that.obj.prev).addClass("prevnone");
                }
            }else{
                return;
            }
        });
    },
    nextClick: function () {
        var that = this;
        $(that.obj.next).click(function(){
            if($(that.obj.middle).width()-$(that.obj.middleBox).width()>0){
                var shuzi=$(that.obj.middle).width()-Math.abs(parseInt($(that.obj.middle).css("marginLeft")))-$(that.obj.middleBox).width();
                if(shuzi>$(that.obj.middleBox).width()){
                    $(that.obj.middle).css("marginLeft",-$(that.obj.middleBox).width()+parseInt($(that.obj.middle).css("marginLeft")))
                }
                if(shuzi<$(that.obj.middleBox).width()){
                    $(that.obj.middle).css("marginLeft",-($(that.obj.middle).width()-$(that.obj.middleBox).width()))
                    $(that.obj.next).addClass("nextnone");
                    $(that.obj.prev).removeClass("prevnone");
                }
            }else{
                return;
            }

        });
    }
}


    $(function(){
        /*
         show  //正常状态的框
         bigshow   // 放大的框的盒子
         smallshow  //缩小版的框
         mask   //放大的区域（黑色遮罩）
         bigitem  //放大的框
         */
        var obj = new mag('.show', '.bigshow','.smallshow','.mask','.bigitem');
        obj.init();
    });