
if ($('#presentation').length) {


  /* Enable Parallax Effect only in desktop */
  if (!Modernizr.touch) {

      /*
        TODO determine if parallax effect is such a good idea...

    // init controller
    //var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()}});
    var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

    // build scenes
      console.log(new ScrollMagic.Scene({ triggerElement: "#imreadinit-introduction-picture" }));

    new ScrollMagic.Scene({ triggerElement: "#imreadinit-introduction-picture" })
        .setTween("#imreadinit-introduction-picture > div", {y: "-80%", ease: Linear.easeNone})
        .addTo(controller);
    
    new ScrollMagic.Scene({ triggerElement: "#imwatchinit-introduction-picture" })
        .setTween("#imwatchinit-introduction-picture > div", {y: "-80%", ease: Linear.easeNone})
        .addTo(controller);
    
    new ScrollMagic.Scene({ triggerElement: "#imtellinit-introduction-picture" })
        .setTween("#imtellinit-introduction-picture > div", {y: "-80%", ease: Linear.easeNone})
        .addTo(controller);
            
    new ScrollMagic.Scene({ triggerElement: "#iminspectinit-introduction-picture" })
        .setTween("#iminspectinit-introduction-picture > div", {y: "-80%", ease: Linear.easeNone})
        .addTo(controller);

       */


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