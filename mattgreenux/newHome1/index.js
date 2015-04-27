$(document).ready(function(){

	var winHeight = $(window).height();

	function homeResize () {
		if ($(window).width()>800) {
			$('.previewContain').css('height',winHeight);
		}
	}

	homeResize();
	$( window ).resize(function() {
		winHeight = $(window).height();
		homeResize();
	});

});