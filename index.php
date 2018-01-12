<?php
session_start();
?>


<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Homepage</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
   <script src="script/script.js"></script>

  
</head>
<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="logotype">
	<div class="login_register_text">
	<h1>Welcome to iLifter <br> The ultimate training site</h1>
	</div>
	
  <?php
	if(isset($_GET['register']) && $_GET['register'] == 'success')
	{
		echo '<h1> Register successfull! </h1>';
	}
	
	if((isset($_GET['login']) && $_GET['login'] == 'empty'))
	{
			echo '<h1> Fill in your information!</h1>';
	}
	elseif((isset($_GET['login']) && $_GET['login'] == 'error1'))
	{
			echo '<h1>The username does not exist!</h1>';
	}
	elseif((isset($_GET['login']) && $_GET['login'] == 'error2'))
	{
			echo '<h1>Wrong password!</h1>';
	}
  ?>
	
 
  <form class="login_register_form" action = "login.php" method= "POST">
    <input type="text" id="username" name="username" placeholder="Username/E-mail">
    <input type="password" id="password" name="password" placeholder="Password">
  
    <button id="loginbutton" class="login_register_buttons" type="submit" name="submit" value="Login">Login</button>
	<button id="registerbutton" class="login_register_buttons" type="button" value="register" onclick="return registeraccount_onclick()">
	Register</button>
  </form>
 		
</body>
</html>