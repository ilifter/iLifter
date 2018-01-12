<?php 

session_start();

?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>About</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
   <script src="script/script.js"></script>

  
</head>
<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="pagemainlogotype">
	<div class="middletext"></div>
	
<h1> Welcome <?php echo $_SESSION['u_usernameid'];?>


	
	

<div class="card">

<?php 

include_once 'get_pic.php';

?>


 <form action="upload.php" method="post" enctype="multipart/form-data">
    Select profile picture:
    <input type="file" name="fileToUpload" id="fileToUpload">
	<br>
    <input type="submit" value="Upload Image" name="submit">
</form>

<br>
<br>
<br>



<header class="Profile_header" id="Profile_First_name">First name: <header><?php echo $_SESSION['u_first'];?></header></header>
<header class="Profile_header" id="Profile_Last_name">Last name: <header><?php echo $_SESSION['u_last'];?></header></header>





</div>




<p>
<form action="index.php" method="post">
<input class="loggaut" value="Logga ut"	type="submit">
</form><p>


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