$(function () {

  var accuweatherAPIKey = "yZxRJ6ARJwGbAkussNJHylGLNE0ooE9G";  

  $.ajax({
        url: "http://dataservice.accuweather.com/currentconditions/v1/45881?apikey=" + accuweatherAPIKey + "&language=pt-br",
        type: "GET",
        dataType: "json",
        success: function (data) {
        console.log(data);
        },
        error: function () {
        console.log("Erro");
        },
  });
});
