      
      
var postList = document.getElementById('post-list');
if (postList) {
  new AnimOnScroll(postList, {
	  minDuration: 0.4,
	  maxDuration: 0.7,
	  viewportFactor: 0.4
  });
}