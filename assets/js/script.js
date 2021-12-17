$(window).on('load', function () {
    $('body').addClass('opening');

    setTimeout(function () {
        $('.download-pdf').addClass('download-pdf--active');
        $('.description').addClass('description--active');
    }, 1000);

    setTimeout(function () {
      $('.legend svg').fadeIn();
      var fontSize = 72;
      if($(window).width() < 901) {
        fontSize = 32;
      }
      var vara = new Vara([
        '.legend',
        'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Parisienne/Parisienne.json'
      ])
    }, 2500);
});