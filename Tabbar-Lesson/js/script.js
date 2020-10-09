$('#tab-contents .tab[id != "tab1"]').hide();

$("#tab-menu a").on("click", function (event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});

API_KEY = "f449f7788f99c7d49932659e21661b18";
$(function () {
  $("#btn").on("click", function () {
    $.ajax({
      url:
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        $("#cityname").val() +
        "&units=metric&appid=" +
        API_KEY,
      dataType: "jsonp",
    })
      .done(function (data) {
        $("#place").text(data.name);
        // 最高気温
        $("#temp_max").text(data.main.temp_max);
        // 最低気温
        $("#temp_min").text(data.main.temp_min);
        //湿度
        $("#humidity").text(data.main.humidity);
        //風速
        $("#speed").text(data.wind.speed);
        // 天気
        $("#weather").text(data.weather[0].main);
        // 天気アイコン
        $("img").attr(
          "src",
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        );
        $("img").attr("alt", data.weather[0].main);
      })
      .fail(function (data) {
        alert("通信に失敗しました。");
      });
  });
});
