// Tabs

(function($) {
    $(function() {     
      $('ul.sentence__tabs').on('click', 'li:not(.sentence__tab_active)', function() {
        $(this)
          .addClass('sentence__tab_active').siblings().removeClass('sentence__tab_active')
          .closest('div.container').find('div.sentence__content').removeClass('sentence__content_active').eq($(this).index()).addClass('sentence__content_active');
      });     
    });
})(jQuery);

// Hamburger

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.navbar__menu'),
  menuItem = document.querySelectorAll('.navbar__menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navbar__menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('navbar__menu_active');
      })
  })
})

// Scroll up

// $(window).on( 'load', function() {
//   $('html, body').animate({scrollTop : 0});
// });