<?php

session_start();

if(isset($_POST['submit']))
{
	
	include 'dbhandler.php';
	
	$username = mysqli_real_escape_string($conn, $_POST['username']);
	$password = mysqli_real_escape_string($conn, $_POST['password']);
	
	if(empty($username) || empty($password))
	{
		header("Location: index.php?login=empty");
		exit();	
	}
	
	else
	{
		$sql= "SELECT * FROM users WHERE user_username='$username'"; 
		$result = mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		
		if($resultCheck < 1)
		{
			header("Location: index.php?login=error1");
			exit();
		}
	
		else
		{
			if($row = mysqli_fetch_assoc($result))
			{
				//tar bort haching
				$hashedcheck = password_verify($password, $row['user_password']);
				
				if($hashedcheck == false)
				{
					header("Location: index.php?login=error2");
					exit();
				}
				
				elseif($hashedcheck == true)
				{
					//loggar in till sida
					$_SESSION['u_id'] = $row['user_id'];
					$_SESSION['u_first'] = $row['user_firstname'];
					$_SESSION['u_last'] = $row['user_lastname'];
					$_SESSION['u_email'] = $row['user_email'];
					$_SESSION['u_usernameid'] = $row['user_username'];
					header("Location: underpageprofile.php");
					exit();
				}
			}
		}
	
	} 
}
