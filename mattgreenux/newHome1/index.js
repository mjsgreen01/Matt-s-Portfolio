$(document).ready(function(){

	var winHeight = $(window).height();

	function homeResize () {
		if ($(window).width()>560) {
			$('.previewContain').css('height',winHeight);
		}
	}

	homeResize();
	$( window ).resize(function() {
		winHeight = $(window).height();
		homeResize();
	});

});