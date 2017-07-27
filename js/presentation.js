
if ($('#presentation').length) {

  /* Enable Parallax Effect only in desktop */
  if (!Modernizr.touch) {

    $('.part-introduction-text').on('scrollSpy:enter', function() {
      if (!$(this).hasClass('active')) {
        $(this).addClass('active');
      }
    });
    $('.part-introduction-text').scrollSpy();
  }


  /* Detect the scrolling to bottom of the page */

  $(window).scroll(function() {
  	var scrollHeight = $(document).height();
  	var scrollPosition = $(window).height() + $(window).scrollTop();
  	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
  	   $('#presentation footer').addClass('active');
  	}
  });

}
