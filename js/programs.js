var projectEven = document.getElementById("projectEven");
var backTop = document.getElementById("backTop");
var offset = 300,
	offset_opacity = 1200,
	scroll_top_duration = 500,
 // window.
 onscroll = function() {
	// 检查滚动条离顶部的距离
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	projectEven.style.top = -(scrollTop*0.2)+"px";
	// 获取浏览器的可视窗口
	var h = window.innerHeight ||
		document.documentElement.clientHeight ||
		document.body.clientHeight;
		(scrollTop > offset) ? backTop.style.bottom = 100+"px" : backTop.style.bottom = -100+"px";
	if(scrollTop > offset_opacity){
		backTop.style.bottom = 100+"px";
	}
}


/**
	 * 返回到顶部方法
	 *
	*/
// backTop:function(){
// 	var offset = 300,
// 	offset_opacity = 1200,
// 	scroll_top_duration = 500,
// 	$back_to_top = $('.backTop');
// 	$(window).scroll(function(){
// 		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('active') : $back_to_top.removeClass('active');
// 		if( $(this).scrollTop() > offset_opacity ) { 
// 			$back_to_top.addClass('active');
// 		}
// 	});
// 	$back_to_top.click(function(){
// 		event.preventDefault();
// 		$('body,html').animate({
// 			scrollTop: 0 ,
// 		 	}, scroll_top_duration
// 		);
// 	});
// }

/**
   * 回到顶部
   */
backTop.onclick = function() {
	var id = window.setInterval(function() {
		// 检查滚动条离顶部的距离
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		// 
		var speed = scrollTop / -10;
		// 向上移动	
		window.scrollBy(0, speed);
		// 当移动到顶的时候，需要关闭定时器
		if (scrollTop <= 0) {
			window.clearInterval(id);
		}
	}, 30);
}
