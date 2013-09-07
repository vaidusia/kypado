var pageWidth = 1000;
var slideInterval = 5000;
$(window).load(function(){	
	$(this).resize().scroll();
}).scroll(function(){
	if($(this).scrollTop()>350){
		$("#toTop").attr('class','visible');
	}else{
		$("#toTop").attr('class','');
	}
});

$(function(){
	var w;
	function setWindowDimensions(){
		w = {
				w:Math.max(parseInt($(this).width()),pageWidth),
				h:$(this).height()
		}
	}
	setWindowDimensions();

	var toTop = $('<a id="toTop" href="#top" data-icon="&#xe001;"></a>').smoothScroll().appendTo('body'); //TODO: add icon
	

	$('nav a').smoothScroll();
	$('.slides .cta').smoothScroll({
		offset: -100,
		afterScroll: function() { 
		
			var target = $(this).attr('href');
			$(target).classy({start:{add:'attention'},end:{remove:'attention'}});
		}
	});

	$('nav li:first-child').addClass('first-child');

	var slidePrev = $('<a id="slidePrev" class="slideArrow">##########</a>'); 	//TODO: add icons
	var slideNext = $('<a id="slideNext"class="slideArrow">##########</a>');	//TODO: add icons
	var slidePagination = $('<ul id="slidePagination"></ul>');
	$(".slides li").each(function(i){
		var li = $('<li/>');
		var a = $('<a>&bull;</a>').click(function(){
			$(".slides").data('index',i).trigger("slideChange");
			resetSlideTimeout();
		});
		a.appendTo(li);
		li.appendTo(slidePagination);
		
	});


	$("#hero").prepend(slidePrev).append(slideNext).append(slidePagination);

	$(".slideArrow").click(function(){
		
		var slideData = $(".slides").data();
		var numSlides = $(".slides li").size()-1;
		if($(this).is("#slideNext")){
			if(slideData.index<numSlides){
				slideData.index++;
			}else{
				slideData.index = 0;
			}
		}else{
			if(slideData.index>0){
				slideData.index--;
			}else{
				slideData.index = numSlides;
			}
		}
		$(".slides").trigger("slideChange");
		resetSlideTimeout();
	});



	var slideTimeout;
	function resetSlideTimeout(){
		clearTimeout(slideTimeout);
		slideTimeout = setTimeout(function(){
			$("#slideNext").click();
		},slideInterval);
	}
	resetSlideTimeout();

	var windowResizeTimeout;

	$(window).resize(function(){
		
		setWindowDimensions();
		var baseMargin = ((w.w-pageWidth)/2);
		
		$(".slides li").each(function(i) {
			
			$(this).css({
				marginLeft:(w.w*i) + baseMargin
			});
		});
		
		slidePrev.css({
			left: baseMargin - 150
		});
		slideNext.css({
			right: baseMargin - 110
		});
		slidePagination.css({
			right: baseMargin
		});
		clearTimeout(windowResizeTimeout);
		windowResizeTimeout= setTimeout(function(){
			$(".slides").trigger('slideChange');
		},400);
		resetSlideTimeout();
	}).resize();

	$(".slides").bind('slideChange',function(){
		var i = $(this).data().index;
		var pos = -w.w * $(this).data().index;
		if(Modernizr.csstransforms){
			$(this).transition({
				x : pos
			});
		}else{
			$(this).css({
				left : pos
			});
		}
		slidePagination.children('li:eq('+i+')').addClass('current').siblings().removeClass('current');
	}).data('index', 0);

});
