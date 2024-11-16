$(document).ready(function () {
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  $("#toggler").click(function () {
    $("#wrap").toggleClass("toggled");
    $(".black-layer").toggleClass("black-layer-toggled");
  });
  $(".black-layer").click(function () {
    $("#wrap").toggleClass("toggled")
    $(".black-layer").toggleClass("black-layer-toggled");

  })
  $(".search-icon").click(function () { 
    $(".search-inp").slideToggle( "fast" );
   })
});
