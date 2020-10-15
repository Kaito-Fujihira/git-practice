$(".theTarget").skippr({
  transition: "fade",
  speed: 3000,
  easing: "easeOutQuart",
  navType: "bubble",
  childrenElementType: "div",
  arrows: true,
  autoPlay: true,
  autoPlayDuration: 5000,
  keyboardOnAlways: true,
  hidePrevious: false,
});

$(function(){
  $(".index-btn").click(function(){
    $(".active").removeClass("active");

    var clickedIndex = $(".index-btn").index($(this));

    $(".slide").eq(clickedIndex).addClass("active");
  });
});