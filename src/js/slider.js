function slider_init() {
  /*
  * Формируем массив данных для слайдера
  */
  var result = {};
  result.slides = [];

  $('.result__item').each(function(index, el) {
    
    var title =       $(el).find('.result__title').text();  
    var description = $(el).find('.result__desc').text();  
    var link =        $(el).find('.result__more').attr('href');

    var logo =        $(el)
                        .find('.result__logo')
                        .attr('class')
                        .match(/result__logo_([\S]*)/)[1];

    result.slides[index] = {
      title: title,
      description: description,
      link: link,
      logo: logo
    }
  });

  var template = $('#result-slider-template').html();
  var compiledTemplate = Template7.compile(template);
  var html = compiledTemplate(result);
  $('#result-slider-wrapper').append(html);



  /*
  * Инициализируем сладер
  */ 
  $('#result-slider').swiper({

    loop: true,
    pagination: '#result-slider .swiper-pagination',
    nextButton: '#result-slider .swiper-button-next',
    prevButton: '#result-slider .swiper-button-prev'
  });
}

if($('#result-slider').length) slider_init();