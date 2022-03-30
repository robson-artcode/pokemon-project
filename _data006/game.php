<?php

// ===== PRÉ - META
$title = "Pokémon Brave";
$description = "Game Online.";
$canonical = HOSTNAME;
$favicon = "";
// ================

echo "<!DOCTYPE HTML>
<html lang='pt-br'>
<head>";

require_once("_data006/Main/meta.php");

echo"
<style>
";

echo file_get_contents("_data002/as-main.css");

echo "
</style>
</head>
";

echo "<body>";

echo "
    <div class='game-screen'>
        <div class='canvas'>
			
			<canvas id='game-UI' class='game-UI' width='640' height='480'></canvas>
			<canvas id='game-loading' class='game-loading' width='640' height='480'></canvas>
			<canvas id='game-menu' class='game-menu' width='640' height='480'></canvas>
			<canvas id='game-foreground' class='game-foreground' width='640' height='480'></canvas>
			<canvas id='game-character' class='game-character' width='640' height='480'></canvas>
            <canvas id='game-background' class='game-background' width='640' height='480'></canvas>
        </div>
    </div>
    ";

echo"</body>";

echo"
<script>
";
require_once("_data003/script.php");

echo"

LAB.script('/_data005/game.js');

</script>
";
