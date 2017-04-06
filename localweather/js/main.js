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

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            //units: "c",
            
            success: function(weather) {
                
                htmlLocation = weather.city + ", " + weather.region;
                htmlWeather = '<i class = "icon-' + weather.code + '"></i>' + " " + weather.temp + ' &deg' + 
                weather.units.temp;
                htmlWind = weather.currently;
                htmlWindchill = "Wind " + weather.wind.chill + "&deg ";
                htmlWindspeed =  weather.wind.direction + " " + Math.round(weather.wind.speed) + " " + weather.units.speed;
                
                $("#location").html(htmlLocation);
                $("#weather").html(htmlWeather);
                $("#conditions").html(htmlWind);
                $("#wind-chill").html(htmlWindchill);
                $("#wind-speed").html(htmlWindspeed)
            }
        })
    }
    function units() {
        if (C.onclick) {return "c";} else {return "f"};
    }
})

    
