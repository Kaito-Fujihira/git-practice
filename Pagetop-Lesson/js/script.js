$(function () {
  $("#back a").on("click", function (event) {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      5000
    );
    event.preventDefault();
  });
});
