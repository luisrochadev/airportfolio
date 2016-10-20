$(document).ready(function (){
  // sidenav trigger
  $(".button-collapse").sideNav();   
  // usability lightbox hover
  $(function() {
  $('.responsive-img').hover(function() { 
      $(this).css("opacity", "0.5");
      }, function(){
      $(this).css("opacity",   "1");
  });
  });
  // masonry layout options     
  var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  
});