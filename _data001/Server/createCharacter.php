<?php
//Connection
require_once("connection.php");
// Value
$value = $_GET['value'];                       
$pieces = explode(",", $value);

// ===== Map Initial
$map_name = "zethyn";
$map_x = 14;
$map_y = 78;


$sql = "INSERT INTO `".$dbname."`.`character` (`nickname`, `username`, `sex`, `skin`, `shirt`, `pants`, `shoes`, `skeleton`) VALUES ('".$pieces[0]."', 'rohnk', '".$pieces[1]."', '".$pieces[2]."', '".$pieces[3]."', '".$pieces[4]."', '".$pieces[5]."', '".$pieces[6]."')";

$sql_network = "INSERT INTO `".$dbname."`.`network` (`nickname`, `map`, `x`, `y`, `quests`, `event`) VALUES ('".$pieces[0]."', '".$map_name."', ".$map_x.",  ".$map_y.", 0, 0)";

$sql_menu_options = "INSERT INTO `".$dbname."`.`menu_options` (`nickname`, `menu_options`, `menu_theme`) VALUES ('".$pieces[0]."', '[0, 0, 0, 0, 0, 0, 1, 1]', 1)";

 // Create Sprite
  $img = imagecreatetruecolor(128, 128);
  imagesavealpha($img,true);
  $transparente = imagecolorallocatealpha($img, 200, 200, 200, 127);
  imagefill($img,0,0,$transparente);

  $skin = imagecreatefrompng("../Sprites/Skin/skin-".$pieces[6]."-".$pieces[1].".png");
  if ($pieces[2] != 0) $hair = imagecreatefrompng("../Sprites/Hair/hair-".$pieces[6]."-".$pieces[2].".png");
  if ($pieces[3] != 0) $shirt = imagecreatefrompng("../Sprites/Shirt/shirt-".$pieces[6]."-".$pieces[3].".png");
  if ($pieces[4] != 0) $pants = imagecreatefrompng("../Sprites/Pants/pants-".$pieces[6]."-".$pieces[4].".png");
  if ($pieces[5] != 0) $shoes = imagecreatefrompng("../Sprites/Shoes/shoes-".$pieces[6]."-".$pieces[5].".png");

  imagecopy($img, $skin, 0,0,0,0,128,128);
  if ($pieces[2] != 0) imagecopy($img, $hair, 0,0,0,0,128,128);
  if ($pieces[3] != 0) imagecopy($img, $shirt, 0,0,0,0,128,128);
  if ($pieces[4] != 0) imagecopy($img, $pants, 0,0,0,0,128,128);
  if ($pieces[5] != 0) imagecopy($img, $shoes, 0,0,0,0,128,128);
    
  // Create Sprite
  $img2 = imagecreatetruecolor(1024, 64);
  imagesavealpha($img2,true);
  $transparente = imagecolorallocatealpha($img2, 200, 200, 200, 127);
  imagefill($img2,0,0,$transparente);

  $skin2 = imagecreatefrompng("../Character/Skin/skin-".$pieces[1].".png");
  if ($pieces[2] != 0) $hair2 = imagecreatefrompng("../Character/Hair/hair-".$pieces[2].".png");
  if ($pieces[3] != 0) $shirt2 = imagecreatefrompng("../Character/Shirt/shirt-".$pieces[3].".png");
  if ($pieces[4] != 0) $pants2 = imagecreatefrompng("../Character/Pants/pants-".$pieces[4].".png");
  if ($pieces[5] != 0) $shoes2 = imagecreatefrompng("../Character/Shoes/shoes-".$pieces[5].".png");

  imagecopy($img2, $skin2, 0,0,0,0,1024,64);
  if ($pieces[2] != 0) imagecopy($img2, $hair2, 0,0,0,0,1024,64);
  if ($pieces[3] != 0) imagecopy($img2, $shirt2, 0,0,0,0,1024,64);
  if ($pieces[4] != 0) imagecopy($img2, $pants2, 0,0,0,0,1024,64);
  if ($pieces[5] != 0) imagecopy($img2, $shoes2, 0,0,0,0,1024,64);

  // Create 
  header("Content-type: image/png");
  session_start();
  imagepng($img,"../../_dataserver/game/Sprites/{$pieces[0]}.png",9);
  imagepng($img2,"../../_dataserver/game/Characters/{$pieces[0]}.png",9);

$con->query($sql);
$con->query($sql_network);
$con->query($sql_menu_options);




