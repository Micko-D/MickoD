var initCarousel = function() {
  $(".center").slick({
    infinite: true,
    centerMode: true,
    centerPadding: '23%', // Adjust to control side image visibility
    slidesToShow: 1,
  });
};

$('.grap-samples').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// Open the modal when the trigger is clicked
$('.grap-samples').on('click', function() {
  $('#myModal').css('display', 'block');
  if (!$('.center').hasClass('slick-initialized')) {
    initCarousel();
  }
});

// Close the modal when the close button is clicked
$('.close').on('click', function() {
  $('#myModal').css('display', 'none');
});

// Close the modal when clicking outside the modal content
$(window).on('click', function(event) {
  if ($(event.target).is('#myModal')) {
    $('#myModal').css('display', 'none');
  }
});