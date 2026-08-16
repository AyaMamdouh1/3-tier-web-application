<?php

$host = "192.168.1.6";
$dbname = "stores";
$username = "Aya";
$password = "AYA@aya123";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}

?>
