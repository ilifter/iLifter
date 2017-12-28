<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Registrera</title>
  <meta name="description" content="The HTML5 Herald">
  <link rel="stylesheet" type="text/css" href="css/styleNew.css">
   <script src="script/script.js"></script>

  
</head>

<body>
	<img src="bilder/Logotyp.png" alt="Bilden kunde inte laddas" class="logotype">
	<div class="login_register_text">
	<h1>Registrering</h1>
	</div>
	
	<?php
		if((isset($_GET['register']) && $_GET['register'] == 'empty'))
		{
			echo 'Fyll i info';
		}
		elseif((isset($_GET['register']) && $_GET['register'] == 'invalid'))
		{
			echo 'Du måste ha bokstäver a-z';
		}
		elseif((isset($_GET['register']) && $_GET['register'] == 'email'))
		{
			echo 'Du måste skriva in en email';
		}
		elseif((isset($_GET['register']) && $_GET['register'] == 'usertaken'))
		{
			echo 'Användarnanmnet taget';
		}		
	?>

  <form class="login_register_form" method="POST" action="registernew.php">
    <input type="text" id="reg_firstname" name="firstname" placeholder="First name">
    <input type="text" id="reg_lastname" name="lastname" placeholder="Last name">
	
	<input type="text" id="reg_email" name="email" placeholder="E-mail">
	
    <input type="text" name="username" placeholder="username" value="">
    <input type="password" name="password" placeholder="password" value="">
  
	<button name="submit" id="reg_button" class="login_register_buttons" type="submit" value="Register "> Register </button>
  </form>

		
		
		
		
		
		
		
	
	
	
</body>
</html> 