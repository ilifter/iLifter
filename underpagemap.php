<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Map</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
  <style>
 #map {
        height: 400px;
        width: 100%;
       }
</style>
 
</script>
   <script src="script/script.js"></script>

  
</head>
<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="pagemainlogotype">
	<div class="middletext">

	</div>
    <div id="map"></div>

		<table class="tablemain">
    <tr>
      <th><button class="tablemainbutton"
       onclick="return traininglog_onclick()">Training Log</button></th>
      <th><button class="tablemainbutton"
        onclick="return calculator_onclick()">Calculator</button></th>
      <th><button class="tablemainbutton"
       onclick="return map_onclick()">Map</button></th>
      <th><button class="tablemainbutton"
       onclick="return exercises_onclick()">Exercises</button></th>
      <th><button class="tablemainbutton"
       onclick="return about_onclick()">Profile</button></th>
    </tr>  
    </table>

<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAcFtzRsJAdX7yismI4sdNGjAjKkYaTftE&callback=initMap">
    </script>
</body>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

</html> 