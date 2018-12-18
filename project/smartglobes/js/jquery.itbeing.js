/**
 * Jquery 扩展库
 *
 * @copyright 一天创想（北京）科技有限公司<service@itbeing.com> 
 * @link http://www.itbeing.com
 * @author kokko<kokkowon@itbeing.com>
 * @version 2011-03-10
 */
/*$.fn.getCursortPosition = function(ctrl){
	ctrl = ctrl||$(this);
	var CaretPos = 0;
	if (document.selection) {
			
	}else if (this.selectionStart || this.selectionStart == '0') {
		
	}
};*/

jQuery.fn.extend({
	//设置定位文字输入框的文字位置
	setCaretPosition:function(ctrl,pos1,pos2){
		textArea = ctrl||$(this);
		if (document.selection) {
			 var rng = textArea[0].createTextRange();
			 rng.collapse(true);
			 rng.moveEnd("character",pos2);
			 rng.moveStart("character",pos1);
			 rng.select();
		} else if (textArea[0].selectionStart || (textArea[0].selectionStart == '0')) {
			textArea[0].selectionStart = pos1;
			textArea[0].selectionEnd = pos2;
		}
		textArea[0].focus();
	},
	//获取定位文字输入框的文字位置
	getCursortPosition:function(ctrl){
		ctrl = ctrl||$(this);
		var CaretPos = 0;
		var val = $(ctrl).val();
		var length = val.length;
		if (document.selection) {
			ctrl.focus ();
			var Sel = document.selection.createRange ();
			Sel.moveStart ('character', -length);
			CaretPos = Sel.text.length;
		}else if (ctrl[0].selectionStart || ctrl[0].selectionStart == '0'){
			CaretPos = ctrl[0].selectionStart;
		}
		return (CaretPos);	
	},
	//微薄的文字输入
	mBlogInput : function(options){
		var settings = {
			searchUrl:'/?c=searcher&a=users&format=li&pagesize=10',
			fontSize:'font-size:12px;line-height:15px;'
		};
		if(options) { $.extend(settings, options); }	
		$(this).itLeftChar(options);
		$(this).live('keyup',function(event){
			var val = $(this).val();
			var $this = $(this);
			var pos1 = $(this).getCursortPosition();
			var pos2 = val.slice(0,pos1).lastIndexOf('@');
			var space1=val.slice(pos2,pos1).lastIndexOf(' ');
			var space2=val.slice(pos2,pos1).lastIndexOf('\n');
			//alert(val+'='+pos1);
			e = window.event;
			$(this).keydown(function(e){
				e=e||window.event;
				if(((e.keyCode=="40" || e.keyCode=="38" || e.keyCode=="13") && $('.atusers').html()!=null) || e.keyCode=="27") {
					return false;
				}
			});
			if(event.keyCode!=38 && event.keyCode!=40 && event.keyCode!=13 && event.keyCode!=27){
				if (pos2!=-1 && space1==-1 && space2==-1) {
					var keyword=val.slice(pos2,pos1);
					keyword=keyword.replace('@','');
            		keyword=keyword?keyword:'';
					if(keyword=='') return;
					$.post(settings.searchUrl,{_keyword:keyword,_sfields:'nickname'},function(msg)
					{
						$('.atusers').remove();
                		$('.atmask').remove();
						var s1='<span>'+val.slice(0,pos2).replace(/\n/g,'<br>')+'</span>';
                		var s2='<span>@</span>';
                		var s3='<span>'+val.slice(pos2+1,val.length).replace(/\n/g,'<br>')+'</span>';
						var fs = settings.fontSize;
						$('#container').after('<div class="atmask" style="'+fs+'width:'+$this.css('width')+';height:'+$this.css('height')+';top:'+($this.offset().top+5)+'px;left:'+($this.offset().left+7)+'px">'+s1+s2+s3+'</div>');
						$('#container').after('<div class="atusers"><div class="attip">想用@提到谁？ESC取消</div><ul>'+msg+'</ul></div>');
						var attop=parseInt($('.atmask').find('span:eq(1)').offset().top)+20-$this.scrollTop();
						if ($.browser.msie) {
							attop=parseInt($('.atmask').find('span:eq(1)').offset().top)+20-$this.scrollTop();
						}
						$('.atusers').css({"left":$('.atmask').find('span:eq(1)').offset().left,"top":attop+'px'});
						$('.atusers > ul > li').mouseover(function(){$('.atusers > ul > li').removeClass();$(this).addClass("cur");});
						$('.atusers > ul > li').mouseout(function(){$('.atusers > ul > li').removeClass();});
						$(".atusers > ul > li").first().addClass("cur");
						$('.atusers > ul > li').click(function(){
							var n1=val.slice(0,pos2);
                    		var n2=val.slice(pos1,val.length);
                    		var newc=n1+"@"+$this.html()+' '+n2;
							$this.val(newc);
							$this.focus();
							$('.atusers').remove();
							$('.atmask').remove();
						});
					});
				}else{
					$('.atusers').remove();
            		$('.atmask').remove();
				}
			}else{
				if (event.keyCode==40) {
					 if ($('.atusers').html()!=null){
					 	var aul=$('.atusers > ul');
                		var n=aul.find('.cur').index();
						if (n==-1 || n>=$('.atusers > ul > li').length-1) {
							n=0;
						} else {
							n=n+1;
						}
						$('.atusers > ul > li').removeClass();
                		$(".atusers > ul > li").eq(n).addClass("cur");
                		$('.atusers > ul').scrollTop((n-6)*$(".atusers > ul > li").eq(n).height());
					 }
				} else if (event.keyCode==38) {
					if ($('.atusers').html()!=null){
						var aul=$('.atusers > ul');
						var n=aul.find('.cur').index();
						if (n==-1) {
							n=0;
						} else if (n==0) {
							n=$('.atusers > ul > li').length-1;
						} else {
							n=n-1;
						}
						$('.atusers > ul > li').removeClass();
						$(".atusers > ul > li").eq(n).addClass("cur");
						$('.atusers > ul').scrollTop((n-6)*$(".atusers > ul > li").eq(n).height());
					}
				} else if (event.keyCode==13) {
					if ($('.atusers').html()!=null){
						var aul=$('.atusers > ul');
						var n=aul.find('.cur').index();
						if (n!=-1) {
							var n1=$this.val().slice(0,pos2);
							var n2=$this.val().slice(pos1,$this.val().length);
							var newc=n1+"@"+$(".atusers > ul > li").eq(n).html()+' '+n2;
							$this.val(newc);
							$this.focus();
						}
						$('.atusers').remove();
						$('.atmask').remove();
					}
				 } else if (event.keyCode==27) {
				 	if ($('.atusers').html()!=null){
						$('.atusers').remove();
						$('.atmask').remove();
					}
				 }
			}
		})
	},
	//判断文字输入剩余字数
	itLeftChar: function(options) {
			var settings = {
				leftNum: 'left_num',
				totalNum:'total_num',
				container:'num_container',
				content:null,
				isWeb:true
			};
			if(options) {
				$.extend(settings, options);
			}	
			//使用短地址代替URL
			$(this).live('keyup',function(){
				$this = $(this);
				var matchURL = new RegExp("((?:http|https|ftp|mms|rtsp)://(&(?=amp;)|[A-Za-z0-9\./=\?%_~@&#:;\+\-])+)","ig");
				//var shorturl = 'http://goo.gl';
				var leftNum = $this.attr(settings.leftNum);
				var totalNum = $this.attr(settings.totalNum);
				var content = $this.val();
				if(settings.content) content = settings.content;
				var cval = content;
				var webnum = cval.match(matchURL);
				if (webnum && settings.isWeb) {
					webnum=webnum.length;
				}else{
					webnum=0;
				}
				cval= cval.replace(matchURL, '');
				var clength = parseInt( cval.length ) + webnum*8;
				leftNum = totalNum-clength;
				if( (leftNum<0) )
				{
					leftNum = 0;
					content = content.substr(0,totalNum);
					$this.val(content);
				}
				$this.attr(settings.leftNum,leftNum);
				//设置
				try{
					$showNumObj = $( $this.attr( settings.container ) );
					$showNumObj.html( clength<=totalNum ?clength : totalNum );
				}catch(e){
					return false;
				}
			})
	},
	//删除
	doRemove:function(options){
		 var settings = {
            action: 'href',	//删除脚本的URL属性字段
			confirm:'您确定删除吗？',
            callback: function(rs){window.location.reload()},
			method: 'POST',		//ajax请求类型
			dataType: 'json',	//ajax请求数据类型
			cache:true		//ajax是否缓存
        };
		if(options) {
            $.extend(settings, options);
        }
		
		$(this).live('click',function(e){
			e.preventDefault();
			$this = $(this);
			var url = urlRequest.setParameter( 'format',settings.dataType,$this.attr( settings.action ) );
			var _confirm = $this.attr( 'confirm' );
			var isSave = true;

			if( typeof _confirm =='undefined' || _confirm=='' || _confirm==null ){
				_confirm = settings.confirm;
			}
			if(_confirm){
				if(itbeing.confirm(_confirm)) 	isSave = true;
				else isSave = false;
			} 
						
			if( isSave ){
				itbeing.ajaxRequest({
					url:url,
					method:settings.method,
					dataType:settings.dataType,
					cache:settings.cache,
					callback:function(rs){
						settings.callback(rs);
					}
				});
			}
		})
	},
	//表单按钮提交
	doSubmit:function(options){
		var settings = {
			dataType:'json',
			filter:function(){return true},
			callback:function(rs){alert(rs.message)},
			form:null,
			action:null,
			data:null
		};
		if(options) {
            $.extend(settings, options);
        }
		
		$(this).live('click',function(e){
			e.preventDefault();
			var $this = $(this);
			var form = $(this).closest('form');
			if(settings.form!=null) form = $(settings.form).closest('form');
			var data = form.serialize();
			if(settings.data!=null) data =  $.extend(data, settings.data);
			var url = form.attr('action');
			if(settings.action!=null) url = settings.action;
			url = urlRequest.setParameter( 'format',settings.dataType,url );

			if(settings.filter()){
				itbeing.ajaxRequest({url:url,method:'POST',dataType:settings.dataType,callback:function(rs){			
					settings.callback(rs);		
				}},data);
			}
		})
	},
	//排序
	setFeildSort:function(){
		$(this).live('click',function(event){
			event.preventDefault();
			field = this.attributes['field'].value;;
			return urlRequest.setSort(field);
		})
	},
	//全选，取消全选
	doCheckAll:function(options){
		var settings = { target:null	};
		if(options) { $.extend(settings, options); }
		var target = ':checkbox';
		if(settings.target != null ) target = settings.target;
		$(this).live('click',function(e){
			if($(this).attr('checked')){
				$(target).attr('checked',true);
			}else{
				$(target).attr('checked',false);
			}
		});
	}
}); 