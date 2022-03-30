<?php
//Variáveis
// ====================================
// POKÉMON PRELUDE
// ====================================

$SERVER = false;
$ONLINE = false;
if(!$SERVER) $HOST = "localhost"; else $HOST = "brave.artcodeagencia.com";
$MAINTENANCE = false;
$VERSION = "0.6.15";
$IP = $_SERVER["REMOTE_ADDR"];

// Global
$_INDEX = explode("/", $_SERVER['REQUEST_URI']);

//Constantes
define("HOSTNAME", "http://".$HOST."/");  

// Variáveis
$_SESSION['USER'] = '';
$_SESSION['NICKNAME'] = 'Shouri';


if(($IP == "131.108.30.130" && $MAINTENANCE) || !$MAINTENANCE){
   require_once ("_data003/main.php");
} else {
   $maintenance_page = file_get_contents("http://artcodeagencia.com/_Plugin/pages/maintenance.php");
   echo $maintenance_page;
}


?>

