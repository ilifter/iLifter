<?php 
session_start();

include_once 'dbhandler_logs.php';
    
$username = $_SESSION['u_usernameid'];

$sql = "SELECT * FROM logs WHERE user_username = '$username'";
$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_assoc($result))
{
	echo "<p>";
	echo $row['user_log'];
	echo "</p>";
} 