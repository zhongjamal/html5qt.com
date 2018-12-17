/*
全局js 
2016-08-01
*/

// 菜单弹出框
$(document).ready(function($){
	$('.head-menu').click(function(){
		$('.theme-mask').show();
		$('.theme-mask').height($(document).height());
		$('.menu-list').slideDown(200);
	})
	$('.menu-close').click(function(){
		$('.theme-mask').hide();
		$('.menu-list').slideUp(200);
	});
});
