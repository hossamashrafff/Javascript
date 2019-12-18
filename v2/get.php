<?php
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "data";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "select * from data";
$result = $conn->query($sql);
$events = Array();
if ($result->num_rows > 0) {
while($row = $result->fetch_assoc()) {
    $event = array("type"=>$row["type"], "target"=>json_decode($row["target"]), "time"=>$row["time"]);
    array_push($events, $event);
    }
}
echo json_encode($events);

 ?>
