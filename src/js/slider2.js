function slider2_init() {
  /*
  * Формируем массив данных для слайдера
  */
  var youget = {};
  youget.slides = [];

  $('.youget__item').each(function(index, el) {
    var title =       $(el).find('.youget__title').html();
    var logo =        $(el)
                        .find('.youget__inner')
                        .attr('class')
                        .match(/youget__inner_([\S]*)/)[1];

    youget.slides[index] = {
      title: title,
      logo: logo
    }
  });

  var template = $('#youget-slider-template').html();
  var compiledTemplate = Template7.compile(template);
  var html = compiledTemplate(youget);
  $('#youget-slider-wrapper').append(html);



  /*
  * Инициализируем сладер
  */ 
  $('#youget-slider').swiper({

    loop: true,
    pagination: '#youget-slider .swiper-pagination',
    nextButton: '#youget-slider .swiper-button-next',
    prevButton: '#youget-slider .swiper-button-prev'
  });
}

if($('#youget-slider').length) slider2_init();
