/**
 * lcslog.js  v 0.4.17
 * Last Updated: 2013-11-08
 * Author : Chin Mi Ae, Lee Dae Beom
 * Copyright 2013 NHN Entertainemnt Corp. All rights Reserved.
 * NHN ENT. PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 * This code includes some part of the
 * "Flash Player Detection Kit Revision 1.5" by Michael Williams
 * & Copyright 2005-2007 Adobe Macromedia Softward.LLC. All rights reserved.
 */


var lcs_isie = (navigator.appName == "Microsoft Internet Explorer"); 
var lcs_isns = (navigator.appName == "Netscape" );
var lcs_isopera = (navigator.appVersion.indexOf("Opera") >=  0 );
var lcs_ismac = (navigator.userAgent.indexOf("MAC")>=0); 

var lcs_add = {};
var lcs_bc = {};

var lcs_ver = "v0.4.17";
var lcs_cnt = 0;

function lcs_do( etc ) {
	// TODO : check lcs server name!! 
	if (!window.lcs_SerName) { window.lcs_SerName = "lcs.hangame.com"; }

	var rs = "";
	var index;
	var doc = document;
	var wlt = window.location;

	try {
		var lcs_Addr = (wlt.protocol ? wlt.protocol : "http:")+"//" + window.lcs_SerName + "/m?";
	} catch(e){ return; }

	try {
		rs = lcs_Addr + "u=" + encodeURIComponent(wlt.href) 
			+ "&e=" + (doc.referrer ? encodeURIComponent(doc.referrer) : "");
	} catch(e) {
	}

	try {

	if (typeof lcs_add.i == 'undefined' )
		lcs_add.i = "";

	for( var index in lcs_add)
	{
		if( typeof lcs_add[index] != 'function' ) 
			rs += "&" + index + "=" + encodeURIComponent(lcs_add[index]);
	}

	for( var index in etc )
	{
		if ( (index.length >= 3 && (typeof etc[index] != 'function')) || index == 'qy')
		{
			rs += "&" + index + "=" + encodeURIComponent(etc[index]);
		}
	}

	
	if(lcs_cnt < 1)
	{
		lcs_getBrowserCapa();
	}

	for( var index in lcs_bc )
	{
		if( typeof lcs_bc[index] != 'function' ) 
			rs += "&" + index + "=" + encodeURIComponent(lcs_bc[index]);
	}

	if(lcs_cnt > 0 )
	{
		var timeStr = (new Date).getTime();
		rs += "&ts=" + timeStr;
	}
	rs += "&EOU";

	var obj = document.createElement('img')
	obj.src = rs;
	obj.onload = function() { obj.onload = null; return; }

	lcs_cnt++;

	} catch(e) {
		return;
	}
}

function lcs_do_gdid( gdid , etc) {

	try {
		if (gdid) {
			lcs_add["i"] = gdid;

			if (etc){
				lcs_do(etc);
			} else {
				lcs_do();
			}
			
		}
	} catch (e) {
	}
}

function lcs_getBrowserCapa() {
	lcs_getOS();
	
	lcs_getlanguage();
	
	lcs_getScreen();

	lcs_getWindowSize();

	lcs_getColorDepth();

	lcs_getJavaEnabled();  

	lcs_getJavascriptVer();

	lcs_getCookieEnabled(); 

	lcs_getSwfVer();

	lcs_getSLVersion();

	lcs_getConnectType();

	lcs_getPlugIn();

}

function lcs_getOS() {
	var lcs_os = "";
	try {
		(navigator.platform ? lcs_os = navigator.platform : "");
	} catch (e) {
	}
	lcs_bc["os"] = lcs_os;
}

function lcs_getlanguage() {
	var lcs_ln = "";
	try {
		(navigator.userLanguage? lcs_ln = navigator.userLanguage : (navigator.language)? lcs_ln = navigator.language : "");
	} catch (e) {
	}

	lcs_bc["ln"] = lcs_ln;
}

function lcs_getScreen() {
	var lcs_sr = "";
	try {
		if ( window.screen && screen.width && screen.height)
		{
			lcs_sr = screen.width + 'x'+ screen.height;
		}
		else if ( window.java || self.java ) 
		{
			var sr = java.awt.Toolkit.getDefaultToolkit().getScreenSize();
			lcs_sr = sr.width + 'x' + sr.height;

		}
	} catch(e) {
		lcs_sr = "";
	}

	lcs_bc["sr"] = lcs_sr;
}


function lcs_getWindowSize() {
	var doc = document;

	lcs_bc["bw"] = '';
	lcs_bc["bh"] = '';
	try {
		lcs_bc["bw"] = doc.documentElement.clientWidth ? doc.documentElement.clientWidth : doc.body.clientWidth;
		lcs_bc["bh"] = doc.documentElement.clientHeight ? doc.documentElement.clientHeight : doc.body.clientHeight;
	}
	catch(e) {
	}
}

function lcs_getColorDepth(){
	lcs_bc["c"] = "";
	try {
		if (window.screen) {
			lcs_bc["c"] = screen.colorDepth ? screen.colorDepth : screen.pixelDepth;
		}
		else if (window.java || self.java ) {
			var c = java.awt.Toolkit.getDefaultToolkit().getColorModel().getPixelSize();
			lcs_bc["c"] = c;
		}
	} catch (e) {
		lcs_bc["c"] = "";
	}
}

function lcs_getJavaEnabled() { 
	lcs_bc["j"] = "";
	try {
		lcs_bc["j"]= navigator.javaEnabled() ? "Y":"N";
	} catch (e) {}

}

function lcs_getCookieEnabled() {
	lcs_bc["k"] = "";
	try {
		lcs_bc["k"]= navigator.cookieEnabled ? "Y":"N";
	} catch (e) {
	}

}

function lcs_getConnectType() {
	var bd = document.body;
	var lcs_ct = "";
	try {
		if ( lcs_isie && !lcs_ismac && bd ) {
			var obj = bd.addBehavior("#default#clientCaps");
			lcs_ct = bd.connectionType;
			bd.removeBehavior(obj);
		}
	} catch(e) {
	}

	lcs_bc["ct"] = lcs_ct;
}


function lcs_getJavascriptVer() {
	var j = "1.0";
	try {
		if(String && String.prototype) {
			j = "1.1";
			if(j.search)
			{
				j = "1.2";
				var dt = new Date, no = 0;
				if ( dt.getUTCDate)
				{
					j = "1.3";
					var napp = navigator.appVersion;
					var i, ie = napp.indexOf('MSIE');
					if (ie > 0 ) 
					{
						var apv =  parseInt(i = napp.substring(ie+5));
						if (apv > 3) { apv = parseFloat(i); }
					}
					if(lcs_isie && lcs_ismac && apv >= 5) 
					{
						j = "1.4"; 
					}
					if(no.toFixed)
					{
						j = "1.5";
						var a = new Array;
						if (a.every)
						{
							j = "1.6";
							i = 0;
							var obj = new Object;
							var test = function(obj) { var i = 0; try {	i = new Iterator(obj)} catch(e) {} return i};
							i = test(obj);
							if(i && i.next) j = "1.7";
							
							if(a.reduce) j = "1.8";
							
						}
	
					}
				}
			}
		}
	} catch (e) {}
	lcs_bc["jv"] = j;
}

function lcs_getSwfVer(){
	var flashVer = ''; 
	var isWin = false;
	var na = navigator;

	try {
		var pg = na.plugins;

		isWin = (na.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
   
		if (pg != null && pg.length > 0) {
			if (pg["Shockwave Flash 2.0"] || pg["Shockwave Flash"]) {
				var swVer2 = pg["Shockwave Flash 2.0"] ? " 2.0" : "";
				var flashDescription = pg["Shockwave Flash" + swVer2].description;
				var descArray = flashDescription.split(" ");
				var tempArrayMajor = descArray[2].split(".");           
				var versionMajor = tempArrayMajor[0];
				var versionMinor = tempArrayMajor[1];
				flashVer = parseInt(versionMajor,10) + "." + parseInt(versionMinor, 10);
			}
		}
		else if (na.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = "4.0";
		else if (na.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = "3.0";
		else if (na.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = "2.0";
		else if ( lcs_isie && isWin && !lcs_isopera ) {
		    var version = '';
		    var axo;

		    try {
       			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
   		     	version = axo.GetVariable("$version");
		    } catch (e) {}

		    if (!version)
		    {
		        try {
       		    	axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
           		 	version = "WIN 6,0,21,0";
	            	axo.AllowScriptAccess = "always";
            		version = axo.GetVariable("$version");
        			} catch (e) {}
    		}

			if (!version)
			{
				try {
					axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
					version = "WIN 3,0,18,0";
					version = axo.GetVariable("$version");
				} catch (e) {}
			}
		  
			if (!version)
			{
				try {
					axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
					version = "WIN 2,0,0,11";
				} catch (e) {}
			}
		   
			if (version.indexOf(',') > 0 ) {
				version = version.replace( /%20/,'');
				version = version.replace( /[a-zA-Z]*[^0-9]/,'');
				version = version.replace( /,/g,'.');
			}
			flashVer = version;
		}
	} catch (e) {}
	
	lcs_bc["fv"] = flashVer;
}

function lcs_getSLVersion() {
	var lcs_sl = "";
	var doc = document;
	var bd = doc.body;
	try {
		var pg = navigator.plugins;
		if (pg && pg.length > 0 )
		{
			lcs_sl = pg["Silverlight Plug-In"].description || pg["WPFe Plug-In"].description;
			if (lcs_sl == '1.0.30226.2') lcs_sl = '2.0.30226.2';
		}
		else 
		{
			var wrap, obj;
			if (typeof ActiveXObject != 'undefined') {
				try { obj = new ActiveXObject('AgControl.AgControl'); 
				} catch(e) {}
			} else {
				wrap = doc.createElement('div');
				wrap.innerHTML = '<object type="application/x-silverlight" style="position:absolute;" />';
				bd.insertBefore(wrap, bd.firstChild);
				obj = wrap.firstChild;
			}

			if (/\bopera\b/i.test(navigator.userAgent)) 
				for (var start = new Date().getTime(); typeof obj.isVersionSupported == 'undefined' && (new Date().getTime() - start < 1000); );
	
			if (typeof obj.isVersionSupported != 'undefined') {
	
				for (var major = 0; major < 9; major++) {
		
					for (var minor = 0; minor <= 9; minor++) {
						var v = major + '.' + minor;
						if (obj.isVersionSupported(v)) {
							lcs_sl = v;
						}
						else break;
		
					}
		
				}
				
			}
			
			if (obj) obj = null;
			if (wrap) bd.removeChild(wrap);
		}

		if ( lcs_sl.indexOf('.') > 0 ) {
			var verArray = lcs_sl.split('.');
			lcs_sl = verArray[0] + '.' + verArray[1];
		}
	} catch(e) { }

	lcs_bc["sl"] =  lcs_sl;
}


function lcs_getPlugIn() {
	var plArr = {};
	var lcs_p = "";

	var na = navigator;
	var pg = na.plugins;
   	if (pg && pg.length > 0)
	{
		try {
			var piArr = pg;
			for (var i = 0; i < piArr.length; i++)
			{
				plArr[piArr[i].name] = '';		
			}
		} catch (e) { }

	} else {
			if (lcs_bc['fv'] != '' )
				plArr["Shockwave Flash"] = '';

			if (lcs_bc['sl'] != '' )
				plArr["Silverlight"] = '';
	}

	for( var index in plArr ) {
		if( typeof plArr[index] != 'function' ) 
		lcs_p += index + ';';
	}

	lcs_bc["p"] = lcs_p.length ? lcs_p.substr(0, lcs_p.length-1) : lcs_p;
}


