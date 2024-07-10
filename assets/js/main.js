// add items to cart button js ( using this code in every product card where add btton )
$(document).ready(function () {
  $(".megaclicker").on("click", function () {
    $(this).children(".hidden").removeClass("hidden");
  });
});
// creating a dummy division for header bubbling ,
// code used in homepage, category page, singleProduct page,
function updateNavbarHeight() {
  var navbarHeight = $("header").height();
  $(".tem-box").height(navbarHeight);
  $(".sticked-top").css("top", navbarHeight + "px");
  $(".sticked-top").css("height", "calc(100vh - " + navbarHeight + "px)");
  // For single product
  $(".singleproduct-sticked").css("top", navbarHeight + "px");
}
// Initial update of heights
$(document).ready(function () {
  updateNavbarHeight();
});
$(window).resize(function () {
  updateNavbarHeight();
});
