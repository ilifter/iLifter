<?php

if(isset($_POST['submit'])){
	
	include_once 'dbhandler.php';
	
	$firstname = mysqli_real_escape_string($conn, $_POST['firstname']);
	$lastname = mysqli_real_escape_string($conn, $_POST['lastname']);
	$email = mysqli_real_escape_string($conn, $_POST['email']);
	$username = mysqli_real_escape_string($conn, $_POST['username']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);
	
	//error handlers
	//kollar att det inte finns tomma rader
	
	if(empty($firstname) || empty($lastname) || empty($email)|| empty($username)|| empty($password))
	{
		header("Location: register.php?register=empty");
		exit();
	}
	else
	{
		//kollar om det är rätt tecken
		if(!preg_match("/^[a-zA-Z]*$/", $firstname)|| (!preg_match("/^[a-zA-Z]*$/", $lastname) ))
		{
			header("Location: register.php?register=invalid");
			exit();
		}
		else
		{
			//kollar om email är rätt
			if(!filter_var($email, FILTER_VALIDATE_EMAIL))
			{
				header("Location: register.php?register=email");
				exit();
			}
			else
			{
				$sql = "SELECT * FROM users WHERE user_username='$username'";
				$result = mysqli_query($conn, $sql);
				$resultCheck = mysqli_num_rows($result);
				
				if($resultCheck > 0)
				{
					
					header("Location: register.php?register=usertaken");
					exit();
					
					
				}
				else
				{
					$hashedpassword = password_hash($password, PASSWORD_DEFAULT);
					$sql = "INSERT INTO users (user_firstname, user_lastname, user_email, user_username, user_password) VALUES('$firstname', '$lastname', '$email', '$username', '$hashedpassword' );";
					
					mysqli_query($conn, $sql);
					header("Location: index.php?register=success");
					exit();
				}
							
			}
	}	
	}
}	