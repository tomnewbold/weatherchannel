/*
jquery loaded{"coord":{"lon":-2.55,"lat":49.45},
"weather":[{"id":801,"main":"Clouds",
"description":"few clouds","icon":"02d"}],
"base":"stations","main":{"temp":289.78,"pressure":1020,"humidity":88,
"temp_min":289.15,"temp_max":290.15},"visibility":10000,
"wind":{"speed":7.7,"deg":250},"clouds":{"all":20},"dt":1498243800,
"sys":{"type":1,"id":5085,"message":0.0045,"country":"GG","sunrise":1498190667,
"sunset":1498249244},"id":6620380,"name":"Guernsey (general)","cod":200}
*/


var lat = 1;
var long = 1;
var mykey = config.MY_KEY;

function showMap(position) {
     // Show a map centered at (position.coords.latitude, position.coords.longitude).
     lat = position.coords.latitude;
     long = position.coords.longitude;

   }
function gettingJSON(){
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&APPID=" + mykey,function(json){
             console.log(JSON.stringify(json));
             var newtemp = JSON.stringify(json.main.temp);
             var cels = newtemp - 273.15;
             var cels1 = Math.round(cels);

             var min = JSON.stringify(json.main.temp_min);
             var new_min = min - 273.15;
             var new_min1 = Math.round(new_min);

             var max = JSON.stringify(json.main.temp_max);
             var new_max = min - 273.15;
             var new_max1 = Math.round(new_max) + 1;

             var description = JSON.stringify(json.weather[0]["description"]);

             var location = JSON.stringify(json.name);

             var icon = JSON.stringify(json.weather[0]["icon"]);

             console.log(JSON.stringify(json.weather[0]["icon"]));

             var image = "http://openweathermap.org/img/w/"+icon+".png"


             console.log(location);
             document.getElementById('temperature').innerHTML += cels1 + "&#8451;";
             document.getElementById('description').innerHTML += description;
             document.getElementById('location').innerHTML += location;
             document.getElementById('min').innerHTML += "Min: " + " " + new_min1 + "&#8451;";
             document.getElementById('max').innerHTML += "Max: " + " " + new_max1 + "&#8451;";
             $("#image").attr("src", image);





        });
    }
    navigator.geolocation.getCurrentPosition(showMap);
