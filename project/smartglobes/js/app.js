
$(function(){
	 
	$('a.remove').doRemove({'confirm':'您确定删除吗？'});
	$('.removeItem').doRemove({'confirm':'您确定取消关注他吗？'});
 
	$(".boxy").live('click',function(){
		var url = $(this).attr('href');
		url = urlRequest.setParameter( 'format','txt',url );
		itbeingDialog = art.dialog();
		$.get(url,function(data){
			itbeingDialog.content(data);
		});
		return false;
	});
 
	$(".playvideo").live('click',function(){
		var url = $(this).attr('href');
		url = urlRequest.setParameter( 'format','txt',url );
		$.get(url,function(data){
			 var htmlmessage = data;
			 $("#video_xxpaly").html(htmlmessage);
			 $('.video_mask').show();
			 $('.video_xxx').slideDown(200);
			 return false;
		});
		return false;
	});
 
	$('.btn_ben_close,.btn_ben_cancle ').live('click',function(){
		itbeingDialog.close();
	});
	$(".btn_video_close").live('click',function(){
		$('.video_mask').hide();
		$('.video_xxx').slideUp(200);
	})
	 
	$('.sdatetime').live('click',function(){
		WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss'})
	});
 
	$('.sdate').live('click',function(){
		WdatePicker();
	});
	 
	$('a.check_box_item').live('click',function(e){
		e.preventDefault();
		var c = $(this).attr('class');
		var v = 0;
		if(c.indexOf('check_box_ok')>-1){
			$(this).removeClass('check_box_ok');
			$(this).addClass('check_box');
		}else{
			$(this).removeClass('check_box');
			$(this).addClass('check_box_ok');
			v = 1;
		}
		$(this).find('input').val(v);
	});
	 
	$('.ajaxformbtn').click(function(){});
	$('.ajaxformbtn').doSubmit({'callback':function(rs){
		var msg = rs.msg;
		var icon = null
		var redirect = rs.redirect;

		if(msg.indexOf('密码重置')>-1 || msg.indexOf('编辑成功')>-1|| msg.indexOf('注册成功')>-1){
			itbeing.alert(msg);
			 
			if(redirect){
				window.location.href = redirect;
				return false;
			}
		}
		if(msg.indexOf('成功')>-1){
			//icon = 'succeed';
			 
			 
			if(redirect){
				window.location.href = redirect;
				return false;
			}
		}else{
			itbeing.alert(msg);
			return false;
		}
		art.dialog({
			icon: icon,
			content: '<pre>'+msg+'</pre>',
			ok: function () {
				if(msg.indexOf('成功')>-1){
					var redirect = rs.redirect;
					if(redirect){
						window.location.href = redirect;
					}
				}
				return true;
			},
			cancel:false,
		});
	}});
	
	$('.ajaxlogin').doSubmit({'callback':function(rs){
		var msg = rs.msg;
		var icon = null
		var redirect = rs.redirect;
		 
		if(msg.indexOf('成功')>-1){
		 
			if(redirect){
				window.location.href = redirect;
				return true;
			}
		}else{
			if(msg.indexOf('账户不能为空')>-1 || msg.indexOf('用户不存在，请重试')>-1 ){
				$(".username").addClass('wrong');
				$(".password").removeClass('wrong');
				$(".password").val('');
			}else if(msg=='密码错误，请重试'){
				$(".username").removeClass('wrong');
				$(".password").addClass('wrong');
				$(".password").val('');
			}
			$('#wronginfo').html(msg);
			return false;
		}
		 
	}});


 
	$('[placeholder]').focus(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		}
	}).blur(function(){
		var input = $(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	 
	$('.more_action').hover(
		function() { 
			$(this).find('ul.tabs').show();
			$(this).addClass('current');
		},
		function() { 
			$(this).find('ul.tabs').hide(); 
			$(this).removeClass('current');
		}
	);
 
	$('a.sort').setFeildSort();
	$('#check').doCheckAll({target:'.checkbox'});
	$('.cancelLink').click(function(){ window.history.go('-1'); });
	 
	$('.histroyBack').click(function(){ window.history.go('-1'); });
	 
	$('#operateBtn').click(function(){
		var action = $('#action_type').val();
		if(action=='remove' || action=='delete' ){
			if( !(itbeing.confirm('确定删除吗？') ) ) return false;
		}
		var isChecked = false;
		$('.checkbox').each(function(){
			if($(this).attr('checked')){ 
				isChecked = true;
			}
		});
		if(!isChecked){ 
			itbeing.alert('请选择操作条目！');
			return false;
		}
		$('#listForm').submit();
	});
	$('textarea.editor').each(function(index, element) {
		var id = $(element).attr('id');
		UE.getEditor(id,{wordCount:false,initialFrameWidth:650,elementPathEnabled:false,focus:true,initialContent:''});
    });
});

function show_progress(){
	var offsetTop = $(window).scrollTop();
	if(offsetTop>0)$('#progress').css({top:offsetTop+'px'});
	$('#progress').show();
}


function hide_progress(){
	$('#progress').hide();
}
$(document).ready(function($){

	$('.theme-forget-k').click(function(){
		$('.theme-popover-forget').show();
		$('.theme-popover-mask2').hide();
		$('.theme-popover2').hide();
		$('.theme-popover-forget').height($(document).height());
		$('.theme-forget').slideDown(200);
	})
	$('.theme-forget1 .close').click(function(){
		$('.theme-popover-forget').hide();
		$('.theme-forget').slideUp(200);
	})
	 
	 
});
 
function checkLogin(){
	if(userId>0){
		return true;
	}
	$('.theme-popover-mask2').show();
	$('.theme-popover-mask2').height($(document).height());
	$('.theme-popover2').slideDown(200);
	return false;
}
$(function(){
	$(".xiepage").live('blur',function(){
		var page = $(this).val();
		var url = $(this).attr('belong');
		url = url+"&page="+page;
		 
		$.get(url,function(rs){
			  var htmlex = $(rs).find('#web_searchdiv').html();
			 $('#web_searchdiv').html(htmlex);	
		});
	})
	$(".ajaxsearch").live('click',function(e){
		 e.preventDefault();
		var url = $(this).attr('href');
		if(url!='#'){
			 
			$.get(url,function(rs){
				  var htmlex = $(rs).find('#web_searchdiv').html();
				 $('#web_searchdiv').html(htmlex);	
			});
		}
	});
	$('.ajaxform').live('submit',function(e){
		e.preventDefault();
		var url =  BASE_URL+"/?c=users&a=index";
		var data = $(this).serialize(); 
		 if($("._keyword").val()!='结果中搜索'){
			itbeing.ajaxRequest({url:url,method:"POST",dataType:'html',callback:function(rs){		
				 var htmlex = $(rs).find('#staruserdiv').html();
				 $('#staruserdiv').html(htmlex);
				
			}},data); 
		 }
		return false;
	});
 
	$(".case_category").live('click',function(e){
		 e.preventDefault();
		var host =  window.location.host;
		var url = $(this).attr('href');
		if(host=='niceui.cn'){
		  url =	url.replace("www.niceui.cn","niceui.cn");
		}
		if(url!='#'){
			 $.get(url,function(rs){
				var blog_tab = $(rs).find('.blog_tab').html();
				 $('.blog_tab').html(blog_tab);
				 var htmlex = $(rs).find('#case_con').html();
				 $('#case_con').html(htmlex);	 
			}); 
		}
	});
	$(".news_category").live('click',function(e){
		e.preventDefault();
		var host =  window.location.host;
		var url = $(this).attr('href');
		if(host=='niceui.cn'){
		  url =	url.replace("www.niceui.cn","niceui.cn");
		}
		if(url!='#'){
			$.get(url,function(rs){
				 var tree_menu = $(rs).find('#tree_menu').html();
				 var htmlrs = $(rs).find('#content').html();
				 $('#tree_menu').html(tree_menu);
				 $('#content').html(htmlrs);
			});
		}

	});
	 

		
});
 
 
$(function(){
	$(".pas").live('focus',function(){	
		if($(".pas_txt").html()){
			$(".pas_txt").slideUp(200);
			$(".pas_txt").html('');
		}
		if($(".name_txt").html()){
			$(".name_txt").slideUp(200);
			$(".name_txt").html('');
		}
		if($(".nickname_txt").html()){
			$(".nickname_txt").slideUp(200);
			$(".nickname_txt").html('');
		}
	});
	$(".name").live('focus',function(){	

		if($(".pas_txt").html()){
			$(".pas_txt").slideUp(200);
			$(".pas_txt").html('');
		}
		if($(".name_txt").html()){
			$(".name_txt").slideUp(200);
			$(".name_txt").html('');
		}
		if($(".nickname_txt").html()){
			$(".nickname_txt").slideUp(200);
			$(".nickname_txt").html('');
		}
	});
	$(".nickname").live('focus',function(){	

		if($(".pas_txt").html()){
			$(".pas_txt").slideUp(200);
			$(".pas_txt").html('');
		}
		if($(".name_txt").html()){
			$(".name_txt").slideUp(200);
			$(".name_txt").html('');
		}
		if($(".nickname_txt").html()){
			$(".nickname_txt").slideUp(200);
			$(".nickname_txt").html('');
		}
	});
 

})	
