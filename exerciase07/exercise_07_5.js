
/*5. Reference the Lynda.com jquery tutorial. Convert the image slide show in the tutorial to an autoplaying slide show, Create a fade translation between the slides, have each image last for three seconds, and make the overlay background more transparent. */

$(function() {
"use strict";

	var $flowers = $('#flower-items');

	$flowers
    	.find('a')
    	.colorbox({
    		'rel' : 'gallery',
    		'maxWidth' : '80%',
			'transition' : 'fade',
			'speed' : 750,
			'opacity' : 0.2,
			'slideshow' : true,
            'slideshowAuto': true,
			'slideshowSpeed' : 3000,
			'current' : 'arrangement {current} of {total}'
    	});
});
