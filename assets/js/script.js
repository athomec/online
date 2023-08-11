$(function () {//JS開頭

	var WINDOW = $(window).width();//視窗寬度
	var WINDOWH = $(window).height();//視窗高度

	//---------------------選單展開按鈕設定------------------------
	$('.js-navbar-btn').click(function () {
		$(".js-navbar").toggleClass('show');
	})
	//按鈕點擊變換狀態
	$('.js-toggle-btn button').click(function () {
		$(this).toggleClass('active');
	})
	//菜單scrollspy監聽事件
	
})//JS尾端	
