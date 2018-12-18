// JavaScript Document
// Author: jamal
// Time: 2017/07/19

//返回顶部
$(function(){
    $(window).scroll(function(){
    if($(window).scrollTop()>120){
    $("#side-bar .gotop").fadeIn();
    }
    else{
    $("#side-bar .gotop").fadeOut();
    }
    });
    $("#side-bar .gotop").click(function(){
    $('html,body').animate({'scrollTop':0},500);
    });
});

// 数字滚动
(function($){
    $.fn.numberRock=function(options){
        var defaults={
            speed:24,
            count:100
        };
        var opts=$.extend({}, defaults, options);

        var div_by = 100,
        count=opts["count"],
        speed = Math.floor(count / div_by),
        sum=0,
        $display = this,
        run_count = 1,
        int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by&&speed!=0) {
                $display.text(sum=speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);

// 滚动动画
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
  (function(){
  window.scrollReveal = new scrollReveal({reset: true});
})();
};
