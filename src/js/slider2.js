/*
 * Формируем массив данных для слайдера
 */
var youget = {};
youget.slides = [];

$('.youget__item').each(function(index, el) {
  var title =       $(el).find('.youget__title').text();
  var logo =        $(el)
                      .find('.youget__inner')
                      .attr('class')
                      .match(/youget__inner_([\S]*)/)[1];

  youget.slides[index] = {
    title: title,
    description: description,
    link: link,
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
  pagination: '.swiper-pagination',
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev'
});
