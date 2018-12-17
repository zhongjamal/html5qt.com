function parallaxInit() {
	mgsjQuery('.parallax').parallax("30%", 0.1);
}

function initSlider(el,number,aplay,stophv,nav,pag){
	mgsjQuery("#"+el).owlCarousel({
		rtl:RLT_VAR,
		items : number,
		nav : nav,
		dots : pag,
		autoplay: aplay,
		autoplayHoverPause: stophv,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:2
			},
			768:{
				items:3
			},
			960:{
				items:number
			},
			1200:{
				items:number
			}
		}
		
		/* itemsDesktop: [1199,number],
		itemsDesktopSmall: [970,number],
		itemsTablet: [768,2],
		itemsTabletSmall: false,
		itemsMobile: [480,1],
		itemsCustom: false, */
	}); 
}

function toggleEl(el){
	//mgsjQuery('.toggle-el').hide();
	mgsjQuery('#'+el).slideToggle('fast');
}

function initThemeJs(){
	// init tooltip
	mgsjQuery('.tooltip-links').tooltip({
		selector: "[data-toggle=tooltip]",
		container: "body"
	});
	
	// init height for product info box
	if(mgsjQuery(window).width() > 991) {
		mgsjQuery(".product-info-box").css("min-height", "auto");
		mgsjQuery(".products-grid").each(function() {
			var wrapper = $(this);
			var minBoxHeight = 0;
			mgsjQuery(".product-info-box", wrapper).each(function() {
				if(mgsjQuery(this).height() > minBoxHeight)
					minBoxHeight = mgsjQuery(this).height();
			});
			mgsjQuery(".product-info-box", wrapper).height(minBoxHeight);
		});
	} else {
		mgsjQuery(".product-info-box").css("min-height", "auto");
	}
}

mgsjQuery(window).load(function() {
	mgsjQuery(window).bind('body', function() {
		parallaxInit();
	});
	
	if(mgsjQuery('.masonry-grid').length){
		var $container = mgsjQuery('.masonry-grid');
		// initialize
		$container.masonry({
		  itemSelector: '.item'
		});
	}
	
	mgsjQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		el = mgsjQuery(e.target).attr('href');
		

		mgsjQuery(".product-info-box").css("height", "auto");
		/* if(mgsjQuery(window).width() > 991) {
			mgsjQuery(".product-info-box").css("min-height", "auto");
			mgsjQuery(".products-grid").each(function() {
				var wrapper = $(this);
				var minBoxHeight = 0;
				mgsjQuery(".product-info-box", wrapper).each(function() {
					if(mgsjQuery(this).height() > minBoxHeight)
						minBoxHeight = mgsjQuery(this).height();
				});
				mgsjQuery(".product-info-box", wrapper).height(minBoxHeight);
			});
		} else {
			mgsjQuery(".product-info-box").css("min-height", "auto");
		} */

		
		count = 0;
		activeNumber = 0;
		widthContainer = mgsjQuery(el+' .owl-stage-outer').width();
		mgsjQuery(el+' .owl-item').each(function(n, element){
			count++;
		});
		
		mgsjQuery(el+' .owl-carousel .active').each(function(n, element){
			activeNumber++;
		});
		
		widthItem = widthContainer/activeNumber;
		
		mgsjQuery(el+' .owl-stage').width(count*widthItem);
		
		widthItem = widthItem-30;
		mgsjQuery(el+' .owl-item').width(widthItem);
		
		
		
		//alert(widthItem);
		
		/* setTimeout(function(){
			mgsjQuery(mgsjQuery(e.target).attr('href'))
			.find('.owl-carousel')
			.owlCarousel('invalidate', 'width')
			.owlCarousel('update')
		}, 2000); */
	});
	
	initThemeJs();
	
	if(mgsjQuery('.scroll-to-top').length){
		mgsjQuery(window).scroll(function(){
			if (mgsjQuery(this).scrollTop() > 1) {
				mgsjQuery('.scroll-to-top').css({bottom:"25px"});
			} else {
				mgsjQuery('.scroll-to-top').css({bottom:"-100px"});
			}
		});

		mgsjQuery('.scroll-to-top').click(function(){
			mgsjQuery('html, body').animate({scrollTop: '0px'}, 800);
			return false;
		});
	}
	
});

// init gmap
function initGmap(address, html, image){
	mgsjQuery.ajax({
		type: "GET",
		dataType: "json",
		url: "http://maps.googleapis.com/maps/api/geocode/json",
		data: {'address': address,'sensor':false},
		success: function(data){
			if(data.results.length){
				latitude = data.results[0].geometry.location.lat;
				longitude = data.results[0].geometry.location.lng;
				
				var locations = [
			[html, latitude, longitude, 2]
			];
		
			var map = new google.maps.Map(document.getElementById('map'), {
			  zoom: 14,
				scrollwheel: false,
				navigationControl: true,
				mapTypeControl: false,
				scaleControl: false,
				draggable: true,
				center: new google.maps.LatLng(latitude, longitude),
			  mapTypeId: google.maps.MapTypeId.ROADMAP
			});
		
			var infowindow = new google.maps.InfoWindow();
		
			var marker, i;
		
			for (i = 0; i < locations.length; i++) {  
		  
				marker = new google.maps.Marker({ 
				position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
				map: map ,
				icon: image
				});
		
		
			  google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  infowindow.setContent(locations[i][0]);
				  infowindow.open(map, marker);
				}
			  })(marker, i));
			}
			}
		}
	});
}

var newCount = 2;
var hotCount = 2;
var featuredCount = 2;

// load more products
function loadMore(count, type, productCount, perRow){
	mgsjQuery('#'+type+'_loadmore_button .loading').show();
	var request = new Ajax.Request(WEB_URL+'mpanel/loadmore/'+type+'?perrow='+perRow+'&p='+count+'&limit='+productCount, {
		onSuccess: function(response) {
			result = response.responseText;
			mgsjQuery('#'+type+'_product_container').append(result);
			mgsjQuery('#'+type+'_loadmore_button .loading').hide();
			initThemeJs();
		}
	});
}

// open overlay popup
function openOverlay(){
	mgsjQuery('#theme-popup').show();
}

// close overlay popup
function closeOverlay(){
	mgsjQuery('#theme-popup').hide();
}

var active = false;
var data = "";

// Price slider
function sliderAjax(url) {
	if (!active) {
		active = true;
		openOverlay();		
		oldUrl = url;
		try {
			mgsjQuery.ajax({
				url: url,
				dataType: 'json',
				type: 'post',
				data: data,
				success: function(data) {
					if (data.leftcontent) {
						if (mgsjQuery('.block-layered-nav')) {
							mgsjQuery('.block-layered-nav').empty();
							mgsjQuery('.block-layered-nav').append(data.leftcontent);
						}
					}
					if (data.maincontent) {
						mgsjQuery('#product-list-container').empty();
						mgsjQuery('#product-list-container').append(data.maincontent);
					}
					var hist = url.split('?');
					if(window.history && window.history.pushState){
						window.history.pushState('GET', data.title, url);
					}
					initThemeJs();
					closeOverlay();
				}
			});
		} catch (e) {}

		active = false;
	}
	return false;
}


// Ajax catalog load
function shopMore(url) {
	oldHtml = mgsjQuery('.category-products ul.products-grid').html();
	openOverlay();
	oldUrl = url;
	try {
		mgsjQuery.ajax({
			url: url,
			dataType: 'json',
			type: 'post',
			data: data,
			success: function(data) {
				if (data.leftcontent) {
					if (mgsjQuery('.block-layered-nav')) {
						mgsjQuery('.block-layered-nav').empty();
						mgsjQuery('.block-layered-nav').append(data.leftcontent);
					}
				}
				if (data.maincontent) {
					mgsjQuery('#product-list-container').empty();
					mgsjQuery('#product-list-container').append(data.maincontent);
					mgsjQuery('.category-products ul.products-grid').prepend(oldHtml);
				}
				initThemeJs();
				closeOverlay();
			}
		});
	} catch (e) {}
}

mgsjQuery(document).ready(function($) {
    mgsjQuery('a[href="#box-additional"]').html('Additional Information');
    mgsjQuery(document).on('click', '.block .block-title', function() {
        mgsjQuery(this).toggleClass('inactive');
        mgsjQuery('.block .block-content.toggle-content').toggleClass('inactive');
    });
    if(mgsjQuery(window).width() <= 768) {
        mgsjQuery('.block .block-title').toggleClass('inactive');
        mgsjQuery('.block .block-content.toggle-content').toggleClass('inactive');
    }
    // ----------------
    // DEFINE FUNCTIONS
    // ----------------
    var siteHeader = $('.header-builder');
    var miniTopbar = siteHeader.children('.nav-bar-top');
    var siteWrapper = $('body');
    
    function fixedHeader(){
        if ( siteHeader.hasClass('sticky-menu') ) {
            var documentWidth = $(document).width();
            var siteHeaderHeight = siteHeader.innerHeight();
            var miniTopbarHeight = miniTopbar.outerHeight();
            
            if ( documentWidth >= 990 ) {
                siteWrapper.addClass('fixed-header').css({'padding-top': siteHeaderHeight});
                
                $(window).scroll(function() {
                    var windowScrollTop = mgsjQuery(this).scrollTop();
                    
                    if ( windowScrollTop <= miniTopbarHeight ) {
                        siteHeader.css({'top': - windowScrollTop});
                    } else {
                        siteHeader.css({'top': - miniTopbarHeight});
                    }

                });
                
            } else {
                siteWrapper.removeClass('fixed-header').removeAttr('style');
            }
            
        }
    }
    
    // When resize window browsers
    function resizeWindow(e){
        fixedHeader();
    }

    // ----------------
    // RUN FUNCTIONS
    // ----------------
    resizeWindow(null);
    $(window).bind("resize", resizeWindow);
    
    // Custom on Home page
    if ( $('body').hasClass('cms-index-index') ) {
        $('.home-middle-banners').find('.home-banner-4, .home-banner-6').removeClass('col-sm-6');
    }
    
    // Show/Hide Mini Search form
    var formSearch = $('.form_search');
    var iconSearch = formSearch.children('.icon-search');
    var collapseSearch = formSearch.children('#collapseSearch');
    iconSearch.on( 'click', function(e) {
        e.preventDefault();
        if (collapseSearch.is(':visible')) {
            collapseSearch.hide();
            collapseSearch.find('#search').blur();
        } else {
            collapseSearch.show();
            collapseSearch.find('#search').focus();
        }
    });
    /* Hide Mini Search form when click outsite .form_search element*/
    $(document).on( 'click', function(e) {  
        if (e.target.hasClass != 'form_search' && !$('.form_search').find(e.target).length) {
            collapseSearch.hide();
            collapseSearch.find('#search').blur();
        }
    });
    
    // Products Tabs
    $('.tabbable .tab-content .tab-pane:not(:first-child)').removeClass('active');
    
})

mgsjQuery(document).ready(function() {    
	var slide2 = mgsjQuery(".righttop");
	var slide3 = mgsjQuery(".form_search #search_mini_form");
	var slide4 = mgsjQuery(".cart_top .sidebar1 .block-content");
	var slide5 = mgsjQuery("#header-v3 .lefttop");
	var slide6 = mgsjQuery(".righttop .toplinks > .dropdown-menu");
	var slide7 = mgsjQuery(".cart_top .sidebar1 .dropdown-menu");
	var slide8 = mgsjQuery("#header-v7 .toplinks > .dropdown-menu");
	slide2.children("div.btn-group").each(function(){
		mgsjQuery(this).click(function(){
			mgsjQuery(this).children("ul.dropdown-menu").slideToggle("fast");
		});
	});
	slide5.children("div.btn-group").each(function(){
		mgsjQuery(this).click(function(){
			mgsjQuery(this).children("ul.dropdown-menu").slideToggle("fast");
		});
	});
	mgsjQuery(".form_search .search").click(function(){
		slide3.slideToggle("fast");
	});
	mgsjQuery(".cart_top .sidebar1 .icon-cart").click(function(){
		slide4.slideToggle("fast");
	});
	mgsjQuery(".cart3").click(function(){
		slide7.slideToggle("fast");
	});
	mgsjQuery("#header-v3 .toplinks > a").click(function(){
		slide6.slideToggle('fast');
	});
	mgsjQuery("#header-v7 .toplinks > div > a").click(function(){
		slide8.slideToggle('fast');
	});
});

mgsjQuery(window).load(function(){
				
				mgsjQuery("body.ajaxcart-index-options").mCustomScrollbar({		
					setHeight: 450,
					theme:"minimal-dark"
				});
				mgsjQuery(".quickview-product .product-options").mCustomScrollbar({		
					setHeight: 334,
					theme:"minimal-dark"
				});
	});
mgsjQuery(document).ready(function(){
	mgsjQuery('.alert').slideDown(400);
	mgsjQuery('i').click(function () {
            mgsjQuery('.alert').slideUp(400);
        });
	mgsjQuery('.alert').slideDown('400', function () {
        setTimeout(function () {
            mgsjQuery('.alert').slideUp('400', function () {
                mgsjQuery(this).slideUp(400, function(){ mgsjQuery(this).detach(); })
            });
        }, 7000)
    });
	mgsjQuery('.header-v8 .btn-responsive-nav').click(function(){
		mgsjQuery(this).toggleClass('change');
		mgsjQuery(this).siblings('.header-v8 .navbar-collapse').toggleClass('drop');
		mgsjQuery(this).siblings('.header-v8 .navbar-collapse').children('.nav-main').children('#mainMenu').removeClass('hid');
		mgsjQuery('.cms-home #header-v7.header-v8 .r-header2').toggleClass('slide');
		/* mgsjQuery('.cms-home #header-v7.header-v8 .r-header2').toggleClass('slide');
		mgsjQuery(this).siblings('.header-v8 .navbar-collapse').children('.nav-main').children('#mainMenu').animate({
			'right' : '-15px'
		},800,function(){
			mgsjQuery('.header-v8 .btn-responsive-nav').click(function(){
				mgsjQuery('.cms-home #header-v7.header-v8 .r-header2').toggleClass('slide');
				mgsjQuery(this).siblings('.header-v8 .navbar-collapse').children('.nav-main').children('#mainMenu').animate({
					'right' : '-301px'
				}, 800);
			});
		}); */
	});
	mgsjQuery('#mainMenu li.dropdown > a').click(function(){
		mgsjQuery(this).parent().toggleClass('active');
		mgsjQuery(this).siblings('.dropdown-menu').toggleClass('s');
	});
	mgsjQuery('#close').click(function(){
		mgsjQuery(this).parent().toggleClass('hid');
	});
	mgsjQuery('#header-v7.header-v8').parent().parent().addClass('onepage');
});
/* add class to the open accordion title */
mgsjQuery(function(){
	mgsjQuery('#accordion-product-questions').on('show.bs.collapse', function(e){
		mgsjQuery(e.target).prev('.panel-heading').find('.panel-content-heading').addClass('active');
	});
	mgsjQuery('#accordion-product-questions').on('hide.bs.collapse', function(e){ 
		mgsjQuery(this).find('.panel-content-heading').not(mgsjQuery(e.target)).removeClass('active');
	});
});

function setTabBackground(url){
	$('tab-background').setStyle({backgroundImage: 'url('+url+')'});
}

/* collapse tabs on mobile */
mgsjQuery(document).ready(function() {
    var width = mgsjQuery(window).width();
    if(width < 768) {
        console.log(width);
        mgsjQuery('#aw-ln-filters-container .active').removeClass('active');
    }
});
mgsjQuery(document).on('click', '.image-media .thumb-link', function() {
		mgsjQuery('.product-image-gallery img:nth-child(2):not(.gallery-image)').remove();
});