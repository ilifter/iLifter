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
	



	
	

<div class="card">
<img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s97c9f74a5a617115/image/i5ffb1cc20c627eaf/version/1502362099/image.jpg" 
alt="iLifter.png" style="width:50%">
 

<br>
<br>
<br>



<header class="Profile_header" id="Profile_First_name">First name:</header>
<header class="Profile_header" id="Profile_Last_name">Last name:</header>



<form id="ProfileForm" action="profile.php" method="post">

	<p id="ContactCaption"> Contact admins </p>
    <div>
		
	<label class="profile_label" for="name">Name:</label>
        <input type="name" id="forn_name" name="profile_user_name">
    </div>
    <div>
        <label class="profile_label" for="mail">E-mail:</label>
        <input type="email" id="form_mail" name="profile_user_mail">
    </div>
    <div>
        <label class="profile_label" for="msg">Message:</label>
        <textarea id="msg" name="profile_user_msg"></textarea>
		
		
	<p><button id="Profile_Send">Send Message</button></p>
	</div>
	
</form>

</div>







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