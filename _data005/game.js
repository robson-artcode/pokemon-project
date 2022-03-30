// * =================================
//  Variables
// * =================================
// _AC -> Variável com o código do game
// _FILE -> Variável com a Data do Game
// _DATA -> Variável com a Pokémon Data
// _USER -> Variável com informações e configurações do usuário
// _CONFIG -> Variáveis usadas para manipulações globais
// _MAP -> Variável no auxílio dos eventos do mapa
// * =================================

{
// Inicialização

var _AC = _AC || {};
var _FILE = _FILE || {};
var _DATA = _DATA || {};
var _USER = _USER || {};
var _CONFIG = _CONFIG || {};
var _MAP = _MAP || {};
	
// Controle de Desenhadores
_FILE.ctx = document.getElementById("game-background").getContext('2d');
_FILE.canvas = document.getElementById("game-background"); // Canvas para Cenário
_FILE.ctx2 = document.getElementById("game-character").getContext('2d');
_FILE.canvas2 = document.getElementById("game-character"); // Canvas para Personagens e Botões
_FILE.ctx3 = document.getElementById("game-foreground").getContext('2d');
_FILE.canvas3 = document.getElementById("game-foreground"); // Canvas para Cenário Foreground
_FILE.ctx4 = document.getElementById("game-menu").getContext('2d');
_FILE.canvas4 = document.getElementById("game-menu"); // Canvas para MENU
_FILE.ctx5 = document.getElementById("game-UI").getContext('2d');
_FILE.canvas5 = document.getElementById("game-UI"); // Canvas para UI
_FILE.ctx6 = document.getElementById("game-loading").getContext('2d');
_FILE.canvas6 = document.getElementById("game-loading"); // Canvas para Loading
	
// Controle de Botões
_CONFIG.button = [];
_CONFIG.button.idx = [];
_CONFIG.button.idy = [];
_CONFIG.button.cursorX = [];
_CONFIG.button.cursorY = [];
_CONFIG.button.cursor = [];
_CONFIG.button.idimg = [];
_CONFIG.button.idimgh = [];
_CONFIG.button.normalizador = [];
_CONFIG.button.idmovestart = [];
_CONFIG.button.idmoveend = [];
_CONFIG.button.idclickstart = [];
_CONFIG.button.idclickend = [];

// Controle de Mensagens
_CONFIG.message = [];
_CONFIG.message.update = [];
_CONFIG.message.mensagemID = 0;

// Controle de Scene
_CONFIG.scene = [];
_CONFIG.scene.id = 0;
_CONFIG.scene.cont = 0;
_CONFIG.scene.alert = "";

// Controle de Sistema
_CONFIG.system = [];
_CONFIG.system.sizeTile = 32;
_CONFIG.system.sizeRect = 2;
_CONFIG.system.widthTile = 8;

// Controle de Usuário
_USER.info = [];

// _USER.info.id = "victorhugo";
_USER.info.id = "";

_USER.info.FPS = 0;
_USER.info.pokedex = [];
_USER.info.pokemon = [{"slot1": [1, "BULBASAUR", 2, 1, 1, 0, 70, [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], 0, [0], 0, 0, 1]}, {"slot2": ""}, {"slot3": ""}, {"slot4": ""}, {"slot5": ""}, {"slot6": ""}];

// Controle de Configuração
_USER.config = [];
_USER.config.DEBUG = false;
_USER.config.menu_options = [1, 1, 1, 1, 1, 1, 1, 1]; // Todos desabilitados
_USER.config.menu_theme = 1; // Tema inicial
_USER.config.volumeEffect = 0.1;
_USER.config.volumeSom = 0.2;

// Controle de Mapa
_USER.map = [];
_USER.map.object = null;
_USER.map.gameQuests = null;
_USER.map.gameEvents = null;
_USER.map.name = null;
_USER.map.positionX = 0;
_USER.map.positionY = 0;
	
//_FILE.resource.image = [];
//	
_FILE.resource = [];
_FILE.resource.map = [];
_FILE.resource.image = [
    {
        // Character
        "mainCharacter": "_dataserver/game/Characters/"+_USER.info.id+".png",
		"loading": "_data001/Picture/pokeball-loading.svg",
    },
    {
        // Initial
        "splash": "_data001/Picture/splash.jpg",
        "load": "_data001/Picture/load.jpg",
        "null": "_data001/Picture/null.png",
        "btn": "_data001/Picture/btn.png",
        "btnHover": "_data001/Picture/btnHover.png",
        "dialog": "_data001/Picture/dialog-1.png",
        "arrow-bottom": "_data001/Picture/arrow-bottom.png",
    },
    {
        // Initial
        "newload": "_data001/Picture/newload.jpg",
        "panelCreate": "_data001/Picture/panelCreate.png",
        "maleActor": "_data001/Picture/maleActor.png",
        "femaleActor": "_data001/Picture/femaleActor.png",
        "checkbox": "_data001/Picture/checkbox.png",
        "checkboxHover": "_data001/Picture/checkboxHover.png",
        "checkboxFull": "_data001/Picture/checkboxFull.png",
        "nickinput": "_data001/Picture/nickinput.png",
        "nickinputHover": "_data001/Picture/nickinputHover.png",
        "clickWait": "_data001/Picture/clickWait.jpg",
        "search": "_data001/Picture/search.jpg",
        "searchHover": "_data001/Picture/searchHover.jpg",
        "arrow-16-left": "_data001/Picture/arrow-16-left.png",
        "arrow-16-right": "_data001/Picture/arrow-16-right.png",
        "arrow-23-left": "_data001/Picture/arrow-23-left.png",
        "arrow-23-right": "_data001/Picture/arrow-23-right.png",
        "mini-checkbox": "_data001/Picture/mini-checkbox.png",
        "mini-checkboxfull": "_data001/Picture/mini-checkboxfull.png",

        // Character
        "null": "_data001/Character/null.png",
        "skin-1": "_data001/Character/skin-1.png",
        "skin-2": "_data001/Character/skin-2.png",
        "skin-3": "_data001/Character/skin-3.png",
        "hair-1": "_data001/Character/hair-1.png",
        "hair-2": "_data001/Character/hair-2.png",
        "hair-3": "_data001/Character/hair-3.png",
        "shirt-1": "_data001/Character/shirt-1.png",
        "shirt-2": "_data001/Character/shirt-2.png",
        "shirt-3": "_data001/Character/shirt-3.png",
        "pants-1": "_data001/Character/pants-1.png",
        "pants-2": "_data001/Character/pants-2.png",
        "pants-3": "_data001/Character/pants-3.png",
        "shoes-1": "_data001/Character/shoes-1.png",
        "shoes-2": "_data001/Character/shoes-2.png",
        "shoes-3": "_data001/Character/shoes-3.png",
        "skeleton-1": "_data001/Sprites/Skeleton/skeleton-1.png",
        "skeleton-2": "_data001/Sprites/Skeleton/skeleton-2.png",
        "skeleton-3": "_data001/Sprites/Skeleton/skeleton-3.png",

        "skin-1-1": "_data001/Sprites/Skin/skin-1-1.png",
        "skin-1-2": "_data001/Sprites/Skin/skin-1-2.png",
        "skin-1-3": "_data001/Sprites/Skin/skin-1-3.png",
        "skin-2-1": "_data001/Sprites/Skin/skin-2-1.png",
        "skin-2-2": "_data001/Sprites/Skin/skin-2-2.png",
        "skin-2-3": "_data001/Sprites/Skin/skin-2-3.png",
        "skin-3-1": "_data001/Sprites/Skin/skin-3-1.png",
        "skin-3-2": "_data001/Sprites/Skin/skin-3-2.png",
        "skin-3-3": "_data001/Sprites/Skin/skin-3-3.png",

        "hair-1-1": "_data001/Sprites/Hair/hair-1-1.png",
        "hair-1-2": "_data001/Sprites/Hair/hair-1-2.png",
        "hair-1-3": "_data001/Sprites/Hair/hair-1-3.png",
        "hair-2-1": "_data001/Sprites/Hair/hair-2-1.png",
        "hair-2-2": "_data001/Sprites/Hair/hair-2-2.png",
        "hair-2-3": "_data001/Sprites/Hair/hair-2-3.png",
        "hair-3-1": "_data001/Sprites/Hair/hair-3-1.png",
        "hair-3-2": "_data001/Sprites/Hair/hair-3-2.png",
        "hair-3-3": "_data001/Sprites/Hair/hair-3-3.png",

        "shirt-1-1": "_data001/Sprites/Shirt/shirt-1-1.png",
        "shirt-1-2": "_data001/Sprites/Shirt/shirt-1-2.png",
        "shirt-1-3": "_data001/Sprites/Shirt/shirt-1-3.png",
        "shirt-2-1": "_data001/Sprites/Shirt/shirt-2-1.png",
        "shirt-2-2": "_data001/Sprites/Shirt/shirt-2-2.png",
        "shirt-2-3": "_data001/Sprites/Shirt/shirt-2-3.png",
        "shirt-3-1": "_data001/Sprites/Shirt/shirt-3-1.png",
        "shirt-3-2": "_data001/Sprites/Shirt/shirt-3-2.png",
        "shirt-3-3": "_data001/Sprites/Shirt/shirt-3-3.png",

        "pants-1-1": "_data001/Sprites/Pants/pants-1-1.png",
        "pants-1-2": "_data001/Sprites/Pants/pants-1-2.png",
        "pants-1-3": "_data001/Sprites/Pants/pants-1-3.png",
        "pants-2-1": "_data001/Sprites/Pants/pants-2-1.png",
        "pants-2-2": "_data001/Sprites/Pants/pants-2-2.png",
        "pants-2-3": "_data001/Sprites/Pants/pants-2-3.png",
        "pants-3-1": "_data001/Sprites/Pants/pants-3-1.png",
        "pants-3-2": "_data001/Sprites/Pants/pants-3-2.png",
        "pants-3-3": "_data001/Sprites/Pants/pants-3-3.png",

        "shoes-1-1": "_data001/Sprites/Shoes/shoes-1-1.png",
        "shoes-1-2": "_data001/Sprites/Shoes/shoes-1-2.png",
        "shoes-1-3": "_data001/Sprites/Shoes/shoes-1-3.png",
        "shoes-2-1": "_data001/Sprites/Shoes/shoes-2-1.png",
        "shoes-2-2": "_data001/Sprites/Shoes/shoes-2-2.png",
        "shoes-2-3": "_data001/Sprites/Shoes/shoes-2-3.png",
        "shoes-3-1": "_data001/Sprites/Shoes/shoes-3-1.png",
        "shoes-3-2": "_data001/Sprites/Shoes/shoes-3-2.png",
        "shoes-3-3": "_data001/Sprites/Shoes/shoes-3-3.png"
    },
    {
		"solid": "_data001/Tileset/solid.png",
		"city": "_data001/Tileset/city.png",
		"forest": "_data001/Tileset/forest.png",
		"grassland": "_data001/Tileset/grassland.png",
		"house": "_data001/Tileset/house.png",
		"house-city": "_data001/Tileset/house-city.png",
		"inside-house": "_data001/Tileset/inside-house.png",
		"ship": "_data001/Tileset/ship.png",
		
		"menu-pokedex-bg": "_data001/Picture/menu-pokedex-bg.jpg",
		"menu-pokedex-panel": "_data001/Picture/panelCreate.png",
		"menu-button-1": "_data001/Picture/menu_button_1.png",
		"menu-button-active-1": "_data001/Picture/menu_button_active_1.png",
		"menu-options-bar-1": "_data001/Picture/menu_options_bar_1.png",
		"menu-button-disabled": "_data001/Picture/menu_button_disabled.png",
		"menu-button-disabled-active": "_data001/Picture/menu_button_active_disabled.png",
		"menu-options-disabled": "_data001/Picture/menu_options_disabled.png",
		
        "game-event-0": "_data001/Character/game-event/game-event-0.png",
		"game-event-1": "_data001/Character/game-event/game-event-1.png",
		"game-event-2": "_data001/Character/game-event/game-event-2.png",
    }
]
_FILE.resource.audio = [
    {
		
	},
    {
		"select": "_data001/Audio/BGS/select.ogg"
	},
    {
		"begin": "_data001/Audio/BGM/begin.mp3"
	},
    {
		"door": "_data001/Audio/BGS/door.ogg",
		
		"menu-select": "_data001/Audio/SE/menu-select.wav",
		"menu-disabled": "_data001/Audio/SE/menu-disabled.wav",
		"menu-save": "_data001/Audio/SE/menu-save.wav",
		
		"item-obtained": "_data001/Audio/ME/item-obtained.ogg",
	}
]

_FILE.cache = [];
_FILE.cache.image = [{}];
_FILE.cache.audio = [{}];

// DATA

_DATA.pokemon = [];
_DATA.pokemon = [
	{"id": 1, "nome": "BULBASAUR", "gender": {"male": 88.1, "female": 11.9}, "type1": "grass", "type2": "poison", "classification": "Seed Pokémon", "height": 0.7, "weight": 6.9, "capture_rate": 45, "ability": [1, 2], "exp_growth": 1059860, "base_happiness": 70, "egg_groups": ["Monster", "Grass"], "evolutionary_chain": [[0, 16], [0, 32], [1, 0]], "moves": {"level": [[0, 1], [3, 2], [7, 3], [9, 4], [13, 5], [13, 6], [15, 7], [19, 8], [21, 9], [25, 10], [27, 11], [31, 12], [33, 13], [34, 14]]}, "base_status": {"hp": 45, "attack": 49, "defense": 49, "sp_attack": 65, "sp_defense": 65, "speed": 45}}
];
_DATA.moves = [
	{"id": 1, "name": "Tackle", "type": "normal", "category": "physical", "PP": 35, "base_power": 50, "accuracy": 100}
];
	
}

_AC.functions = {
	resetCanvas: function(){
		_AC.functions.resetCanvas1();
		_AC.functions.resetCanvas2();
		_AC.functions.resetCanvas3();
		_AC.functions.resetCanvas4();
		_AC.functions.resetCanvas5();
		_AC.functions.resetCanvas6();
	},
	resetCanvas1: function(){
		_FILE.ctx.clearRect(0, 0, _FILE.canvas.width, _FILE.canvas.height);
        _FILE.ctx.beginPath();
	},
	resetCanvas2: function(){
		_FILE.ctx2.clearRect(0, 0, _FILE.canvas2.width, _FILE.canvas2.height);
		_FILE.ctx2.beginPath();
	},
	resetCanvas3: function(){
		_FILE.ctx3.clearRect(0, 0, _FILE.canvas3.width, _FILE.canvas3.height);
		_FILE.ctx3.beginPath();
	},
	resetCanvas4: function(){
		_FILE.ctx4.clearRect(0, 0, _FILE.canvas4.width, _FILE.canvas4.height);
		_FILE.ctx4.beginPath();
	},
	resetCanvas5: function(){
		_FILE.ctx5.clearRect(0, 0, _FILE.canvas5.width, _FILE.canvas5.height);
		_FILE.ctx5.beginPath();
	},
	resetCanvas6: function(){
		_FILE.ctx6.clearRect(0, 0, _FILE.canvas6.width, _FILE.canvas6.height);
		_FILE.ctx6.beginPath();
	},
	pauseGlobal: function(pause){
		_AC.menuMain.active = pause;
		_AC.characterData.active = pause;
	}
}
_AC.registerResource = {
    main: function(id){
        var tmp = [];
        var Length = Object.keys(_FILE.resource.image[id]).length;
        var array = Object.values(_FILE.resource.image[id]);
        var arrayString = Object.keys(_FILE.resource.image[id]);
        
        _FILE.cache.image[id] = {};
        
        for(i=0; i < Length; i++){
            tmp[i] = array[i];
            _FILE.cache.image[id][arrayString[i]] = new Image();
            _FILE.cache.image[id][arrayString[i]].src = tmp[i];
        }
        
        _FILE.cache.audio[id] = {};
        
        var tmp = [];
        var Length = Object.keys(_FILE.resource.audio[id]).length;
        var array = Object.values(_FILE.resource.audio[id]);
        var arrayString = Object.keys(_FILE.resource.audio[id]);
        
        for(i=0; i < Length; i++){
            tmp[i] = array[i];
            _FILE.cache.audio[id][arrayString[i]] = new Audio(array[i]);
        }
    }
}
_AC.drawButton = {
    _data: [],
    normalizador: [],
    clickFunction: [],
	mouseX: 0,
	mouseY: 0,
	gameUiObject: null,
    main: function(imgContent, imgHover, x, y, width, height, id, cursor, func, text, tx, ty, color, align, size, font){
        
        var img = imgContent;
        var img_hover = imgHover;

        // Variáveis
        _AC.drawButton._data[id] = {};
        _AC.drawButton._data[id]["img"] = img;
        _AC.drawButton._data[id]["img_hover"] = img_hover;
        _AC.drawButton._data[id]["x"] = x;
        _AC.drawButton._data[id]["y"] = y;
        _AC.drawButton._data[id]["width"] = width;
        _AC.drawButton._data[id]["height"] = height;
		_AC.drawButton._data[id]["cursorX"] = x;
		_AC.drawButton._data[id]["cursorY"] = y;
        _AC.drawButton._data[id]["cursor"] = cursor;
        _AC.drawButton._data[id]["func"] = func;
		
		
        // "COMEÇAR", 320, 272, "white", "center", 20, "DP"
		
        if(_USER.config.DEBUG){
            _FILE.ctx4.beginPath();
            _FILE.ctx4.lineWidth = "2";
            _FILE.ctx4.strokeStyle = "red";
            _FILE.ctx4.rect(_AC.drawButton._data[id]["cursorX"],_AC.drawButton._data[id]["cursorY"], _AC.drawButton._data[id]["width"], _AC.drawButton._data[id]["height"]);
            _FILE.ctx4.stroke();
        }

        if(!_AC.drawButton.normalizador[id]){
			_AC.drawButton.gameUiObject = function(e) {
				var mousePos = _AC.screen.getMouseXY(_FILE.canvas5, e);
				_AC.drawButton.mouseY = mousePos.y;
				_AC.drawButton.mouseX = mousePos.x;
				_AC.drawButton.update(id, text, tx, ty, color, align, size, font);
			};
			
		   document.getElementById("game-UI").addEventListener('mousemove', _AC.drawButton.gameUiObject);
		}
		
		 _AC.drawButton.update(id, text, tx, ty, color, align, size, font);
        _AC.drawButton.normalizador[id] = true;
    },
	update: function(id, text, tx, ty, color, align, size, font){
		
		if((_AC.drawButton.mouseX >= _AC.drawButton._data[id]["cursorX"] && _AC.drawButton.mouseX <= (_AC.drawButton._data[id]["cursorX"]+_AC.drawButton._data[id]["width"])) && (_AC.drawButton.mouseY >= _AC.drawButton._data[id]["cursorY"] && _AC.drawButton.mouseY <= (_AC.drawButton._data[id]["cursorY"]+_AC.drawButton._data[id]["height"]))){
			_FILE.ctx5.drawImage(_AC.drawButton._data[id]["img_hover"], _AC.drawButton._data[id]["x"], _AC.drawButton._data[id]["y"]);
			_FILE.canvas5.classList.add("cursor-"+_AC.drawButton._data[id]["cursor"]);
		} else {
			_FILE.ctx5.drawImage(_AC.drawButton._data[id]["img"], _AC.drawButton._data[id]["x"], _AC.drawButton._data[id]["y"]);
			_FILE.canvas5.classList.remove("cursor-"+_AC.drawButton._data[id]["cursor"]);
		}
		
		if(text != undefined) {
			_AC.screen.font(text, tx, ty, color, size, font, align);
		}
		
		_AC.drawButton.clickFunction[id] = function(evt) {
			if((_AC.drawButton.mouseX >= _AC.drawButton._data[id]["cursorX"] && _AC.drawButton.mouseX <= (_AC.drawButton._data[id]["cursorX"]+_AC.drawButton._data[id]["width"])) && (_AC.drawButton.mouseY >= _AC.drawButton._data[id]["cursorY"] && _AC.drawButton.mouseY <= (_AC.drawButton._data[id]["cursorY"]+_AC.drawButton._data[id]["height"]))){
				_AC.drawButton._data[id]["func"]();
			} 
		 };

		
		if(!_AC.drawButton.normalizador[id]) _FILE.canvas5.addEventListener('click', _AC.drawButton.clickFunction[id], false);
	},
    drawButtonDestroy: function(id){

		document.getElementById("game-UI").removeEventListener('mousemove', _AC.drawButton.gameUiObject);
        document.getElementById("game-UI").removeEventListener('click', _AC.drawButton.clickFunction[id], false);
        _AC.drawButton.normalizador[id] = false;
		
		document.querySelector(".canvas").removeChild(document.getElementById("game-UI"));
		var canvas = document.createElement("canvas");
		canvas.id = "game-UI";
		canvas.className = "game-UI";
		canvas.width = "640";
		canvas.height = "480";
		document.querySelector(".canvas").appendChild(canvas);
		_FILE.ctx5 = canvas.getContext("2d");
		_FILE.canvas5 = canvas;

    }
}
_AC.screen = {
    drawImage: function(img, x, y){
        if(_AC.main.initialize){
            _FILE.ctx.drawImage(img, x, y);
        } else {
			var imgSrc = new Image();
			imgSrc.src = img;
            imgSrc.onload = function(){
              _FILE.ctx.drawImage(imgSrc, x, y);
            }
            _AC.main.initialize = true;
        }
    },
	drawImagePriority: function(img, x, y){
		if(_AC.main.initialize){
            _FILE.ctx5.drawImage(img, x, y);
        } else {
			var imgSrc = new Image();
			imgSrc.src = img;
            imgSrc.onload = function(){
              _FILE.ctx5.drawImage(imgSrc, x, y);
            }
            _AC.main.initialize = true;
        }
	},
    drawCharacter: function(img, sx, sy, swidth, sheight, x, y, width, height){
		if(sy == 0) y--;
        _FILE.ctx2.drawImage(img, sx * (_CONFIG.system.sizeTile * 2), sy * _CONFIG.system.sizeTile , swidth * _CONFIG.system.sizeTile, sheight * _CONFIG.system.sizeTile, ((x * _CONFIG.system.sizeTile) - (_CONFIG.system.sizeTile/2)), y * _CONFIG.system.sizeTile , width * _CONFIG.system.sizeTile , height * _CONFIG.system.sizeTile);
    },
    drawMap: function(img, sx, sy, x, y, ground) {
		if(!ground){
		   _FILE.ctx.drawImage(img, sx * _CONFIG.system.sizeTile, sy * _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, x * _CONFIG.system.sizeTile, y * _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, _CONFIG.system.sizeTile);
		} else {
		   _FILE.ctx3.drawImage(img, sx * _CONFIG.system.sizeTile, sy * _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, x * _CONFIG.system.sizeTile, y * _CONFIG.system.sizeTile, _CONFIG.system.sizeTile, _CONFIG.system.sizeTile);
		}
        
    },
	rect: function(x, y, width, height, color){
		if(color == undefined) color = "black";
		_FILE.ctx5.beginPath();
		_FILE.ctx5.fillStyle = color;
		_FILE.ctx5.fillRect(x, y, width, height);
		_FILE.ctx5.stroke();
	},
    getMouseXY: function(canvas, evt){
        var rect = _FILE.canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
    },
    font: function(text, x, y, color, size, font, align){
        if(color == undefined) color = "black";
        if(font == undefined) font = "DP";
        if(align == undefined) align = "center";
		if(size == undefined) size = "18px"; else size = size+"px";

		_FILE.ctx5.font = size+" "+font;
		_FILE.ctx5.fillStyle = color;
		_FILE.ctx5.textAlign = align;
		_FILE.ctx5.fillText(text, x, y);   
        
    },
    message: function(text, text2, text3, id, color, skin){
        
         mensagem = true;
        _CONFIG.message.mensagemID = id;
        
        if(color == undefined) color = "white";
        if(skin == undefined) skin = 1;
        if(id == undefined) id = 0;

        if(skin == 1){
            _AC.screen.drawImagePriority(_FILE.cache.image[1]["dialog"], 0, 310);
        } else if(skin == 2){
            _AC.screen.drawImagePriority(_FILE.cache.image[1]["dialog"], 0, 310);
            _AC.screen.drawImagePriority(_FILE.cache.image[1]["arrow-bottom"], 580, 425);
        } else if(skin == 3){
			_AC.screen.drawImagePriority(_FILE.cache.image[1]["dialog"], 0, 310);
		}
        
        _FILE.ctx5.font = "22px DP";
        _FILE.ctx5.fillStyle = color;
        _FILE.ctx5.textAlign = "left";
        _FILE.ctx5.fillText(text, 50, 360);
        
        if(text2 != undefined) _FILE.ctx5.fillText(text2, 50, 390);  
        if(text3 != undefined) _FILE.ctx5.fillText(text3, 50, 420); 
        
    },
    fadeIn: function(){
		// CTX
		setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.2)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 100);
        setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.4)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 150);
        setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.6)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 200);
        setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.8)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 250);
        setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 1)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 300);
    }, 
    fadeOut: function(){

		// setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.8)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 100);
        // setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.6)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 150);
        // setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.4)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 200);
        // setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0.2)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 250);
        // setTimeout(function() {_FILE.ctx5.fillStyle = 'rgba(0,0,0, 0)';_FILE.ctx5.fillRect(0, 0, 640, 480)}, 300);
        _FILE.ctx5.fillStyle = 'rgba(0,0,0, 0)';_FILE.ctx5.fillRect(0, 0, 640, 480)
    },
	menuFadeIn: function(){
		// ctx5
		setTimeout(function() {_FILE.ctx4.fillStyle = 'rgba(0,0,0, 0.2)';_FILE.ctx4.fillRect(0, 0, 640, 480)}, 100);
        setTimeout(function() {_FILE.ctx4.fillStyle = 'rgba(0,0,0, 0.4)';_FILE.ctx4.fillRect(0, 0, 640, 480)}, 150);
	}
}
_AC.input = {
    initialize: false,
    include: false,
    Shift: false,
    backSpace: 0,
    main: function(){
        if(!this.initialize){
            window.addEventListener('keydown',this.keyboardName,false);
            this.initialize = true;
        }
    },
    keyboardName: function(e){
        if(_AC.sceneNew.input){
            // initialize
            _CONFIG.scene.alert = "";
            // Letter

            codigo_tecla = e.keyCode?e.keyCode:e.which;
            tecla_shift = e.shiftKey?e.shiftKey:((codigo_tecla == 16)?true:false);
            if(((codigo_tecla >= 65 && codigo_tecla <= 90) && !tecla_shift) || ((codigo_tecla >= 97 && codigo_tecla <= 122) && tecla_shift)) {
                _AC.input.Shift = false;
            }
            else {
                _AC.input.Shift = true;
            }
            switch(e.keyCode){
                    // Line 1
                    case 81: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "q"; }else{ _AC.sceneNew.Nickname += "Q"; }; this.include = true; break;
                    case 87: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "w"; }else{ _AC.sceneNew.Nickname += "W"; }; this.include = true; break;
                    case 69: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "e"; }else{ _AC.sceneNew.Nickname += "E"; }; this.include = true; break;
                    case 82: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "r"; }else{ _AC.sceneNew.Nickname += "R"; }; this.include = true; break;
                    case 84: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "t"; }else{ _AC.sceneNew.Nickname += "T"; }; this.include = true; break;
                    case 89: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "y"; }else{ _AC.sceneNew.Nickname += "Y"; }; this.include = true; break;
                    case 85: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "u"; }else{ _AC.sceneNew.Nickname += "U"; }; this.include = true; break;
                    case 73: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "i"; }else{ _AC.sceneNew.Nickname += "I"; }; this.include = true; break;
                    case 79: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "o"; }else{ _AC.sceneNew.Nickname += "O"; }; this.include = true; break;
                    case 80: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "p"; }else{ _AC.sceneNew.Nickname += "P"; }; this.include = true; break;
                    // Line 2
                    case 65: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "a"; }else{ _AC.sceneNew.Nickname += "A"; }; this.include = true; break;
                    case 83: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "s"; }else{ _AC.sceneNew.Nickname += "S"; }; this.include = true; break;
                    case 68: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "d"; }else{ _AC.sceneNew.Nickname += "D"; }; this.include = true; break;
                    case 70: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "f"; }else{ _AC.sceneNew.Nickname += "F"; }; this.include = true; break;
                    case 71: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "g"; }else{ _AC.sceneNew.Nickname += "G"; }; this.include = true; break;
                    case 72: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "h"; }else{ _AC.sceneNew.Nickname += "H"; }; this.include = true; break;
                    case 74: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "j"; }else{ _AC.sceneNew.Nickname += "J"; }; this.include = true; break;
                    case 75: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "k"; }else{ _AC.sceneNew.Nickname += "K"; }; this.include = true; break;
                    case 76: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "l"; }else{ _AC.sceneNew.Nickname += "L"; }; this.include = true; break;
                    case 186: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "ç"; }else{ _AC.sceneNew.Nickname += "Ç"; }; this.include = true; break;
                    // Line 3
                    case 90: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "z"; }else{ _AC.sceneNew.Nickname += "Z"; }; this.include = true; break;
                    case 88: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "x"; }else{ _AC.sceneNew.Nickname += "X"; }; this.include = true; break;
                    case 67: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "c"; }else{ _AC.sceneNew.Nickname += "C"; }; this.include = true; break;
                    case 86: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "v"; }else{ _AC.sceneNew.Nickname += "V"; }; this.include = true; break;
                    case 66: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "b"; }else{ _AC.sceneNew.Nickname += "B"; }; this.include = true; break;
                    case 78: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "n"; }else{ _AC.sceneNew.Nickname += "N"; }; this.include = true; break;
                    case 77: if(!_AC.input.Shift){ _AC.sceneNew.Nickname += "m"; }else{ _AC.sceneNew.Nickname += "M"; }; this.include = true; break;
                    // Line 4
                    case 49: _AC.sceneNew.Nickname += "1"; this.include = true; break;
                    case 50: _AC.sceneNew.Nickname += "2"; this.include = true; break;
                    case 51: _AC.sceneNew.Nickname += "3"; this.include = true; break;
                    case 52: _AC.sceneNew.Nickname += "4"; this.include = true; break;
                    case 53: _AC.sceneNew.Nickname += "5"; this.include = true; break;
                    case 54: _AC.sceneNew.Nickname += "6"; this.include = true; break;
                    case 55: _AC.sceneNew.Nickname += "7"; this.include = true; break;
                    case 56: _AC.sceneNew.Nickname += "8"; this.include = true; break;
                    case 57: _AC.sceneNew.Nickname += "9"; this.include = true; break;
                    case 48: _AC.sceneNew.Nickname += "0"; this.include = true; break;
                    // Line 5
                    case 97: _AC.sceneNew.Nickname += "1"; this.include = true; break;
                    case 98: _AC.sceneNew.Nickname += "2"; this.include = true; break;
                    case 99: _AC.sceneNew.Nickname += "3"; this.include = true; break;
                    case 100: _AC.sceneNew.Nickname += "4"; this.include = true; break;
                    case 101: _AC.sceneNew.Nickname += "5"; this.include = true; break;
                    case 102: _AC.sceneNew.Nickname += "6"; this.include = true; break;
                    case 103: _AC.sceneNew.Nickname += "7"; this.include = true; break;
                    case 104: _AC.sceneNew.Nickname += "8"; this.include = true; break;
                    case 105: _AC.sceneNew.Nickname += "9"; this.include = true; break;
                    case 96: _AC.sceneNew.Nickname += "0"; this.include = true; break;

                    // Backspace
                    case 8: 
                        if(_AC.sceneNew.Nickname.length != 0){
                            _AC.input.backSpace = _AC.sceneNew.Nickname[_AC.sceneNew.Nickname.length- 1];
                        }
                    this.include = true;
                    break;
            }

            if(this.include){
                var dft = 9.2;

                if(_AC.input.backSpace == 0){
                    if(!_AC.input.Shift){
                        switch(e.keyCode){
                                // Line 1
                                case 84: var dft = 7.65; break;
                                case 73: var dft = 3.04; break;
                                // Line 2
                                case 70: var dft = 7.65; break;
                                case 74: var dft = 6.15; break;
                                case 76: var dft = 4.6; break;
                        }
                    }
                } else {
                        switch(_AC.input.backSpace){
                                // Line 1
                                case "t": var dft = 7.65; break;
                                case "i": var dft = 3.04; break;
                                // Line 2
                                case "f": var dft = 7.65; break;
                                case "j": var dft = 6.15; break;
                                case "l": var dft = 4.6; break;
                        }
                    _AC.input.backSpace = 0;
                }

                if(e.keyCode == 8){
                    if(_AC.sceneNew.Nickname.length != 0){
                        _AC.sceneNew.clickWaitPos -= dft;
                        _AC.sceneNew.Nickname = _AC.sceneNew.Nickname.substring(0,(_AC.sceneNew.Nickname.length - 1));
                        _AC.input.backSpace = false;
                    }
                } else {
                    _AC.sceneNew.clickWaitPos += dft;
                }

                // Alert

                this.include = false;
            } 
        }
    }
    
}
_AC.audio = {
    file: null,
    main: function(audio){
        _AC.audio.file = new Audio(audio);
        _AC.audio.file.volume = _USER.config.volumeEffect;
        _AC.audio.file.play();
    }
}

// * =================================
// * =================================
// FUNCTION
// * =================================
{
window.cancelRequestAnimFrame = ( function() {
    return window.cancelAnimationFrame          ||
        window.webkitCancelRequestAnimationFrame    ||
        window.mozCancelRequestAnimationFrame       ||
        window.oCancelRequestAnimationFrame     ||
        window.msCancelRequestAnimationFrame        ||
        clearTimeout
} )();

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       || 
        window.webkitRequestAnimationFrame || 
        window.mozRequestAnimationFrame    || 
        window.oRequestAnimationFrame      || 
        window.msRequestAnimationFrame     || 
        function(callback, element){
            return window.setTimeout(callback, 1000 / 60);
        };
})();

window.countFPS = (function () {
  var lastLoop = (new Date()).getMilliseconds();
  var count = 1;
  var fps = 0;

  return function () {
    var currentLoop = (new Date()).getMilliseconds();
    if (lastLoop > currentLoop) {
      fps = count;
      count = 1;
    } else {
      count += 1;
    }
    lastLoop = currentLoop;

    return fps;
  };
}());
	
}
_AC.parallax = {
    px: 0,
    main: function(image1, image2){
        _AC.screen.drawImage(image1, this.px, 0);
        _AC.screen.drawImage(image2, (this.px+640), 0);

        this.px--;

        if(this.px == -640){
          this.px = 0;
        }
    }
}
_AC.fps = {
	main: function(){
		_USER.info.FPS = countFPS();
        var final = _USER.info.FPS.toString() + "/60";
        _AC.screen.font(final, 30, 30, "black", 20);
	}
}
_AC.saveData = {
	deg: 0,
	active: false,
	callback: null,
	main: function(callback){
		if(callback != undefined) _AC.saveData.callback = callback;
		_AC.saveData.active = true;
		_FILE.canvas6.classList.add("game-loading-active");
		_FILE.ctx6.fillStyle = 'rgba(0,0,0, 0.6)';
		_FILE.ctx6.fillRect(0, 0, 640, 480);
		this.build();
	},
	build: function(){
		_FILE.ctx6.drawImage(_FILE.cache.image[0]["loading"], 300, 220, 30, 30);
		this.server();
	},
	server: function(){
		var data = {
			// menu_options
			"menu_options": JSON.stringify(_USER.config.menu_options),
			"volumeEffect": _USER.config.volumeEffect,
			"volumeSom": _USER.config.volumeSom,
			
			// network
			"positionX": _USER.map.positionX,
			"positionY": _USER.map.positionY,
			"map": _USER.map.name,
			"gameQuests": JSON.stringify(_USER.map.gameQuests),
			"gameEvents": JSON.stringify(_USER.map.gameEvents),
			
			// Nickname
			"nickname": _USER.info.id
		}	
		var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
				if(xmlhttp.responseText == "true"){
					_AC.saveData.destroy();
				}
            }   
        };

        xmlhttp.open("POST", "_data001/Server/player/save_server.php?DATA="+Base64.encode(JSON.stringify(data)), true);
        xmlhttp.send();
	},
	destroy: function(){
		_FILE.canvas6.classList.remove("game-loading-active");
		_AC.functions.resetCanvas6();
		_AC.saveData.active = false;
		if(_AC.saveData.callback != undefined) _AC.saveData.callback();
	}
}
// * =================================
// * =================================
// _MAP
// * =================================
_AC.gameEvent = {
	pause: false,
	eventMapObject: null,
	eventMap: function(){
		switch(_USER.map.name){
			case "zethyn": _AC.gameEvent.eventMapObject = _MAP.zethyn; break;
			case "zethyn_laboratory_main": _AC.gameEvent.eventMapObject = _MAP.zethyn_laboratory_main; break;
			case "zethyn_laboratory_room_main": _AC.gameEvent.eventMapObject = _MAP.zethyn_laboratory_room_main;
				break;
			case "zethyn_laboratory_room_pokemon": _AC.gameEvent.eventMapObject = _MAP.zethyn_laboratory_room_pokemon;
				break;
		}
	},
	main: function(pressButton){
		if(pressButton == undefined) pressButton = false;
		this.eventMap();
		_AC.gameEvent.eventMapObject.main(pressButton);
	},
	npcGraphic: function(above, condX, condY){
		this.eventMap();
		_AC.gameEvent.eventMapObject.npcGraphic(above, condX, condY);
	}
}
_AC.gameEvent.functions = {
	npcGraphic: function(className, above, condX, condY){
		
		switch(condX){
			case 0: var box_x = (className.npcEvent[0][0] - (_USER.map.positionX - 9)); break;
			case 1: var box_x = (className.npcEvent[0][0]); break;
		}
		switch(condY) {
			case 0: var box_y = (className.npcEvent[0][1] - (_USER.map.positionY - 6)); break;
			case 1: var box_y = (className.npcEvent[0][1]); break;
		}
		
		_AC.screen.drawCharacter(_FILE.cache.image[3][className.npcEvent[0][2]], className.npcEvent[0][3], above, 2, 1, box_x, box_y, 2, 1);
	},
	teleportEvent: function(map, x, y){
		_AC.screen.fadeIn();
		var audio = new Audio(_FILE.resource.audio[3]["door"]);
		audio.volume = _USER.config.volumeEffect;
		audio.play();
		setTimeout(function(){
			_USER.map.positionX = x;
			_USER.map.positionY = y;
			_USER.map.name = map;
			_AC.sceneMap.mapJSON();
			_AC.screen.fadeOut();
		}, 300);
	},
	destroyNPC: function(className){
		_CONFIG.message.mensagemID = 0;
		className.npcEvent[0][4] = false;
	}
}

_AC.gameEvent.eventOptions = _AC.gameEvent.eventOptions || {};
_AC.gameEvent.eventOptions.npc_talk = {
	config: {
		object: null,
		message_obj: [],
		press_button: undefined,
		event: null,
		save_state: false,
		sleep_active: false
	},
	main: function(config){

		if(config !== undefined){
			function jsonConcat(o1, o2) {
			 for (var key in o2) {
			  o1[key] = o2[key];
			 }
			 return o1;
			}
			var output = {};
			output = jsonConcat(output, _AC.gameEvent.eventOptions.npc_talk.config);
			output = jsonConcat(output, config);
			_AC.gameEvent.eventOptions.npc_talk.config = output;
		}

		if(!_AC.gameEvent.pause){
			
			if(this.config.press_button == undefined) this.config.press_button = false;
			if(this.config.press_button){
				switch(_AC.characterData.direction){
						case 0: // Down
							if((_USER.map.positionY + 1) == this.config.object.npcEvent[0][1] && _USER.map.positionX == this.config.object.npcEvent[0][0] && this.config.object.npcEvent[0][4] == false) {
								this.config.object.npcEvent[0][4] = true;
								this.config.object.npcEvent[0][3] = 3; 
							} 
						break;
						case 1: // Left
							if((_USER.map.positionX-1) == this.config.object.npcEvent[0][0] && _USER.map.positionY == this.config.object.npcEvent[0][1] && this.config.object.npcEvent[0][4] == false){
								this.config.object.npcEvent[0][4] = true;
								this.config.object.npcEvent[0][3] = 2;
							} 
						break;  // Right
						case 2: 
							if((_USER.map.positionX+1) == this.config.object.npcEvent[0][0] && _USER.map.positionY == this.config.object.npcEvent[0][1] && this.config.object.npcEvent[0][4] == false){
								this.config.object.npcEvent[0][4] = true;
								this.config.object.npcEvent[0][3] = 1;
							} 
						break; // Up
						case 3: 
							if((_USER.map.positionY-1) == this.config.object.npcEvent[0][1] && _USER.map.positionX == this.config.object.npcEvent[0][0] && this.config.object.npcEvent[0][4] == false) {
								this.config.object.npcEvent[0][4] = true;
								this.config.object.npcEvent[0][3] = 0;
							}
						break;
					}


					_AC.sceneMap.drawMap(true);

					if(this.config.object.npcEvent[0][4]){
						_AC.menuMain.active = true;
						_AC.characterData.active = true;
						_AC.audio.main(_FILE.resource.audio[1]["select"]);
						
						if(_CONFIG.message.mensagemID < this.config.message_obj.length){
							
							if(this.config.message_obj[_CONFIG.message.mensagemID]["item_obtained"] != undefined){
								
								_AC.audio.main(_FILE.resource.audio[3]["item-obtained"]);
								_AC.screen.message(this.config.message_obj[_CONFIG.message.mensagemID]["message"][0], this.config.message_obj[_CONFIG.message.mensagemID]["message"][1], this.config.message_obj[_CONFIG.message.mensagemID]["message"][2], _CONFIG.message.mensagemID, "white", 3);
								this.item_obtained(this.config.message_obj[_CONFIG.message.mensagemID]["item_obtained"]);
								
								_AC.characterData.active = false;
								setTimeout(function(){
									_AC.screen.drawImagePriority(_FILE.cache.image[1]["arrow-bottom"], 580, 425);
									_AC.characterData.active = true;
								}, 3000);
								
							} else {
								_AC.screen.message(this.config.message_obj[_CONFIG.message.mensagemID]["message"][0], this.config.message_obj[_CONFIG.message.mensagemID]["message"][1], this.config.message_obj[_CONFIG.message.mensagemID]["message"][2], _CONFIG.message.mensagemID, "white", 2);
								
							}
								
							_CONFIG.message.mensagemID++;
						} else {
							if(this.config.event != undefined && this.config.event != "") this.config.event();
							if(this.config.save_state) {
								_AC.saveData.main(_AC.gameEvent.functions.destroyNPC(this.config.object))
							} else {
								_CONFIG.message.mensagemID = 0;
								_AC.menuMain.active = false;
								_AC.characterData.active = false;
								this.config.object.npcEvent[0][4] = false;
							}
						}

					} else {
						_AC.menuMain.active = false;
						_AC.characterData.active = false;
					}

				} else {
					_AC.menuMain.active = false;
					_AC.characterData.active = false;
					 this.config.object.npcEvent[0][4] = false;
				}
		}
	},
	item_obtained: function(config_item){
		switch(config_item[0]){
			case 2: config_item[1](); break;
		}
	}
}

_MAP.zethyn = {
	npcEvent: [[16, 74, "game-event-0", 0, false]],
	main: function(pressButton){
		_AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [{message: ["Essa é a ilha de Zethyn, o lugar onde você", "procurará pelo professor Chogon!"]}], "press_button": pressButton});
		
		// Evento 1 - Teleporte para o Laboratório Zethyn
		if(_USER.map.positionX == 86 && _USER.map.positionY == 24){
			_AC.gameEvent.functions.teleportEvent("zethyn_laboratory_main", 15, 28);
		}
	},
	npcGraphic: function(above, condX, condY){

		switch(condX){
			case 0: var box_x = (_MAP.zethyn.npcEvent[0][0] - (_USER.map.positionX - 9)); break;
			case 1: var box_x = (_MAP.zethyn.npcEvent[0][0]); break;
		}
		switch(condY) {
			case 0: var box_y = (_MAP.zethyn.npcEvent[0][1] - (_USER.map.positionY - 6)); break;
			case 1: var box_y = (_MAP.zethyn.npcEvent[0][1]); break;
		}
		
		_AC.screen.drawCharacter(_FILE.cache.image[3][_MAP.zethyn.npcEvent[0][2]], _MAP.zethyn.npcEvent[0][3], above, 2, 1, box_x, box_y, 2, 1);

	}
}
_MAP.zethyn_laboratory_main = {
	main: function(pressButton){
		
		// Evento 1 - Teleporte para Zethyn
		if(_USER.map.positionX == 15 && _USER.map.positionY == 29){
			_AC.gameEvent.functions.teleportEvent("zethyn", 86, 25);
		}
		// Evento 2 - Teleporte para o Quarto principal do Laboratório
		if(_USER.map.positionX == 15 && _USER.map.positionY == 2){
			_AC.gameEvent.functions.teleportEvent("zethyn_laboratory_room_main", 14, 28);
		}
		
		// Evento 3 - Teleporte para Zethyn
		if(_USER.map.positionX == 46 && _USER.map.positionY == 2){
			_AC.gameEvent.functions.teleportEvent("zethyn_laboratory_room_pokemon", 14, 28);
		}
	},
	npcGraphic: function(above){
		// Empty
	}
}
_MAP.zethyn_laboratory_room_main = {
	npcEvent: [[12, 6, "game-event-1", 0, false]],
	main: function(pressButton){
		// Evento 1 - Conversa com Pietro
		
		if(_USER.map.gameQuests[0] == 0){

			_AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [
				{message: ["Olá "+_USER.info.id+"!", "Suponho que esteja aqui para", "iniciar sua jornada no continente de Zethyn!"]}, 
				{message: ["Aqui é o Laboratório e Escola de Chiek! Neste lugar você", "terá suas primeiras instruções e também aprenderá o básico", "do mundo pokémon e do continente de Zethyn!"]},
				{message: ["No momento, ainda não poderei te entregar o Cartão de", " Treinador! Ela está disponível apenas para treinadores", "já registrados. Para se registrar, você precisará passar"]},
				{message: ["por alguns testes de qualificação. Eu sei que deve estar", "ansioso pra pegar o seu pokémon inicial e começar a sua", "jornada. Siga para a sala à direita desta e encontrará o"]},
				{message: ["O instrutor Olav! Ele irá te auxiliar sobre isto!", "Para auxiliá-lo, estarei te dando esta PokéAgenda"]},
				{"message": ["Você obteve a PokéAgenda"], "item_obtained": [2, function(){_USER.config.menu_options[0] = 1}]},
				{"message": ["A PokéAgenda é um objeto criado para coletar dados de", "Pokémons que encontrar durante a sua jornada.", "Além disso, ela te trará outras informações importantes"]},
				{"message": ["Boa sorte!"]}
			], "press_button": pressButton, save_state: true, "event": function(){
				_USER.map.gameQuests[0] = 2;
			}});
			
		} else if(_USER.map.gameQuests[0] > 0){
			
			_AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [{message: ["Eu sei que deve estar ansioso pra pegar o ", "seu pokémon inicial e começar a sua", "jornada! Siga para a sala à direita desta e encontrará o"]}, {message: ["O instrutor Olav! Ele irá te auxiliar sobre isto!"]}], "press_button": pressButton});
			
		}

		// Evento 2 - Teleporte para a zethyn_laboratory_main
		if((_USER.map.positionX == 14 && _USER.map.positionY == 29) || (_USER.map.positionX == 15 && _USER.map.positionY == 29)){
			_AC.gameEvent.functions.teleportEvent("zethyn_laboratory_main", 15, 3);
		}
	},
	npcGraphic: function(above, condX, condY){
		_AC.gameEvent.functions.npcGraphic(this, above, condX, condY);
	}
}
_MAP.zethyn_laboratory_room_pokemon = {
	npcEvent: [[16, 8, "game-event-2", 3, false]],
	main: function(pressButton){
		
		// Evento 1 - Conversa com Olav
		if(_USER.map.gameQuests[0] == 1){
			
		   _AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [{"message": ["Você foi enviado pelo professor para obter seu primeiro", "Pokémon?! Ok! Como você já tem uma  Pokéagenda, eu", " posso afirmar isso! Te darei um de nossos Unows! Unows são"]}, {"message": ["Pokémons comuns nessa ilha! Por isso é uma ilha tão", "interessante para nossos estudos!"]}, {"message": ["Você obteve um BULBASAUR!"]}], "press_button": pressButton, save_state: true, "event": function(){
				_USER.map.gameQuests[0] = 2;
			}});
			
		} else if(_USER.map.gameQuests[0] == 0){

			_AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [{"message": ["O professor? Ele está na sala à esquerda!"]}], "press_button": pressButton});
			
		} else if(_USER.map.gameQuests[0] >= 2){

			_AC.gameEvent.eventOptions.npc_talk.main({"object": this, "message_obj": [{"message": ["A pesquisa com os Unows está sendo um sucesso!", "Nos ajude coletando dados com sua Pokéagenda!"]}], "press_button": pressButton});

		}
		
		// Evento 2 - Teleporte para a zethyn_laboratory_main
		if((_USER.map.positionX == 14 && _USER.map.positionY == 29) || (_USER.map.positionX == 15 && _USER.map.positionY == 29)){
			_AC.gameEvent.functions.teleportEvent("zethyn_laboratory_main", 46, 3);
		}
		
	},
	npcGraphic: function(above, condX, condY){
		_AC.gameEvent.functions.npcGraphic(this, above, condX, condY);
	}
}
// * =================================
// SCENES
// * =================================

_AC.sceneLoad = {
    id: 0,
    loadUser: false,
    sceneDestroy: false,
    main: function(){
        _AC.registerResource.main(1);
        _AC.sceneLoad.update();
		_AC.sceneLoad.draw();
    },
	draw: function(){
        console.log(_USER.info.id)
		if(_USER.info.id == ""){
			setTimeout(function(){_AC.drawButton.main(_FILE.cache.image[1]["btn"], _FILE.cache.image[1]["btnHover"], 277, 230, 80, 30, 0, "pointer", function(){
				_AC.sceneLoad.id = 1;
				_AC.sceneLoad.sceneDestroy = true;
			}, "CRIAR", 316, 252, "white", "center", 20, "DP")}, 100)

		} else {
			 if(!_AC.sceneLoad.loadUser){
				 _AC.sceneLoad.loadUser = true;
			 } 
			
			_AC.drawButton.main(_FILE.cache.image[1]["btn"], _FILE.cache.image[1]["btnHover"], 280, 250, 80, 30, 1, "pointer", function(){
				_AC.sceneLoad.id = 2;
				_AC.sceneLoad.sceneDestroy = true;
			}, "COMEÇAR", 320, 272, "white", "center", 20, "DP");
		}
	},
    update: function(){
		_AC.functions.resetCanvas1();
		_AC.functions.resetCanvas2();
        _AC.parallax.main(_FILE.cache.image[1]["load"], _FILE.cache.image[1]["load"]);
		
		if(_AC.sceneLoad.sceneDestroy){
            _AC.screen.fadeIn();
			_AC.drawButton.drawButtonDestroy(0);
			_AC.drawButton.drawButtonDestroy(1);
            _AC.audio.main(_FILE.resource.audio[1]["select"]);
            if(_AC.sceneLoad.id == 1){
                setTimeout(function(){_AC.sceneNew.main()}, 100);
            } else if(_AC.sceneLoad.id == 2) {
                setTimeout(function(){_AC.sceneMap.begin()}, 100);
            }
			
            _AC.sceneLoad.sceneDestroy = false;
        }
		
		if(_USER.info.id == ""){
			_AC.screen.drawImagePriority(_FILE.cache.image[1]["null"], 300, 150);
		} else {
			_AC.screen.drawCharacter(_FILE.cache.image[0]["mainCharacter"], 0, 0, 2, 2, 9.5, 6, 2, 2);
		}
		
        _CONFIG.message.update = requestAnimFrame(_AC.sceneLoad.update);
    }
}
_AC.sceneNew = {
    actorID: 0,
    input: false,
    Nickname: "",
    clickWaitPos: 360,
    NicknameAll: "",
    searchNickname: "",
    choiceSkin: 0,
    choiceHair: 0,
    choiceShirt: 0,
    choicePants: 0,
    choiceShoes: 0,
    choiceSkeleton: 0,
    endScene: false,
    main: function(){
        cancelRequestAnimFrame(_CONFIG.message.update);
        _AC.registerResource.main(2);
        _AC.sceneNew.update();
        setTimeout(function(){_CONFIG.message.mensagemID = 1; _CONFIG.scene.id = 1}, 100);
    },
    createCharacter: function(nickname, sex, skin, shirt, pants, shoes, skeleton){
        var xmlhttp = new XMLHttpRequest();
        var data = nickname+","+sex+","+skin+","+shirt+","+pants+","+shoes+","+skeleton;
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                _USER.info.id = nickname;
				_USER.map.id = "zethyn";
                _FILE.resource.image[0]["mainCharacter"] = "_dataserver/game/Characters/"+_USER.info.id+".png";
				_AC.registerResource.main(0);
				
                setTimeout(function(){
					_AC.sceneNew.destroy();
					_AC.functions.resetCanvas();
					_AC.sceneMap.begin()
				}, 100);
            }
        }
        xmlhttp.open("POST", "_data001/Server/createCharacter.php?value="+data, true);
        xmlhttp.send();
    },
    update: function(){
        
        _AC.functions.resetCanvas();
        _AC.parallax.main(_FILE.cache.image[2]["newload"], _FILE.cache.image[2]["newload"]);

        if(_CONFIG.message.mensagemID == 0){
            _AC.screen.message("Bem-vindo! Você entrará na janela principal de criação do", "seu personagem!", "", 0);
        }
        
        if(_CONFIG.scene.id != 0){
            
        _AC.screen.drawImage(_FILE.cache.image[2]["panelCreate"], 320, 25); // Painel3
            
        _AC.drawButton.main(_FILE.cache.image[2]["arrow-16-left"], _FILE.cache.image[2]["arrow-16-left"], 410, 403, 12, 16, 5, "pointer", function(){
            if(_CONFIG.scene.id != 1){
                 _CONFIG.scene.id--;
                _AC.sceneNew.destroy();
            }
        }); // Arrow-left
            
        if(_CONFIG.scene.id == 1) {_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkboxfull"], 440, 406);}else{_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkbox"], 440, 406);} // Indicadores
        if(_CONFIG.scene.id == 2) {_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkboxfull"], 460, 406);}else{_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkbox"], 460, 406);} // Indicadores
        if(_CONFIG.scene.id == 3) {_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkboxfull"], 480, 406);}else{_AC.screen.drawImage(_FILE.cache.image[2]["mini-checkbox"], 480, 406);} // Indicadores
            
        _AC.drawButton.main(_FILE.cache.image[2]["arrow-16-right"], _FILE.cache.image[2]["arrow-16-right"], 510, 403, 12, 16, 6, "pointer", function(){
            if(_CONFIG.scene.id != 3){
                if(_AC.sceneNew.choiceSkin == 0) _AC.sceneNew.choiceSkin = 1;
                if(_AC.sceneNew.choiceSkeleton == 0) _AC.sceneNew.choiceSkeleton = 1;
                _AC.sceneNew.input = false;
                _CONFIG.scene.id++;
                _AC.sceneNew.destroy();
            }
        }); // Arrow-Right

            
        if(_CONFIG.scene.id == 1){
            
            _AC.screen.drawImage(_FILE.cache.image[2]["maleActor"], 380, 100);
            _AC.screen.drawImage(_FILE.cache.image[2]["femaleActor"], 500, 100);
            
            _AC.drawButton.main(_FILE.cache.image[2]["checkbox"], _FILE.cache.image[2]["checkboxHover"], 400, 98, 23, 22, 0, "pointer", function(){
                _AC.sceneNew.actorID = 1;
				_AC.sceneNew.destroy();
            });
            
            _AC.drawButton.main(_FILE.cache.image[2]["checkbox"], _FILE.cache.image[2]["checkboxHover"], 520, 98, 23, 22, 1, "pointer", function(){
                _AC.sceneNew.actorID = 2;
				_AC.sceneNew.destroy();
            });
            
            if(_AC.sceneNew.actorID == 1){
                _AC.screen.drawImagePriority(_FILE.cache.image[2]["checkboxFull"], 400, 98);
            } else if(_AC.sceneNew.actorID == 2){
                _AC.screen.drawImagePriority(_FILE.cache.image[2]["checkboxFull"], 520, 98);
            }
            
            _AC.screen.font("APELIDO:", 388, 185, "white", 20);
            
            _AC.drawButton.main(_FILE.cache.image[2]["nickinput"], _FILE.cache.image[2]["nickinput"], 350, 200, 238, 30, 3, "text", function(){
                _AC.sceneNew.input = true;
				_AC.sceneNew.destroy();
            });
            
            if(_AC.sceneNew.input) {
                if(_CONFIG.scene.cont <= 80){
                    _AC.screen.drawImage(_FILE.cache.image[2]["clickWait"], _AC.sceneNew.clickWaitPos, 203);
                } else {
                    if(_CONFIG.scene.cont >= 160){
                    _CONFIG.scene.cont = 0;
                    }
                }
                
                _AC.input.main();
            } 
            
            _AC.screen.font(_AC.sceneNew.Nickname, 360, 222, "white", 20, "DP", "left");
            
            _AC.drawButton.main(_FILE.cache.image[2]["search"], _FILE.cache.image[2]["searchHover"], 353, 250, 232, 32, 4, "pointer", function(){
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						 _AC.sceneNew.searchNickname = xmlhttp.responseText;
						if(_AC.sceneNew.searchNickname == "true"){
							_CONFIG.scene.alert = "Apelido em uso!";
						} else {
							if(_AC.sceneNew.Nickname.length < 3){
								_CONFIG.scene.alert = "Mínimo de 3 dígitos!";   
							} else {
								_CONFIG.scene.alert = "Apelido disponível!";
							}
						}
					}
				};
				xmlhttp.open("POST", "_data001/Server/searchNickname.php?value="+_AC.sceneNew.Nickname, true);
				xmlhttp.send();
            }, "VERIFICAR", 470, 274, "white", "center", 20, "DP"); // Botão de verificação

            _AC.screen.font(_CONFIG.scene.alert, 470, 350, "white", 20); // Alerta sobre o nickname
            
            _CONFIG.scene.cont++;
        }
            
        if(_CONFIG.scene.id == 2){
            // SKIN =========
            {
                if(_AC.sceneNew.choiceSkin != 1){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 415, 105, 12, 16, 7, "pointer", function(){
                        if(_AC.sceneNew.choiceSkin >= 1){
                            _AC.sceneNew.choiceSkin--;
							_AC.sceneNew.destroy();
                        }
                    }); // Arrow-Left-Skin
                }
                
                switch(_AC.sceneNew.choiceSkin){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 435, 80);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-1"], 450, 90);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-2"], 450, 90);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-3"], 450, 90);
                    break;   
                }
                
                if(_AC.sceneNew.choiceSkin != 3){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 500, 105, 12, 16, 8, "pointer", function(){
                        if(_AC.sceneNew.choiceSkin <= 3){
                            _AC.sceneNew.choiceSkin++;
							_AC.sceneNew.destroy();
                        }
                    }); // Arrow-Right-Skin
                }
            }
            // HAIR =========
            {
                if(_AC.sceneNew.choiceHair != 0){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 415, 160, 12, 16, 9, "pointer", function(){
                            _AC.sceneNew.choiceHair--;
						    _AC.sceneNew.destroy();
                    }); // Arrow-Left-Skin
                }

                // 0,0865
                    
                switch(_AC.sceneNew.choiceHair){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 435, 135);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-1"], 450, 155);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-2"], 450, 155);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-3"], 450, 155);
                    break;   
                }
                if(_AC.sceneNew.choiceHair != 3){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 500, 160, 12, 16, 10, "pointer", function(){
                        _AC.sceneNew.choiceHair++;
						_AC.sceneNew.destroy();
                    }); // Arrow-Right-Skin  
                }
            }
            // SHIRT =========
            {
                if(_AC.sceneNew.choiceShirt != 0){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 415, 215, 12, 16, 11,  "pointer", function(){
						_AC.sceneNew.choiceShirt--;
						_AC.sceneNew.destroy();
                    }); // Arrow-Left-Skin
                }
                switch(_AC.sceneNew.choiceShirt){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 435, 190);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-1"], 450, 195);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-2"], 450, 195);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-3"], 450, 195);
                    break;   
                }
                if(_AC.sceneNew.choiceShirt != 3){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 500, 215, 12, 16,12, "pointer", function(){
						_AC.sceneNew.choiceShirt++;
						_AC.sceneNew.destroy();
                    }); // Arrow-Right-Skin  
                }
            }
            
            // PANTS =========
            {
                if(_AC.sceneNew.choicePants != 0){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 415, 270, 12, 16, 13, "pointer", function(){ 
						_AC.sceneNew.choicePants--;
						_AC.sceneNew.destroy();
                    }); // Arrow-Left-Skin
                }
                switch(_AC.sceneNew.choicePants){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 435, 245);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-1"], 450, 250);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-2"], 450, 250);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-3"], 450, 250);
                    break;   
                }
                
                if(_AC.sceneNew.choicePants != 3){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 500, 270, 12, 16, 14, "pointer", function(){
						_AC.sceneNew.choicePants++;
						_AC.sceneNew.destroy();
                    }); // Arrow-Right-Skin
                }
            }
            // SHOES =========
            {
                if(_AC.sceneNew.choiceShoes != 0){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 415, 325, 12, 16, 15, "pointer", function(){     
						_AC.sceneNew.choiceShoes--;
						_AC.sceneNew.destroy();
                    }); // Arrow-Left-Skin
                }
                switch(_AC.sceneNew.choiceShoes){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 435, 300);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-1"], 450, 305);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-2"], 450, 305);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-3"], 450, 305);
                    break;   
                }
                if(_AC.sceneNew.choiceShoes != 3){
                    _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 500, 325, 12, 16, 16, "pointer", function(){
						_AC.sceneNew.choiceShoes++;
						_AC.sceneNew.destroy();
                    }); // Arrow-Right-Skin  
                }
            }
        }

        if(_CONFIG.scene.id == 3){
            // SKELETON
            if(_AC.sceneNew.choiceSkeleton != 1){
                _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-left"], _FILE.cache.image[2]["arrow-23-left"], 400, 95, 12, 16,  17, "pointer", function(){
					_AC.sceneNew.choiceSkeleton--;
					_AC.sceneNew.destroy();
                    }); // Arrow-Left-Skin
            }

                switch(_AC.sceneNew.choiceSkeleton){
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skeleton-1"], 410, 50);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skeleton-2"], 410, 50);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skeleton-3"], 410, 50);
                    break;   
                }
            if(_AC.sceneNew.choiceSkeleton != 3){
                _AC.drawButton.main(_FILE.cache.image[2]["arrow-23-right"], _FILE.cache.image[2]["arrow-23-right"], 520, 95, 12, 16, 18, "pointer", function(){
					_AC.sceneNew.choiceSkeleton++;
					_AC.sceneNew.destroy();
                }); // Arrow-Right-Skin 
            }
            // BOTÃO -CRIAÇÃO DA CONTA
            _AC.drawButton.main(_FILE.cache.image[2]["search"], _FILE.cache.image[2]["searchHover"], 353, 300, 232, 32, 19, "pointer", function(){
                _AC.sceneNew.endScene = true;
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange = function() {
					if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						 _AC.sceneNew.searchNickname = xmlhttp.responseText;
						if(_AC.sceneNew.searchNickname == "true"){
							_CONFIG.scene.alert = "Apelido em uso!";
						} else {
							if(_AC.sceneNew.Nickname.length < 3){
								_CONFIG.scene.alert = "Mínimo de 3 dígitos!";   
							} else {
								_CONFIG.scene.alert = "Apelido disponível!";
								
								if(_AC.sceneNew.endScene){
								// PROCESSO DE CRIAÇÃO DA CONTA
									_AC.sceneNew.createCharacter(_AC.sceneNew.Nickname, _AC.sceneNew.choiceSkin, _AC.sceneNew.choiceHair, _AC.sceneNew.choiceShirt, _AC.sceneNew.choicePants, _AC.sceneNew.choiceShoes, _AC.sceneNew.choiceSkeleton);
								}
							}
						}
					}
				};
				xmlhttp.open("POST", "_data001/Server/searchNickname.php?value="+_AC.sceneNew.Nickname, true);
				xmlhttp.send();
            }); 

            _AC.screen.font("CRIAR PERSONAGEM", 470, 324, "white", 20); // CRIAÇÃO DA CONTA
       
            if(_CONFIG.scene.alert != "Apelido disponível!"){_AC.screen.font(_CONFIG.scene.alert, 470, 250, "white", 20);} // Alerta sobre o nickname
            
        }
    // CHARACTER MAIN
        if(_CONFIG.scene.id != 0){
            
            switch(_AC.sceneNew.choiceSkin){
                    case 0:
                        _AC.screen.drawImage(_FILE.cache.image[2]["null"], 140, 150);
                    break;
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-1"], 140, 150);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-2"], 140, 150);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["skin-3"], 140, 150);
                    break;   
            }

            switch(_AC.sceneNew.choiceHair){
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-1"], 140, 150);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-2"], 140, 150);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["hair-3"], 140, 150);
                    break;   
            }
            switch(_AC.sceneNew.choiceShirt){
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-1"], 140, 150);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-2"], 140, 150);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shirt-3"], 140, 150);
                    break;   
            }
            switch(_AC.sceneNew.choicePants){
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-1"], 140, 150);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-2"], 140, 150);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["pants-3"], 140, 150);
                    break;   
            }
            switch(_AC.sceneNew.choiceShoes){
                    case 1:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-1"], 140, 150);
                    break;
                    case 2:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-2"], 140, 150);
                    break;
                    case 3:
                        _AC.screen.drawImage(_FILE.cache.image[2]["shoes-3"], 140, 150);
                    break;   
            }
             // SKELETON 
                switch(_AC.sceneNew.choiceSkeleton){
                    case 1:
                        switch(_AC.sceneNew.choiceSkin){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-1-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-1-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-1-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceHair){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-1-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-1-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-1-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceShirt){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-1-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-1-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-1-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choicePants){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-1-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-1-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-1-3"], 90, 250);
                            break;
                        }
                         switch(_AC.sceneNew.choiceShoes){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-1-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-1-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-1-3"], 90, 250);
                            break;
                        }
                    break;
                    case 2:
                        switch(_AC.sceneNew.choiceSkin){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-2-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-2-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-2-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceHair){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-2-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-2-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-2-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceShirt){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-2-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-2-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-2-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choicePants){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-2-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-2-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-2-3"], 90, 250);
                            break;
                        }
                        switch(_AC.screen.choiceShoes){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-2-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-2-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-2-3"], 90, 250);
                            break;
                        }
                    break;
                    case 3:
                        switch(_AC.sceneNew.choiceSkin){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-3-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-3-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["skin-3-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceHair){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-3-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-3-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["hair-3-3"], 90, 250);
                            break;
                        }
                        switch(_AC.sceneNew.choiceShirt){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-3-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-3-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shirt-3-3"], 90, 250);
                            break;
                        }
                         switch(_AC.sceneNew.choicePants){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-3-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-3-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["pants-3-3"], 90, 250);
                            break;
                        }
                         switch(_AC.sceneNew.choiceShoes){
                            case 1:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-3-1"], 90, 250);
                            break;
                            case 2:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-3-2"], 90, 250);
                            break;
                            case 3:
                                _AC.screen.drawImage(_FILE.cache.image[2]["shoes-3-3"], 90, 250);
                            break;
                        }
                    break;   
            }
        }

        }
        
        _CONFIG.message.update = requestAnimFrame(_AC.sceneNew.update);
        
    },
    destroy: function(){
		_AC.drawButton.drawButtonDestroy(0);
        _AC.drawButton.drawButtonDestroy(1);
        _AC.drawButton.drawButtonDestroy(2);
        _AC.drawButton.drawButtonDestroy(3);
        _AC.drawButton.drawButtonDestroy(4);
		_AC.drawButton.drawButtonDestroy(5);
		_AC.drawButton.drawButtonDestroy(6);
        _AC.drawButton.drawButtonDestroy(7);
        _AC.drawButton.drawButtonDestroy(8);
        _AC.drawButton.drawButtonDestroy(9);
        _AC.drawButton.drawButtonDestroy(10);
        _AC.drawButton.drawButtonDestroy(11);
        _AC.drawButton.drawButtonDestroy(12);
        _AC.drawButton.drawButtonDestroy(13);
        _AC.drawButton.drawButtonDestroy(14);
        _AC.drawButton.drawButtonDestroy(15);
        _AC.drawButton.drawButtonDestroy(16);
        _AC.drawButton.drawButtonDestroy(17);
        _AC.drawButton.drawButtonDestroy(18);
        _AC.drawButton.drawButtonDestroy(19);
    }
}
_AC.sceneMap = {
	drawCharacterActive: false,
	viewportWidth: (((_FILE.canvas.width / _CONFIG.system.sizeTile) - 2) / 2), // padrão 9
	viewportHeight:(((_FILE.canvas.height / _CONFIG.system.sizeTile) - 3) / 2), // padrão 6
	layer_length: (_FILE.canvas.width / _CONFIG.system.sizeTile) * (_FILE.canvas.height / _CONFIG.system.sizeTile),
    begin: function(){

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                 var data = JSON.parse(xmlhttp.responseText);
                _USER.map.name = data["map"];
                _USER.map.positionX = parseInt(data["x"]);
                _USER.map.positionY = parseInt(data["y"]);
                _USER.map.gameQuests = JSON.parse(data["quests"]);
                _USER.map.gameEvents = JSON.parse(data["event"]);
				
				_USER.config.menu_options = JSON.parse(data["menu_options"]);
				_USER.config.menu_theme = data["menu_theme"];
				_USER.config.volumeEffect = parseFloat(data["volumeEfeito"]);
				_USER.config.volumeSom = parseFloat(data["volumeSom"]);
				
				// Testes
                _AC.sceneMap.mapJSON();
            }   
        };
        
        xmlhttp.open("POST", "_data001/Server/player/network.php?value="+_USER.info.id, true);
        xmlhttp.send();
    },
    mapJSON: function(){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                 var content = xmlhttp.responseText;
                _USER.map.object = JSON.parse(content);
                _AC.sceneMap.main();
            }
        };
        xmlhttp.open("POST", "_data001/World/"+_USER.map.name+".json", true);
        xmlhttp.send();
    },
    main: function(){
		if(!_AC.characterData.active){
			cancelRequestAnimFrame(_CONFIG.message.update);
			_AC.registerResource.main(3);
			_AC.characterData.init();
		}
		setTimeout(function(){
			_AC.functions.resetCanvas5();
			_AC.sceneNew.destroy();
			_AC.sceneMap.drawMap();
		}, 500);
		
    },
	drawMap: function(noEvent, drawCharacter){
	
		if(noEvent == undefined) noEvent = false;
		if(drawCharacter == undefined) drawCharacter = false;
		
		if(!drawCharacter) _AC.functions.resetCanvas1();
		_AC.functions.resetCanvas2();
		if(!drawCharacter) _AC.functions.resetCanvas3();
		if(!drawCharacter) _AC.functions.resetCanvas5();

		// Variáveis
		var cameraX = _USER.map.positionX - this.viewportWidth;
		var cameraY = _USER.map.positionY - this.viewportHeight;
		
		var condX = 0;
		var condY = 0;
		
		if(cameraX < 0) {
			condX = 1;
			cameraX = 0;
		}
		if(cameraY < 0) {
			condY = 1;
			cameraY = 0;
		}
		if(_USER.map.positionX > _USER.map.object.width - (this.viewportWidth + 3)){
			condX = 2;
			cameraX = _USER.map.object.width - (_FILE.canvas.width / _CONFIG.system.sizeTile);
		}
		
		if(_USER.map.positionY > (_USER.map.object.height - this.viewportWidth)){
			condY = 2;
            cameraY = ((_USER.map.object.height) - (_FILE.canvas.height / _CONFIG.system.sizeTile));
        }
	
	   for(i = 0; i < _USER.map.object.layers.length; i++){
			if(_USER.map.object.layers[i].visible) {

				if(_USER.map.object.layers[i].type == "tilelayer" && !drawCharacter){
					for(j=0; j < this.layer_length; j++){
						// Variáveis
						var x = parseInt(j % (_FILE.canvas.width / _CONFIG.system.sizeTile));
						var y = parseInt(j / (_FILE.canvas.width / _CONFIG.system.sizeTile));

						var viewport = parseInt(((parseInt(j / (_FILE.canvas.width / _CONFIG.system.sizeTile)) * _USER.map.object.width) + x) + cameraX + (cameraY * _USER.map.object.width));
						
						// Definir o TILESET usado
						var breakVariable = false;
						var k = 0;

						while(!breakVariable){
							if(_USER.map.object.layers[i].data[viewport] < (_USER.map.object.tilesets[k].tilecount + _USER.map.object.tilesets[k].firstgid)) {
								breakVariable = true; 
							} else {
								k++;
							}
						}

						// Variáveis
						var sx = parseInt((_USER.map.object.layers[i].data[viewport] - _USER.map.object.tilesets[k].firstgid) % _CONFIG.system.widthTile);

						var sy = parseInt((_USER.map.object.layers[i].data[viewport] - _USER.map.object.tilesets[k].firstgid) / _CONFIG.system.widthTile);

						
						if(_USER.map.object.layers[i].data[viewport] != 0){
							if(_USER.map.object.tilesets[k].name != "solid"){
								_AC.screen.drawMap(_FILE.cache.image[3][_USER.map.object.tilesets[k].name], sx, sy, x, y, _AC.sceneMap.drawCharacterActive);
							}
						}
					}
				} else if(_USER.map.object.layers[i].type == "objectgroup"){
					_AC.sceneMap.drawCharacterActive = true;
					switch(_USER.map.object.layers[i].name){
						case "main-below":
							_AC.gameEvent.npcGraphic(1, condX, condY);
							_AC.characterData.drawCharacter(1, condX, condY);
						break;
						case "main-above":
							_AC.gameEvent.npcGraphic(0, condX, condY);
							_AC.characterData.drawCharacter(0, condX, condY);
						break;
					}

				}
			}
		}

		_AC.sceneMap.drawCharacterActive = false;
		
        // Character Movement Update
		if(_AC.characterData.moveset > 0 && !noEvent){
			if(_AC.characterData.resetMovement != null) clearTimeout(_AC.characterData.resetMovement);
			_AC.characterData.resetMovement = setTimeout(function(){
				_AC.characterData.moveset = 0;
				_AC.sceneMap.drawMap(false, true);
			}, 500);
		}

		// Game Event
		if(!noEvent && !drawCharacter) {
			_AC.gameEvent.main();
		}
	}
}

// * =================================
// OBJECTS
// * =================================
_AC.menuMain = {
	active: false,
	menuUpdate: false,
	main: function(){
		if(!this.active){
			_AC.gameEvent.pause = true;
			_AC.screen.menuFadeIn();
			_AC.audio.main(_FILE.resource.audio[3]["menu-select"]);

			var y = 50;
			var y_text = 20;

			if(_USER.config.menu_options[0] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 1) - 10), 130, 46, 0, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "POKÉAGENDA", 515, ((y * 1) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 1) - 10), 130, 46, 0, "pointer", function(){
					_AC.menuMain.pokedex.main();
				}, "POKÉAGENDA", 515, ((y * 1) + y_text), "white", "center", 20, "DP");
			}

			if(_USER.config.menu_options[1] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 2) - 10), 130, 46, 1, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "POKÉMON", 515, ((y * 2) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 2) - 10), 130, 46, 1, "pointer", function(){
				}, "POKÉMON", 515, ((y * 2) + y_text), "white", "center", 20, "DP");
			}

			if(_USER.config.menu_options[2] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 3) - 10), 130, 46, 2, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "MOCHILA", 515, ((y * 3) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 3) - 10), 130, 46, 2, "pointer", function(){
				}, "MOCHILA", 515, ((y * 3) + y_text), "white", "center", 20, "DP");
			}

			if(_USER.config.menu_options[3] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 4) - 10), 130, 46, 3, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "TREINADOR", 515, ((y * 4) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 4) - 10), 130, 46, 3, "pointer", function(){

				}, "TREINADOR", 515, ((y * 4) + y_text), "white", "center", 20, "DP");
			}

			if(_USER.config.menu_options[4] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 5) - 10), 130, 46, 4, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "POKÉWATCH", 515, ((y * 5) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 5) - 10), 130, 46, 4, "pointer", function(){

				}, "POKÉWATCH", 515, ((y * 5) + y_text), "white", "center", 20, "DP");
			}


			if(_USER.config.menu_options[5] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 6) - 10), 130, 46, 6, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "AMIGOS", 515, ((y * 6) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 6) - 10), 130, 46, 6, "pointer", function(){

				}, "AMIGOS", 515, ((y * 6) + y_text), "white", "center", 20, "DP");
			}


			if(_USER.config.menu_options[6] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-disabled"], _FILE.cache.image[3]["menu-button-disabled-active"], 450, ((y * 7) - 10), 130, 46, 5, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "SALVAR", 515, ((y * 7) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 7) - 10), 130, 46, 5, "pointer", function(){
					_AC.menuMain.save.main();
				}, "SALVAR", 515, ((y * 7) + y_text), "white", "center", 20, "DP");
			}



			if(_USER.config.menu_options[7] == 0){
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 8) - 10), 130, 46, 7, "pointer", function(){
					_AC.audio.main(_FILE.resource.audio[3]["menu-disabled"]);
				}, "OPÇÕES", 515, ((y * 8) + y_text), "white", "center", 20, "DP");
			} else {
				_AC.drawButton.main(_FILE.cache.image[3]["menu-button-"+(_USER.config.menu_theme)], _FILE.cache.image[3]["menu-button-active-"+(_USER.config.menu_theme)], 450, ((y * 8) - 10), 130, 46, 7, "pointer", function(){
					_AC.menuMain.options.main();
				}, "OPÇÕES", 515, ((y * 8) + y_text), "white", "center", 20, "DP");
			}

			this.active = true;
		} else {
			_AC.menuMain.destroy();
		}
	},
	destroy: function(){
		_AC.functions.resetCanvas5();
		_AC.functions.resetCanvas4();
		_AC.drawButton.drawButtonDestroy(0);
		_AC.drawButton.drawButtonDestroy(1);
		_AC.drawButton.drawButtonDestroy(2);
		_AC.drawButton.drawButtonDestroy(3);
		_AC.drawButton.drawButtonDestroy(4);
		_AC.drawButton.drawButtonDestroy(5);
		_AC.drawButton.drawButtonDestroy(6);
		_AC.drawButton.drawButtonDestroy(7);	
		_AC.audio.main(_FILE.resource.audio[3]["menu-select"]);
		this.active = false;
	}
}
_AC.menuMain.pokedex = {
	active: false,
	updateObject: null,
	main: function(){
		_AC.menuMain.destroy();
		_AC.screen.fadeIn();
		
		setTimeout(function(){_AC.screen.fadeOut()}, 500);
		setTimeout(function(){
			_AC.menuMain.pokedex.active = true;
			_AC.characterData.active = false;
			_AC.functions.resetCanvas();
			_AC.menuMain.pokedex.build();
		}, 1000);
	},
	build: function(){

		_AC.functions.resetCanvas5();
		
		_AC.parallax.main(_FILE.cache.image[3]["menu-pokedex-bg"], _FILE.cache.image[3]["menu-pokedex-bg"]);
		
		_AC.screen.drawImage(_FILE.cache.image[3]["menu-pokedex-panel"], 320, 25); // Painel3
		
		if(_USER.info.pokedex.length == 0){
			_AC.screen.message("Sem registros na PokéAgenda.", "", "", 0);
		};

		_AC.menuMain.pokedex.updateObject = requestAnimFrame(_AC.menuMain.pokedex.build);
	},
	GUI: function(code){
		switch(code){
			case 88:
				_AC.menuMain.pokedex.destroy();
			break;
		}
	},
	destroy: function(){
		cancelRequestAnimFrame(_AC.menuMain.pokedex.updateObject);
		_AC.functions.resetCanvas5();
		_AC.menuMain.pokedex.active = false;
		_AC.menuMain.active = false;
		_AC.menuMain.main();
	}
}
_AC.menuMain.options = {
	id: 0, 
	active: false, 
	theme: ["#003a63"],
	main: function(){
		_AC.characterData.active = false;
		_AC.menuMain.options.active = true;
		_AC.menuMain.destroy();
		_AC.screen.fadeIn();
		setTimeout(function(){_AC.screen.fadeOut()}, 500);
		setTimeout(function(){
			// Init
			_AC.menuMain.options.build();
		}, 1000);
	},
	build: function(){
		
		
		// Reset
		_AC.functions.resetCanvas5();
		
		// Background
		_AC.screen.rect(0, 0, 640, 60, "black");
		_AC.screen.rect(0, 60, 640, 360, _AC.menuMain.options.theme[_USER.config.menu_theme - 1]);
		_AC.screen.rect(0, 420, 640, 60, "black");
		// ===== Draw
		
		_AC.screen.font("OPÇÕES", 60, 40, "white", 28);
		// MÚSICA
		if(_AC.menuMain.options.id == 0){
		   _AC.screen.drawImagePriority(_FILE.cache.image[3]["menu-options-bar-"+(_USER.config.menu_theme)], 0, 90);
		} else {
			_AC.screen.drawImagePriority(_FILE.cache.image[3]["menu-options-disabled"], 0, 90);
		}
		_AC.screen.font("MÚSICA",  80, 132, "white", 30);
		
		
		// EFEITO
		if(_AC.menuMain.options.id == 1){
		   _AC.screen.drawImagePriority(_FILE.cache.image[3]["menu-options-bar-"+(_USER.config.menu_theme)], 0, 160);
		} else {
			_AC.screen.drawImagePriority(_FILE.cache.image[3]["menu-options-disabled"], 0, 160);
		}
		_AC.screen.font("EFEITO",  80, 202, "white", 30);
		
		_AC.screen.rect(200, 115, (((_USER.config.volumeSom * 100) / 100) * 300), 10, "orange");
		_AC.screen.rect(200, 185, (((_USER.config.volumeEffect * 100) / 100) * 300), 10, "orange");
		
		_AC.screen.font(parseInt(_USER.config.volumeSom * 100),  550, 130, "white", 30);
		_AC.screen.font(parseInt(_USER.config.volumeEffect * 100),  550, 200, "white", 30);
		
	},
	GUI: function(keycode){
		switch(keycode){
			case 37:
				if(_AC.menuMain.options.id == 0){
					_USER.config.volumeSom = (((_USER.config.volumeSom * 100) - 1) / 100).toFixed(2);
					if(_USER.config.volumeSom < 0) _USER.config.volumeSom = 0;
				} else if(_AC.menuMain.options.id == 1){
					_USER.config.volumeEffect = (((_USER.config.volumeEffect * 100) - 1) / 100).toFixed(2);
					if(_USER.config.volumeEffect < 0) _USER.config.volumeEffect = 0;
				}
				_AC.menuMain.options.build();
				break;
			case 38:
				if((_AC.menuMain.options.id - 1) < 0) _AC.menuMain.options.id = 0; else _AC.menuMain.options.id--;
				_AC.menuMain.options.build();
				break;
			case 39:
				if(_AC.menuMain.options.id == 0){
				    _USER.config.volumeSom = (((_USER.config.volumeSom * 100) + 1) / 100);
					if(_USER.config.volumeSom > 1) _USER.config.volumeSom = 1;
				} else if(_AC.menuMain.options.id == 1){
				    _USER.config.volumeEffect = (((_USER.config.volumeEffect * 100) + 1) / 100);
					if(_USER.config.volumeEffect > 1) _USER.config.volumeEffect = 1;
				}
				_AC.menuMain.options.build();
				break;
			case 40:
				if((_AC.menuMain.options.id+1) > 1) _AC.menuMain.options.id = 1; else _AC.menuMain.options.id++;
				_AC.menuMain.options.build();
				break;
			case 88:
				_AC.menuMain.options.destroy();
				break;
		}
	},
	destroy: function(){
		_AC.functions.resetCanvas5();
		_AC.menuMain.options.active = false;
		_AC.characterData.active = true;
		_AC.menuMain.main();
		
	}
}
_AC.menuMain.save = {
	object: null,
	main: function(){
		_AC.saveData.main(_AC.menuMain.save.destroy);
	},
	destroy: function(){
		_AC.audio.main(_FILE.resource.audio[3]["menu-save"]);
		_AC.menuMain.active = false;
	}
}
_AC.characterData = {
	active: false,
	moveset: 0,
	direction: 0,
	resetMovement: null,
	init: function(){
		if(!_AC.characterData.active) {
			_AC.characterData.active = true;
			_AC.characterData.controller();
		}
	},
	controller: function(code){
        
		switch (code) {
			case 37:
				var dataZ = (_USER.map.positionY * _USER.map.object.width) + (_USER.map.positionX - 1);

				if((_USER.map.positionX - 1) >= 0 && _USER.map.object.layers[0].data[dataZ] == 0){
					_USER.map.positionX--;
					if(_AC.characterData.moveset == 0) _AC.characterData.moveset = 3; else _AC.characterData.moveset--;
				}
				_AC.characterData.direction = 1;
				_AC.sceneMap.drawMap();
				break;
			case 38:

				var dataZ = ((_USER.map.positionY - 1) * _USER.map.object.width) + _USER.map.positionX;

				if(((_USER.map.positionY - 1) >= 0)  && _USER.map.object.layers[0].data[dataZ] == 0){
					_USER.map.positionY--;
					if(_AC.characterData.moveset == 0) _AC.characterData.moveset = 3; else _AC.characterData.moveset--;
				}
				_AC.characterData.direction = 3;
				_AC.sceneMap.drawMap();

				break;
			case 39:

				var dataZ = ((_USER.map.positionY * _USER.map.object.width) + _USER.map.positionX) + 1;

				if(((_USER.map.positionX + 1) < _USER.map.object.width)  && _USER.map.object.layers[0].data[dataZ] == 0){
					_USER.map.positionX++;
					if(_AC.characterData.moveset == 3) _AC.characterData.moveset = 1; else _AC.characterData.moveset++;
				}
				_AC.characterData.direction = 2;
				_AC.sceneMap.drawMap();
				break;
			case 40:

				var dataZ = ((_USER.map.positionY + 1) * _USER.map.object.width) + _USER.map.positionX;

				if(((_USER.map.positionY + 1) < _USER.map.object.height) && _USER.map.object.layers[0].data[dataZ] == 0){
				   _USER.map.positionY++;
					if(_AC.characterData.moveset == 3) _AC.characterData.moveset = 1; else _AC.characterData.moveset++;
				}
				_AC.characterData.direction = 0;
				_AC.sceneMap.drawMap();

				break;
			case 90:
				_AC.gameEvent.main(true);
				break;
			case 88:
				_AC.menuMain.main();
				break;
		}
	},
	drawCharacter: function(above, condX, condY){
		
		var box_x = 0;
		var box_y = 0;
		
		switch(condX){
			case 0: box_x = 9; break;
			case 1: box_x = _USER.map.positionX; break;
			case 2: box_x = 9 + _USER.map.positionX - ((_USER.map.object.width - 9) - 2); break;
		}
		switch(condY){
			case 0: box_y = 6; break;
			case 1: box_y = _USER.map.positionY; break;
			case 2: box_y = 6 + _USER.map.positionY - (_USER.map.object.height - 9); break;
		}

		var _move = (this.direction * 4) + this.moveset;
		_AC.screen.drawCharacter(_FILE.cache.image[0]["mainCharacter"], _move, above, 2, 1, box_x, box_y, 2, 1);
	}
}
_AC.config = {
	main: function(){
		this.keyboard();
	},
	keyboard: function(){
		document.onkeydown = function(e) {
            var code = e.keyCode;
			_AC.characterData.controller(code);
			if(_AC.menuMain.options.active) _AC.menuMain.options.GUI(code);
			if(_AC.menuMain.pokedex.active) _AC.menuMain.pokedex.GUI(code);
		}
	}
}
// * =================================
_AC.main = {
    initialize: false,
    content: function(){
// ========================= 
    //  _AC.screen.drawImage(_FILE.resource.image[1]["splash"], 0, 0);
    //  setTimeout(function(){_AC.screen.fadeIn()}, 3000);
    //  setTimeout(function(){if(_USER.info.id != "") _AC.registerResource.main(0) ;_AC.sceneLoad.main()}, 6000);
    //  setTimeout(function(){_AC.screen.fadeOut()}, 6200);
// =========================
		
		_AC.main.initialize = true;
        if(_USER.info.id != "") _AC.registerResource.main(0);
		_AC.config.main();
        _AC.sceneLoad.main();
		
		// _AC.menuMain.options.build();
    }
    
}
_AC.main.content();
