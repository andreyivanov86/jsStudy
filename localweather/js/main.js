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

    			
    			htmlLocation = weather.city + ", " + weather.region;
    			htmlWeather = '<h2 class = "icon-5"></h2>' + weather.code + " " + weather.temp + '&deg' + 
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
};

    
