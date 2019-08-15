$(function() {

var elems = $('div.icon').not('#icon-0');
          
var increase = Math.PI * 2 / elems.length,
    x = 0,
    y = 0,
    angle = 4.7,
    radius = 200;
          
var center_top = ($("#slider-1").height() - $("#icon-0").height())/2,
    center_left = ($("#slider-1").width() - $("#icon-0").width())/2;


$('.icon').css({
    'top': center_top + 'px',
    'left': center_left + 'px'
});
          
$(elems).css('opacity', '0').each(function(i) {
    elem = elems[i];

    x = radius * Math.cos(angle) + center_left;
    y = radius * Math.sin(angle) + center_top;
    
    $(elem).delay(500*i).animate({
        'position': 'absolute',
        'left': x + 'px',
        'top': y + 'px',
        'opacity': '1'
    }, 1000);

    angle += increase;
});

$("#icon-0").css({
    'left': center_left + 'px',
    'top': center_top - 10  + 'px'
});
        
});