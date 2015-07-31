$(window).bind("load", function(){
	//页面入口
	spa.page.now=1;

	//loading
	$("#loading").fadeOut();
});

function swipeToSwitch(dir,page){
	var now=page;
	if(page==3 || page==4 || page==5){
		if(dir=="swipeRight"){
			$(".p"+page+"_left").trigger("touchstart");
		}
		if(dir=="swipeLeft"){
			$(".p"+page+"_right").trigger("touchstart");
		}
	}
}

$(function(){
	//初始化
	spa.init({
		page:".page",
		preload:3
	});

	//页面滑动逻辑
	spa.event.on("swipe", function(e){
		switch(e.dir){
			case "swipeUp" : spa.page.next(); break;
			case "swipeDown" : spa.page.prev(); break;
			case "swipeLeft" : swipeToSwitch(e.dir,spa.page.now); break;
			case "swipeRight" : swipeToSwitch(e.dir,spa.page.now); break;
		}
	});

	spa.page.lock();

	
	//自适应
	spa.fill({
		target : ".main",
		 width : 640,
		height : 1008,
		scaleType: "scaleMain" /*scaleMain:main层用scale压缩，main里的东西用px定位；scaleChild：main层用计算后的px定位，main里的元素用百分比定位*/
	});


	//music
	spa.sound.bgmusic("audio/bg.mp3");
	$(document).one("touchstart", function(){
		spa.sound.play();
	});
	$(".music").bind("touchstart",function(){
		if($(this).hasClass("playing")){
			spa.sound.pause();
			$(this).removeClass("playing");
		}else{
			spa.sound.play();
			$(this).addClass("playing");
		}
	});
	
	$(".lang1").attr("href",toEnglishVersion);
	$(".lang2").attr("href",toIndoVersion);
	//share
	var share = spa.share({
		  text : $("meta[name='shareText']").attr("content"),
		   img : $("meta[name='shareImg']").attr("content")
	});
	$("[data-share='facebook']").attr("href", facebookShareUrl);
	$("[data-share='twitter']").attr("href", twitterShareUrl);
	
	spa.event.on("pageGo", function(e){
		if(e.page==1){
			$(".back").hide();
		}else{
			$(".back").show();
		}
		if(e.page==6){
			$(".down").hide();
		}else{
			$(".down").show();
		}
		$('#pageAnalyse'+e.page).click();
	});

	$(".p1_2.clickable").bind("touchstart",function(){
		$(this).removeClass("clickable");
		$("#page1").addClass("play");
		$(".lang").hide();
		$(".music").show().addClass("playing");
		$(".helper_layer_for_parallax").parallax();
	});

	$(".back").bind("touchstart",function(){
		spa.page.go(1);
	});

	$("[data-goto]").bind("touchstart",function(){
		spa.page.unlock();
		var i=$(this).attr("data-goto");
		spa.page.go(i);
		$(".share,.back").show();
		$(".down").show();
	});

	var p4now=0;
	var p4len=4;
	$(".p4_right").bind("touchstart",function(e){
		if(p4now<p4len-1){
			p4now++;
		}
		if(p4now==0){
			$(".p4_left").hide();
		}else{
			$(".p4_left").show();
		}
		if(p4now==p4len-1){
			$(".p4_right").hide();
		}else{
			$(".p4_right").show();
		}
		$(".p4_s_"+(p4now+1)).addClass("in").siblings().removeClass("in");
		$(".p4_dot").find("span").eq(p4now).addClass("now").siblings().removeClass("now")
	});
	$(".p4_left").bind("touchstart",function(e){
		if(p4now>0){
			p4now--;
		}
		if(p4now==0){
			$(".p4_left").hide();
		}else{
			$(".p4_left").show();
		}
		if(p4now==p4len-1){
			$(".p4_right").hide();
		}else{
			$(".p4_right").show();
		}
		$(".p4_s_"+(p4now+1)).addClass("in").siblings().removeClass("in");
		$(".p4_dot").find("span").eq(p4now).addClass("now").siblings().removeClass("now")
	});

	var p5now=0;
	var p5len=3;
	$(".p5_right").bind("touchstart",function(e){
		if(p5now<p5len-1){
			p5now++;
		}
		if(p5now==0){
			$(".p5_left").hide();
		}else{
			$(".p5_left").show();
		}
		if(p5now==p5len-1){
			$(".p5_right").hide();
		}else{
			$(".p5_right").show();
		}
		$(".p5_s_img").eq(p5now).addClass("in").siblings().removeClass("in");
		$(".p5_dot").find("span").eq(p5now).addClass("now").siblings().removeClass("now")
	});
	$(".p5_left").bind("touchstart",function(e){
		if(p5now>0){
			p5now--;
		}
		if(p5now==0){
			$(".p5_left").hide();
		}else{
			$(".p5_left").show();
		}
		if(p5now==p5len-1){
			$(".p5_right").hide();
		}else{
			$(".p5_right").show();
		}
		$(".p5_s_img").eq(p5now).addClass("in").siblings().removeClass("in");
		$(".p5_dot").find("span").eq(p5now).addClass("now").siblings().removeClass("now")
	});

	var p6now=0;
	var p6len=2;
	$(".p6_right").bind("touchstart",function(e){
		if(p6now<p6len-1){
			p6now++;
		}
		if(p6now==0){
			$(".p6_left").hide();
		}else{
			$(".p6_left").show();
		}
		if(p6now==p6len-1){
			$(".p6_right").hide();
		}else{
			$(".p6_right").show();
		}
		$(".p6_"+(p6now+1)).addClass("in").siblings().removeClass("in");
		$(".p6_dot").find("span").eq(p6now).addClass("now").siblings().removeClass("now")
	});
	$(".p6_left").bind("touchstart",function(e){
		if(p6now>0){
			p6now--;
		}
		if(p6now==0){
			$(".p6_left").hide();
		}else{
			$(".p6_left").show();
		}
		if(p6now==p6len-1){
			$(".p6_right").hide();
		}else{
			$(".p6_right").show();
		}
		$(".p6_"+(p6now+1)).addClass("in").siblings().removeClass("in");
		$(".p6_dot").find("span").eq(p6now).addClass("now").siblings().removeClass("now")
	});


});