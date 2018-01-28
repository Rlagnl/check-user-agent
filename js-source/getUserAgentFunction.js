// 获取agent信息
var getUserAgentFunction = function() {
	var ua = window.navigator.userAgent;
	// 用户环境
	var uaInfo = {};
	uaInfo.ua = (window.navigator.userAgent).toLowerCase();
	// 判断操作系统
	if (ua.indexOf("Android") >= 0) {
	    uaInfo.isAndroid = true;
	} else if(ua.indexOf("iPhone") > -1){
	    uaInfo.isIos = true;
	    uaInfo.isIPhone = true;
	} else if(ua.indexOf("iPad") > -1) {
	    uaInfo.isIos = true;
	    uaInfo.isIPad = true;
	};
	//判断谷歌浏览器
    if (ua.indexOf("Chrome") >= 0) {
	    uaInfo.isChrome = true;
	};
	//判断Safari
    if (ua.indexOf("Safari") >= 0) {
	    uaInfo.isSafari = true;
	};
	// Edge
	if (ua.indexOf("Edge") >= 0) {
	    uaInfo.isEdge = true;
	};
	//以下是获取OS版本信息
    var uaindex;
    if (uaInfo.isIos) {
    	uaindex = ua.indexOf("OS ");
        //正则截取版本号的字符串
        uaInfo.osVer = ua.match(/[ ]((\d+_\d+)|(\d+_\d+_\d+))[ ]/ig)||[];
        uaInfo.osVer = uaInfo.osVer[0].toString();
        uaInfo.osVerNum = 0;
        var multiple = [100,10,1];//倍数
        var verNumTempArr = [0,0,0];//版本号一般以3位分割
        var osVerNumArr =  uaInfo.osVer.split("_");
        var i = osVerNumArr.length;
        while (i--) {
        	verNumTempArr[i] = osVerNumArr[i] * multiple[i];//把获取的数字乘上相应的倍数
        };
        var j = 3;
        while (j--) {
        	uaInfo.osVerNum += verNumTempArr[j];//按位相加获得最终版本代表的数字
        };
    } else if (uaInfo.isAndroid) {
        uaindex = ua.indexOf("Android ");
        uaInfo.osVer = ua.substr( uaindex + 8, 3 );
        uaInfo.osVerNum = uaInfo.osVer.split(".").join("");
        uaInfo.osVerNum = uaInfo.osVerNum < 100 ? uaInfo.osVerNum * 10 : uaInfo.osVerNum;
    } else {
        uaInfo.osVer = "";
        uaInfo.osVerNum = uaInfo.osVer.split(".").join("");
        uaInfo.osVerNum = uaInfo.osVerNum < 100 ? uaInfo.osVerNum * 10 : uaInfo.osVerNum;
    };
    return uaInfo;
};
