<?php

session_start();

include_once 'dbhandler_logs.php';

$username = $_SESSION['u_usernameid'];
$log = $_POST['log'];

$sql = "INSERT INTO logs (user_username, user_log) VALUES('$username', '$log');";
mysqli_query($conn, $sql);
header("Location: underpagenewlog.php");
exit();