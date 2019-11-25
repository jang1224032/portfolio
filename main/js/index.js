// 전역변수
var now = 0;

// 이벤트
$(".pager").click(function(){
	now = $(this).index();
	init();
});


(function () {
	pagerInit();
})();

function init() {
	ani();
	pagerInit();
}

// 애니메이션
function ani() {
	$(".banners").stop().animate({"top": (-975*now)+"px"}, 500);
}

function pagerInit() {
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
}


