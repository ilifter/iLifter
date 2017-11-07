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

function traininglog1_onclick(){
	window.location.href = "underpagetraininglog.html";
}

function newlog_onclick(){
	window.location.href = "underpagenewlog.html"
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
  '<h5>Öppetider <br> Måndag: 08:00-22:00 <br> Tisdag: 06.30-21:00 <br> Onsdag: 08:00-21:00 <br> Torsdag: 06:30-21:00 <br> Fredag: 08:00-20:00 <br> Lördag: 08:00-18:00 <br> Söndag: 08:00-17:00</h5>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>12 månader</td><td>349kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>4 månader</td><td>569kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>12 mån</td><td>259kr/mån</td><td>Student</td></tr>'+
    '<tr><td>4 mån</td><td>499kr/mån</td><td>Student</td></tr>'+
    '<tr><td>12 mån</td><td>259kr/mån</td><td>Senior</td></tr>'+
    '<tr><td>4 mån</td><td>499kr/mån</td><td>Senior</td></tr></table>';

        var freshfitnesstaby = {lat: 59.440848, lng: 18.059391};
        var contentString_freshfitnesstaby = '<h1>Freshfitness Täby</h1>'+
  '<h4><a href="https://www.freshfitness.se/">Freshfitness Täbys hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 11:00-21:00 <br> Fredag: 11:00-18:00 <br> Lör-Sön: 11:00-15:00</h5>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>Månad</td><td>199/mån</td><td>Ordinarie</td></tr>'+
    '</table>';

        var njoytaby = {lat: 59.440464, lng: 18.059004};
        var contentString_njoytaby = '<h1>NJoy Täby</h1>'+
  '<h4><a href="http://www.njoy.se/taby/">NJoys hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 05:30-22:00 <br> Fredag: 05:30-20:00 <br> Lördag: 08:30-18:00 <br> Söndag: 08:30-20:00</h5><br>Ring för prislista';


        var itrimtaby = {lat: 59.435612, lng: 18.059271};
        var contentString_itrimtaby = '<h1>itrim Täby</h1>'+
  '<h4><a href="http://www.itrim.se/SE/">itrim Täbys hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 06:45-21:00 <br> Fredag: 06:45-18:00 <br> Lördag: 08:30-14:00 <br> Söndag: 08:30-16:30</h5>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>Grundmedlemskap</td><td>319kr/mån</td><td>Ordinarie</td></tr>'+
    '</table>';


        var satstabycentrum = {lat: 59.444906, lng: 18.070340};
        var contentString_satstabycentrum = '<h1>Sats Täby Centrum</h1>'+
  '<h4><a href="https://www.sats.se/traningscenter/stockholm/sats-taby-centrum/">Sats Täby Centrums hemsida</a></h4>'+
  '<h5>Öppetider <br>Mån-Tor: 06:00-22:00 <br> Fredag: 06:00-21:00 <br> Lör-Sön: 09:00-18:00</h5><br><a href="https://www.sats.se/bli-medlem/stockholm/">Prislista</a>';


        var friskissvettisnasbypark = {lat: 59.425847, lng: 18.085735};
        var contentString_friskissvettisnasbypark = '<h1>Friskis Svettis Näsbypark</h1>'+
  '<h4><a href="http://taby.friskissvettis.se/">Friskis Svettis Näsbyparks hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 06:30-22:00 <br> Fredag: 06:30-19:30 <br> Lördag: 08:30-18:00 <br> Söndag: 09:00-20:00 </h5>'+
  '<h3>Priser för ALLA tider</h3>'+
  '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>12 månader</td><td>3600 kr</td><td>Ordinarie</td></tr>'+
    '<tr><td>Autogiro 12 månader</td><td>330kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>6 månader</td><td>2500 kr</td><td>Ordinarie</td></tr>'+
    '<tr><td>PT 12 månader (12 månader träningskort + 12 ggr PT+1 konsultering)</td><td>9800 kr</td><td>Ordinarie</td></tr>'+
    '<tr><td>Autogiro PT 12 månader</td><td>810kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>12 månader</td><td>2700 kr</td><td>Student</td></tr>'+
    '<tr><td>Autogiro 12 månader</td><td>230kr/mån</td><td>Student</td></tr>'+
    '<tr><td>6 månader</td><td>1850 kr</td><td>Student</td></tr>'+
    '<tr><td>1 månad</td><td>445 kr</td><td>Student</td></tr>'+
    '<tr><td>Autogiro PT 12 månader</td><td>695kr/mån</td><td>Student</td></tr>'+'</table>'+
    '<br>'+
    '<h3>Priser för dagtid (06:30-16:00) vardagar, Lör-Sön ordinarie öppettider</h3>'+
    '<table><tr><th>Medlemskap</th><th>Pris</th><th>Persongrupp</th></tr>'+
    '<tr><td>12 månader</td><td>2700 kr</td><td>Ordinarie</td></tr>'+
    '<tr><td>Autogiro 12 månader</td><td>230kr/mån</td><td>Ordinarie</td></tr>'+
    '<tr><td>6 månader</td><td>2100 kr</td><td>Ordinarie</td></tr>'+
    '<tr><td>1 månad</td><td>595 kr</td><td>Ordinarie</td></tr>'+
    '</table>';



        var satsviggbyholm = {lat: 59.442028, lng: 18.095960};
        var contentString_satsviggbyholm = '<h1>SATS Viggbyholm</h1>'+
  '<h4><a href="https://www.sats.se/traningscenter/stockholm/sats-viggbyholm/">SATS Viggbyholms hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Tor: 06:30-22:00 <br> Fredag: 06:30-21:00 <br> Lördag: 08:00-19:00 <br> Söndag: 09:00-20:00</h5><br><a href="https://www.sats.se/bli-medlem/stockholm/">Prislista</a>';


        var centralparkenutegym = {lat: 59.437102, lng: 18.084107};
        var contentString_centralparkenutegym = '<h1>Centralparkens Utegym</h1>'+
  '<h4><a href="https://www.taby.se/fritid-och-kultur/idrott-och-motion/utegym/">Centralparkens Utegyms hemsida</a></h4>'+
  '<h5>Öppetider <br> Mån-Sön: 24/7</h5>'+
  '<h4>Nyttjande av gymmet är kostnadsfritt</h4>';


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


