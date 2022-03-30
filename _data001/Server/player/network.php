<?php

class DbOperation{
    //Database connection link
    private $con;
    
    //Class constructor
    function __construct(){
        require_once ("../connect.php");
        $db = new DbConnect();
        $this->con = $db->connect();
    }

    function getData($nickname){
		
		// MAP INFO -> USER.MAP
		
        $stmt = $this->con->prepare("SELECT * FROM network WHERE nickname='".$nickname."'");
        $stmt->execute();
        $stmt->bind_result($idnetwork, $nickname, $map, $x, $y, $quests, $event);
		$data = array();
        while($stmt->fetch()){
            $data["idnetwork"] = $idnetwork;
            $data["nickname"] = $nickname;
            $data["map"] = $map;
            $data["x"] = $x;
            $data["y"] = $y;
            $data["quests"] = $quests;
            $data["event"] = $event;
        }
		
		$stmt->free_result();
		
        // MENU OPTIONS -> USER.CONFIG
		
		$stmt = $this->con->prepare("SELECT menu_options, menu_theme, volumeEfeito, volumeSom FROM menu_options WHERE nickname='".$nickname."'");
        $stmt->execute();
        $stmt->bind_result($menu_options, $menu_theme,$volumeEfeito, $volumeSom);
		
		while($stmt->fetch()){
            $data["menu_options"] = $menu_options;
			$data["menu_theme"] = $menu_theme;
			$data["volumeEfeito"] = $volumeEfeito;
			$data["volumeSom"] = $volumeSom;
        }
		
		return $data;
    }
}

$db = new DbOperation();
$value = $_GET['value'];
$data_info = $db->getData($value);

echo json_encode($data_info);
