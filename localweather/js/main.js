$(document).ready(function () { 
    // $.getJSON("http://ip-api.com/json", function(data){
               
    //     if ("geolocation" in navigator){
    //     navigator.geolocation.getCurrentPosition (function(data){
    //         var lat = data.coords.latitude;
    //         var lon = data.coords.longitude;
    //         loadWeather(lat + "," + lon);
    //         })
    //     }
    // })

    if ("geolocation" in navigator){           
        navigator.geolocation.getCurrentPosition(function(position){
             loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        })
    }

    $("#C").click(function(){
        changeUnits("C");
    })

   $("#F").click(function(){
        changeUnits("F");
    })

    function changeUnits(unit) {
        var htmlString = "";
        switch (unit) {
            case "F":
                htmlString = '<i class = "icon-' + globalWeather.code + '"></i>' + " " + globalWeather.temp + ' &deg' + globalWeather.units.temp.toUpperCase();
                break;
            case "C":
                htmlString = '<i class = "icon-' + globalWeather.code + '"></i>' + " " + globalWeather.alt.temp + ' &deg' + globalWeather.alt.unit.toUpperCase();
                break;
        }
        $("#weather").html(htmlString);
    }

    var globalWeather;

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            units: "c",
            
            success: function(weather) {
                globalWeather = weather;
                console.log(weather);
                //Current Weather
                htmlLocation = weather.city + ", " + weather.region;
                htmlWeather = '<i class = "icon-' + weather.code + '"></i>' + " " + weather.temp + ' &deg' + 
                weather.units.temp;
                htmlWind = weather.currently;
                htmlWindchill = "Wind " + weather.wind.chill + "&deg ";
                htmlWindspeed =  weather.wind.direction + " " + Math.round(weather.wind.speed) + " " + weather.units.speed;
                //display current weather
                $("#location").html(htmlLocation);
                $("#weather").html(htmlWeather);
                $("#conditions").html(htmlWind);
                $("#wind-chill").html(htmlWindchill);
                $("#wind-speed").html(htmlWindspeed)

                //Forecast weather
                htmlForecast1 = weather.forecast[1].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[1].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[1].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[1].text;
                htmlForecast2 = weather.forecast[2].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[2].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[2].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[2].text;
                htmlForecast3 = weather.forecast[3].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[3].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[3].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[3].text;
                htmlForecast4 = weather.forecast[4].day + "<br>" + '<i class = "forecast-icon icon-' + weather.code + '"></i>' + "<br>"
                + "High " + weather.forecast[4].high + "&deg "+ weather.units.temp + "<br>" + "Low " + weather.forecast[4].low + 
                "&deg "+ weather.units.temp + "<br>" + weather.forecast[4].text;    
                //Display Forecast
                $("#day1").html(htmlForecast1);
                $("#day2").html(htmlForecast2);
                $("#day3").html(htmlForecast3);
                $("#day4").html(htmlForecast4);

                if (weather.temp <= 35){ 
                    $("#body").css("background-color", "#1E90FF"); 
                  } else if (weather.temp > 35 && weather.temp <= 50) {
                    $("#body").css("background-color", "#1EFF80");
                  } else if (weather.temp > 50 && weather.temp <= 80) {
                    $("#body").css("background-color", "#FFC50A");
                  } else if (weather.temp > 80) {
                    $("#body").css("background-color", "#FF6700");
                  }  
            }
        })
    }
  
})

    
