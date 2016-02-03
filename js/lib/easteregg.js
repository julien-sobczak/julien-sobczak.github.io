$(function () {
  $(document).easteregg({
    callback: function () {
      // Add a CSS class to trigger animations
      $('.easter-egg-party').addClass('active').addClass('go');
     
      var goBackToBlog = function() {
        $('.easter-egg-party').removeClass('active').removeClass('go');
        $(document).unbind('keydown', goBackToBlog);
        $(document).unbind('click', goBackToBlog);    
      }; 
      
      // Remove everything when any key is pressed
      $(document).on('keydown', goBackToBlog);
      $(document).on('click', goBackToBlog);        
    }                     
  });
});   