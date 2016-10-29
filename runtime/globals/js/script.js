$(document).ready(function() {
  $('.window-width-size').html(window.outerWidth + 'px');
  $('.window-height-size').text($(window).height() + 'px');

  $(".button").click(function(){
    $(".measure").toggle();
  });
});

(function($) {

  $(function() {

    $(window).on('resize', function() {
      $('.window-width-size').html(window.outerWidth + 'px'); //width of the page + scrollbar width 
      var windowHeightSize = $(window).height();
      $('.window-height-size').text(windowHeightSize + 'px');
    });
  });

})(jQuery);
