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

/////////////ÄNDRA INGENTING NEDAN FÖRE DU FRÅGAR JOHAN//////////////

 function initMap() {
 	 	var tabyatletklubb = {lat: 59.443062, lng: 18.065017};
 	 	var contentString_tabyatletklubb = '<h1>Täby Atletklubb</h1>'+
  '<h4><a href="http://www.taby-ak.se/">Täby Atletklubbs hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 08:00-21:30 <br> Fredag: 08:00-20:00 <br> Lördag: 08:00-18:00 <br> Söndag: 08:00-20:00</h5>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>Årskort</td><td>1400 kr</td><td>Vuxna</td></tr>'+
    '<tr><td>Årskort</td><td>700 kr</td><td>Ungdomar</td></tr></table>';

        var actictaby = {lat: 59.443697, lng: 18.065469};
        var contentString_actictaby = '<h1>Actic Täby</h1>'+
  '<h4><a href="https://www.actic.se/hitta-gym/gym-i-stockholm/stockholm-taby-tibblebadet/">Actic Täbys hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån: 08:00-22:00 <br> Tisdag: 06.30-21:00 <br> Onsdag: 08:00-21:00 <br> Torsdag: 06:30-21:00 <br> Fredag: 08:00-20:00 <br> Lördag: 08:00-18:00 <br> Söndag: 08:00-17:00</h5>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>12 månader</td><td>349kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>4 månader</td><td>569kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>12 mån</td><td>259kr/mån</td><td>Student</td></tr>'+
    '<tr><td>4 mån</td><td>499kr/mån</td><td>Student</td></tr>'+
    '<tr><td>12 mån</td><td>259kr/mån</td><td>Senior</td></tr>'+
    '<tr><td>4 mån</td><td>499kr/mån</td><td>Senior</td></tr></table>';

        var freshfitnesstaby = {lat: 59.440848, lng: 18.059391};
        var contentString_freshfitnesstaby = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';

        var njoytaby = {lat: 59.440464, lng: 18.059004};
        var contentString_njoytaby = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var itrimtaby = {lat: 59.435612, lng: 18.059271};
        var contentString_itrimtaby = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var satstabycentrum = {lat: 59.444906, lng: 18.070340};
        var contentString_satstabycentrum = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var friskissvettisnasbypark = {lat: 59.425847, lng: 18.085735};
        var contentString_friskissvettisnasbypark = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var grindtorpgym = {lat: 59.438372, lng: 18.070269};
		var contentString_grindtorpgym = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var satsviggbyholm = {lat: 59.442028, lng: 18.095960};
        var contentString_satsviggbyholm = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var centralparkenutegym = {lat: 59.437102, lng: 18.084107};
        var contentString_centralparkenutegym = '<h1>Täby Atletklubb</h1>'+'<p>hello</p>';


        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: tabyatletklubb
        });

        

        

        var marker1 = new google.maps.Marker({
          position: tabyatletklubb,
          map: map,
          title: 'Taby'
        });

		var infowindow_tabyatletklubb = new google.maps.InfoWindow({
          content: contentString_tabyatletklubb
        });

        marker1.addListener('click', function() {
          infowindow_tabyatletklubb.open(map, marker1);
        });





        var marker2 = new google.maps.Marker({
        	position: actictaby,
        	map:map
        });

        var infowindow_actictaby = new google.maps.InfoWindow({
          content: contentString_actictaby
        });

        marker2.addListener('click', function() {
          infowindow_actictaby.open(map, marker2);
        });





        var marker3 = new google.maps.Marker({
        	position: freshfitnesstaby,
        	map:map
        })
 		var infowindow_freshfitnesstaby = new google.maps.InfoWindow({
          content: contentString_freshfitnesstaby
        });

        marker3.addListener('click', function() {
          infowindow_freshfitnesstaby.open(map, marker3);
        });





        var marker4 = new google.maps.Marker({
        	position: njoytaby,
        	map:map
        })

        var infowindow_njoytaby = new google.maps.InfoWindow({
          content: contentString_njoytaby
        });

        marker4.addListener('click', function() {
          infowindow_njoytaby.open(map, marker4);
        });




        var marker5 = new google.maps.Marker({
        	position: itrimtaby,
        	map:map
        })

        var infowindow_itrimtaby = new google.maps.InfoWindow({
          content: contentString_itrimtaby
        });

        marker5.addListener('click', function() {
          infowindow_itrimtaby.open(map, marker5);
        });





        var marker6 = new google.maps.Marker({
        	position: satstabycentrum,
        	map:map
        })

		var infowindow_satstabycentrum = new google.maps.InfoWindow({
          content: contentString_satstabycentrum
        });

        marker6.addListener('click', function() {
          infowindow_satstabycentrum.open(map, marker6);
        });







        var marker7 = new google.maps.Marker({
        	position: friskissvettisnasbypark,
        	map:map
        })

		var infowindow_friskissvettisnasbypark = new google.maps.InfoWindow({
          content: contentString_friskissvettisnasbypark
        });

        marker7.addListener('click', function() {
          infowindow_friskissvettisnasbypark.open(map, marker7);
        });






        var marker8 = new google.maps.Marker({
        	position: grindtorpgym,
        	map:map
        })

		var infowindow_grindtorpgym = new google.maps.InfoWindow({
          content: contentString_grindtorpgym
        });

        marker8.addListener('click', function() {
          infowindow_grindtorpgym.open(map, marker8);
        });






        var marker9 = new google.maps.Marker({
        	position: satsviggbyholm,
        	map:map
        })

        var infowindow_satsviggbyholm = new google.maps.InfoWindow({
          content: contentString_satsviggbyholm
        });

        marker9.addListener('click', function() {
          infowindow_satsviggbyholm.open(map, marker9);
        });





        var marker10 = new google.maps.Marker({
        	position: centralparkenutegym,
        	map:map
        })

        var infowindow_centralparkenutegym = new google.maps.InfoWindow({
          content: contentString_centralparkenutegym
        });

        marker10.addListener('click', function() {
          infowindow_centralparkenutegym.open(map, marker10);
        });
      
      }

