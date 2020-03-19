// document.addEventListener("DOMContentLoaded", function(event) { 
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]')
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   }
//   const closeModal = () => {
//     modal.classList.remove('modal--visible');
//   }

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);

//   document.addEventListener('click', function (e) {
//     if (e.target == modal) {
//       closeModal ();
//     }
//   });
  
//   document.addEventListener('keydown', function(event) {
//      {
//       closeModal ();
//     }
//   });

// });

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle="modal"]'),
      closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  $(document).on('keydown', function (event) {
    if (event.code == 'Escape') {
      modal.removeClass('modal--visible');
    }
  });
  // $(document).on('click', '.modal', function () {
  //   modal.removeClass('modal--visible'); 
  // });


  var SwiperProjects = new Swiper ('.projects__swiper-container',  {
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });

  var menu = ['<div class="custom-paginators"><span>01</span>Выезд на замер помещения</div>', '<div class="custom-paginators"><span>01</span>Выезд на замер помещения</div>', '<div class="custom-paginators"><span>01</span>Выезд на замер помещения</div>'];
  var stepsProjects = new Swiper ('.steps__swiper-container',  {
    loop: true,
    pagination: {
      el: '.swiper-pagination.steps__pagination, .swiper-pagination.steps__pagination-right',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
    navigation: {
      nextEl: '.steps__button-next',
      prevEl: '.steps__button-prev',
    },
  });

  var nextProjects = $('.projects__swiper-button-next');
  var prevProjects = $('.projects__swiper-button-prev');
  var bulletsProjects = $('.projects__swiper-pagination');

  nextProjects.css('left', prevProjects.width() + 17 + bulletsProjects.width() + 17);
  bulletsProjects.css('left', prevProjects.width() + 20);





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
    ".control__form"
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
          minlength: "Имя должно содержать не меньше 2-х букв",
          maxlength: "Имя должно содержать не больше 15-и букв"
        },
        userPhone: {
          required: "Заполните поле",
          minlength: "Телефон должно содержать не меньше 10-и цифр"
        },
        userEmail: {
          required: "Заполните поле",
          email: "Введите корректный email: name@domain.com"
        }
      }
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