<?php

$response = null;

class DbOperation{
    //Database connection link
    private $con;
    
    //Class constructor
    function __construct(){
        require_once ("../connect.php");
        $db = new DbConnect();
        $this->con = $db->connect();
    }

    function menu_options($menu_options, $volumeEffect, $volumeSom, $nickname){
		global $response;
		$stmt = $this->con->prepare("UPDATE menu_options SET menu_options = ?, volumeEfeito = ?, volumeSom = ? WHERE nickname = ?");
        $stmt->bind_param("ssss", $menu_options, $volumeEffect, $volumeSom, $nickname);
		if($stmt->execute()) {
			$response = "true";
		} else{
			$response = "false";
		}
    }
	
	function network($positionX, $positionY, $map, $gameQuests, $gameEvents, $nickname){
		global $response;
		$stmt = $this->con->prepare("UPDATE network SET x = ?, y = ?, map = ?, quests = ?, event = ? WHERE nickname = ?");
        $stmt->bind_param("iissss", $positionX, $positionY, $map, $gameQuests, $gameEvents, $nickname);
		if($stmt->execute()) {
			$response = "true";
		} else{
			$response = "false";
		}
    }
}

$db = new DbOperation();

$data = json_decode(base64_decode($_REQUEST["DATA"]));

$menu_options = $db->menu_options($data->menu_options, $data->volumeEffect, $data->volumeSom, $data->nickname);
$network = $db->network($data->positionX, $data->positionY, $data->map, $data->gameQuests, $data->gameEvents, $data->nickname);

echo $response;
//echo print_r($data);
