
$(".menu-titel").mouseenter(function () {
	$(this).children(".top-sub").css({
		"display": "flex"
	});
	$(this).children(".top-sub").stop().animate({
		"opacity": 1,
		"top": "40px"
	}, 700);
});
$(".menu-titel").mouseleave(function () {
	$(this).children(".top-sub").stop().animate({
		"opacity": 0,
		"top": "100px"
	}, 400, function () {
		$(this).css({
			"display": "none"
		});
	});
});


var $slides = [
	{
		src: "../img/L85L30028F03.26_P_01_600x.jpg",
		srcto: "../img/L85L30028F03.26_P_02_600x.jpg",
		title: "Tiger Skater Dress"
	},
	{
		src: "../img/L86Z30027F03.32_P_01_600x.jpg",
		srcto: "../img/L86Z30027F03.32_P_02_600x.jpg",
		title: "Flared Tiger"
	},
	{
		src: "../img/L95N10128F02.01_F_01_600x.jpg",
		srcto: "../img/L95N10128F02.01_P_01_600x.jpg",
		title: "Wax Dress"
	},
	{
		src: "../img/L95N12518G02.58_P_01_600x.jpg",
		srcto: "../img/L95N12518G02.58_P_02_600x.jpg",
		title: "Joggers"
	},
	{
		src: "../img/L95N30138F02.01_P_01_600x.jpg",
		srcto: "../img/L95N30138F02.01_P_02_600x.jpg",
		title: "Hawai Shirt"
	},
	{
		src: "../img/L95N41018F02.16_P_01_600x.jpg",
		srcto: "../img/L95N41018F02.16_P_03_600x.jpg",
		title: "Windproof Jacket"
	},
	{
		src: "../img/L95N42518G02.77_P_01_600x.jpg",
		srcto: "../img/L95N42518G02.77_P_05_600x.jpg",
		title: "Eye T-shirt"
	},
	{
		src: "../img/L95Z23538G01.76_P_01_600x.jpg",
		srcto: "../img/L95Z23538G01.76_P_02_600x.jpg",
		title: "Bomber Jacket"
	}
];

for (var i in $slides) {
	html ='<ul class="slide mb-2 p-2 pointer position-relative overflow-hidden">';
	html +='<li><div>';
	html +='<img src="'+$slides[i].src+'" alt="" class="slide-imgOne w-100 position-relative">';
	html +='<img src="'+$slides[i].srcto+'" alt="" class="slide-imgTo w-100 position-absolute" style="z-index: 99; opacity: 0; top: 0; left: 0;">';
	html +='</div></li>';
	html +='<li>';
	html +='<ul class="slide-cont position-absolute w-100 text-center" style="bottom: -65px; z-index: 999; left: 0px;">';
	html +='<li class="title p-2">'+$slides[i].title+'</li>	';
	html +='<li class="price mb-3">$4.99</li>';
	html +='<li><button class="btn btn-outline-dark border border-secondary px-4">Add to Cart</button></li>';
	html +='</ul>';
	html +='</li>';
	html +='</ul>';
	$(".cot .slides").append(html);
}




$(window).resize(function(){
	$(".teags .taeg-list").attr("style" , "");
	$(".teags .taeg-cont").attr("style" , "");
});


var $teagTitle = $(".teags .taeg-title")
 $teagTitle.click(function(){
	if($(this).css("cursor")=="pointer") {
		$(this).parent().children(".taeg-list").toggle();
		$(this).parent().children(".taeg-cont").toggle();
	}
});


$(".slide").mouseenter(function () { 
	$(this).find(".slide-cont").stop().animate({"bottom":0}, 300);
	$(this).find(".slide-imgOne").stop().animate({"opacity":0}, 500);
	$(this).find(".slide-imgTo").stop().animate({"opacity":1}, 500);
});
$(".slide").mouseleave(function () { 
	$(this).find(".slide-cont").stop().animate({"bottom":"-65px"},300);
	$(this).find(".slide-imgOne").stop().animate({"opacity":1}, 500);
	$(this).find(".slide-imgTo").stop().animate({"opacity":0}, 500);
});

$(".tooltip-bt").tooltip();

new WOW().init();