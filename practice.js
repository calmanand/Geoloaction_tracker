if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById("lati").innerHTML=('Latitude: ' + position.coords.latitude);
    document.getElementById("longi").innerHTML=('Longitude: ' + position.coords.longitude);
   // console.log('Longitude: ' + position.coords.longitude);
  });
} else {
  console.log('Geolocation is not supported by this browser.');
}
