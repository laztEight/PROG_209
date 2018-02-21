
/*5. Reference the Lynda.com jquery tutorial. Convert the image slide show in the tutorial to an autoplaying slide show, Create a fade translation between the slides, have each image last for three seconds, and make the overlay background more transparent. */

$(function(){
    'use strict';

    var $form = $('#frmUser');

    $form.find('.group:nth-child(1)')
    .addClass('error');

    $form.find('.group:nth-child(3)')
    .addClass('msg')
    .append('<p>Good Choice!</p>');

});



/*6. Add a button and an image to a page. Code the Javascript and jQuery so that when the user clicks on a button it animates the image across the screen and fades the image to 50%. Lastly it should use one form of animation easing as described in the Lynda.com tutorials.*/
