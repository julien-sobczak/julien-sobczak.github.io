/* We pollute the global namespace... Too bad but required to use Blogger Feed URL with JSONP */

function fillRecentPostsRead(data) {
  fillRecentPosts(data, 'imreadinit-introduction-text');
}

function fillRecentPostsWatch(data) {
  fillRecentPosts(data, 'imwatchinit-introduction-text');
}

function fillRecentPostsTell(data) {
  fillRecentPosts(data, 'imtellinit-introduction-text');
}

function fillRecentPostsInspect(data) {
  fillRecentPosts(data, 'iminspectinit-introduction-text');
}

function fillRecentPosts(data, id) {
   
   var feed = data.feed;       

   if (!feed.entry) {
     /* No post => nothing to do, the panel is already hidden */
     return;
   }
   
   var iCount = 0;
   var posts = [];
   
   for (var i = 0; i < feed.entry.length; i++) {
     var entry = feed.entry[i];
     var title = entry.title.$t;
     
     var href = null;
     for (var j = 0; j < entry.link.length; j++) {
       var link = entry.link[j];
       if (link.rel === 'alternate' && link.type === 'text/html') {
         href = link.href;
       }
     }
     
     posts.push({'title': title, 'href': href});
   }    
   

   if (posts.length > 0) {
     var fragment = document.createDocumentFragment();
     for (var i = 0; i < posts.length; i++) {
       var post = posts[i];
       var li = document.createElement('li');
       var a = document.createElement('a');
       var text = document.createTextNode(post.title);
       a.href = post.href;
       a.appendChild(text);
       li.appendChild(a);
       fragment.appendChild(li);
     }

     document.querySelector('#' + id + ' .latest-posts ul').appendChild(fragment);
     document.querySelector('#' + id + ' .latest-posts').style.display = 'block';
   }
}

$(function() {

  // Script to load recent posts with JSONP
  var script;
  
  // Number of posts by category
  var MAX_RESULTS = 4;
  
  /* We begin by hiding the panel while waiting for the data. */
  $('.latest-posts').hide();     
  
    
  /* I'm readin' I.T. */
  script = document.createElement('script');
  script.src = 'http://imlovinit-blog.blogspot.fr/feeds/posts/summary?orderby=published&max-results=' + MAX_RESULTS + '&alt=json-in-script&category=I%27m%20readin%27%20I.T.&callback=fillRecentPostsRead';
  document.body.appendChild(script);


  /* I'm watchin' I.T. */  
  script = document.createElement('script');
  script.src = 'http://imlovinit-blog.blogspot.fr/feeds/posts/summary?orderby=published&max-results=' + MAX_RESULTS + '&alt=json-in-script&category=I%27m%20watchin%27%20I.T.&callback=fillRecentPostsWatch';
  document.body.appendChild(script);
  
  
  /* I'm tellin' I.T. */
  script = document.createElement('script');
  script.src = 'http://imlovinit-blog.blogspot.fr/feeds/posts/summary?orderby=published&max-results=' + MAX_RESULTS + '&alt=json-in-script&category=I%27m%20tellin%27%20I.T.&callback=fillRecentPostsTell';
  document.body.appendChild(script);
  
  
  /* I'm inspectin' I.T. */
  script = document.createElement('script');
  script.src = 'http://imlovinit-blog.blogspot.fr/feeds/posts/summary?orderby=published&max-results=' + MAX_RESULTS + '&alt=json-in-script&category=I%27m%20inspectin%27%20I.T.&callback=fillRecentPostsInspect';
  document.body.appendChild(script);
  
});


