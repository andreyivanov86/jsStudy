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
    		unit: "c",
    		
    		success: function(weather) {

    			//htmlWeathericon = ;
    			htmlLocation = weather.city + ", " + weather.region;
    			htmlWeather = '<h2><i class="icon-'+weather.code+'"></i>' + weather.temp + '&deg;' + 
    			weather.units.temp + '</h2>';
    			htmlWind = weather.currently;
    			htmlWindspeed = "Wind " + weather.wind.chill + "&deg " + " " + weather.wind.direction + " " + weather.wind.speed + " " +
    			weather.units.speed;

    			
    			$("#location").html(htmlLocation);
    			//$("#weather-icon").html(htmlWeathericon);
    			$("#weather").html(htmlWeather);
    			$("#wind").html(htmlWind);
    			$("#wind-speed").html(htmlWindspeed)
    		}
    	})
    }
};

    
