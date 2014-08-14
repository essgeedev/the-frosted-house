//= require        vendor/slick/slick.min
//= require_self

function initializeSlick() {
  $('.featured-images').slick({
    autoplay:      true,
    autoplaySpeed: 5000,
    dots:          true,
    speed:         1000,
  });
};
