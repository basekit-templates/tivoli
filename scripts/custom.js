

// ---------------------------------
// Toggles
// ---------------------------------


// Navigation animation toggle
$(document).on("click", ".navigation-icon--container input", function() {
    $( "body" ).toggleClass( "navigation-open" );
});


// If slide navigation is visible hide the pagination
$(document).ready(function(){
    if ( $("nav").hasClass("responsiveslideshow__slide-pagination")) {
         $("body").addClass("has-slide-pagination");
    }
});




// ---------------------------------
// Published Mode Detection
// ---------------------------------


var publishedmode = true;


if($("body.edit-mode").length > 0) {
    publishedmode = false;
}




// --------------------------------------------------
// Initializer for Twitter widget slideshow effect
// --------------------------------------------------


$(document).ready(function(){
    BaseKit.Util.waitsFor(function () {
        return $('.twitter__tweet-item').length > 0 ? true : false;
    }, function () {
        $('.bk-twitter').unslider({
            delay: false,             //  Stops slider auto sliding through tweets
            complete: function() {},  //  A function that gets called after every slide animation
            keys: true,               //  Enable keyboard (left, right) arrow shortcuts
            dots: true,               //  Display dot navigation
            fluid: true               //  Support responsive design. May break non-responsive designs
        });
    }, function () {
    }, 5000);
});


// If in publish mode re-un twitter script every 10 seconds
if(publishedmode==false) {
    window.setInterval(function(){

        $(document).ready(function(){
            BaseKit.Util.waitsFor(function () {
                return $('.twitter__tweet-item').length > 0 ? true : false;
            }, function () {
                $('.bk-twitter').unslider({
                    delay: false,             //  Stops slider auto sliding through tweets
                    complete: function() {},  //  A function that gets called after every slide animation
                    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
                    dots: true,               //  Display dot navigation
                    fluid: true               //  Support responsive design. May break non-responsive designs
                });
            }, function () {
            }, 10000);
        });
    }, 5000);
}


$(document).ready(function(){
    $('.bk-twitter').unslider({
        delay: false,             //  Stops slider auto sliding through tweets
        complete: function() {},  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        fluid: true               //  Support responsive design. May break non-responsive designs
    });
});




// ---------------------------------
// Close Everything
// ---------------------------------


function closeEverything() {
    $( ".widget__extendednavigation" ).removeClass( "open" );
    $( "body" ).removeClass( "form-open" );
    $( "body, html" ).removeClass( "navigation--open" );
    $( "body, html" ).removeClass( "basket--open" );
    $( "#page-zones__template-widgets__ecombasket-shopbasket" ).removeClass( "show-content" );
    $( ".navigation-item.folder" ).removeClass( "open" );
}


// On ESC key
document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        closeEverything();
    }
};
