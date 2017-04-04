window.onload = function () { 
    if (navigator.geolocation){         
                //navigator.geolocation.getCurrentPosition(getGeolocationSuccess, getGeolcationFailed);
        navigator.geolocation.getCurrentPosition(function(position){
        	 loadWeather(position.coords.latitude + ',' + position.coords.longitude);
        })
    }

    function getGeolcationFailed () {
    	alert("Geocoder failed");
    };

    function loadWeather(location, woeid) {
    	$.simpleWeather({
    		location: location,
    		woeid: woeid,
    		unit: "f",
    		success: function(weather) {

    			htmlLocation = weather.city + ", " + weather.region;
    			htmlWeather = '<i class="wi wi-yahoo' + weather.code + '"></i>' + weather.temp + '&deg;' + 
    			weather.units.temp;
    			htmlWind = weather.currently;
    			

    			$("#location").html(htmlLocation);
    			$("#weather").html(htmlWeather);
    			$("#wind").html(htmlWind);
    		}
    	})
    }
};

    // function getGeolocationSuccess(position) {
    // 	var latitude = position.coords.latitude;
    //     var longitude = position.coords.longitude;

    //     var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 
    //     latitude + '%2C' + longitude + '&language=en';

    //     $.getJSON(geocoding).done(function(location){
    //     	$("#location").html(location.results[0].address_components[2].long_name + ", " + 
    //     		location.results[0].address_components[4].long_name)
    //     })
    //  };
