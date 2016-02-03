
if ($('#presentation').length) {


  /* Enable Parallax Effect only in desktop */
  if (!Modernizr.touch) {   
  
    // init controller
    var controller = new ScrollMagic({globalSceneOptions: {triggerHook: "onEnter", duration: $(window).height()}});
    
    // build scenes
    new ScrollScene({
                triggerElement: "#imreadinit-introduction-picture",
                offset: 250,
                duration: $(window).height()})
    				.setTween(TweenMax.from("#imreadinit-introduction-picture > div", 1, {top: "-100%", ease: Linear.easeNone}))
    				.addTo(controller);
    
    new ScrollScene({
                triggerElement: "#imwatchinit-introduction-picture",
                offset: 250,
                duration: $(window).height()})
    				.setTween(TweenMax.from("#imwatchinit-introduction-picture > div", 1, {top: "-100%", ease: Linear.easeNone}))
    				.addTo(controller);
    
    new ScrollScene({
                triggerElement: "#imtellinit-introduction-picture",
                offset: 250,
                duration: $(window).height()})
    				.setTween(TweenMax.from("#imtellinit-introduction-picture > div", 1, {top: "-100%", ease: Linear.easeNone}))
    				.addTo(controller);
            
    new ScrollScene({
                triggerElement: "#iminspectinit-introduction-picture",
                offset: 250,
                duration: $(window).height()})
    				.setTween(TweenMax.from("#iminspectinit-introduction-picture > div", 1, {top: "-100%", ease: Linear.easeNone}))
    				.addTo(controller);

    
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