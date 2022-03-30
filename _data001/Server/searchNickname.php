<?php
//Connection
require_once("connection.php");
// Value
$value = $_GET['value'];
// Search
$sql = "SELECT nickname FROM ".$dbname.".character WHERE nickname='".$value."'";
$result = $con->query($sql);
// Search Rows
if ($result->num_rows > 0) {
    $bool = "true";
} else {
    $bool = "false";
}

echo $bool;
