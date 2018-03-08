/*6. Add a button and an image to a page. Code the Javascript and jQuery so that when the user clicks on a button it animates the image across the screen and fades the image to 50%. Lastly it should use one form of animation easing as described in the Lynda.com tutorials.*/


//Using jQuery to console.log to see the page is working
  $(function(){
      'use strict';

      //Making the button clickable
        $('#btn').on('click', imgClick);

  //creating the imgClick function
        function imgClick() {
            $('img')
            //animating the image to move left with an easeout
                .animate(
                    {marginLeft: '60%'}, 1500, 'easeOutBounce')
                    //after animate fading to 50%
                .fadeTo("slow", 0.5);
        }
    });
