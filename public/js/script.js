$(document).ready(function(){
    updateHeights();
    $(".button-collapse").sideNav();
    $('.slider').slider();
});

$(window).resize(function() {
    updateHeights();
})

function updateHeights() {
  var highestBox = 0;

  // Select and loop the container element of the elements you want to equalise
  $('.equalheight').each(function(){
    // If this box is higher than the cached highest then store it
    if($(this).height() > highestBox) {
      highestBox = $(this).height();
    }
  });

  $('.equalheight').each(function(){
    $(this).height(highestBox);
  });
}
