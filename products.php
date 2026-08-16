<?php

header("Content-Type: application/json");

include "DB.php";

$category = $_GET["type"] ?? "";

$sql = "SELECT * FROM products WHERE type = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s", $category);

$stmt->execute();

$result = $stmt->get_result();

$products = [];

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);

$stmt->close();
$conn->close();

?>
