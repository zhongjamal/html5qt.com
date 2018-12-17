/**
 *  全局 20160704
**/

// 返回顶部
$(function(){
    $(window).scroll(function(){
    if($(window).scrollTop()>120){
    $(".fix-back-top").fadeIn();
    }
    else{
    $(".fix-back-top").fadeOut();
    }
    });
    $(".fix-back-top").click(function(){
    $('html,body').animate({'scrollTop':0},500);
    });
});