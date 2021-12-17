$(window).on('load', function () {
    $('body').addClass('opening');

    setTimeout(function () {
        $('.download-pdf').addClass('download-pdf--active');
        $('.description').addClass('description--active');
    }, 3000);

    setTimeout(function () {
      $('.legend svg').fadeIn();
    }, 3500);
});