!function(t) {
	function e(n) {
		if (i[n]) return i[n].exports;
		var o = i[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
	}
	var i = {};
	return e.m = t, e.c = i, e.i = function(t) {
		return t
	}, e.d = function(t, i, n) {
		e.o(t, i) || Object.defineProperty(t, i, {
			configurable: !1,
			enumerable: !0,
			get: n
		})
	}, e.n = function(t) {
		var i = t && t.__esModule ?
		function() {
			return t["default"]
		} : function() {
			return t
		};
		return e.d(i, "a", i), i
	}, e.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, e.p = "//s.url.cn/ac/home1/", e(e.s = 89)
}([function(t, e, i) {
	"use strict";
	e.__esModule = !0;
	var n = {
		title: {
			title: "< Alloyteam Web 前端大会 />",
			title_ac: "A<span>lloyteam</span>C<span>onf</span>2017",
			title_img: "",
			title_bg: i(87),
			address: "2017.10.29　　中国.深圳 <span>南山区科兴国际会议中心</span>",
			button: "马上报名",
			qrcode: i(64)
		},
		info: {
			title1: "INTRODUCTION / ",
			title2: " 大会介绍",
			title_img: "",
			imgs: [i(81)]
		},
		process: {
			title: "PROCESS / 大会议程",
			title_img: "",
			main: {
				title: "主会场 MAIN VENUE",
				time_line: [{
					time: "8:50 - 9:00",
					title: "开场舞蹈",
					step: !0,
					img: i(85),
					desc: "神秘女子组合舞蹈表演",
					morn: !0
				}, {
					time: "9:00 - 9:45",
					speaker: "李强",
					title: "面向亿万级用户的Web同构直出",
					desc: "直出技术作为提升页面首屏性能的终极手段，早已运用到腾讯的各个业务中，利用直出技术，Web首屏页面的加载速度能得到极大提升。而有了Nodejs的支持，使得同构直出也成为了可能，利用同构直出，前后端不必再为需要同时维护两套代码而烦恼。兴趣部落作为手Q内日均访问量高达5亿+的大型web业务，在同构直出方面也有非常多的实战经验来保证服务在高并发量下的可用性。李强将为你揭晓这一切。",
					img: i(58),
					morn: !0
				}, {
					time: "10:00- 10:45",
					speaker: "郭林烁",
					title: "大型Web项目可用性提升 - 零脚本错误的实战",
					desc: "脚本错误对于前端开发者一点都不陌生，一旦发生脚本错误，轻则影响页面的一些功能，重则直接导致页面白屏。虽然我们在开发中竭力避免页面出现脚本错误，但因为用户处在各异的网络情况、不同的浏览器类型等复杂场景中，脚本错误每天仍然大量发生在用户的页面上。AlloyTeam团队在QQ群等亿级pv的项目中积累了大量脚本错误监控和优化的相关经验。Joeyguo将通过此次分享，由浅入深来讲解如何设计和搭建一个完善的脚本错误监控上报、高效定位以及调优的实战方案。",
					img: i(54),
					morn: !0
				}, {
					time: "11:00 - 11:45",
					speaker: "李成熙",
					title: "如何构建后现代前端工程化开发体系 ",
					desc: "AlloyTeam一直是腾讯前端的业界标杆。在业务上，团队负责QQ群、兴趣部落、互动直播等几大业务的众多需求。在公司内，团队创造并维护了许多工具平台。在公司外，团队办大会，做开源，写文章，做分享。到底是AlloyTeam是凭借什么成为如此高效的开发团队呢？李成熙的此次分享将会为你揭开神秘面纱，介绍AlloyTeam成员如何利用前端现代化开发体系来提高自己的工作效率。如果你希望自己成为一个高效率的前端开发者，此次分享不容错过。",
					img: i(53),
					morn: !0
				}, {
					time: "12:00 - 14:00",
					title: "午餐",
					step: !0,
					img: !1,
					"short": !0,
					noon: !0
				}, {
					time: "14:00 - 14:45",
					speaker: "张磊",
					title: "Javascript与机器学习的前世今生",
					desc: "人工智能、机器学习是目前最火热的技术，Google DeepMind的AlphaGo在万众瞩目下打败了围棋大师李世乭九段和柯杰九段，更是让人们对人工智能的期待到达了顶点。作为对人工智能感兴趣的前端开发者，机器学习和JavaScript结合能帮助我们做些什么事情呢？前端开发者有没有可能在人工智能领域进行深耕？JavaScript程序员能够以何种方式进入人工智能研究的领域？AlloyTeam团队的张磊将为你一一解密。",
					img: i(52)
				}, {
					time: "14:45 - 15:30",
					speaker: "廖泽恺",
					title: "高效H5动画设计与性能优化",
					desc: "在移动设备性能越来越好的今天，基本的web图文展示早已不能满足广大用户的需求，而随着flash正式退出历史舞台，h5动画必将迎来又一次的飞跃发展。廖泽恺的本次分享将向大家介绍H5动画的各种实现原理、在不同场景下如何选择最合适的动画实现方式、如何在不同机型下进行适配，以及对动画性能和可配置性上进行深入探索，帮助你轻松在项目中实现各种各样的动画。",
					img: i(56)
				}, {
					time: "15:30 - 16:15",
					speaker: "王斌",
					title: "ES2017时代的后函数式编程",
					desc: "函数式编程至今已有60年历史，但时至今日仍然有许多开发者被函数式编程的魅力所折服。如果我们关注过jquery、react、redux等框架的源代码，会发现这些框架作者都加入了非常多的函数式编程技巧。函数式编程究竟有什么优点？对我们前端开发者编写代码究竟有什么帮助呢？王斌将为你从浅入深介绍函数式编程的原理和实战技巧，让你像jquery、react、redux作者一样写出优雅的代码。",
					img: i(55)
				}, {
					time: "17:00 - 17:45",
					speaker: "潘佳韩",
					title: "如何把自己构建成大型互联网公司需要的前端人才",
					desc: "作为一个前端新人，也许你有类似这样的问题：“我现在大三，怎么才能进入腾讯实习？”“我现在毕业1年，如何学习前端”“感觉我现在的工作没什么技术含量，腾讯的前端工程师是怎么样工作的？”老教授12年进入腾讯AlloyTeam工作，从前端小白成长为高级工程师和面试官。此次分享将结合老教授自己的成长经历，讲述如何在学校和工作时如何更高效地学习前端知识、校招和社招面试我们到底需要什么样的前端人才、以及前端新人如何规划职业发展。不论是前端新人还是有一定工作经验的开发者，此次分享都可以让你少走弯路，早日成为前端大牛。",
					img: i(57)
				}]
			}
		},
		more: {
			title: "MORE / 更多精彩",
			music_title: "BOSSA NOVA 开场音乐会",
			music_img: i(62),
			music_desc: "乐队成员有：前腾讯乐队主唱，外号腾讯小王菲的产品经理、腾讯乐队御用吉他手，在莫文蔚等歌手音乐会上担任过吉他伴奏的程序员、获得过腾讯Q歌Q魅全国第二名，现场表现力极强的设计师。",
			girl_title: "腾讯专属舞团 SOS女子组合",
			girl_img: i(59),
			girl_desc: "她们是来自腾讯各个BG的设计师，程序员，产品经理，产品策划，运营，HR行政，首个腾讯人自己的舞蹈明星女子组合团队。",
			bg_img: i(84)
		},
		award: {
			award_title: "AWARD / 超级奖品",
			award_list: [{
				title: "iPhone X",
				img: i(82)
			}, {
				title: "编程机器人",
				img: i(83)
			}, {
				title: "智能音箱",
				img: i(88)
			}]
		},
		guide: {
			title: "GUIDE / 参会指南",
			title_img: "",
			map_bg: i(61),
			title_bg: i(80),
			guide_bg: i(60),
			wrap_bg: i(79),
			title_time: "Time",
			title_address: "Address",
			title_address_desc: "大会将于 2017.10.29 在中国深圳举行，会议厅地点即将公布\t"
		},
		sponsor2: {
			title: "SPONSOR / 赞助商",
			bg_img: i(86),
			desc: "战略合作",
			list: [{
				title: "铜牌赞助商",
				list: [{
					title: "腾讯大讲堂",
					img: "http://s.url.cn/qqun/qun/qqweb/m/qun/calendar/ac2016/img/static/sponsor/djt.png",
					link: "//djt.qq.com/",
					cls: "juejin"
				}, {
					title: "wetest",
					img: i(75),
					link: "http://wetest.qq.com/?from=coop_at2017",
					cls: "height"
				}, {
					title: "100offer",
					img: i(66),
					link: "http://100offer.com",
					cls: "height"
				}]
			}, {
				title: "合作媒体/社区",
				list: [{
					title: "掘金",
					img: i(71),
					link: "https://juejin.im/",
					cls: "juejin"
				}, {
					title: "w3cschool",
					img: i(74),
					link: "http://www.w3cschool.cn/",
					cls: "w3c"
				}, {
					title: "腾讯问卷",
					img: i(76),
					link: "https://wj.qq.com/",
					cls: "seg"
				}, {
					title: "iweb",
					img: i(70),
					link: "http://www.html5dw.com/",
					cls: "h5dw"
				}, {
					title: "Coding",
					img: i(67),
					link: "https://coding.net/",
					cls: !1
				}, {
					title: "freecodecamp",
					img: i(69),
					link: "https://www.freecodecamp.cn/",
					cls: !1
				}, {
					title: "开源中国",
					img: i(72),
					link: "http://www.oschina.net/",
					cls: !1
				}, {
					title: "csdn",
					img: i(68),
					link: "http://www.csdn.net/",
					cls: "csdn"
				}, {
					title: "segmentfault",
					img: i(73),
					link: "https://segmentfault.com/",
					cls: "seg"
				}]
			}]
		},
		footer: {
			desc: "Copyright © 1998 - 2017 Tencent. All Rights Reserved",
			tencent_logo: i(65),
			tfc_logo: i(77),
			qcode_ac: i(63),
			alloy_url: "http://www.alloyteam.com/",
			university_url: "http://daxue.qq.com/",
			orgs: [{
				title: "承办:",
				cls: "main-title"
			}, {
				title: "腾讯Web前端通道",
				link: "javascript:void(0)"
			}, {
				title: "腾讯大讲堂",
				link: "http://djt.qq.com/"
			}, {
				title: "腾讯AlloyTeam",
				link: "http://www.alloyteam.com"
			}, {
				title: "腾讯学院",
				link: "javascript:void(0)"
			}],
			concat: [{
				title: "合作:",
				cls: "content-line"
			}, {
				title: "内容合作",
				link: "mailto:alloyteam@qq.com"
			}, {
				title: "媒体合作",
				link: "mailto:alloyteam@qq.com"
			}, {
				title: "成为讲师",
				link: "mailto:alloyteam@qq.com"
			}]
		},
		feed: {
			qrcode: i(78)
		},
		follow: {
			title: "关注我们",
			code: [{
				title: "QQ群：162225981",
				img: "//cdn.alloyteam.com/assets/img/qq-71f7f2.gif"
			}, {
				title: "微信公众号:AlloyTeam",
				img: "//cdn.alloyteam.com/assets/img/weixin-7531e9.gif"
			}]
		}
	};
	e["default"] = n
}, function(t, e, i) {
	"use strict";
	t.exports = i(51)
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) {
			__append('<div class="awaid-info-wrap animated-box">\r\n    <h2 class="fec-title animated-box">'), __append(award_title), __append('</h2>\r\n    <div class="awaid-list animated-box">\r\n        ');
			for (var i = 0, l = award_list.length; i < l; i++) {
				var item = award_list[i];
				__append('\r\n            <div class="awaid-info">\r\n                <img src="'), __append(item.img), __append('">\r\n                <p>'), __append(item.title), __append("</p>\r\n            </div>\r\n        ")
			}
			__append("\r\n    </div>\r\n</div>")
		}
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="qcrode-freeback">\r\n    <div class="fec-title">BID / 竞价查询</div>\r\n    <div class="qcrode-size">\r\n        <h4>请扫码查看竞价结果</h4>\r\n        <div>\r\n            <div id="bidQrcode" class="qrcode-win-block-wrap"></div>\r\n        </div>\r\n    </div>\r\n</div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="qcrode-freeback">\r\n    <div class="fec-title">FEEDBACK / 留言反馈</div>\r\n    <div class="qcrode-size">\r\n        <h4>请扫码关注公众号后，发消息反馈留言</h4>\r\n        <div>\r\n            <img src="'), __append(qrcode), __append('" class="qrcode-transparent" alt="">\r\n        </div>\r\n    </div>\r\n</div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="guide-info height-info">\r\n\t<div class="guide-info-wrap animated-box">\r\n\t\t<h3 class="fec-title guide-title">'), __append(title), __append('</h3>\r\n\t\t<div class="fec-title guide-title2">大会将于 2017.10.29 在中国深圳市南山区科兴国际会议中心B4栋3楼 7+8号会议厅举行</div>\r\n\t\t<div class="fec-title guide-title2">\r\n\t\t\t可以乘公交到 长园新材、科苑立交南、万和制药、科苑北等站，或乘地铁1号线到深大地铁站A4出口，步行1.4km\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n</div>\r\n<div class="guide-img-wrap">\r\n\t<div class="guide-img">\r\n\t\t<img src="'), __append(title_bg), __append('">\r\n\t\t\r\n\t</div>\r\n\t<div class="guide-img">\r\n\t\t<div class="map-wrap" id="guideMap"></div>\r\n\t</div>\r\n\t<div class="clear"></div>\r\n</div>\r\n<div class="guide-wrap-bg">\r\n</div>\r\n');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) {
			if (__append('<div class="main animated-box">\r\n    <div class="fec-title title">\r\n        <span class="fec-title1">'), __append(title1), __append('</span>\r\n        <span class="fec-title2">'), __append(title2), __append('</span>\r\n    </div>\r\n    <div class="intro-info">\r\n        <div class="content">\r\n                <div>AC大会（Alloyteam Conf ），是腾讯明星前端团队AlloyTeam发起的前端技术大会，旨在分享团队在技术研究、产品研发、开源项目的经验沉淀。Web前端行业发展迅速，新技术、新工具层出不穷，为了加强业界交流，促进行业发展，赋予AC大会的组织举办更多使命感。经过前两届AC大会以及今年腾讯Web前端大会的磨练，我们积累了更为丰富的经验和资源。</div>\r\n                <div>AC2017，团队将会继续在工程化、图形处理、Web动画、性能优化等方面呈献一年多以来的实践，还将邀请几个业内专家来快速分享他们的宝贵经验。我们将全力以赴，打造品质更为卓越的前端大会，每一位前端开发者都不容错过。</div>\r\n        </div>\r\n        <div class="pic">\r\n        \t<div class="img-wrap">\r\n             <img style="visibility:hidden;position: relative" src="'), __append(imgs[0]), __append('">\r\n        \t'), imgs.length) {
				__append("\r\n        \t\t");
				for (var i = 0, l = imgs.length; i < l; i++) __append('\r\n        \t\t\t<img src="'), __append(imgs[i]), __append('" '), 0 === i && __append('class="show"'), __append(" >\r\n        \t\t");
				__append("\r\n        \t")
			}
			__append('\r\n        \t</div>\r\n        </div>\r\n        <div class="clear"></div>\r\n    </div>\r\n</div>\r\n')
		}
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="qcrode-freeback">\r\n    <div class="fec-title">INVITE / 酷炫邀请卡</div>\r\n    <div class="qcrode-size">\r\n        <h4>请用微信扫描二维码生成你的<span>专属女神邀请卡</span>，分享到朋友圈炫耀一下</h4>\r\n        <div>\r\n            <div id="inviteQrcode" class="qrcode-win-block-wrap"></div>\r\n        </div>\r\n    </div>\r\n</div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="join-block join-bg animated-box">\t\r\n\t<h3 class="fec-title join-title">'), __append(join.title), __append('</h3>\r\n\t<div class="join-desc">'), __append(join.desc), __append('</div>\r\n\t<div class="button"><span>'), __append(join.button), __append('</span></div>\r\n</div>\r\n<div class="join-icon"></div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="more-info-wrap">\r\n\t<h2 class="fec-title animated-box">'), __append(title), __append('</h2>\r\n\t<h3 class="animated-box">'), __append(music_title), __append('</h3>\r\n\t<div class="img-wrap music-img animated-box">\r\n\t\t<div class="music-desc">'), __append(music_desc), __append('</div>\r\n\t\t<img src="'), __append(music_img), __append('">\r\n\t</div>\r\n\t<h3 class="animated-box">'), __append(girl_title), __append('</h3>\r\n\t<div class="img-wrap girl-img animated-box">\r\n\t\t<div class="girl-desc">'), __append(girl_desc), __append('</div>\r\n\t\t<img src="'), __append(girl_img), __append('">\r\n\t</div>\r\n</div>\r\n');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) {
			__append('<div class="process-info-wrap">\r\n    <div class="fec-title process-title animated-box">\r\n        '), __append(title), __append('\r\n    </div>\r\n    <div class="process-bgs">\r\n\r\n    </div>\r\n    <div class="main-wrap">\r\n        <div class="main-title animated-box">\r\n            '), __append(main.title), __append('\r\n        </div>\r\n        <div class="main-time-line">\r\n            ');
			for (var i = 0; i < main.time_line.length; i++) {
				var item = main.time_line[i];
				__append('\r\n                <div class="timeline-item-wrap timeline-item '), __append(item.time_line_class), __append(" "), item.step && __append("step"), __append(' animated-box">\r\n                    <div class="tree-branch">\r\n                        <div class="tree-branch-point"></div>\r\n                        <div class="tree-branch-line"></div>\r\n                    </div>\r\n                    '), item.img && (__append('\r\n                        <div class="pic-wrap pic-wrap-right '), item.step || __append("speaker"), __append('">\r\n                            <img src="'), __append(item.img), __append('">\r\n                        </div>\r\n                    ')), __append('\r\n                    <div class="tree-leave '), __append(item.time_line_class), __append('">\r\n                        <div class="time">'), __append(item.time), __append('</div>\r\n                        <div class="issue  '), item.step || __append("speaker"), __append('">\r\n                            <div class="issue-info">\r\n                                <div class="title">\r\n                                    <p class="speaker-title">'), __append(item.title), __append('</p>\r\n                                    <p class="speaker">'), __append(item.speaker), __append('</p>\r\n                                </div>\r\n                                <div class="desc">'), __append(item.desc), __append("</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            ")
			}
			__append("\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n")
		}
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) {
			__append('<div class="slide-wrap" id="slideWrap">\r\n    ');
			for (var i = 0; i < len; i++) __append('\r\n            <div class="slide-item '), 0 === i && __append("active"), __append('" data-idx="'), __append(i), __append('" onclick="slidePage.index('), __append(i), __append(')"></div>\r\n    ');
			__append("\r\n    \r\n</div>")
		}
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) {
			__append('<div class="sponsor-info-wrap">\r\n\t<h3 class="fec-title sponsor-title">'), __append(title), __append('</h3>\r\n\t<div class="sponsor-block">\r\n\t\t');
			for (var i = 0, l = list.length; i < l; i++) {
				var item = list[i];
				__append('\r\n\t\t\t<h4 class="sponsor-lv sponsor-lv'), __append(i), __append('">'), __append(item.title), __append('</h4>\r\n\t\t\t<ul class="sponsor-list sponsor-list'), __append(i), __append('">\r\n\t\t\t\t');
				for (var n = 0, m = item.list.length; n < m; n++) {
					var obj = item.list[n];
					__append("\r\n\t\t\t\t\t<li "), obj.cls && (__append('class="'), __append(obj.cls), __append('"')), __append(">\r\n\t\t\t\t\t\t"), obj.link ? (__append('\r\n\t\t\t\t\t\t<a href="'), __append(obj.link), __append('" target="_blank">\r\n\t\t\t\t\t\t\t<img src="'), __append(obj.img), __append('" title="'), __append(obj.title), __append(' ">\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t')) : (__append('\r\n\t\t\t\t\t\t\t<img src="'), __append(obj.img), __append('" title="'), __append(obj.title), __append(' ">\r\n\t\t\t\t\t\t')), __append("\r\n\t\t\t\t\t</li>\r\n\t\t\t\t")
				}
				__append("\r\n\t\t\t</ul>\r\n\t\t")
			}
			__append('\r\n\t</div>\r\n\t<div class="feedback-mobile" id="sponsorFeed">\r\n\t\t留言反馈\r\n\t</div>\r\n</div>\r\n')
		}
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="ticket-padding-wrap">\r\n\t<div class="fec-title">TICKET / 购票指引</div>\r\n\t<div class="ticket-close"></div>\r\n\t<div class="ticket-animate">\r\n\t\t<div class="mobile-qrcode">\r\n\t\t\t<div id="mobileQrcode"></div>\r\n\t\t\t<div class="mobile-get-ticket">\r\n\t\t\t\t<strong>抢票流程：</strong><br>\r\n\t\t\t\t1、长按以上二维码，“保存图片”到手机相册<br>\r\n\t\t\t\t2、打开微信扫一扫，从相册选择二维码图片<br>\r\n\t\t\t\t3、点击“马上抢票”，少量优惠票等你来抢<br>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t\t<div class="ticket-block">\r\n\t\t\t<ul class="ticket-list">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<strong>竞价票</strong>\r\n\t\t\t\t\t<strong class="title">Alloyteam VIP会员专享</strong>\r\n\t\t\t\t\t<p>为了降低购票成本和经济压力，以及大家都能按照自己的心理预期价格购买到门票。AC大会组委会特别提供了竞价购票方式，攻略如下：</p>\r\n\t\t\t\t\t<p class="ticket-item">1）每个人可以根据自己意愿，以￥299（含￥299）以上价格参与竞价</p>\r\n\t\t\t\t\t<p class="ticket-item">2）每周为一个竞价周期，竞价周期内可以随时追加竞价金额，每周日20：00截止本周期的竞价和加价</p>\r\n\t\t\t\t\t<p class="ticket-item">3）每周一10：00将通过官网和公众号推送本周竞价中票者名单</p>\r\n\t\t\t\t\t<p class="ticket-item">4）竞价失败的同学将自动获得全额退款，可以自由选择是否继续参加下一轮竞价</p>\r\n\t\t\t\t\t<p class="ticket-item ticket-tips">5）竞价票不提供发票，可转赠，不含午餐</p>\r\n\t\t\t\t</li>\t\r\n\t\t\t\t\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<strong>学生票</strong>\r\n\t\t\t\t\t<strong class="title">Alloyteam VIP会员专享</strong>\r\n\t\t\t\t\t<p>AC 大会组委会考虑到学生群体经济能力，特为【Alloyteam VIP会员】提供学生票，攻略如下：</p>\r\n\t\t\t\t\t<p class="ticket-item">1）学生票价：￥299 元，不提供发票</p>\r\n\t\t\t\t\t<p class="ticket-item">2）学生票不能转赠，需本人现场配合学生证入场</p>\r\n\t\t\t\t\t<p class="ticket-item">3）证件不齐，或通过任何非正常途径获得学生票，最终导致无法入场，后果自负</p> \r\n\t\t\t\t\t<p class="ticket-item ticket-tips">4）学生票不提供发票，不可转赠，不含午餐</p>\t\t\t\t\t\r\n\t\t\t\t</li>\r\n\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<strong>普通票</strong>\r\n\t\t\t\t\t<strong class="title">　</strong>\r\n\t\t\t\t\t<p>AC大会是非盈利性技术大会，所有门票收入仅用于满足会务开支成本。普通票，可以额外获得与Alloyteam讲师一起午餐的深度交流机会。门票数量有限，售完为止。</p>\r\n\t\t\t\t\t<p>普通票包含：AC大会门票 + Alloyteam讲师午餐会，攻略如下：</p>\r\n\t\t\t\t\t<p class="ticket-item">1）标准票价：￥911 元</p>\r\n\t\t\t\t\t<p class="ticket-item">2）<span class="ticket-tips">Alloyteam VIP会员价：￥811 元</span> 【关注AC大会会务公众号“前端社区服务”，完成注册即可成为 Alloyteam VIP会员，享VIP会员价】</p>\r\n\t\t\t\t\t<p class="ticket-item">3）团购价（5+）：￥798 元\t</p>\r\n\t\t\t\t\t<p class="ticket-item ticket-tips">4）普通票可申请增值税发票，可转赠，含午餐</p>\r\n\t\t\t\t</li>\t\t\t\t\r\n\t\t\t</ul>\r\n\t\t\t\r\n\t\t\t<div class="ticket-remark">\r\n\t\t\t\t<strong>备注：</strong>\r\n\t\t\t\t<p>1、<span class="ticket-tips">如何成为Alloyteam VIP会员</span>：关注 AC 大会会务公众号【前端社区服务】，完成注册即可成为 Alloyteam VIP会员，享 Alloyteam VIP会员价，参与竞价，或购买学生票。</p>\r\n\t\t\t\t<p>2、门票可参加全天主题分享，为了公平，座位先到先选，不固定座号。</p>\r\n\t\t\t\t<p>3、为了保证分享内容无广告水分，未拉商业赞助，通过售票的方式来承担会务成本。</p>\r\n\t\t\t\t<p>4、如有疑问或购票洽谈，请联系微信：zengtan1021。</p>\r\n\t\t\t</div>\r\n\t\t</div>\t\t\r\n\t</div>\r\n</div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="nav-info-wrap">\r\n    <div class="logo-wrapper">\r\n        <div class="logo"></div>\r\n        <div class="logo-text">\r\n            <div>\r\n                <div class="ch-text">Alloyteam Conference 2017</div>\r\n                <div class="en-text">腾讯 Alloyteam Web前端大会</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="menu">\r\n        <span></span>\r\n        <span></span>\r\n        <span></span>\r\n    </div>\r\n    <ul class="link">\r\n        <li class="nav-item active" data-idx="1">首页</li>\r\n        <li class="nav-item" data-idx="2">大会介绍</li>\r\n        <li class="nav-item" data-idx="3">大会议程</li>\r\n        <li class="nav-item" data-idx="4">超级奖品</li>\r\n        <li class="nav-item" data-idx="5">参会指南</li>\r\n        <li class="nav-item" data-idx="6">赞助商</li>\r\n    </ul>\r\n    <div class="title-bgs-mask">\r\n        <div class="title-bgs-color-mask bg'), __append(randomNum), __append('"></div>\r\n        <div class="title-bgs-img-mask"></div>\r\n    </div>\r\n</div>');
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="title-info-wrap">\r\n    <div>\r\n        <div class="lstar lstar1"></div>\r\n        <div class="lstar lstar2"></div>\r\n        <div class="lstar lstar3"></div>\r\n    </div>\r\n    <div class="content">\r\n        <div class="flex-item"><div class="tfc">'), __append(title_ac), __append('</div></div>\r\n        <div class="flex-item"><div class="title">'), __append(title), __append('</div></div>\r\n        <div class="flex-item speaker-item">讲师全部来自 Alloyteam 成员，大会将向业界分享 Alloyteam 最新技术实践、技术干货<br>做最纯净、最干货、最专业的前端大会</div>\r\n        <div class="flex-item">\r\n            <div class="address">\r\n                '), __append(address), __append("\r\n            </div>\r\n        </div>\r\n        "), __append(isInWX ? '\r\n            <div class="flex-item qrcode-block">\r\n                <a class="button" href="https://ac.alloyteam.com/wx2017/bid.html">\r\n                    购票\r\n                </a>\r\n            </div>            \r\n        ' : '\r\n            <div class="flex-item qrcode-block">\r\n                <div>\r\n                    <div id="qrcode" class="qrcode-block-wrap"></div>\r\n                    \r\n                </div>\r\n            </div>  \r\n            <div class="flex-item flex-button">\r\n                <div class="button" id="getTicketBtn">\r\n                        扫码购票指引\r\n                </div>\r\n            </div>                      \r\n        '), __append("\r\n\r\n\r\n    </div>\r\n</div>\r\n");
		return __output.join("")
	}
}, function(module, exports) {
	module.exports = function anonymous(locals, escapeFn, include, rethrow) {
		function encode_char(t) {
			return _ENCODE_HTML_RULES[t] || t
		}
		escapeFn = escapeFn ||
		function(t) {
			return void 0 == t ? "" : String(t).replace(_MATCH_HTML, encode_char)
		};
		var _ENCODE_HTML_RULES = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&#34;",
			"'": "&#39;"
		},
			_MATCH_HTML = /[&<>'"]/g,
			__output = [],
			__append = __output.push.bind(__output);
		with(locals || {}) __append('<div class="toolbar-wrap">\r\n    <ul>\r\n        <li data-action="guide">购票指引</li>\r\n        <li data-action="invites">酷炫邀请卡</li>\r\n        <li data-action="bids">竞价查询</li>\r\n        <li data-action="feed">留言反馈</li>\r\n    </ul>\r\n    <div class="toolbar-content content-title">     \r\n        <a href="//www.tencent.com" target="_blank">\r\n            <img class="tencent-logo" src="'), __append(tencent_logo), __append('">\r\n        </a>\r\n    </div>\r\n</div>');
		return __output.join("")
	}
}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e) {}, function(t, e, i) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	for (var o, s = 0, r = "webkit moz ms o".split(" "), a = window.requestAnimationFrame, c = window.cancelAnimationFrame, d = 0; d < r.length && (!a || !c); d++) o = r[d], a = a || window[o + "RequestAnimationFrame"], c = c || window[o + "CancelAnimationFrame"] || window[o + "CancelRequestAnimationFrame"];
	var l = "Mac68K" == navigator.platform || "MacPPC" == navigator.platform || "Macintosh" == navigator.platform || "MacIntel" == navigator.platform,
		p = function() {
			var t = {};
			return t.isSupportTouch = "ontouchend" in document, t.isEvent = t.isSupportTouch ? "touchstart" : "click", "touchstart" === t.isEvent
		},
		u = document.getElementById("ticket"),
		h = document.getElementById("qrcodeFeedBack"),
		m = document.getElementById("inviteWrap"),
		f = document.getElementById("bidWrap");
	a && c || (a = function(t, e) {
		var i = (new Date).getTime(),
			n = Math.max(0, 16 - (i - s)),
			o = window.setTimeout(function() {
				t(i + n)
			}, n);
		return s = i + n, o
	}, c = function(t) {
		window.clearTimeout(t)
	}), window.requestAnimationFrame = a, window.cancelAnimationFrame = c;
	var _ = function() {
			function t(e) {
				n(this, t), this.isInit = !1, this.after = !0, this.delay = !0, this.keyIndex = 0, this.defaultSpeed, this.pageCount, this.windowH = window.innerHeight, this.direction = "", this.transformName, this.canNext = !0, this.canPrev = !0, this.isScroll = !1, this.isPlay = !1, this.isClick = !1, this.dom, this.domList, this.reqid = 0, this.timeout = 0, this.before = function() {}, this.after = function() {}, this.startY = 0, this.isTouch = !1, this.endY = 0, this.scrollList = [], this.scrollHeightList = [], this.transitionName = "webkitTransitionEnd", this.init = this.init.bind(this), this.bindAction = this.bindAction.bind(this), this.isPc = this.isPc.bind(this), this.translate = this.translate.bind(this), this.wheel = this.wheel.bind(this), this.scroll = this.scroll.bind(this), this.swipe = this.swipe.bind(this), this.keyword = this.keyword.bind(this), this.index = this.index.bind(this), this.next = this.next.bind(this), this.prev = this.prev.bind(this), this.touchStart = this.touchStart.bind(this), this.touchMove = this.touchMove.bind(this), this.touchEnd = this.touchEnd.bind(this), this.bindScroll = this.bindScroll.bind(this), this.scrollFun = this.scrollFun.bind(this), this.transformFun = this.transformFun.bind(this), this.getSlideFlag = this.getSlideFlag.bind(this)
			}
			return t.prototype.isPc = function() {
				for (var t = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], i = !0, n = 0; n < e.length; n++) if (t.indexOf(e[n]) > 0) {
					i = !1;
					break
				}
				return i
			}, t.prototype.translate = function(t) {
				return "translate3d(0px, " + t + ", 0px)"
			}, t.prototype.init = function(t) {
				if (!this.isInit) {
					this.isInit = !0;
					for (var e in t) this[e] = t[e];
					this.pc = this.isPc(), this.dom = document.querySelector("#" + this.id), this.domList = document.querySelectorAll("" + this.pageContainer), this.bindAction(), this.pc || this.getSlideFlag()
				}
			}, t.prototype.touchStart = function(t) {
				this.isTouch || (this.startY = t.touches[0].pageY, this.isTouch = !0, this.endY = 0)
			}, t.prototype.touchMove = function(t) {
				this.isTouch && (this.endY = t.touches[0].pageY)
			}, t.prototype.touchEnd = function(t) {
				var e = this;
				if (!this.isPlay && this.endY) {
					var i = this.endY;
					clearTimeout(this.timeout);
					var n = i - this.startY;
					this.timeout = setTimeout(function() {
						n >= 40 ? e.canPrev && e.prev() : n < -40 && e.canNext && e.next()
					}, 100), this.isTouch = !1
				}
			}, t.prototype.index = function(t, e, i) {
				if (!(u.classList.contains("show") || h.classList.contains("show") || f.classList.contains("show") || m.classList.contains("show") || this.isPlay)) {
					if (e = e || 0, this.isClick = i, e) this.keyIndex -= e;
					else {
						if (t === this.keyIndex) return;
						this.keyIndex = t
					}
					this.isPlay = !0;
					var n = this.domList[this.keyIndex],
						o = this.domList[this.keyIndex + e];
					if (this.before(this.keyIndex, n.scrollHeight > n.scrollTop + this.windowH), n.style[this.transformName] = this.translate("0px"), e) o.style[this.transformName] = this.translate(100 * e + "%");
					else for (var s = 0, r = this.domList.length; s < r; s++) {
						var a = this.domList[s].style[this.transformName],
							c = void 0;
						s < t ? c = this.translate("-100%") : s > t && (c = this.translate("100%")), a !== c && (this.domList[s].style[this.transformName] = c)
					}
				}
			}, t.prototype.next = function() {
				this.keyIndex < this.pageCount - 1 ? this.index(this.keyIndex, -1) : this.keyIndex === this.pageCount - 1 && (this.canPrev = !0)
			}, t.prototype.prev = function() {
				this.keyIndex > 0 ? this.index(this.keyIndex, 1) : this.keyIndex === this.pageCount - 1 && (this.canNext = !0)
			}, t.prototype.wheel = function(t) {
				var e = this;
				if (!u.classList.contains("show") && !h.classList.contains("show")) {
					var i = this;
					t.wheelDeltaY < 0 || t.wheelDelta < 0 || t.detail > 0 ? (this.scrollList.indexOf(this.keyIndex) < 0 && (i.isScroll = !1), clearTimeout(this.timeout), this.timeout = setTimeout(function() {
						e.canNext && e.next()
					}, 100), l && document.documentElement.clientWidth > 500 && !p() && (document.onmousewheel = function() {}, document.body.removeEventListener("DOMMouseScroll", this.wheel), setTimeout(function() {
						document.onmousewheel = e.wheel, document.body.addEventListener("DOMMouseScroll", e.wheel, !1)
					}, 1200))) : (t.wheelDeltaY > 0 || t.wheelDelta > 0 || t.detail < 0) && (this.scrollList.indexOf(this.keyIndex) < 0 && (i.isScroll = !1), clearTimeout(this.timeout), this.timeout = setTimeout(function() {
						i.canPrev && i.prev()
					}, 100), l && document.documentElement.clientWidth > 500 && !p() && (document.onmousewheel = function() {}, document.body.removeEventListener("DOMMouseScroll", this.wheel), setTimeout(function() {
						document.onmousewheel = e.wheel, document.body.addEventListener("DOMMouseScroll", e.wheel, !1)
					}, 1200)))
				}
			}, t.prototype.scroll = function(t) {}, t.prototype.keyword = function(t) {
				40 === t.keyCode ? this.canNext && this.next() : 38 === t.keyCode && this.canPrev && this.prev()
			}, t.prototype.swipe = function(t) {}, t.prototype.transformFun = function(t) {
				var e = this,
					i = t.srcElement || t.target,
					n = parseInt(i.getAttribute("data-idx"));
				n === this.keyIndex && this.after(n, this.isClick, i.scrollHeight > this.windowH), a(function() {
					e.isPlay = !1
				})
			}, t.prototype.scrollFun = function(t) {
				var e = this,
					i = t.target;
				i.getAttribute("data-idx");
				i.scrollHeight > i.scrollTop + 1.02 * e.windowH && i.scrollTop > 5 ? (this.isScroll = !0, this.canNext = !1, this.canPrev = !1) : (this.isScroll = !1, this.canNext = !0, this.canPrev = !0)
			}, t.prototype.bindScroll = function() {
				for (var t = 0, e = this.domList.length; t < e; t++) {
					var i = this.domList[t];
					i.setAttribute("data-idx", t), i.removeEventListener(this.transitionName, this.transformFun), i.removeEventListener("scroll", this.scrollFun), i.addEventListener(this.transitionName, this.transformFun, !1), i.children[0].offsetHeight > this.windowH + 20 && (this.scrollList.indexOf(t) < 0 && this.scrollList.push(t), i.addEventListener("scroll", this.scrollFun, !1))
				}
				this.keyIndex < this.pageCount - 1 && (this.canNext = !0), this.keyIndex > 0 && (this.canPrev = !0)
			}, t.prototype.getSlideFlag = function() {}, t.prototype.bindAction = function() {
				var t = this;
				if (this.pageCount = this.domList.length, "transitionend" in this.dom.style) this.transformName = "transform";
				else {
					if (!("webkitTransform" in this.dom.style)) throw new Error("not webkitTransitionEnd");
					this.transformName = "webkitTransform"
				}
				this.bindScroll(), window.addEventListener("resize", function() {
					t.windowH = window.innerHeight, t.bindScroll()
				}, !1), document.onmousewheel = this.wheel, document.onkeydown = this.keyword, document.body.addEventListener("DOMMouseScroll", this.wheel, !1), document.body.addEventListener("scroll", this.scroll, !1), document.body.addEventListener("keydown", this.keydown, !1), document.addEventListener("touchstart", this.touchStart, !1), document.addEventListener("touchmove", this.touchMove, !1), document.addEventListener("touchcancel", this.touchEnd, !1), window.addEventListener("touchend", this.touchEnd, !1)
			}, t
		}();
	window.slidePage = new _
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(17);
	var s = i(2),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#awaid"), this.render()
			}
			return t.prototype.render = function() {
				c["default"].award.isWX = window.isInWX || !1;
				var t = (0, r["default"])(c["default"].award);
				this.dom.innerHTML = t
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(18);
	var s = i(3),
		r = n(s),
		a = function() {
			function t(e) {
				o(this, t), this.dom = document.querySelector("#bidWrap"), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.createQrcode = this.createQrcode.bind(), this.render()
			}
			return t.prototype.show = function() {
				this.dom.classList.contains("show") ? this.dom.classList.remove("show") : $(".item-wrap").addClass("active"), this.dom.classList.add("show")
			}, t.prototype.hide = function() {
				$(".item-wrap").removeClass("active"), this.dom.classList.remove("show")
			}, t.prototype.createQrcode = function() {
				try {
					new QRCode(document.getElementById("bidQrcode"), {
						text: "http://ac.alloyteam.com/wx2017/cards.html?_form=ac_home_index",
						width: 160,
						height: 160,
						colorDark: "#000000",
						colorLight: "#ffffff",
						correctLevel: QRCode.CorrectLevel.L
					})
				} catch (t) {}
			}, t.prototype.bindAction = function() {
				var t = this;
				$(this.dom).click(function() {
					t.hide()
				}), this.createQrcode()
			}, t.prototype.render = function() {
				var t = (0, r["default"])();
				this.dom.innerHTML = t, this.bindAction()
			}, t
		}();
	e["default"] = a
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(19);
	var s = i(4),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t(e) {
				o(this, t), this.dom = document.querySelector("#qrcodeFeedBack"), this.ticketdom = document.querySelector("#ticket"), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.render()
			}
			return t.prototype.show = function() {
				this.ticketdom.classList.contains("show") ? this.ticketdom.classList.remove("show") : $(".item-wrap").addClass("active"), this.dom.classList.add("show")
			}, t.prototype.hide = function() {
				this.dom.classList.remove("show"), $(".item-wrap").removeClass("active")
			}, t.prototype.bindAction = function() {
				var t = this;
				$(this.dom).click(function() {
					t.hide()
				})
			}, t.prototype.render = function() {
				var t = (0, r["default"])(c["default"].feed);
				this.dom.innerHTML = t, this.bindAction()
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(20);
	var s = i(5),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t(e) {
				o(this, t), this.dom = document.querySelector("#guide"), this.inMobile = e.inMobile, this.render()
			}
			return t.prototype.bindAction = function() {
				var t = this,
					e = function() {
						document.getElementById("guideMap").style.height = t.dom.querySelector(".guide-img img").height + "px"
					};
				t.dom.querySelector(".guide-img img").onload = e, window.addEventListener("resize", e, !1)
			}, t.prototype.initMap = function() {
				var t = new qq.maps.LatLng(22.54838, 113.94507),
					e = new qq.maps.Map(document.getElementById("guideMap"), {
						center: new qq.maps.LatLng(22.54838, 113.94507),
						zoom: 16,
						draggable: !this.inMobile,
						scrollwheel: !1,
						disableDoubleClickZoom: !0,
						disableDefaultUI: !0
					});
				new qq.maps.Label({
					position: t,
					map: e,
					content: "科兴国际会议中心"
				})
			}, t.prototype.render = function() {
				var t = (0, r["default"])(c["default"].guide);
				this.dom.innerHTML = t, this.initMap(), this.bindAction()
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(21);
	var s = i(6),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#introduction"), this.render()
			}
			return t.prototype.render = function() {
				var t = (0, r["default"])(c["default"].info);
				this.dom.innerHTML = t
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(22);
	var s = i(7),
		r = n(s),
		a = function() {
			function t(e) {
				o(this, t), this.dom = document.querySelector("#inviteWrap"), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.createQrcode = this.createQrcode.bind(), this.render()
			}
			return t.prototype.show = function() {
				this.dom.classList.contains("show") ? this.dom.classList.remove("show") : $(".item-wrap").addClass("active"), this.dom.classList.add("show")
			}, t.prototype.hide = function() {
				$(".item-wrap").removeClass("active"), this.dom.classList.remove("show")
			}, t.prototype.createQrcode = function() {
				try {
					new QRCode(document.getElementById("inviteQrcode"), {
						text: "http://ac.alloyteam.com/wx2017/user.html?_form=ac_home_index",
						width: 160,
						height: 160,
						colorDark: "#000000",
						colorLight: "#ffffff",
						correctLevel: QRCode.CorrectLevel.L
					})
				} catch (t) {}
			}, t.prototype.bindAction = function() {
				var t = this;
				$(this.dom).click(function() {
					t.hide()
				}), this.createQrcode()
			}, t.prototype.render = function() {
				var t = (0, r["default"])();
				this.dom.innerHTML = t, this.bindAction()
			}, t
		}();
	e["default"] = a
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(23);
	var s = i(8),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#join"), this.render()
			}
			return t.prototype.render = function() {
				var t = (0, r["default"])({
					join: c["default"].join,
					sponsor: c["default"].joinsponsor
				});
				this.dom.innerHTML = t
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(24);
	var s = i(9),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#more"), this.render()
			}
			return t.prototype.render = function() {
				c["default"].more = c["default"].more || {}, c["default"].more.isWX = window.isInWX || !1;
				var t = (0, r["default"])(c["default"].more);
				this.dom.innerHTML = t
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(25);
	var s = i(10),
		r = n(s),
		a = i(0),
		c = n(a),
		d = i(48),
		l = (n(d), function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#process"), this.render()
			}
			return t.prototype.formateData = function(t) {
				for (var e = ["right", "left"], i = 0, n = !1, o = 0; o < t.main.time_line.length; o++) {
					var s = t.main.time_line[o];
					!i || s.morn || n || (n = !0, i = 0);
					var r = i % 2;
					s.time_line_class = e[r], t.main.time_line[o] = s, i++
				}
				return t
			}, t.prototype.show = function() {
				$(this.dom).find(".animated-box").addClass("fade-in-up animated-fast").removeClass("animated-box")
			}, t.prototype.render = function() {
				var t = this.formateData(c["default"].process),
					e = (0, r["default"])(t);
				this.dom.innerHTML = e
			}, t
		}());
	e["default"] = l
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0;
	var s = i(11),
		r = n(s);
	i(26), i(32);
	var a = function() {
			function t(e) {
				o(this, t), this.render(), this.isMobile = isMobile()
			}
			return t.prototype.bindAction = function() {
				var t = document.querySelector("#nav .nav-info-wrap"),
					e = $(".item-wrap"),
					i = this,
					n = window.innerHeight;
				slidePage.init({
					id: "fullpage",
					pageContainer: ".item-wrap",
					navItem: "slide-item",
					startIndex: 1,
					before: function(t, e) {},
					after: function(o, s, r) {
						var a = o;
						if (r ? (t.style.backgroundColor = "rgba(0,0,0,0.5)", $(".main-time-line").css("background", "transparent")) : t.style.backgroundColor = "transparent", $("#slideWrap").find(".slide-item").removeClass("active").eq(o).addClass("active"), $("#nav .nav-item").removeClass("active").eq(o).addClass("active"), i.isMobile && (o > 2 ? $(".toolbar-wrap").addClass("bgs") : $(".toolbar-wrap").removeClass("bgs")), a) {
							var c = e.eq(a),
								d = c.children().height();
							d > n && s && setTimeout(function() {
								c.scrollTop(0)
							}, 0)
						}
					},
					useAnimation: !0,
					refresh: !0,
					speed: !1
				})
			}, t.prototype.render = function() {
				var t = $(".item-wrap").length,
					e = (0, r["default"])({
						len: t
					});
				$("body").append(e), this.bindAction()
			}, t
		}();
	e["default"] = a
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(27);
	var s = i(12),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#sponsor"), this.feeddom = document.querySelector("#qrcodeFeedBack"), this.bindAction = this.bindAction.bind(this), this.render()
			}
			return t.prototype.bindAction = function() {
				var t = this;
				$("#sponsorFeed").tap(function(e) {
					t.feeddom.classList.contains("show") ? (t.feeddom.classList.remove("show"), $(".item-wrap").removeClass("active")) : ($(".win-wrap").removeClass("show"), $(".item-wrap").addClass("active"), t.feeddom.classList.add("show"))
				})
			}, t.prototype.render = function() {
				var t = (0, r["default"])(c["default"].sponsor2);
				this.dom.innerHTML = t, this.bindAction()
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(28);
	var s = i(13),
		r = n(s),
		a = i(0),
		c = (n(a), function() {
			var t = navigator.userAgent.toLowerCase(),
				e = "ipad" == t.match(/ipad/i),
				i = "iphone os" == t.match(/iphone os/i),
				n = "midp" == t.match(/midp/i),
				o = "rv:1.2.3.4" == t.match(/rv:1.2.3.4/i),
				s = "ucweb" == t.match(/ucweb/i),
				r = "android" == t.match(/android/i),
				a = "windows ce" == t.match(/windows ce/i),
				c = "windows mobile" == t.match(/windows mobile/i);
			return !!(e || i || n || o || s || r || a || c)
		}),
		d = function() {
			function t() {
				o(this, t), this.dom = document.querySelector("#ticket"), this.feddom = document.querySelector("#qrcodeFeedBack"), this.createQrcode = this.createQrcode.bind(this), this.inMobile = c(), this.isShow = !1, this.render()
			}
			return t.prototype.createQrcode = function() {}, t.prototype.show = function() {
				var t = (0, r["default"])();
				this.dom.innerHTML = t, this.dom.classList.add("show"), this.feddom.classList.contains("show") ? this.feddom.classList.remove("show") : $(".item-wrap").addClass("active")
			}, t.prototype.hide = function() {
				$(".item-wrap").removeClass("active"), this.dom.classList.remove("show"), this.dom.innerHTML = ""
			}, t.prototype.bindAction = function() {
				var t = this;
				$(this.dom).click(function(e) {
					console.log(e.target.classList), e.target.classList.contains("ticket-close") && (t.hide(), $(".item-wrap").removeClass("active"))
				}), this.inMobile && this.createQrcode()
			}, t.prototype.render = function() {
				this.bindAction()
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(29);
	var s = i(15),
		r = n(s),
		a = i(14),
		c = n(a),
		d = i(0),
		l = n(d),
		p = i(49),
		u = n(p),
		h = i(50),
		m = i(42),
		f = n(m),
		_ = i(46),
		v = n(_),
		g = i(35),
		w = n(g),
		b = i(34),
		y = n(b),
		C = i(38),
		A = n(C),
		E = function() {
			function t(e) {
				o(this, t), this.dom = document.querySelector("#title"), this.ndom = document.querySelector("#nav"), this.sid = (0, h.getParameter)("sid"), this.stype = (0, h.getParameter)("stype"), this.from = (0, h.getParameter)("_from") || (0, h.getParameter)("from"), this.feedback = !1, this.dialog = !1, this.countDown = !1, this.ticket = e.ticket, this.inMore = e.inMore, this.render(), this.bindAction = this.bindAction.bind(this), this.createQrcode = this.createQrcode.bind(this), this.isLoad = !1;
				var i = document.createElement("iframe");
				i.style.display = "none", i.src = "//qun.qq.com/joinedrecommend/report.html" + location.search, document.body.appendChild(i)
			}
			return t.prototype.preLoad = function() {
				var t = this;
				try {
					var e;
					!
					function() {
						var i = document.querySelectorAll("#preload img"),
							n = i.length,
							o = 0;
						u["default"].start(), e = $("#titleLoading");
						for (var s = t, r = Date.now(), a = function() {
								var t = function() {
										e.remove()
									};
								e[0].addEventListener("webkitAnimationEnd", t), e[0].addEventListener("animationend", t), e.html("").addClass("show"), e.css("animation", "loadScale ease-out 0.5s"), setTimeout(function() {
									e.remove()
								}, 800)
							}, c = 0, d = i.length; c < d; c++) {
							var l = i[c],
								p = l.getAttribute("src"),
								h = new Image;
							h.onload = function() {
								if (o++, o >= n - 1) {
									var t = Date.now() - r,
										e = 2e3;
									t > 2e3 && (e = 0), setTimeout(function() {
										if ($("#nav").css("opacity", 1), $("#fullpage-wrap").css("opacity", 1), $("#title .content").css("animation", "picTitleScale ease-out 0.5s"), a(), u["default"].stop(), s.lazyLoad(), !s.isLoad) {
											s.isLoad = !0, new f["default"];
											var t = new w["default"],
												e = new y["default"],
												i = new A["default"];
											s.feedback = t, new v["default"]({
												ticket: s.ticket,
												feedback: t,
												bid: e,
												invite: i
											})
										}
									}, e)
								}
							}, h.onerror = function() {
								o++
							}, h.src = p
						}
					}()
				} catch (i) {
					console.log(i)
				}
			}, t.prototype.lazyLoad = function() {
				for (var t = document.querySelectorAll(".lazy-load-img"), e = 0, i = t.length; e < i; e++) t[e].src = t[e].getAttribute("data-src")
			}, t.prototype.bindAction = function() {
				var t = this;
				$(this.dom).find("div.button").click(function() {
					$("#ticket").hasClass("show") ? t.ticket.hide() : t.ticket.show()
				});
				var e = location.href.indexOf("more.html") >= 0;
				$(this.ndom).find(".menu").click(function() {
					var t = $("ul.link");
					t.hasClass("show") ? (t.removeClass("show"), $(this).removeClass("active")) : (t.addClass("show"), $(this).addClass("active"))
				}), e || $(this.ndom).find(".nav-item").click(function(t) {
					var e = $(this).data("idx");
					if (e) return slidePage.index(e - 1), $(this.ndom).find(".menu").removeClass("active"), $("ul.link").removeClass("show"), !1
				}), $(this.ndom).find("#historyConf").mouseenter(function() {
					document.documentElement.clientWidth >= 1024 && $("#beforeDrop").css("display", "block")
				}), $(this.ndom).find("#historyConf").mouseleave(function() {
					document.documentElement.clientWidth >= 1024 && $("#beforeDrop").css("display", "none")
				}), $(this.ndom).find("#historyConf").click(function() {
					"block" === $("#beforeDrop").css("display") ? ($("#beforeDrop").css("display", "none"), document.documentElement.clientWidth < 1024 && $("#historyConf").css("height", "")) : (document.documentElement.clientWidth < 1024, $("#beforeDrop").css("display", "block")), console.log("mouseEnter..")
				})
			}, t.prototype.createQrcode = function(t) {
				try {
					new QRCode(document.getElementById("qrcode"), {
						text: "https://ac.alloyteam.com/wx2017/bid.html" + location.search,
						width: 160,
						height: 160,
						colorDark: "#000000",
						colorLight: "#ffffff",
						correctLevel: QRCode.CorrectLevel.L
					})
				} catch (e) {}
			}, t.prototype.render = function() {
				var t = Math.floor(4 * Math.random());
				l["default"].title.randomNum = t, l["default"].title.inMore = this.inMore;
				var e = (0, r["default"])(l["default"].title);
				this.dom.innerHTML = e, l["default"].title.inMore = location.href.indexOf("more.html") >= 0;
				var i = (0, c["default"])(l["default"].title);
				this.ndom.innerHTML = i, this.preLoad();
				var n = $(".nav-item");
				n.eq(0).on("click", function(t) {
					document.body.scrollTop = $(".fec-title1").offset().top - 100, t.preventDefault()
				}), n.eq(1).on("click", function(t) {
					document.body.scrollTop = $(".process-title").offset().top - 100, t.preventDefault()
				}), n.eq(2).on("click", function(t) {
					document.body.scrollTop = $(".guide-title").offset().top - 100, t.preventDefault()
				}), this.bindAction(), this.createQrcode()
			}, t
		}();
	e["default"] = E
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0, e["default"] = void 0, i(30);
	var s = i(16),
		r = n(s),
		a = i(0),
		c = n(a),
		d = function() {
			function t(e) {
				o(this, t), this.render(), this.feeddom = document.querySelector("#qrcodeFeedBack"), this.ticketdom = document.querySelector("#ticket"), this.ticket = e.ticket, this.feedback = e.feedback, this.bid = e.bid, this.invite = e.invite, this.guide = this.guide.bind(this), this.feed = this.feed.bind(this), this.bids = this.bids.bind(this), this.invites = this.invites.bind(this)
			}
			return t.prototype.buy = function() {
				console.log("buy")
			}, t.prototype.hideAll = function() {
				try {
					this.ticket.hide(), this.bid.hide(), this.feedback.hide(), this.invite.hide()
				} catch (t) {}
			}, t.prototype.guide = function() {
				this.ticketdom.classList.contains("show") ? this.ticket.hide() : (this.hideAll(), this.ticket.show())
			}, t.prototype.feed = function() {
				this.feeddom.classList.contains("show") ? this.feedback.hide() : (this.hideAll(), this.feedback.show())
			}, t.prototype.bids = function() {
				this.bid.dom.classList.contains("show") ? this.bid.hide() : (this.hideAll(), this.bid.show())
			}, t.prototype.invites = function() {
				this.invite.dom.classList.contains("show") ? this.invite.hide() : (this.hideAll(), this.invite.show())
			}, t.prototype.bindAction = function() {
				var t = this;
				$(".toolbar-wrap li").click(function(e) {
					var i = e.target.getAttribute("data-action");
					t[i] && t[i]()
				})
			}, t.prototype.render = function() {
				var t = (0, r["default"])(c["default"].footer);
				$("body").append(t), this.bindAction()
			}, t
		}();
	e["default"] = d
}, function(t, e, i) {
	"use strict";

	function n(t) {
		return t && t.__esModule ? t : {
			"default": t
		}
	}

	function o() {
		return document.documentMode || +(navigator.userAgent.match(/MSIE (\d+)/) && RegExp.$1)
	}

	function s() {
		return "ontouchstart" in window
	}

	function r() {
		var t = o();
		if (!(t > 0 && t < 9)) {
			var e = (new c["default"]({
				inMobile: H()
			}), new f["default"]),
				i = (new p["default"], new v["default"], new y["default"]);
			new w["default"], new h["default"]({
				ticket: e,
				checkAnimated: T
			});
			S({
				process: i
			}), F(), o() && $("body").addClass("ie"), s() && H(), function(t) {
				var e = {
					endY: t.os.android ? 1 : 0,
					duration: 200,
					updateRate: 15
				},
					i = function(t, e, i) {
						return t + (e - t) * i
					},
					n = function(t) {
						return -Math.cos(t * Math.PI) / 2 + .5
					},
					o = function(o) {
						var s = t.extend({}, e, o);
						if (0 === s.duration) return window.scrollTo(0, s.endY), void("function" == typeof s.callback && s.callback());
						var r = window.pageYOffset,
							a = Date.now(),
							c = a + s.duration,
							d = function l() {
								var t = Date.now(),
									e = t > c ? 1 : (t - a) / s.duration;
								window.scrollTo(0, i(r, s.endY, n(e))), t < c ? setTimeout(l, s.updateRate) : "function" == typeof s.callback && s.callback()
							};
						d()
					},
					s = function(o) {
						var s = t.extend({}, e, o);
						if (0 === s.duration) return this.scrollTop = s.endY, void("function" == typeof s.callback && s.callback());
						var r = this.scrollTop,
							a = Date.now(),
							c = a + s.duration,
							d = this,
							l = function p() {
								var t = Date.now(),
									e = t > c ? 1 : (t - a) / s.duration;
								d.scrollTop = i(r, s.endY, n(e)), t < c ? setTimeout(p, s.updateRate) : "function" == typeof s.callback && s.callback()
							};
						l()
					};
				t.scrollTo = o, t.fn.scrollTo = function() {
					if (this.length) {
						var t = arguments;
						this.forEach(function(e, i) {
							s.apply(e, t)
						})
					}
				}
			}(Zepto)
		}
	}
	i(31);
	var a = i(36),
		c = n(a),
		d = i(39),
		l = (n(d), i(43)),
		p = n(l),
		u = i(45),
		h = n(u),
		m = i(44),
		f = n(m),
		_ = i(37),
		v = n(_),
		g = i(33),
		w = n(g),
		b = i(41),
		y = n(b),
		C = i(40),
		A = (n(C), !1);
	window.inMobile = A;
	var E = navigator.userAgent.toLowerCase();
	window.isInWX = /micromessenger/i.test(E);
	var M = function() {
			A = H();
			window.innerHeight + "px", $(".title-bgs img");
			x()
		},
		x = function() {
			var t = document.getElementById("htmlRoot"),
				e = t.getBoundingClientRect().width * (10 / 375);
			e = e < 10 ? 10 : e, t.style.fontSize = e + "px"
		},
		k = function() {},
		T = function() {},
		L = function() {},
		S = function(t) {
			function e() {
				$(".animated-box").length > 0 && (T(), RAF(e))
			}
			q();
			e(), window.addEventListener("scroll", function() {
				T(), L()
			}), M(), L(), window.onresize = M, k()
		},
		q = function() {
			for (var t = $(".item-wrap"), e = {
				id: [],
				height: []
			}, i = 0, n = t.length; i < n; i++) {
				var o = t[i],
					s = o.clientHeight + (0 == i ? 0 : e.height[i - 1]);
				e.id.push(o.id), e.height.push(s)
			}
			return e
		},
		H = function() {
			var t = navigator.userAgent.toLowerCase(),
				e = "ipad" == t.match(/ipad/i),
				i = "iphone os" == t.match(/iphone os/i),
				n = "midp" == t.match(/midp/i),
				o = "rv:1.2.3.4" == t.match(/rv:1.2.3.4/i),
				s = "ucweb" == t.match(/ucweb/i),
				r = "android" == t.match(/android/i),
				a = "windows ce" == t.match(/windows ce/i),
				c = "windows mobile" == t.match(/windows mobile/i);
			return window.innerWidth < 500 ? ($("html").addClass("mobile"), !0) : ($("html").removeClass("mobile"), e || i || n || o || s || r || a || c ? ($("html").addClass("mobile"), !0) : ($("html").removeClass("mobile"), !1))
		};
	window.isMobile = H, window.RAF = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame ||
		function(t) {
			window.setTimeout(t, 1e3 / 60)
		}
	}();
	var F = function() {
			var t = navigator.userAgent.toLowerCase(),
				e = /micromessenger/i.test(t);
			e && $.ajax({
				url: "//ac.alloyteam.com/wx2017cgi/jsapi/getJSApiSignParamsFromWebSite",
				type: "GET",
				param: {
					url: location.href
				},
				success: function(t) {
					wx.config({
						appId: "wxfd322c5d87c97d3a",
						timestamp: t.timestamp,
						nonceStr: t.noncestr,
						signature: t.sign,
						jsApiList: ["addCard", "scanQRCode", "onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
					});
					var e = {
						title: "腾讯Alloyteam Web前端大会 - AC2017",
						desc: "AC2017 讲师全部来自 Alloyteam 成员，大会将向业界分享 Alloyteam 最新技术实践、技术干货做最纯净、最干货、最专业的前端大会",
						link: location.protocol + "//ac.alloyteam.com/?stype=2",
						imgUrl: "http://s.url.cn/ac/home1/img/img/new//title-dadaf2.jpg",
						success: function() {},
						cancel: function() {}
					};
					wx.ready(function() {
						wx.onMenuShareTimeline(e), wx.onMenuShareAppMessage(e), wx.onMenuShareQQ(e), wx.onMenuShareWeibo(e), wx.onMenuShareQZone(e)
					})
				},
				error: function(t) {
					if (1e5 === t.code) return authorRedirect()
				}
			})
		};
	r()
}, function(t, e, i) {
	"use strict";

	function n(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}
	e.__esModule = !0;
	var o = function() {
			function t(e) {
				n(this, t), this.canvas = e.dom, this.canvas.width = 2 * window.innerWidth, this.canvas.height = window.innerHeight, this.position = [], this.lineCount = e.count || 9, this.colorList = e.colorList || ["#22CAB3", "#90CABE", "#A6EFE8", "#C0E9ED", "#C0E9ED", "#DBD4B7", "#D4B879", "#ECCEB2", "#F2ADA6", "#FF7784"], this.ctx = this.canvas.getContext("2d"), this.ctx.strokeStyle = "red", this.pushPre = !1, this.date = new Date, this.random = this.random.bind(this), this.getRandomColor = this.getRandomColor.bind(this), this.randomSpeed = this.randomSpeed.bind(this), this.generatePosition = this.generatePosition.bind(this), this.render = this.render.bind(this), this.init = this.init.bind(this), this.changeColor = this.changeColor.bind(this), this.init()
			}
			return t.prototype.random = function(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			}, t.prototype.getRandomColor = function() {
				return this.colorList[this.random(0, 9)]
			}, t.prototype.randomSpeed = function() {
				return (Math.random() > .5 ? 1 : -1) * Math.random() * 2
			}, t.prototype.generatePosition = function() {
				for (var t = this.canvas, e = this.getRandomColor, i = this.randomSpeed, n = this.lineCount, o = this.random, s = 0; s < n; s++) this.position.push({
					points: [o(0, 4 * t.width), o(0, 4 * t.height), o(0, 4 * t.width), o(0, 4 * t.height)],
					color: e(),
					speed: [i(), i(), i(), i(), i(), i(), i(), i()],
					prePoints: []
				})
			}, t.prototype.changeColor = function() {
				var t = this.getRandomColor,
					e = this.random(0, this.lineCount - 1);
				this.position[e].color = t()
			}, t.prototype.render = function() {
				var t = this.ctx,
					e = this.canvas,
					i = this.position;
				t.clearRect(0, 0, e.width, e.height), i.forEach(function(e) {
					var i = e.points;
					t.beginPath(), t.strokeStyle = e.color, t.moveTo.call(t, i[0], i[1]), t.bezierCurveTo.call(t, i[2], i[3], i[4], i[5], i[6], i[7]), t.stroke();
					for (var n = e.prePoints, o = 0, s = n.length; o < s; o += 8) t.save(), t.globalAlpha = o / 640 * .1, t.beginPath(), t.strokeStyle = e.color, t.moveTo.call(t, n[o], n[o + 1]), t.bezierCurveTo.call(t, n[o + 2], n[o + 3], n[o + 4], n[o + 5], n[o + 6], n[o + 7]), t.stroke(), t.restore()
				})
			}, t.prototype.animate = function() {
				var t = this,
					e = this.canvas,
					i = this.position;
				new Date - this.date > 50 ? (this.pushPre = !0, this.date = new Date) : this.pushPre = !1, i.forEach(function(i) {
					t.pushPre && (i.prePoints.push.apply(i.prePoints, i.points), i.prePoints.length > 640 && i.prePoints.splice(0, 8)), i.points.forEach(function(t, n) {
						i.points[n] += i.speed[n], n % 2 === 0 ? (i.points[n] < -100 && (i.points[n] = -100, i.speed[n] *= -1), i.points[n] > e.width + 100 && (i.points[n] = e.width + 100, i.speed[n] *= -1)) : (i.points[n] < -100 && (i.points[n] = -100, i.speed[n] *= -1), i.points[n] > e.height + 100 && (i.points[n] = e.height + 100, i.speed[n] *= -1))
					})
				})
			}, t.prototype.init = function() {
				function t() {
					e.animate(), e.render(), RAF(t)
				}
				this.generatePosition();
				var e = this;
				t()
			}, t
		}();
	e["default"] = o
}, function(t, e, i) {
	"use strict";

	function n() {
		function t() {
			i -= 5, c += d, (c > 220 || c < 0) && (d *= -1), -1 * i === l && (i = 0), m.clearRect(0, 0, h.width, h.height), m.beginPath();
			var _ = a - c;
			m.moveTo(r - i, _);
			for (var v = 0; v < o; v++) {
				var g = v * l,
					w = g + r - i;
				m.quadraticCurveTo(w + u, _ + n, w + p, _), m.quadraticCurveTo(w + u + p, _ - n, w + l, _)
			}
			m.lineTo(r + e, 300), m.lineTo(r, 300), m.fill(), m.globalCompositeOperation = "destination-atop", m.drawImage(f, 0, -1), s = requestAnimationFrame(t)
		}
		var e = 500,
			i = 0,
			n = 8,
			o = 5,
			r = -100,
			a = 204,
			c = 0,
			d = 1,
			l = e / o,
			p = l / 2,
			u = p / 2,
			h = document.getElementById("myCanvas"),
			m = h.getContext("2d"),
			f = new Image;
		m.fillStyle = "#59a6e9", f.onload = function() {
			t(), $(".ld-text").css({
				opacity: 1,
				transform: "scaleX(1) scaleY(1)"
			})
		}, f.src = "data:image/png;base64,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";
	}

	function o() {
		cancelAnimationFrame(s)
	}
	e.__esModule = !0;
	var s = null;
	e["default"] = {
		start: n,
		stop: o
	}
}, function(t, e, i) {
	"use strict";
	e.__esModule = !0;
	e.getParameter = function(t, e) {
		e = e || location.href;
		var i = new RegExp("(\\?|#|&)" + t + "=([^&^#]*)(&|#|$)"),
			n = e.match(i);
		return decodeURIComponent(n ? n[2] : "")
	}
}, function(t, e, i) {
	"use strict";
	i(47)
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//dntW-18115d.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//heyW-3796aa.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//joeyW-d2dcbc.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//laowangW-9aa494.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//nemoW-2595f1.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//weber-38f2e9.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/avatar//xiaoqiang-f93267.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//girl1-3d1bab.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//guide_mask-a67a5b.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//map4-d2b21d.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//music-a7859c.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//qrcode_ac-529867.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//qrcode_ac3-3cc367.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/common//tencent_white_logo-7c76b3.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//100offer-356b10.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//coding-795623.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//csdn-c5b8fc.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//freecodecamp1-2d211a.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//iweb-f0fe00.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//juejin-98ee89.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//oschina-ac077a.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//seg-a39090.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//w3cschool-ef63b5.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//wetest-f17d47.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/logo//wj-aaba1e.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//ac-c82c76.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//feedqrocde-6f0afd.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//guide-e8b1ee.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//guide1-5c28ba.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//intro1-e1af98.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//iphone8-f192fb.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//jiqi1-b7ff9e.png"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//more-1eb832.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//music-9623e9.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//sponsor-73c10c.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//title-dadaf2.jpg"
}, function(t, e, i) {
	t.exports = i.p + "img/img/new//yx-8c5814.png"
}, function(t, e, i) {
	t.exports = i(1)
}]);
