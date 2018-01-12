<?php 

include_once 'dbhandler_file.php';

$user = $_SESSION['u_usernameid'];

$sql = "SELECT filename FROM files WHERE username = '$user'";

$sql = "SELECT filename FROM files ORDER BY id DESC LIMIT 1";

$result = mysqli_query($conn, $sql);

while($row = mysqli_fetch_array($result)){
	
	echo "<img src='uploads/".$row['filename']."'/>";
	
}