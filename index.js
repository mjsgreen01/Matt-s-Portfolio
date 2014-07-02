$(document).ready(function(){



	var winHeight = $(window).height();

	function homeResize () {
		$('.homeSec1').css('height',winHeight-75);
	}
	homeResize();

	$(window).scroll(function () {
		if ($(window).scrollTop() > winHeight-75) {
	        $('.mainNav').css('position', 'fixed');
	        $('.mainNav').css('margin-top',-(winHeight-75));
	    }
	    else{
	    	$('.mainNav').css('position', 'static');
	    	$('.mainNav').css('margin-top','0');
	    }
	});









})