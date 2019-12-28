if (typeof (localStorage) === 'undefined') {
  document.querySelector('result').innerHTML = 'Your browser does not support HTML5 localStorage. Try upgrading.';
} else if (localStorage.getItem('block') != null) {
  getVisible = localStorage.block;
  $('.measure').addClass('block-is-invisible');
}

$(window).on('resize', () => {
  $('.window-width-size').html(`${window.outerWidth}px`); // width of the page + scrollbar width
  const windowHeightSize = $(window).height();
  $('.window-height-size').text(`${windowHeightSize}px`);
});

$(document).ready(() => {
  $('.window-width-size').html(`${window.outerWidth}px`);
  $('.window-height-size').text(`${$(window).height()}px`);

  $('.btn-action').text($('.measure').hasClass('block-is-invisible') ? 'Show' : 'Hide');

  $('.btn-action').on('click', () => {
    getVisible = localStorage.block;
    $('.measure').toggleClass('block-is-invisible');
    if ($('.measure').hasClass('block-is-invisible')) {
      localStorage.setItem('block', 'block-is-invisible');
      $('.btn-action').text('Show');
    } else {
      localStorage.removeItem('block');
      $('.btn-action').text('Hide');
    }
  });
});
