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

  function pegarCoordenadasDoIp() {

    var lat_padrao = -8.055393255494286;
    var long_padrao = -34.88415317276026;

    $.ajax({
      url: "http://www.geoplugin.net/json.gp",
      type: "GET",
      dataType: "json",
      success: function (data) {
        
        if (data.geoplugin_latitude && data.geoplugin_longitude) {
          pegarLocalUsuario(data.geoplugin_latitude, data.geoplugin_longitude);
        } else {
          pegarLocalUsuario(lat_padrao, long_padrao);
        }

      },
      error: function () {

        console.log("Erro");
        pegarLocalUsuario(lat_padrao, long_padrao);
      },
    });
  }

  pegarCoordenadasDoIp();

});
