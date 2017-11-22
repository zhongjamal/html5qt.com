jQuery(function($) {
	jQuery('.style-switch-button').click(function(){$('.theme_style_switcher').toggleClass("style-switch-active");});
$('#bridge').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/bridge-theme.css');e.preventDefault();
});
$('#default').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/default-theme.css');e.preventDefault();
});
$('#darkRed').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/dark-red-theme.css');e.preventDefault();
});
$('#green').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/green-theme.css');e.preventDefault();
});
$('#liteBlue').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/lite-blue-theme.css');e.preventDefault();
});
$('#orange').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/orange-theme.css');e.preventDefault();
});
$('#pink').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/pink-theme.css');e.preventDefault();
});
$('#purple').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/purple-theme.css');e.preventDefault();
});
$('#red').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/red-theme.css');e.preventDefault();
});
$('#jellybean').click(function(e) {
	$('#switcher').attr('href','assets/css/theme-color/jelly-bean-theme.css');e.preventDefault();
});

});
