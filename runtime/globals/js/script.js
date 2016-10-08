$(document).ready(function() {
  $('.window-width-size').text($(window).width() + 'px');
  $('.window-height-size').text($(window).height() + 'px');

  $(".button").click(function(){
    $(".measure").toggle();
  });
});

$(window).resize(function() {
  var windowWidthSize = $(window).width();
  var windowHeightSize = $(window).height();
  $('.window-width-size').text(windowWidthSize + 'px');
  $('.window-height-size').text(windowHeightSize + 'px');
});
