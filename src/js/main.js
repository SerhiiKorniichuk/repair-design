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
    if ( $(this).scrollTop() > el1.offset().top - 980) {
        el1.addClass('animkey');
    }
    if ( $(this).scrollTop() > el2.offset().top - 980) {
        el2.addClass('animkey');
    }
    if ( $(this).scrollTop() > el3.offset().top - 980) {
        el3.addClass('animkey');
    }
    if ( $(this).scrollTop() > el4.offset().top - 980) {
      el4.addClass('animkeyForCards1');
    }
    if ( $(this).scrollTop() > el5.offset().top - 980) {
      el5.addClass('animkeyForCards2');
    }
    if ( $(this).scrollTop() > el6.offset().top - 980) {
      el6.addClass('animkeyForCards3');
    }
    if ( $(this).scrollTop() > el7.offset().top - 980) {
      el7.addClass('animkey');
    }
    if ( $(this).scrollTop() > el8.offset().top - 980) {
      el8.addClass('animkeyForCards1');
    }
    if ( $(this).scrollTop() > el9.offset().top - 980) {
      el9.addClass('animkeyForCards2');
    }
    if ( $(this).scrollTop() > el10.offset().top - 980) {
      el10.addClass('animkeyForCards3');
    }
  });

  


  // var top_show = 500; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  // var delay = 1000; // Задержка прокрутки
  // $(window).scroll(function () { // При прокрутке попадаем в эту функцию
  //   /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
  //   if ($(this).scrollTop() > top_show) $('.button-go-up ').fadeIn();
  //   else $('.button-go-up ').fadeOut();
  // });
  // $('.button-go-up ').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
  //   /* Плавная прокрутка наверх */
  //   $('body, html').animate({
  //     scrollTop: 0
  //   }, delay);
  // });


  // new WOW().init();
});