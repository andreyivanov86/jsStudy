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
                htmlLocation = weather.city + ", " + weather.region;
                htmlWeather = '<i class = "icon-' + weather.code + '"></i>' + " " + weather.temp + ' &deg' + 
                weather.units.temp;
                htmlWind = weather.currently;
                htmlWindchill = "Wind " + weather.wind.chill + "&deg ";
                htmlWindspeed =  weather.wind.direction + " " + Math.round(weather.wind.speed) + " " + weather.units.speed;
                //htmlForcast = weather.forcast[1];
                
                console.log(weather);
                

                $("#location").html(htmlLocation);
                $("#weather").html(htmlWeather);
                $("#conditions").html(htmlWind);
                $("#wind-chill").html(htmlWindchill);
                $("#wind-speed").html(htmlWindspeed)

                //$("#day1").html(htmlForcast);

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

    
