(function($) {
	var imgList = [];
	$.extend({
		preload: function(imgArr, option) {
			var setting = $.extend({
				init: function(loaded, total) {},
				loaded: function(img, loaded, total) {},
				loaded_all: function(loaded, total) {}
			}, option);
			var total = imgArr.length;
			var loaded = 0;
			
			setting.init(0, total);
			for(var i in imgArr) {
				imgList.push($("<img />")
					.attr("src", imgArr[i])
					.load(function() {
						loaded++;
						setting.loaded(this, loaded, total);
						if(loaded == total) {
							setting.loaded_all(loaded, total);
						}
					})
				);
			}
			
		}
	});
})(jQuery);


$(function() {
	$.preload([
		"http://www.hantangkeji.cn/images/home_bg.jpg",
		"http://www.hantangkeji.cn/images/home_sprite_frei.png",
		"http://www.hantangkeji.cn/images/projects_bg.jpg",
		"http://www.hantangkeji.cn/images/design_bg.jpg",
		"http://www.hantangkeji.cn/images/technik_bg.jpg",
		"http://www.hantangkeji.cn/images/lab_bg.jpg",
		"http://www.hantangkeji.cn/images/about_bg.jpg",
		], {
		init: function(loaded, total) {
			$("#top, #home, #projects, #design, #technik, #lab, #about, #showrooms, #jobs").hide();
			$("#loadingtext").html("Inhalte werden geladen... bitte warten");
		},
		loaded: function(img, loaded, total) {
			var loader = 245-((loaded/total)*245);
			var prozent = Math.round(loaded/total*100);
			$("#loadingtext").html("Lade jede Menge Inhalte: "+prozent+"%");
			//$("#loadingtext").html("Lade jede Menge Inhalte: "+loaded+"/"+total);
			$("#loadingbar").css({"background-position" : "0px "+loader+"px"});
		},
		loaded_all: function(loaded, total) {
			$("#loadingtext").html("Alle Inhalte geladen.<br />Herzlich Willkommen!");
			$("#preloader").delay(500).fadeOut();
			$("#top, #home, #projects, #design, #technik, #lab, #about, #showrooms, #jobs").delay(1000).fadeIn("slow");
			// xmas loader:
			// $("#loadingtext").html("Frohe Weihnachten!");
			// $("#preloader").delay(2500).fadeOut();
			// $("#top, #home, #projects, #design, #technik, #lab, #about, #jobs").delay(3000).fadeIn("slow");
		}
	});

});
