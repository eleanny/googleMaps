$(document).ready(function(){

        var url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
		var key_clima= 'b8ad8801f4386f80248f761420be9cfa';
		

		var coord = {
	        santiago: {
	        	lat: -33.4488897,
	        	lng: -70.6692655
	        },
	        concepcion: {
	        	lat: -36.8282,
	        	lng: -73.0514
	        },
	        arica: {
	        	lat: -18.4833,
	        	lng: -70.3333
	        }
         };

         var icons = {
         	'clear-day': 'clear-day.png',
         	'clear-night': 'clear-nigth.jpg',
         	'rain': 'rain.jpg',
         	'snow': 'snow.jpg',
         	'sleet': 'sleet.png',
         	'wind': '',
         	'fog': 'fog.png',
         	'cloudy': 'cloudy.png',
         	'partly-cloudy-day': 'partly-cloudy-day.jpg',
         	'partly-cloudy-night': 'partly-cloudy-nigth.png',
         	'hail': '',
         	'thunderstorm': ''
         };
         function initMap(city) {
  	         var map;
  	         var latitud = coord[city].lat;
  	         var longitud = coord[city].lng;
             map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: latitud , lng: longitud},
             zoom: 8
            });
             var marker = new google.maps.Marker({

             position: {lat: latitud, lng: longitud},
             map: map
            });
        }
         $.ajax({
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyD9g9f9fsMPAFdFx0XGUfhmsBWI0gYGK4U&callback=initMap',
            method: 'GET'
         }).then(function(){
         	initMap('santiago');
         } );
           
 
         
   $('.selector__ciudades').change(function(e){
      
      $.ajax({
	      url: url + key_clima +'/' + coord[$(this).val()].lat+','+coord[$(this).val()].lng+'?&lang=es&units=auto',
          method: 'GET'
	    }).then(function(response){
		$('#resumen').html(parseInt(response.currently.temperature)+'°'+response.currently.summary);
		console.log(icons[response.currently.icon]);
		$('.imagen').attr('src','images/'+icons[response.currently.icon]);

	    });
        initMap($(this).val());
        
   });

});
