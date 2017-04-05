window.onload = function () { 
    if (navigator.geolocation){         
                //navigator.geolocation.getCurrentPosition(getGeolocationSuccess, getGeolcationFailed);
        navigator.geolocation.getCurrentPosition(function(position){
        	 loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        })
    }

    // function getGeolcationFailed () {
    // 	alert("Geocoder failed");
    // };

    function loadWeather(location, woeid) {
    	$.simpleWeather({
    		location: location,
    		woeid: woeid,
    		unit: "f",
    		
    		success: function(weather) {

    			//htmlWeathericon = ;
    			htmlLocation = weather.city + ", " + weather.region;
    			htmlWeather = '<h2><i class="icon-'+weather.code+'"></i>' + " " + weather.temp + '&deg;' + 
    			weather.units.temp + '</h2>';
    			htmlWind = weather.currently;
    			htmlWindchill = "Wind " + weather.wind.chill + "&deg ";
                htmlWindspeed =  weather.wind.direction + " " + Math.round(weather.wind.speed) + " " + weather.units.speed;

    			
    			$("#location").html(htmlLocation);
    			//$("#weather-icon").html(htmlWeathericon);
    			$("#weather").html(htmlWeather);
    			$("#conditions").html(htmlWind);
                $("#wind-chill").html(htmlWindchill);
    			$("#wind-speed").html(htmlWindspeed)
    		}
    	})
    }
};

    
