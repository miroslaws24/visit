$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

var Main = {
    showBlock: function (el) {
          var mainBlock = $('body').find('.hello-world').not('.hide').animate({
              opacity: 0
          }, 'fast');

    },
};