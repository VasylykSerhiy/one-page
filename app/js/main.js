;(function ($, window, document, undefined) {
  'use strict';
  new WOW().init();

  // MENU

  $('.menu__burger').on('click', () => {
    $('.menu__burger').closest('.menu').toggleClass('active');
  });

  $('.menu__close').on('click', () => {
    $('.menu__burger').closest('.menu').removeClass('active');
  });



  // POPUP
  $('.menu__profile').on('click', () => {
    $('.menu__burger').closest('body').find('.popup').toggleClass('active');
  })

  $('.popup__bg').on('click', () => {
    $('.popup__bg').closest('.popup').toggleClass('active');
  })

  $('.slider__wrap').slick({
    dots: true
  });



  $("form").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
      qustion: {
        required: true,
        minlength: 20,
      }
    },
    messages: {
      name: "Please specify your name",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      },
      qustion: {
        minlength: "You must enter a minimum of 20 characters",
      }
    }
  });

})(jQuery, window, document);