<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Calculator</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
   <script src="script/script.js"></script>
</head>

<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="pagemainlogotype">
	<div class="middletext">
	
	<br>
	<br>
	<br>

	
	<h1 class="WorkoutHeader">Calculator</h1>
	</div>
	
	<form>
<p class="Calc_Form">Ange stångens vikt<input type="text" id="stangvikt"></p>
</form>  

  <?php 


?>

<form>
<p class="Calc_Form">Ange din totala vikt på stången(inkludera stångens) <input type="text" id="intext"></p>
</form>  
  
<p>
<button type="button" onclick="calculator()">Räkna ut antal viktplattor</button>
</p>
  
   <p id = "result1"></p>
  
   <p id = "result2"></p>
    
  <p id = "result3"></p>
  
  <p id = "result4"></p>
  
  <p id = "result5"></p>
  
  <p id = "result6"></p>
  
  <p id ="result7"></p>
  
  <p id = "result8"></p>
  
 <p id = "result9"></p>
  
  <p id ="result10"></p>
 
 <p id="result11"></p>

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>	

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



</body>
</html> 