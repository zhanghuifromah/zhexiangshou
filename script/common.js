var baseUrl="http://www.xiongmaojianzu.com";
var client_id="2";
var client_secret="z3HhDF4Bcq014X8VTXivUIWN1YSh2vvA9I3B4Q6F"
//function baseUrl(){
//	return "192.168.1.100"
//}
!function(){function a(){document.documentElement.style.fontSize=document.documentElement.clientWidth/6.4+"px"}var b=null;window.addEventListener("resize",function(){clearTimeout(b),b=setTimeout(a,300)},!1),a()}(window);

function iflogIndex(){
	if(typeof $api.getStorage('token')=='undefined'||$api.getStorage('token')==''){
		api.toast({
		    msg: '请先登陆',
		    duration: 2000,
		    location: 'bottom'
		});
		
		api.openWin({
	        name:'login',
	        url:'html/login.html',
	        bounces:true,
	        animation:{
	            type:'movein'
	        }
	    })
	    api.closeWin({name: 'frame2'});
	 	return false;
	}else{
		return true
	}
}
function iflog(){
	if(typeof $api.getStorage('token')=='undefined'||$api.getStorage('token')==''){
		api.toast({
		    msg: '请先登陆',
		    duration: 2000,
		    location: 'bottom'
		});
		api.openWin({
	        name:'login',
	        url:'login.html',
	        bounces:true,
	        animation:{
	            type:'movein'
	        }
	    })
	}
}
function sethead(){
	//IOS  onclick卡顿解决
	FastClick.attach(document.body);
	var header = document.querySelector('.head');
    $api.fixStatusBar(header);
    api.setStatusBarStyle({
        style: 'dark',
        color: '#2897d7'
    });
  
}

function isEmptyObject(e) {  
    var t;  
    for (t in e)  
        return !1;  
    return !0  
}  
Date.prototype.format =function(format)
    {
        var o = {
        "M+" : this.getMonth()+1, //month
		"d+" : this.getDate(),    //day
		"h+" : this.getHours(),   //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3),  //quarter
		"S" : this.getMilliseconds() //millisecond
        }
        if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
        (this.getFullYear()+"").substr(4- RegExp.$1.length));
        for(var k in o)if(new RegExp("("+ k +")").test(format))
        format = format.replace(RegExp.$1,
        RegExp.$1.length==1? o[k] :
        ("00"+ o[k]).substr((""+ o[k]).length));
        return format;
    }
