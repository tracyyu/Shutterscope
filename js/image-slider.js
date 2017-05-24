function slideSwitch() {
    var $active = $('#slider img.active');
    var $last = $('#slider img.last');
    var $first = $('#slider img.first');

    if ( $active.length == 0 ) $active = $('#slider img:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slider img:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0});
    $next.addClass('active');
    $next.animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 5000 );
});