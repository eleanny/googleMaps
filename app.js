$(document).ready(function(){

        var url='https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';
		var key_clima= 'b8ad8801f4386f80248f761420be9cfa';
		

		var coord = {
	        santiago:'-33.4488897,-70.6692655',
	        concepcion: '-36.8282,-73.0514'

         };
        var  santiago={
               lat: -33.4488897,
               lng: -70.6692655
            };
        var  concepcion={
               lat: -36.8282,
               lng: -73.0514
            };
         function initMap(data) {
  	         var map;
  	         var a = Object.create(data);
  	         var latitud = a.lat;;
  	         var longitud = a.lng;
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
         	initMap(santiago);
         } );
           
 
         
   $('.selector__ciudades').change(function(e){
      
      $.ajax({
	      url: url + key_clima +'/' + coord[$(this).val()]+'?&lang=es&units=auto',
          method: 'GET'
	    }).then(function(response){
		$('#resumen').html(parseInt(response.currently.temperature)+'°'+response.currently.summary);
		if(response.currently.summary=='Mayormente Nublado'){
         $('.imagen').attr('src','data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIuMDAyIDUxMi4wMDIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDIgNTEyLjAwMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxwYXRoIHN0eWxlPSJmaWxsOiM5RkRFRjc7IiBkPSJNMTU4LjI2NCwxODcuNzc3aDM2Ljk2NGMxMy44MDctMjUuMzMzLDM3LjQwNy00NC41NCw2NS43My01Mi41MjYgIGMtNS42OTgtMTMuODM1LTE5LjMwNS0yMy41NzUtMzUuMTkxLTIzLjU3NWMtMy45NywwLTcuNzk3LDAuNjEyLTExLjM5MywxLjczOGMwLjAxOS0wLjU3OCwwLjA0NC0xLjE1NSwwLjA0NC0xLjczOCAgYzAtMjguMjU5LTIyLjkxMy01MS4xNzEtNTEuMTc0LTUxLjE3MWMtMjQuMzczLDAtNDQuNzQ5LDE3LjAzOC00OS45MDMsMzkuODVjLTMuMDYxLTEuMDItNi4zMjgtMS41NzktOS43MjktMS41NzkgIGMtMTAuNDY5LDAtMTkuNzEsNS4yNDItMjUuMjUzLDEzLjI0MWMtMy4wOTItMC43OTctNi4zNC0xLjIzLTkuNjgyLTEuMjNjLTIxLjI2LDAtMzguNDkyLDE3LjIzNC0zOC40OTIsMzguNDk0ICBjMCwyMS4yNTYsMTcuMjMzLDM4LjQ5NCwzOC40OTIsMzguNDk0aDYxLjU0MiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQkVFQUZDOyIgZD0iTTM2OS41NzgsMTY1LjU1N2MtMTkuNzc5LTIxLjE1NS00Ny45MzUtMzQuMzc5LTc5LjE3OS0zNC4zNzkgIGMtNTEuNjA5LDAtOTQuNzYyLDM2LjA4Ny0xMDUuNjc4LDg0LjM5NmMtNi40NzctMi4xNi0xMy4zOTYtMy4zNDktMjAuNi0zLjM0OWMtMjIuMTcyLDAtNDEuNzM5LDExLjEwMi01My40NzUsMjguMDQ0ICBjLTYuNTUxLTEuNjkyLTEzLjQyLTIuNjAxLTIwLjUwMS0yLjYwMWMtNDUuMDIsMC04MS41MTUsMzYuNDk1LTgxLjUxNSw4MS41MTVjMCw0NS4wMTgsMzYuNDk1LDgxLjUxNyw4MS41MTUsODEuNTE3aDg5Ljg3NSAgYzAuMTktMjcuNzA5LDIyLjY5OS01MC4xMTEsNTAuNDQ2LTUwLjExMWM1LjI2MiwwLDEwLjMzOCwwLjgwNywxNS4xMDcsMi4zMDJjLTAuMDI0LTAuNzY0LTAuMDU4LTEuNTI4LTAuMDU4LTIuMzAyICBjMC0zNy40OCwzMC4zODMtNjcuODYzLDY3Ljg2MS02Ny44NjNjMzIuMzE2LDAsNTkuMzQxLDIyLjU5OCw2Ni4xNzYsNTIuODQ4YzQuMDU1LTEuMzU0LDguMzg3LTIuMDk3LDEyLjg5Ny0yLjA5NyAgYzEzLjg4NCwwLDI2LjEzOCw2Ljk1MSwzMy40ODYsMTcuNTYzYzQuMTAyLTEuMDYxLDguNDA0LTEuNjMxLDEyLjgzOC0xLjYzMWMxOC41ODMsMCwzNC44NDEsOS45MzIsNDMuNzY5LDI0Ljc3MyAgYzEyLjk0My0xNC4yOTUsMjAuODMtMzMuMjU0LDIwLjgzLTU0LjA1NWMwLTQ0LjUwMy0zNi4wNzQtODAuNTc0LTgwLjU3NC04MC41NzRjLTguNDAzLDAtMTYuNTA1LDEuMjg4LTI0LjEyLDMuNjc1ICBjMC4wMzktMS4yMjEsMC4wOTItMi40NDQsMC4wOTItMy42NzVjMC0xOC4xOTctNC40ODUtMzUuMzQ3LTEyLjQxMS01MC40MDUiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U0RjJGOTsiIGQ9Ik0zODEuNTI3LDQ1MS40OTZIMjMwLjQ2OGMtMjcuODYzLDAtNTAuNDUxLTIyLjU4OC01MC40NTEtNTAuNDVjMC0yNy44NywyMi41ODktNTAuNDU2LDUwLjQ1MS01MC40NTYgIGM1LjI2MiwwLDEwLjMzOCwwLjgwNywxNS4xMDcsMi4zMDJjLTAuMDI0LTAuNzY0LTAuMDU4LTEuNTI4LTAuMDU4LTIuMzAyYzAtMzcuNDgsMzAuMzgzLTY3Ljg2Myw2Ny44NjEtNjcuODYzICBjMzIuMzE2LDAsNTkuMzQxLDIyLjU5OCw2Ni4xNzYsNTIuODQ4YzQuMDU1LTEuMzU0LDguMzg3LTIuMDk3LDEyLjg5Ny0yLjA5N2MxMy44ODQsMCwyNi4xMzgsNi45NTEsMzMuNDg2LDE3LjU2MyAgYzQuMTAyLTEuMDYxLDguNDA0LTEuNjMxLDEyLjgzOC0xLjYzMWMyOC4xOTIsMCw1MS4wNDYsMjIuODUzLDUxLjA0Niw1MS4wNDNzLTIyLjg1NCw1MS4wNDQtNTEuMDQ2LDUxLjA0NGgtMjkuMjEyIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNEN0VERjk7IiBkPSJNMjg0LjI3NSwzMzYuNTk5YzAtMTguMjEyLDMuODY1LTM1LjUxOSwxMC44MDktNTEuMTU3Yy0yOC41ODksNy45ODktNDkuNTY3LDM0LjIxLTQ5LjU2Nyw2NS4zNDggIGMwLDAuNzczLDAuMDMzLDEuNTM4LDAuMDU4LDIuMzAyYy00Ljc2OS0xLjQ5NS05Ljg0NS0yLjMwMi0xNS4xMDctMi4zMDJjLTI3Ljg2MywwLTUwLjQ1MSwyMi41ODYtNTAuNDUxLDUwLjQ1NiAgYzAsMjcuODYzLDIyLjU4OSw1MC40NSw1MC40NTEsNTAuNDVoMTI4LjIwN0MzMTQuODEyLDQzMS45MzQsMjg0LjI3NSwzODcuODMzLDI4NC4yNzUsMzM2LjU5OXoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0FFRTRGRjsiIGQ9Ik05NS4wNiwyNDAuMTc4Yy0xLjYyNi0wLjA5OC0zLjI2My0wLjE1Mi00LjkxMy0wLjE1MmMtNDUuMDIsMC04MS41MTUsMzYuNDk1LTgxLjUxNSw4MS41MTUgIGMwLDQ1LjAxOCwzNi40OTUsODEuNTE3LDgxLjUxNSw4MS41MTdoODkuODc1YzAuMDYtOC42OTUsMi4zMTgtMTYuODY2LDYuMjQ2LTIzLjk4N0MxNDEuODMsMzQ0Ljg3MywxMDkuMDg4LDI5Ni4yMzgsOTUuMDYsMjQwLjE3OHogICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojODNENEVEOyIgZD0iTTg3LjQ5NSwxNzguNjExYzAtMjYuNDQsNC4wNjYtNTEuOTI3LDExLjU5My03NS44ODFjLTguMTE5LDEuNDk5LTE1LjExOSw2LjE5MS0xOS42NDcsMTIuNzI3ICBjLTMuMDkyLTAuNzk3LTYuMzQtMS4yMy05LjY4Mi0xLjIzYy0yMS4yNiwwLTM4LjQ5MiwxNy4yMzQtMzguNDkyLDM4LjQ5NGMwLDIxLjI1NiwxNy4yMzIsMzguNDk0LDM4LjQ5MiwzOC40OTRoMTguMDQ3ICBDODcuNjAzLDE4Ny4wMzgsODcuNDk1LDE4Mi44MzcsODcuNDk1LDE3OC42MTF6Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNNTEyLjAwMiwzMjAuMTI3YzAtNDkuMTg1LTQwLjAxNy04OS4yMDItODkuMjAyLTg5LjIwMmMtNS4yNjQsMC0xMC40OSwwLjQ1OC0xNS42MjcsMS4zNjggIGMtMS4wMjctMTYuNDY1LTUuNTMxLTMyLjYzNC0xMy4xNzctNDcuMTYzYy0yLjIxOS00LjIxNy03LjQzNi01LjgzOC0xMS42NTQtMy42MTdjLTQuMjE3LDIuMjItNS44MzYsNy40MzgtMy42MTcsMTEuNjU0ICBjNy40NywxNC4xOTEsMTEuNDE3LDMwLjIzMiwxMS40MTcsNDYuMzg4YzAsMC44OC0wLjAzMSwxLjc1Ny0wLjA2MSwyLjYyOWwtMC4wMjYsMC43N2MtMC4wOSwyLjc5MywxLjE4MSw1LjQ1NiwzLjQwNSw3LjE0NiAgYzIuMjI2LDEuNjg5LDUuMTI4LDIuMTk5LDcuNzk5LDEuMzYyYzYuOTQ1LTIuMTc2LDE0LjE5Mi0zLjI4LDIxLjU0LTMuMjhjMzkuNjcxLDAsNzEuOTQ2LDMyLjI3NSw3MS45NDYsNzEuOTQ2ICBjMCwxNC4zMjEtNC4yMzksMjguMTY4LTEyLjA4OCwzOS45MmMtMC4zMDMtMC4zMjctMC42MjItMC42MzYtMC45MzMtMC45NTdjLTAuMzM5LTAuMzUyLTAuNjc0LTAuNzA0LTEuMDItMS4wNDcgIGMtMC4yMzUtMC4yMzEtMC40NzYtMC40NTQtMC43MTQtMC42ODFjLTAuNTQxLTAuNTE4LTEuMDg5LTEuMDI4LTEuNjQ5LTEuNTI2Yy0wLjA5MS0wLjA4MS0wLjE4My0wLjE1OS0wLjI3NS0wLjIzOCAgYy0xMC41MDYtOS4yMTMtMjQuMjUzLTE0LjgxNy0zOS4yOTEtMTQuODE3Yy0zLjE0LDAtNi4yNzEsMC4yNDctOS4zNjEsMC43MzRjLTkuMzExLTEwLjUyOC0yMi43NDYtMTYuNjY3LTM2Ljk2My0xNi42NjcgIGMtMi4zMDksMC00LjYwNiwwLjE2MS02Ljg4MSwwLjQ4MWMtNC42NzgtMTMuMzI2LTEzLjA0OC0yNS4yNjctMjQuMTItMzQuMjI5Yy0xMy41NDQtMTAuOTY0LTMwLjYxNi0xNy4wMDMtNDguMDcxLTE3LjAwMyAgYy0zOS4zOTUsMC03MS45MywyOS45MzctNzYuMDQ5LDY4LjI1OGMtMi4yNjktMC4yNjItNC41Ni0wLjM5NS02Ljg2MS0wLjM5NWMtMC45NjksMC0xLjkzMSwwLjAyNy0yLjg4NywwLjA3MyAgYy0wLjM2NywwLjAxNy0wLjcyOSwwLjA1Mi0xLjA5NCwwLjA3NmMtMC41OCwwLjAzOS0xLjE2MSwwLjA3Ny0xLjczNiwwLjEzM2MtMC40NjQsMC4wNDUtMC45MjMsMC4xMDUtMS4zODQsMC4xNjEgIGMtMC40NjIsMC4wNTYtMC45MjMsMC4xMS0xLjM4MiwwLjE3NmMtMC41MjcsMC4wNzctMS4wNSwwLjE2Ni0xLjU3NCwwLjI1NmMtMC4zNzIsMC4wNjUtMC43NDUsMC4xMjgtMS4xMTUsMC4yICBjLTAuNTg2LDAuMTEyLTEuMTY4LDAuMjM3LTEuNzQ3LDAuMzY3Yy0wLjI4NCwwLjA2NC0wLjU2NywwLjEyOC0wLjg0OSwwLjE5NmMtMC42NTEsMC4xNTYtMS4yOTcsMC4zMjMtMS45NCwwLjUgIGMtMC4xNzksMC4wNS0wLjM1NywwLjEwMS0wLjUzNSwwLjE1MmMtMC43MzIsMC4yMS0xLjQ1OSwwLjQzLTIuMTgsMC42NjhjLTAuMDQsMC4wMTMtMC4wOCwwLjAyNy0wLjEyLDAuMDQxICBjLTIwLjc3LDYuODg1LTM2LjQ3MywyNC45OTMtMzkuODU3LDQ3LjExM0g5MC4xNDZjLTQwLjE5LDAtNzIuODg3LTMyLjY5OC03Mi44ODctNzIuODg5YzAtNDAuMTksMzIuNjk3LTcyLjg4Nyw3Mi44ODctNzIuODg3ICBjNi4xOTQsMCwxMi4zNjUsMC43ODMsMTguMzQzLDIuMzI3YzMuNDk4LDAuODk5LDcuMTkzLTAuNDY5LDkuMjUxLTMuNDQxYzEwLjU1Mi0xNS4yMzQsMjcuODkxLTI0LjMyOSw0Ni4zODItMjQuMzI5ICBjNi4wNzYsMCwxMi4wODgsMC45NzcsMTcuODY5LDIuOTA2YzIuMzEyLDAuNzczLDQuODQ0LDAuNTMsNi45NjctMC42NjljMi4xMjQtMS4xOTYsMy42NDEtMy4yMzcsNC4xNzktNS42MTQgIGMxLjk3Mi04LjcyNSw1LjAyOS0xNi45NDQsOS4wMDItMjQuNTM5YzAuMjQzLTAuMzI2LDAuNDY3LTAuNjY4LDAuNjY0LTEuMDMxYzEyLjgwOC0yMy40OTgsMzQuODU3LTQxLjEyMSw2MC40OTYtNDguMzQ5ICBjMC4zMDUtMC4wODYsMC42MDMtMC4xOSwwLjg5NC0wLjMwN2M4LjM2OS0yLjI0NCwxNy4xNTUtMy40NDMsMjYuMjA0LTMuNDQzYzI3LjkxOCwwLDUzLjc5OSwxMS4yMzgsNzIuODc2LDMxLjY0NCAgYzMuMjU0LDMuNDgsOC43MTMsMy42NjUsMTIuMTk2LDAuNDFjMy40ODItMy4yNTUsMy42NjQtOC43MTUsMC40MS0xMi4xOTZjLTIyLjA1Mi0yMy41ODYtNTMuMjA5LTM3LjExNC04NS40ODItMzcuMTE0ICBjLTguNDA0LDAtMTYuNzQ5LDAuOTE5LTI0Ljg4NiwyLjY5NWMtOC40MDEtMTMuNjgzLTIzLjMwNC0yMi4xOTYtMzkuNzQ1LTIyLjE5NmMtMS4xMTEsMC0yLjIyLDAuMDM5LTMuMzIzLDAuMTE2ICBjLTQuMTQ0LTI4Ljk1OS0yOS4xMTItNTEuMjg4LTU5LjE5OS01MS4yODhjLTI1LjI3MSwwLTQ3LjE4NiwxNS40NDEtNTUuODgxLDM4LjQ0OWMtMS4yNDQtMC4xMTgtMi40OTUtMC4xNzgtMy43NTEtMC4xNzggIGMtMTAuOTQyLDAtMjEuMzAyLDQuNTYxLTI4LjY4NSwxMi40MjdjLTIuMDcyLTAuMjc2LTQuMTYtMC40MTUtNi4yNS0wLjQxNWMtMjUuOTgzLDAtNDcuMTIsMjEuMTM5LTQ3LjEyLDQ3LjEyMiAgczIxLjEzOCw0Ny4xMjIsNDcuMTIsNDcuMTIyaDYxLjU0MmM0Ljc2NSwwLDguNjI4LTMuODYzLDguNjI4LTguNjI4YzAtNC43NjUtMy44NjMtOC42MjgtOC42MjgtOC42MjhINjguNjgxICBjLTE2LjQ2NywwLTI5Ljg2My0xMy4zOTgtMjkuODYzLTI5Ljg2NmMwLTE2LjQ2OSwxMy4zOTgtMjkuODY2LDI5Ljg2My0yOS44NjZjMi41MzYsMCw1LjA2NywwLjMyMSw3LjUyNywwLjk1NyAgYzMuNDk5LDAuOTAxLDcuMTg5LTAuNDcyLDkuMjQ2LTMuNDQyYzQuMTMzLTUuOTY1LDEwLjkyMi05LjUyNywxOC4xNi05LjUyN2MyLjM4NSwwLDQuNzQsMC4zODIsNywxLjEzNiAgYzIuMzEyLDAuNzczLDQuODQ1LDAuNTI3LDYuOTY2LTAuNjY5YzIuMTI1LTEuMTk3LDMuNjQyLTMuMjM4LDQuMTc5LTUuNjE1YzQuNDA1LTE5LjUwMiwyMS40NjQtMzMuMTIzLDQxLjQ4Ni0zMy4xMjMgIGMyMy40NiwwLDQyLjU0NiwxOS4wODUsNDIuNTQ2LDQyLjU0M2MwLDAuMzY2LTAuMDE1LDAuNzI4LTAuMDI3LDEuMDlsLTAuMDEzLDAuMzY2Yy0wLjA5MiwyLjc5MywxLjE3Nyw1LjQ2LDMuNDAyLDcuMTUxICBjMi4yMjUsMS42OTEsNS4xMzIsMi4yLDcuOCwxLjM2NmMyLjg0Ny0wLjg5Miw1LjgxMy0xLjM0NCw4LjgxNC0xLjM0NGM4Ljc0LDAsMTYuNzk0LDMuODE2LDIyLjI3OSwxMC4xODcgIGMtMC4zLDAuMTE4LTAuNTkzLDAuMjUtMC44OTIsMC4zN2MtMC41NDcsMC4yMTgtMS4wODcsMC40NTEtMS42MzEsMC42NzZjLTAuODQ5LDAuMzU1LTEuNjk5LDAuNzA5LTIuNTM5LDEuMDgzICBjLTEuMDA0LDAuNDQ0LTEuOTk2LDAuOTE0LTIuOTg4LDEuMzg2Yy0wLjM0MiwwLjE2NC0wLjY4NiwwLjMyMi0xLjAyNywwLjQ5Yy03LjgzNywzLjgzMS0xNS4yNjgsOC41MjUtMjIuMTAxLDE0LjA1NiAgYy05LjI1MSw3LjQ4OS0xNy4yNTksMTYuMzQ0LTIzLjc5OCwyNi4xNTNjLTAuMjgzLDAuNDIyLTAuNTU0LDAuODUxLTAuODMsMS4yNzhjLTAuNTI3LDAuODEzLTEuMDQ5LDEuNjMtMS41NTYsMi40NTcgIGMtMC4xNDcsMC4yMzgtMC4zMDQsMC40NjktMC40NDksMC43MDloLTMxLjk3NGMtNC43NjUsMC04LjYyOCwzLjg2My04LjYyOCw4LjYyOHMzLjg2Myw4LjYyOCw4LjYyOCw4LjYyOGgyMy40MDcgIGMtMS4xMjksMi44MzQtMi4xNTUsNS43MTEtMy4wNTgsOC42M2MtNC43NjQtMC45NTgtOS42MTItMS40NC0xNC40OTItMS40NGMtMjIuMTc2LDAtNDMuMDc4LDEwLjAwOS01Ny4wMTIsMjcuMDQxICBjLTUuNTgyLTEuMDYxLTExLjI2NC0xLjU5OC0xNi45NjMtMS41OThDNDAuNDM4LDIyOS4wMzksMCwyNjkuNDc4LDAsMzE5LjE4M2MwLDQ5LjcwNiw0MC40MzgsOTAuMTQ2LDkwLjE0NCw5MC4xNDZoODEuODMzICBjNC4wNDEsMjguNjY3LDI4LjcyMiw1MC43OTcsNTguNDg4LDUwLjc5N2gxNTEuMDZjNC43NjUsMCw4LjYyOC0zLjg2Myw4LjYyOC04LjYyOGMwLTQuNzY1LTMuODYzLTguNjI4LTguNjI4LTguNjI4SDIzMC40NjggIGMtMjMuMDYyLDAtNDEuODIzLTE4Ljc2Mi00MS44MjMtNDEuODIyYzAtMC4yMDEsMC4wMTItMC4zOTgsMC4wMTUtMC41OThjMC4wMDktMC42MDEsMC4wMjQtMS4xOTksMC4wNTctMS43OTUgIGMwLjAwNC0wLjA3NCwwLjAxMi0wLjE0OCwwLjAxNy0wLjIyMmMwLjA0LTAuNjQyLDAuMDktMS4yOCwwLjE1OS0xLjkxM2MwLTAuMDA0LDAuMDAxLTAuMDA4LDAuMDAxLTAuMDEyICBjMi4yNzktMjAuOTE2LDIwLjEwNi0zNy4yOSw0MS41NzMtMzcuMjljNC4yNzUsMCw4LjQ4OSwwLjY0MiwxMi41MjYsMS45MDdjMi42NjgsMC44MzcsNS41NzMsMC4zMjgsNy43OTgtMS4zNjIgIGMyLjIyNS0xLjY5LDMuNDk0LTQuMzUyLDMuNDA2LTcuMTQ1bC0wLjAxOC0wLjUyMWMtMC4wMTctMC40OTktMC4wMzYtMS4wMDEtMC4wMzYtMS41MDZjMC0zMi42NjIsMjYuNTcyLTU5LjIzNSw1OS4yMzMtNTkuMjM1ICBjMjcuNDI5LDAsNTEuNzIxLDE5LjM5Niw1Ny43Niw0Ni4xMjJjMC41MzgsMi4zNzgsMi4wNTYsNC40MTgsNC4xOCw1LjYxNWMyLjEyNywxLjE5Nyw0LjY1NywxLjQ0LDYuOTY4LDAuNjY4ICBjMy4yODYtMS4wOTgsNi43MDYtMS42NTMsMTAuMTY1LTEuNjUzYzEwLjUyMywwLDIwLjM4OSw1LjE3NywyNi4zOTMsMTMuODQ2YzIuMDU4LDIuOTc1LDUuNzUyLDQuMzQ4LDkuMjU2LDMuNDQyICBjMy40NzQtMC45LDcuMDY1LTEuMzU2LDEwLjY3NS0xLjM1NmMwLjg0MSwwLDEuNjc1LDAuMDMyLDIuNTA3LDAuMDhjMC4zMTEsMC4wMTgsMC42MTksMC4wNDYsMC45MjksMC4wNzEgIGMwLjQ5NiwwLjAzOSwwLjk5LDAuMDg3LDEuNDgzLDAuMTQzYzAuNDA0LDAuMDQ3LDAuODA5LDAuMDk2LDEuMjEsMC4xNTRjMC4zMjgsMC4wNDcsMC42NTQsMC4xMDUsMC45OCwwLjE1OSAgYzEwLjkyNywxLjg1MiwyMC40NDgsNy44ODYsMjYuODM5LDE2LjQwNmMwLjAyNiwwLjAzNSwwLjA1MiwwLjA2OSwwLjA3OCwwLjEwNGM1LjI2OSw3LjA2OCw4LjM5MiwxNS44MjQsOC4zOTIsMjUuMjk4ICBjMCwyMy4zODgtMTkuMDI5LDQyLjQxNS00Mi40MTgsNDIuNDE1aC0yOS4yMWMtNC43NjUsMC04LjYyOCwzLjg2My04LjYyOCw4LjYyOHMzLjg2Myw4LjYyOCw4LjYyOCw4LjYyOGgyOS4yMTEgIGMzMi45MDUsMCw1OS42NzQtMjYuNzY4LDU5LjY3NC01OS42NzJjMC04Ljk4Ni0yLjAwOS0xNy41MDktNS41ODItMjUuMTYxQzUwNS4yMzQsMzU5LjYwNCw1MTIuMDAyLDM0MC4yNDksNTEyLjAwMiwzMjAuMTI3eiIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K');
		}
		
	    });
        if($(this).val()=='concepcion'){
        	initMap(concepcion);
        }else if($(this).val()=='santiago'){
        	initMap(santiago);
        }
        
        
   });

});