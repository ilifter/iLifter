
<?php
session_start();

include_once 'dbhandler_file.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "filuppladdning";


$conn = new mysqli($servername, $username, $password, $dbname);


$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        header("Location: underpageprofile.php");
        $uploadOk = 1;
    } else {
        header("Location: underpageprofile.php");
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    header("Location: underpageprofile.php");
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 900000000000000) {
    header("Location: underpageprofile.php");
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif") {
    header("Location: underpageprofile.php");
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    header("Location: underpageprofile.php");
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        header("Location: underpageprofile.php");
    } else {
        header("Location: underpageprofile.php");
    }
}	

$filename = $_FILES["fileToUpload"]["name"];


$myfile = fopen("fileuppload.txt", "w") or die("Unable to open file!");

fwrite($myfile, $_SESSION['u_usernameid'] . " " . basename( $_FILES["fileToUpload"]["name"]));
fclose($myfile);


$sql = "INSERT INTO files (username, filename) VALUES ('" . $_SESSION["u_usernameid"] .  "', '$filename' )" ;
$result = $conn->query($sql);

?>