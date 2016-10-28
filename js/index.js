(function() {
    var docuH = document.documentElement.clientHeight,
        firLoadImg = document.getElementsByClassName('firLoad');
        secLoadImg = document.getElementsByClassName('secLoad');
        allMoveBox = document.getElementsByClassName('swiper-slide');
        aStory = document.getElementsByClassName('story');
        aButton = document.getElementsByClassName('button');
        oShare = document.getElementsByClassName('share')[0];
    document.getElementsByClassName('swiper-container')[0].style.height = docuH + 'px';
    var addClass = function(ele, strClass) {
        var reg = new RegExp("(^| )" + strClass + "( |$)");
        if (reg.test(ele.className)) {
            //如果此类样式已经存在，则什么也不需要做
        } else { //不存在
            ele.className = ele.className.trim() + " " + strClass;
        }
    };
    var removeClass = function(ele, strClass) {
        if (!(ele && ele.nodeType == 1)) {
            alert('第一参数ele需要是一个DOM元素对象');
            throw new Error('第一参数ele需要是一个DOM元素对象');
        }
        if (typeof strClass != 'string') {
            alert('第二参数必须为string类型');
            throw new Error('第二参数必须为string类型');
        }
        var reg = new RegExp("(?:^| )" + strClass + "(?: |$)", "g");
        ele.className = ele.className.replace(reg, '').trim();
    };
    var getIndex = function(ele) {
        var nIndex = 0;
        var p = ele.previousSibling
        while (p) {
            if (p.nodeType == 1) {
                nIndex++; //让累加一次
            }
            p = p.previousSibling; //继续判断它的下一个哥哥       
        }
        return nIndex;
    };
    for (var i = 0; i < firLoadImg.length; i++) {
        firLoadImg[i].style.backgroundImage = firLoadImg[i].dataset.url;
        addClass(allMoveBox[0], 'slide-move');          
    }
    for(var i=0;i<aStory.length;i++)
        {
            (function(index){
                aButton[i].onclick=function()
                {
                    addClass(aStory[index],'storyShow');
                    aStory[index].style.display = 'block';
                };
                aStory[i].onclick = function(){
                    removeClass(aStory[index],'storyShow');
                    window.setTimeout(function(){
                        aStory[index].style.display = 'none';   
                    },300);
                }
            })(i);
        }
})()
