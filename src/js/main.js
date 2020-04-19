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

  // ###### YOUTUBE - VIDEO - START ###### //
  var player;
  $('.video__play-button').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: '_Qhqb8DrTNA',
      events: {
        'onReady': videoPlay,
      }
    });
  });
  
  function videoPlay(event) {
    event.target.playVideo();
  }
  // ###### YOUTUBE - VIDEO - END ###### //

  // ###### SLIDER 1 START ###### //
  var SwiperProjects = new Swiper ('.projects__swiper-container',  {
    loop: true,
    spaceBetween: 30,
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

  // ###### SLIDER 2 - STEPS - START ###### //
  var stepsProjects = new Swiper ('.steps__swiper-container',  {
    loop: true,
    spaceBetween: 30,
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

  nextSteps.css('left', prevSteps.width() + 22 + bulletsSteps.width() + 23);
  bulletsSteps.css('left', prevSteps.width() + 22);


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
  // ###### SLIDER 2 - STEPS - END ###### //


   // ###### SLIDER 3 - DECOR - START ###### //
  var decorItemList = [ '.decor__item',
                        '.decor__item--1',
                        '.decor__item--2',
                        '.decor__item--3',
                        '.decor__item--4',
                        '.decor__item--5',
                        '.decor__item--6',
                        '.decor__item--7',
                        '.decor__item--8',
                        '.decor__item--9',
                        '.decor__item--10',
                        '.decor__item--11',
                      ];

  var decorImages = [ '.decor__img-wrapper',
                      '.decor__img-wrapper--1',
                      '.decor__img-wrapper--2',
                      '.decor__img-wrapper--3',
                      '.decor__img-wrapper--4',
                      '.decor__img-wrapper--5',
                      '.decor__img-wrapper--6',
                      '.decor__img-wrapper--7',
                      '.decor__img-wrapper--8',
                      '.decor__img-wrapper--9',
                      '.decor__img-wrapper--10',
                      '.decor__img-wrapper--11',
                    ];                        

  $(decorItemList[1]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[1]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[1]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[2]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[2]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[2]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[3]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[3]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[3]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[4]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[4]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[4]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[5]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[5]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[5]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[6]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[6]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[6]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[7]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[7]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[7]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[8]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[8]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[8]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[9]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[9]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[9]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[10]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[10]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[10]).addClass('decor__img-wrapper--active');
  });
  $(decorItemList[11]).on('click', function() {
    $(decorItemList[0]).removeClass('decor__item--active');
    $(decorItemList[11]).addClass('decor__item--active');
    $(decorImages[0]).removeClass('decor__img-wrapper--active');
    $(decorImages[11]).addClass('decor__img-wrapper--active');
  });                    
 // ###### SLIDER 3 - DECOR - START ###### //

 // ###### SLIDER 4 - DECOR2 - START ###### //
  var SwiperDecor = new Swiper ('.decor__swiper-container',  {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: '.decor__swiper-button-next',
      prevEl: '.decor__swiper-button-prev',
    },
  });
 // ###### SLIDER 4 - DECOR2 - END ###### //

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
  // $('.hero__scroll-down').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
  // /* Плавная прокрутка наверх */
  //   $('body, html').animate({
  //     scrollTop: 700
  //   }, delay);
  // });

  $("#menu-nav, #footer-nav, #hero-scroll-down").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top - 110}, 1500);
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
            ym(61248256, 'reachGoal', 'send-form-success'); return true;
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





    //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.ymap-container').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;
  
  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [55.730138, 37.594238], // координаты центра на карте
      zoom: 7, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    var myPlacemarkTemp = new ymaps.Placemark([55.730138, 37.594238], {
        balloonContent: "Здесь может быть ваш адрес",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/marker-red.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable('scrollZoom');
    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function() {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }
  
  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          |layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback){
    var script = document.createElement("script");
  
    if (script.readyState){  // IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
  
        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
          check_if_load = true; 
  
      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
          spinner.addClass('is-active');
  
      // Загружаем API Яндекс.Карт
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
            // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
            ymaps.load(init);
          });                
        }
      }
    );  
  };
  
  $(function() {
  
    //Запускаем основную функцию
    ymap();
  
  });
});