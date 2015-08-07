$(window).on("load", function(){
	//页面入口
	sapp.page.go(location.hash.substr(1));

	//loading
	$("#loading").removeClass("in");
});

function swipeHandler(dir,now){
	if(dir=="swipeUp" && now==sapp.page.length){
		$("#page4").addClass("ended");
		return;
	}
	if(dir=="swipeDown" && $("#page4").hasClass("ended")){
		$("#page4").removeClass("ended");
		return;
	}
	switch(dir){
		case "swipeUp" : sapp.page.next(); break;
		case "swipeDown" : sapp.page.prev(); break;
	}
}

$(function(){
	//初始化
	sapp.init({
		page:".page",
		preload:2
	});

	//页面滑动逻辑
	sapp.event.on("SWIPE", function(e){
		swipeHandler(e.dir,sapp.page.now);
	});

	//自适应
	sapp.fill({
		target : "#page2 .main,#page3 .main",
		 width : 1080,
		height : 1920,
		  mode : "contain"
	});
	sapp.fill({
		target : "#page1 .main,#page4 .main",
		 width : 1080,
		height : 1920,
		  mode : "width"
	});


	//分享
	var share = sapp.share({
		text : $("meta[name='shareText']").attr("content"),
		icon : $("meta[name='shareIcon']").attr("content")
	});


});

