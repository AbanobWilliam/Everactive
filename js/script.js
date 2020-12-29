$(document).ready(function(){
    $('.mobile-button').click(function (event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header-bottom ul').toggleClass('hide');
    });
    $('div.go-up a').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
          return false;
    });
});

$(document).on('click', '.header-bottom ul a', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('html, body').animate({scrollTop: pos}, 400);
});