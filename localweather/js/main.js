window.onload = function () { 
    if ("geolocation" in navigator){ 
        
        navigator.geolocation.getCurrentPosition(function(position){
                $("#location").html(position.coords.latitude+"\n<br>"+ position.coords.longitude);
            });
    }else{
        console.log("Browser doesn't support geolocation!");
    }
};
