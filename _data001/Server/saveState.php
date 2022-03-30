<?php
//Connection
require_once("connection.php");

if(isset($_REQUEST['quests'])) {
   $quests = str_replace(",", ";", $_REQUEST['quests']);
   $sql = "UPDATE ".$dbname.".network SET quests='".$quests."' WHERE nickname='".$_REQUEST['id']."'";
   $con->query($sql);
}