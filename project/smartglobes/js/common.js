 
//文本提示
jQuery(document).ready(function(){

			jQuery("#serch .txt,#demand .txt").each(function(){
					var thisVal=jQuery(this).val();
				
					if(thisVal!=""){
							jQuery(this).siblings("span").hide();
						}else{
							jQuery(this).siblings("span").show();
						}
			
					jQuery(this).focus(function(){
							jQuery(this).siblings("span").hide();
						}).blur(function(){
								var val=jQuery(this).val();
								if(val!=""){
									jQuery(this).siblings("span").hide();
								}else{
									jQuery(this).siblings("span").show();
								}	
						});
				})


 })
 

//下拉
$(document).ready(function(){

$("#jq_topmenu li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();});

$("#jq_car li").hover(function(){$(this).addClass("hover").find("div.jq_hidebox").show();},function(){$(this).removeClass("hover").find("div.jq_hidebox").hide();});
 
}); 


/*function getTop(){
	var top = $(document).scrollTop();
	if($(document).scrollTop()>280){
	 
	 $("#top-nav").css('display','none');
	 } else {
	  $("#top-nav").fadeIn();	   
	}
	setTimeout(getTop);
}
 
getTop();*/
 