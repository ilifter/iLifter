<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Create new log</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
   <script src="script/script.js"></script>

  
</head>

<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="logotype">
	<div class="login_register_text">
	<h1>Create new log</h1>
	</div>
	

<form method="post" action="savelog.php">
  <textarea id="textarea_log" name="log" rows="10%" cols="99%"> 
  </textarea>
  <button type="submit">Save</button>
</form>
<br>
<br>

<?php 
	include_once 'get_logs.php';
?>


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

		
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>		
		
	
</body>
</html> 