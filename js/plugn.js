/*global console, $ */

$(function () {
	
	'use strict';
	
	// Smothly Scroll To Element
	
	$('.navbar li a').click(function (e) {
		
		e.preventDefault();
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('scroll')).offset().top
			
		}, 1000);
		
	
     });
	
	// Add Active Class On Navbar Link And Remove Siblings
	
	$('.navbar li a').click(function () {
		
		$(this).addClass('active');
		
		$('navbar a').removeClass('active');
		
	});
	
	
	
});