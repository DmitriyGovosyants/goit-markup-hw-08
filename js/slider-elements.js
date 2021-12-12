jQuery(document).ready(function ($) {
  
	var slideCount = $('#slider .slider-elements__item').length;
	var slideWidth = $('#slider .slider-elements__item').width();
	var slideHeight = $('#slider .slider-elements__item').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider .slider-elements').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider .slider-elements__item:last-child').prependTo('#slider .slider-elements');

    function moveLeft() {
        $('#slider .slider-elements').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider .slider-elements__item:last-child').prependTo('#slider .slider-elements');
            $('#slider .slider-elements').css('left', '');
        });
    };

    function moveRight() {
        $('#slider .slider-elements').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider .slider-elements__item:first-child').appendTo('#slider .slider-elements');
            $('#slider .slider-elements').css('left', '');
        });
    };

    $('.slider-elements-prev').click(function () {
        moveLeft();
    });

    $('.slider-elements-next').click(function () {
        moveRight();
    });

});    
