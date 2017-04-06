$(document).ready(function () { 
    // $.getJSON("http://ip-api.com/json", function(data){
    //     var lat = data.lat;
    //     var lon = data.lon;
    //     navigator.geolocation.getCurrentPosition (function(position){
    //         console.log(lat);
    //     })
    // })

    if (navigator.geolocation){           
        navigator.geolocation.getCurrentPosition(function(position){
             loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        })
    }

    function loadWeather(location, woeid) {
        $.simpleWeather({
            location: location,
            woeid: woeid,
            unit: "f",
            
            success: function(weather) {

                
                htmlLocation = weather.city + ", " + weather.region;
                htmlWeather = '<i class = "icon-' + weather.code + '"></i>' + weather.temp + '&deg' + 
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
})

    
