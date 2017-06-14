(function(doc,win){
	window.base = document.documentElement.clientWidth/1920;
	var docEl = doc.documentElement,
		resizeEvt = "orientationchange" in window?"orientationchange":"resize";//orientationchange屏幕旋转  resize 浏览器改变大小
	recalc = function(){
		window.clientWidth = docEl.clientWidth;
		window.clientHeight = docEl.clientHeight;
		var aspectRatio = window.clientWidth/window.clientHeight;
		if(aspectRatio>1920/1028){
			docEl.style.fontSize = 100*(window.clientHeight/1028)+"px";
			window.base = 100*(window.clientHeight/1028)
		}else{
			docEl.style.fontSize = 100*(window.clientWidth/1920)+"px";
			window.base = 100*(window.clientWidth/1920)
		}
		/*var isMobile = {
			Android:function(){
				return navigator.userAgent.match(/Android/i) ? true : false
			},
			BlackBerry:function(){
				return navigator.userAgent.match(/Blackberry/i) ? true : false
			},
			iOS:function(){
				return navigator.userAgent.match(/iOS/i) ? true : false
			},
			Windows:function(){
				return navigator.userAgent.match(/Windows/i) ? true : false
			},
			any:function(){
				return (isMobile.Android || isMobile.BlackBerry || isMobile.iOS || isMobile.Windows)
			}
		}*/
	}
	recalc()
	win.addEventListener(resizeEvt, recalc, false);//false在事件捕获时触发,true在事件冒泡时触发
		
})(document,window)
