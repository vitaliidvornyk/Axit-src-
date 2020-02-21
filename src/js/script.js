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

// Scroll up

// $(window).on( 'load', function() {
//   $('html, body').animate({scrollTop : 0});
// });