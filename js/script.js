$(document).ready(function () {
  // Apple header
  $(".navbar-toggler-icon").on("click", function () {
    $("#navmenu").slideToggle();
    $(".navbar-toggler-icon").toggleClass("close-icon");
  });
  //footer toggler
  $(".footer-link-wrapper h3").on("click", function () {
    $(this).next("ul").slideToggle();
    $(this).toggleClass("expanded");
  });
  //back-to-top
  $(document).on("scroll", function () {
    if (window.scrollY > 100) {
      $("#tops").addClass("active");
    } else {
      $("#tops").removeClass("active");
    }
  });
});
