$(function(){

	$("nav li a").click(function(event) {
		var href = $(this).attr('href');
		event.preventDefault();
		$.smoothScroll({
      		scrollElement: $('.privacy_text'),
      		scrollTarget: href
    	});

		var header = $(href + " h4");
    	header.addClass('highlight');
	    setTimeout(
	        function() { header.removeClass('highlight'); },
	        1000
	    );
	});

});