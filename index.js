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
	        $('.homeSec2').css('margin-top','75px')
	    }
	    else{
	    	$('.mainNav').css('position', 'static');
	    	$('.mainNav').css('margin-top','0');
	    	$('.homeSec2').css('margin-top','0px')
	    }
	});










	//Navigation Bar Functionality
	$("#workTab").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec2").offset().top -75
            }, 1700, 'easeInOutCubic');
    });
	$("#aboutTab").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec3").offset().top -75
            }, 1500, 'easeInOutCubic');
    });
    $(".name").click(function (e){
        	e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".homeSec1").offset().top
            }, 1700, 'easeInOutCubic');
    });














    $(".navArrow").on({click:function(e){    
	    	if($(this).hasClass('navArrowClicked')){
	    		$(this).removeClass('navArrowClicked');
	    		e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $(".homeSec1").offset().top
	            }, 1700, 'easeInOutCubic');	
	    	}
	    	else{
	    		$(this).addClass('navArrowClicked');  
	    		e.preventDefault();
	            $('html, body').animate({
	                scrollTop: $(".homeSec2").offset().top -75
	            }, 1700, 'easeInOutCubic');	
	    	}

		}
	});
























})