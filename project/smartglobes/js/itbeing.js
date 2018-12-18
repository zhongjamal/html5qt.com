/**
 * JS公共库
 *
 * @author 一天创想（北京）科技有限公司<service@itbeing.com> 
 * @link http://www.itbeing.com
 * @version 2011-03-10
 */
//公共设置
var UserId = 0;		//用户ID
var UserName = '';	//用户名
var NickaName = '';
var Avatar = '';
var BASE_URL = '';	//
var PUBLIC =  '/public/';
var URL = '';	//当前URL
///命名空间
var itbeing;
itbeing = itbeing || {	////itbeing 公共函数库
	//匹配
	match: function (str, regexp, mode)
	{
		if (typeof mode == "undefined") mode = "g";
		var re = new RegExp(regexp, mode);
		var arr = re.exec(str);
		return arr;
	},
	//替换
	replace: function (str, regexp, rep, mode)
	{
		if (typeof rep == "undefined") rep = "";
		if (typeof mode == "undefined") mode = "g";
		var re = new RegExp(regexp, mode);
		var s = str.replace(re, rep);
		return s;
	},
	//去除html代码
	stripTags: function(str)
	{
		return lib.replace(str, "<\/?[^>]+>", "");

	},
	/**
	*	html字符转换
	*/
	htmlEncode:function(text)
	{
		var re = {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;','&#039;':'\''};
		for (s in re)
			text = text.replace(new RegExp(s,'g'), re[s]);
		return text;
	},
	//删除数组元素
	rmArray:function(arr,v){
		return $.grep(arr, function(e) {
			return e !== v;
		});	
	},
	/**
	*	html字符转换
	*/
	htmlDecode:function(text)
	{
		var re = {'&lt;':'<','&gt;':'>','&amp;':'&','&quot;':'"','\'':'&#039;'};
		for (s in re)
			text = text.replace(new RegExp(s,'g'), re[s]);
		return text;
	},
	//json
	evalJSON: function(json)
	{
		
		  if (/^[\],:{}\s]*$/.
test(json.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
					return eval('(' + json + ')');
					}
			else
			{
				alert('error');
 				return ;
			}
    },
	//in_array 检查数组中是否存在某个值
	inArray: function (needle,haystack)
	{
		if(typeof needle == 'string' || typeof needle == 'number') {
			for (i=0;i<haystack.length;i++)
			{
				if (haystack[i] == needle)
				{
					return true;
				}
			}
		}
		return false;
	},
	////提示消息
	alert:function(mes){
		alert(mes);
	},
	///确认消息
	confirm:function(mes){
		var r=confirm(mes);
		return r;
	},
	//显示可提示用户进行输入的对话框
	prompt:function(text,defaultText){
		var name=prompt(text,defaultText)
		return name;
	},
	//ajax 请求
	ajaxRequest:function(opt,data){	
		$('#progress').show();
		if( typeof(data)=='undefined' ) data = null;
		if( typeof(opt.url)=='undefined' ) opt.url = BASE_URL;
		if( typeof(opt.method)=='undefined' ) opt.method = 'POST';
		if( typeof(opt.dataType)=='undefined' ) opt.dataType = 'html';
		if( typeof(opt.cache)=='undefined' ) opt.cache = false;
		if( typeof(data)=='undefined' ) data = null;
		if( typeof(opt.startfunc)!='undefined' ) opt.startfunc();	//前置函数
		var url = opt.url;
		url = urlRequest.setParameter( 'format',opt.dataType,url );
		opt.dataType = (opt.dataType!='html' && opt.dataType!='json') ? 'html' : opt.dataType;
		
		jQuery.ajax(	
		{
			complete:function(request){$('#progress').hide();}, 
			data:data, 
			dataType:opt.dataType,
			cache:opt.cache,
			success:function(request){
				if( typeof(opt.callback)!='undefined' ) opt.callback(request);
				else itbeing.alert(request);
			}, 
			type:opt.method, 
			url:url
		}); 
	},
	ajaxPage:function(url){
		var func = urlRequest.getParameter('_callback',url);
		var format = urlRequest.getParameter('format',url);
		if( typeof(func)=='undefined' ) func = function(rs){ alert(rs) };
		else{ previous = window[ func ]; func = function(rs){ previous(rs) }; }
		this.ajaxRequest({url:url,dataType:format,callback:function(rs){func(rs)}});
	},
	loadJs:function(url){
		var script = document.createElement('script');  
		script.setAttribute('src', url); 
		document.getElementsByTagName('head')[0].appendChild(script);
	},
	addToFavorite:function(url,title) {
		if(confirm("网站名称："+title+"\n网址："+url+"\n确定添加收藏?")){
			var ua = navigator.userAgent.toLowerCase();
			if(ua.indexOf("msie 8")>-1){
				external.AddToFavoritesBar(url,title,title);//IE8
			}else{
				try {
					window.external.addFavorite(url, title);
				} catch(e) {
					try {
						 window.sidebar.addPanel(title, url, "");//firefox
					} catch(e) {
						alert("加入收藏失败，请使用Ctrl+D进行添加");
					}
				}
			}
		}
		return false;
	}
};

function is_int(input){    
	if( (typeof(input)=='number' || !isNaN(input)) &&parseInt(input)==input ){
		return true;
	}
	return false;
};

function imgOnError(img,imgsrc){
	//var img=event.srcElement;
	img.src = imgsrc;
	img.onerror=null;
};

//去除空格
String.prototype.trim = function()
{
	return jQuery.trim(this);
};

//取得字符串长度，flg:true时 一个中文算两个
String.prototype.strlen = function(flg)
{
	if (typeof flg == "undefined") flg = false;
	if (flg == true)
	{
		return this.replace(/[^\x00-\xff]/g, "##").length;
	}
	else
	{
		return this.length;
	}
};

/**
 * 判断字符串是否以指定的字符串开始
 * @param str 开头字符串
 * @param isCase 是否区分大小写，true区分，默认值false不区分
 * @returns {Boolean} 比较结果
 */
String.prototype.startsWith = function(str,isCase) {
	var cstr = $.trim(this); str = $.trim(str);
	if(typeof isCase=='undefined') isCase = false;
	if(!isCase){//不区分大小写
		cstr = cstr.toLowerCase();
		str = str.toLowerCase();
	} 
	if( cstr.length < str.length) return false;
	return cstr.substr(0, str.length) == str;
};

/**
 * 判断字符串是否以指定的字符串结束
 * @param str 结尾字符串
 * @param isCase 是否区分大小写，true区分，默认值false不区分
 * @returns {Boolean} 比较结果
 */
String.prototype.endsWith = function(str,isCase) {
	var cstr = $.trim(this); str = $.trim(str);
	if(typeof isCase=='undefined') isCase = false;
	if(!isCase){//不区分大小写
		cstr = cstr.toLowerCase();
		str = str.toLowerCase();
	} 
	if( cstr.length < str.length) return false;
	return cstr.substr(cstr.length - str.length) == str;
};

//URL 请求类
var urlRequest = {
	callback:null,
	url:'',
	
	//url编码
	urlencode: function (str)
	{
		return encodeURIComponent(str);
	},

	//url解码
	urldecode: function (str)
	{
		return decodeURIComponent(str);
	},

	//取得url中参数值
	getParameter: function (varName,query){
		if (typeof query == "undefined") query = window.location.search;
		if (query != null || query != ""){
			query = query.replace(/^\?+/, "");
			var qArray = query.split("&");
			var len = qArray.length;
			if (len > 0){
				for (var i=0; i<len; i++){
					var sArray = qArray[i].split("=", 2);
					if (sArray[0] && sArray[1] && sArray[0] == varName)
					{
						return unescape(sArray[1]);
					}
				}
			}
		}
		return null;
	},
	//设置URL参数
	setParameter:function(name,value,url){
		if (typeof url == "undefined"){
			url = window.location.href;
		}
		hash = '';
		if(url.indexOf('#')>-1){
			hash = '#'+url.substr(url.indexOf('#')+1);
			url = url.substr(0,url.indexOf('#'));
		}

		oldvalue = this.getParameter(name,url);
		if(oldvalue==null){
			str = name+"="+this.urlencode(value); 
			if(url.indexOf('?')>-1){
				url = url+"&"+str;
			}else{
				url = url+"?"+str;
			}
		}else{
 			parttern = name+'='+oldvalue;
			url = url.replace(parttern,name+'='+this.urlencode(value));
 		}
 		return url+hash;
	},
	//删除参数
	unsetParameter:function(name,url){
		if (typeof url == "undefined") url = window.location.href;
		var regexp = name+"=([^&]*)";
		url = itbeing.replace(url,regexp,'');
		url = itbeing.replace(url,'&&','&');
		return url;
	},
	//排序
	setSort:function(field){
   		url = this.setParameter('order',field);
		sort = this.getParameter('sort');
 		if(sort=='asc') sort = 'desc';
		else sort = 'asc';
		this.url = this.setParameter('sort',sort,url);
		if(this.callback!=null){
			this.callback();
		}else{
			if(this.url!=window.location.href) window.location.href = this.url;
		}	
	},
	//分页
	setPagesize:function(ps){
		url = lib.setParameter( 'page',0, lib.setParameter('pagesize',ps) );
		if(url!=window.location.href)window.location.href = url;
	}
};
