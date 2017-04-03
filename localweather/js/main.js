window.onload = function () { 
    if (navigator.geolocation){         
        navigator.geolocation.getCurrentPosition(getGeolocationSuccess, getGeolcationFailed);
    }
    


    function getGeolocationSuccess(position) {
    	var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        var geocoding = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + 
        latitude + '%2C' + longitude + '&language=en';

        $.getJSON(geocoding).done(function(location){
        	$("#location").html(location.results[0].address_components[2].long_name + ", " + 
        		location.results[0].address_components[4].long_name)
        })

        // $("#location").html(latitude +"\n<br>"+ longitude);
    };

    function getGeolcationFailed () {
    	alert("Geocoder failed");
    };



};
