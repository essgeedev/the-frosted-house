//= require         vendor/jquery-1.11.1.min
//= require         vendor/foundation
//= require         vendor/foundation/modules
//= require         vendor/slick
//= require_self

$(document).foundation();

$(document).ready(function() {
  console.log( "ready!" );
  initializeSlick();
});
