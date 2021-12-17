$(window).on('load', function () {
    $('body').addClass('opening');

    setTimeout(function () {
        $('.download-pdf').addClass('download-pdf--active');
        // $('.description').addClass('description--active');
    }, 3000);
    
    if ($(".splitAnim").length) {
        $(".splitAnim").each(function () {
          let $split_text = $(this);
          $split_text.html($split_text.html().replace("&amp;", "&").replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
          gsap.set($split_text.children(), {
            display: "inline-block",
            opacity: 0,
            y: 50,
            transformOrigin: "50% 50%",
          });
        });
    }
    if ($(".splitAnim").length) {
        inView('.splitAnim')
          .on('enter', function (el) {
            if (!el.classList.contains("sec_active")) {
              el.classList.add("sec_active");
              gsap.to($(el).children(), 0.25, {
                stagger: 0.04,
                y: 0,
                opacity: 1,
                delay: 0.8,
              });
            }
        })
      }
});