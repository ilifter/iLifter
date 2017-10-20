function registeraccount_onclick(){
	window.location.href = "register.html";
}

function traininglog_onclick(){
	window.location.href = "underpagelogs.html";
}

function calculator_onclick(){
	window.location.href = "underpagecalculator.html";
}

function map_onclick(){
	window.location.href = "underpagemap.html";
}

function exercises_onclick(){
	window.location.href = "underpagemuscles.html";
}

function about_onclick(){
	window.location.href = "underpageprofile.html";
}


//Hej


function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
