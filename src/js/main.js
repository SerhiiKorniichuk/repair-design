$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    $('.modal__form')[0].reset();
    $('div.invalid').remove();
    $('.modal__form').find('.invalid').removeClass('invalid');
    modal.toggleClass('modal--visible'); 
  });
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      $('.modal__form')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible');
    }
  });
  $(document).on('click', function (e) {
    if (modal.is(e.target)){
      $('.modal__form')[0].reset();
      $('div.invalid').remove();
      $('.modal__form').find('.invalid').removeClass('invalid');
      modal.removeClass('modal--visible'); 
    }
  });

  var ajaxSuccessModal = $('.ajax-success'),
      ajaxSuccessModalBtn = $('[data-toggle="ajax-success-close"]'),
      ajaxSuccessModalcloseBtn = $('.ajax-success__close');

      ajaxSuccessModalcloseBtn.on('click', function () {
        ajaxSuccessModal.removeClass('ajax-success--visible');
      });
      $(document).on('keydown', function (event) {
        if (event.code == 'Escape') {
          ajaxSuccessModal.removeClass('ajax-success--visible');
        }
      });




  // ###### SLIDER 1 START ###### //
  var SwiperProjects = new Swiper ('.projects__swiper-container',  {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets'
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var nextProjects = $('.projects__swiper-button-next');
  var prevProjects = $('.projects__swiper-button-prev');
  var bulletsProjects = $('.projects__swiper-pagination');

  nextProjects.css('left', prevProjects.width() + 17 + bulletsProjects.width() + 17);
  bulletsProjects.css('left', prevProjects.width() + 20);
  // ###### SLIDER 1 END ###### //

  // ###### SLIDER 2 START ###### //
  var stepsProjects = new Swiper ('.steps__swiper-container',  {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination.steps__pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.steps__button-next',
      prevEl: '.steps__button-prev',
    },
  });

  var nextSteps = $('.steps__button-next');
  var prevSteps = $('.steps__button-prev');
  var bulletsSteps = $('.swiper-pagination.steps__pagination');

  nextSteps.css('left', prevSteps.width() + 17 + bulletsSteps.width() + 17);
  bulletsSteps.css('left', prevSteps.width() + 20);


  var slideNum = 1,
      slideNumber = $('.steps__slide-number'),
      slideFirstNumber = $('.steps__slide-first__number');
  var blockNumber = [ '.pagination-steps__block',
                      '.pagination-steps__block--1',
                      '.pagination-steps__block--2',
                      '.pagination-steps__block--3',
                      '.pagination-steps__block--4',
                      '.pagination-steps__block--5',
                      '.pagination-steps__block--6',
                    ];
  var ariaLabelArr = ['[aria-label = "Go to slide 1"]',
                      '[aria-label = "Go to slide 2"]',
                      '[aria-label = "Go to slide 3"]',
                      '[aria-label = "Go to slide 4"]',
                      '[aria-label = "Go to slide 5"]',
                      '[aria-label = "Go to slide 6"]'
                    ];   

  nextSteps.on('click', function() {
    if (slideNum == 6) {
      slideNum = 0;
      
    }
      slideNum +=1;
      slideFirstNumber.text(slideNum);
    
      $(blockNumber[0]).removeClass('pagination-steps__block--active');
      $(blockNumber[slideNum]).addClass('pagination-steps__block--active');
  });
  prevSteps.on('click', function() {
    if (slideNum == 1) {
      slideNum = 7;  
    }
      slideNum -= 1;
      slideFirstNumber.text(slideNum);
      $(blockNumber[0]).removeClass('pagination-steps__block--active');
      $(blockNumber[slideNum]).addClass('pagination-steps__block--active');
  });

  $(ariaLabelArr[0]).on('click', function() {
    slideNumber.text('1/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[1]).addClass('pagination-steps__block--active');
  });
  $(ariaLabelArr[1]).on('click', function() { 
    slideNumber.text('2/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[2]).addClass('pagination-steps__block--active');
  });    
  $(ariaLabelArr[2]).on('click', function() {
    slideNumber.text('3/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[3]).addClass('pagination-steps__block--active');
  });
  $(ariaLabelArr[3]).on('click', function() {
    slideNumber.text('4/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[4]).addClass('pagination-steps__block--active');
  }); 
  $(ariaLabelArr[4]).on('click', function() {
    slideNumber.text('5/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[5]).addClass('pagination-steps__block--active');
  });
  $(ariaLabelArr[5]).on('click', function() {
    slideNumber.text('6/6');
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[6]).addClass('pagination-steps__block--active');
  }); 
    
  $(blockNumber[1]).on('click', function () {
    $(ariaLabelArr[0]).click();
    slideNumber.text('1/6');   
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[1]).addClass('pagination-steps__block--active');
  });
  $(blockNumber[2]).on('click', function () {
    $(ariaLabelArr[1]).click();
    slideNumber.text('2/6');   
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[2]).addClass('pagination-steps__block--active');
  });
  $(blockNumber[3]).on('click', function () {
    $(ariaLabelArr[2]).click();
    slideNumber.text('3/6');   
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[3]).addClass('pagination-steps__block--active');
  });
  $(blockNumber[4]).on('click', function () {
    $(ariaLabelArr[3]).click();
    slideNumber.text('4/6');   
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[4]).addClass('pagination-steps__block--active');
  });
  $(blockNumber[5]).on('click', function () {
    $(ariaLabelArr[4]).click();
    slideNumber.text('5/6');   
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[5]).addClass('pagination-steps__block--active');
  });
  $(blockNumber[6]).on('click', function () {
    slideNumber.text('6/6');   
    $(ariaLabelArr[5]).click();
    $(blockNumber[0]).removeClass('pagination-steps__block--active');
    $(blockNumber[6]).addClass('pagination-steps__block--active');
  });
  // ###### SLIDER 2 END ###### //



  var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('.button-go-up ').fadeIn();
    else $('.button-go-up ').fadeOut();
  });
  $('.button-go-up ').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });


  // new WOW().init();

  var formsClass = [
    ".modal__form",
    ".footer__form",
    ".control__form",
    ".checkout__form"
  ];

  for (var i = 0; i < formsClass.length; i++) {
    formsValidate(formsClass[i]);
  }

  function formsValidate (form) {
    $(form).validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        userName: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhone: {
          required: true,
          minlength: 18,
        },
        userEmail: {
          required: true,
          email: true,
        },
      },
      messages: {
        userName: {
          required: "Заполните поле",
          minlength: "Не меньше 2-х букв",
          maxlength: "Не больше 15-и букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Не меньше 10-и цифр"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email: name@domain.com"
        }
      },
      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $(form).serialize(),
          success: function (response) {
            $(form)[0].reset();
            modal.removeClass('modal--visible');
            ajaxSuccessModal.addClass('ajax-success--visible');
          }
        });
      },
    });

    $('[type=tel]').mask('+7 (000) 000-00-00');

  
    $('#agree').on('change', function(){
    if($('#agree').prop('checked')){
    $('#btn-sumbit').attr('disabled', false);
    }else{
    $('#btn-sumbit').attr('disabled', true);
    }
    });

    $('#agree-footer').on('change', function(){
      if($('#agree-footer').prop('checked')){
      $('#btn-sumbit-footer').attr('disabled', false);
      }else{
      $('#btn-sumbit-footer').attr('disabled', true);
      }
    });

    $('#agree-control').on('change', function(){
      if($('#agree-control').prop('checked')){
      $('#btn-button-control').attr('disabled', false);
      }else{
      $('#btn-button-control').attr('disabled', true);
      }
    });

    $('#agree-checkout').on('change', function(){
      if($('#agree-checkout').prop('checked')){
      $('#btn-sumbit-checkout').attr('disabled', false);
      }else{
      $('#btn-sumbit-checkout').attr('disabled', true);
      }
    });
  
  
  }

  var el1 = $('.projects__row');
  var el2 = $('.control__container');
  var el3 = $('.types__container');
  var el4 = $('.types_card1');
  var el5 = $('.types_card2');
  var el6 = $('.types_card3');
  var el7 = $('.design__container');
  var el8 = $('.design__card1');
  var el9 = $('.design__card2');
  var el10 = $('.design__card3');
  $(window).scroll(function(){
    if ( $(this).scrollTop() > el1.offset().top - $(window).height()) {
        el1.addClass('animkey');
    }
    if ( $(this).scrollTop() > el2.offset().top - $(window).height()) {
        el2.addClass('animkey');
    }
    if ( $(this).scrollTop() > el3.offset().top - $(window).height()) {
        el3.addClass('animkey');
    }
    if ( $(this).scrollTop() > el4.offset().top - $(window).height()) {
      el4.addClass('animkeyForCards1');
    }
    if ( $(this).scrollTop() > el5.offset().top - $(window).height()) {
      el5.addClass('animkeyForCards2');
    }
    if ( $(this).scrollTop() > el6.offset().top - $(window).height()) {
      el6.addClass('animkeyForCards3');
    }
    if ( $(this).scrollTop() > el7.offset().top - $(window).height()) {
      el7.addClass('animkey');
    }
    if ( $(this).scrollTop() > el8.offset().top - $(window).height()) {
      el8.addClass('animkeyForCards1');
    }
    if ( $(this).scrollTop() > el9.offset().top - $(window).height()) {
      el9.addClass('animkeyForCards2');
    }
    if ( $(this).scrollTop() > el10.offset().top - $(window).height()) {
      el10.addClass('animkeyForCards3');
    }
  });


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
        }, {
            searchControlProvider: 'yandex#search'
        }),
        

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myPlacemark);
  });
});