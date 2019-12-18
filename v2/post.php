<?php
$servername = "127.0.0.1";
$username = "root";
$password = "root";
$dbname = "data";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$data = str_replace('\\','', $_POST['data']);
$events = json_decode($data, true);

foreach($events as $event){
$type = $event["type"];
$time = $event["time"];
$target = json_encode($event["target"]);
$sql = "insert into data(type, time, target) values ('$type', '$time', '$target')";
$conn->query($sql);
}
