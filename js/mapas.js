function cargar_mapa(cor1,cor2) {
  var myLatLng = {lat: cor1, lng: cor2};
  var mapOptions = {
    zoom:18,
    center:myLatLng
  }

  var map = new google.maps.Map(document.getElementById('mapa'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
      

  });

  var popup = new google.maps.InfoWindow({
	content: 'Estamos qui: Optica Buena Vision'});
	popup.open(map, marker);

  
}
