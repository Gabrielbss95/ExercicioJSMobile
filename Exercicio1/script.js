window.onload = function() {
    
    var map = document.getElementById("map");

    if ('geolocation' in navigator) {
        
        navigator.geolocation.getCurrentPosition( function (location) {
            document.getElementById("map").innerHTML = "Latitude:"+ location.coords.latitude+"<br> Longitude: " +location.coords.longitude;
            
        });    
            
        
    } else {
        document.body.innerHTML = "API de Geolocalização não suportada";
    }

}