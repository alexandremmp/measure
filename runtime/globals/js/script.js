const wWidthSize = document.querySelector('.window-width-size');
const wHeightSize = document.querySelector('.window-height-size');

if (typeof (localStorage) === 'undefined') {
  document.querySelector('result').innerHTML = 'Your browser does not support HTML5 localStorage. Try upgrading.';
} else if (localStorage.getItem('block') != null) {
  getVisible = localStorage.block;
  $('.measure').addClass('block-is-invisible');
}

$(window).on('resize', () => {
  wWidthSize.innerHTML = `${window.innerWidth}px`;
  wHeightSize.innerHTML = `${window.innerHeight}px`;
});

$(document).ready(() => {
  wWidthSize.innerHTML = `${window.innerWidth}px`;
  wHeightSize.innerHTML = `${window.innerHeight}px`;

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
