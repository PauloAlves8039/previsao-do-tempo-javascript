$(function () {
  var accuweatherAPIKey = "yZxRJ6ARJwGbAkussNJHylGLNE0ooE9G";

  function pegarTempoAtual(localCode) {
    $.ajax({
      url: "http://dataservice.accuweather.com/currentconditions/v1/" + localCode + "?apikey=" + accuweatherAPIKey + "&language=pt-br",
      type: "GET",
      dataType: "json",
      success: function (data) {
        console.log(data);
      },
      error: function () {
        console.log("Erro");
      },
    });
  }

  function pegarLocalUsuario(lat, long) {
    $.ajax({
      url: "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=" + accuweatherAPIKey + "&q=" + lat + "%2C" + long + "&language=pt-br",
      type: "GET",
      dataType: "json",
      success: function (data) {
        var localCode = data.Key;
        pegarTempoAtual(localCode);
      },
      error: function () {
        console.log("Erro");
      },
    });
  }

  pegarLocalUsuario(-8.055393255494286, -34.88415317276026);

});
