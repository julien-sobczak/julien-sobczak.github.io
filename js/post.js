$(function() {

  /* Tooltip use for example in comparison table. */
  $('.styled-tooltip').tooltip();


  $('.preview select').change(function() {
     /*
      * We want to follow the link in a new tab.
      * We should create an hidden link with target="_tab" and simulate the click.      
      */      
  
     var $this    = $(this),
         url      = $this.val();     
         fragment = document.createDocumentFragment(),
         link     = document.createElement("a");
         
     link.style.display = 'none';
     link.href          = url;
     link.target        = '_tab';
     link.id            = 'follow-link';
     
     fragment.appendChild(link);
     document.body.appendChild(fragment);
     link = document.getElementById('follow-link');
    
     link.click();
     
     document.body.removeChild(link);
  });

  // TODO voir pour déplacer la classe expanded sur le div #labels

  $('#show-labels').click(function() {
  
    var more = $(this).find('.more');
    
    if (more.hasClass('expanded')) {
      more.removeClass('expanded').addClass('unexpanded');
    } else {
      more.removeClass('unexpanded').addClass('expanded');
    }
     
    $('#labels .labels').toggle();
    
    return false;
  });
  
  
  
  /* Activate the sunshine effect on the main label list */
  $('#labels .label').hover(
    function() {
      $(this).addClass('hover');
    }, 
    function() {
      var label = $(this);
      window.setTimeout(function() {
        label.removeClass('hover');
      }, 500);
    }
  );
  
  
  /* Activate the effect on the post label list */
  $('.post-labels .label').hover(
    function() {
      $(this).addClass('hover');
      $(this).find('.label-icon').removeClass('label-black-icon').addClass('label-white-icon');
      $(this).find('.label-text').removeClass('label-black-text').addClass('label-white-text');                                                                                               
    }, 
    function() {
      $(this).removeClass('hover');
      $(this).find('.label-icon').removeClass('label-white-icon').addClass('label-black-icon');
      $(this).find('.label-text').removeClass('label-white-text').addClass('label-black-text');      
    }
  ); 
  
  
  /* Determine the label class from the text */
  $('#labels .label').each(function() {
    var iconText = $(this).find('.label-text').html();
    iconText = iconText.substring(0, iconText.indexOf('<'));
    var iconClass = iconText.replace(/\s/g, '-').replace(/[.]/g, '').replace(/\'/g, '').toLowerCase();
    $(this).find('.label-icon').addClass('label-' + iconClass + '-icon');
  });
  
});