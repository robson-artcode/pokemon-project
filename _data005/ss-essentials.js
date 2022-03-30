var data = data || {};

var Base64 = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = c1 = c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

}

data.variables = {
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    scroll: 0,
    resize: false,
    responsive: null,
    checkUpdate: false,
    device: null,
    navigator: null
}
data.functions = {
    begin: function(){
        window.addEventListener("scroll", function(event) {
            data.variables.scroll = window.pageYOffset;
        }, false);
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
        });
    },
    resize: function(object, type, callback) {
        if (object == null || typeof(object) == 'undefined') return;
            if (object.addEventListener) {
                object.addEventListener(type, callback, false);
            } else if (object.attachEvent) {
                object.attachEvent("on" + type, callback);
            } else {
                object["on" + type] = callback;
        }
    },
    svgDraw: function(tag, stroke, fill){
        var path = document.querySelector(tag);
        var length = path.getTotalLength();
        path.style.transition = path.style.WebkitTransition = 'none';
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = length;
        path.style.stroke = stroke;
        if(fill != undefined) setTimeout(function(){path.style.fill = fill}, 200);
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
        path.style.strokeDashoffset = '0';
    },
    device: function() {
        var a = navigator.userAgent || navigator.vendor || window.opera;
        if (/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile|o2|opera m(ob|in)i|palm( os)?|p(ixi|re)\/|plucker|pocket|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i.test(a)) data.variables.device = true;
        else data.variables.device = false;
    },
    browser: function(){
      var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        var isFirefox = typeof InstallTrigger !== 'undefined';
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        var isIE = /*@cc_on!@*/false || !!document.documentMode;
        var isEdge = !isIE && !!window.StyleMedia;
        var isChrome = !!window.chrome && !!window.chrome.webstore;

        if(isChrome){
            data.variables.navigator = "Chrome";
        } else if(isFirefox){
            data.variables.navigator = "Firefox";
        } else if(isOpera){
            data.variables.navigator = "Opera";
        } else if(isSafari){
            data.variables.navigator = "Safari";
        } else if(isEdge){
            data.variables.navigator = "Edge";
        } else if(isIE){
            data.variables.navigator = "IE";
        }  
    }
}
data.mask = {
    object: null,
    isFunction: null, 
    main: function(o, f){
        data.mask.object = o;
        data.mask.isFunction = f;
        setTimeout(this.build(), 1);
    },
    build: function(){
        data.mask.object.value = data.mask.isFunction(data.mask.object.value);
    },
    telefoneFixo: function(v) {
        console.log(v);
        v=v.replace(/\D/g,"");
        v=v.replace(/^(\d\d)(\d)/g,"($1) $2");
        v=v.replace(/(\d{4})(\d)/,"$1-$2");
        return v
    },
    telefoneCelular: function(v) {
        v=v.replace(/\D/g,"");
        v=v.replace(/^(\d\d)(\d)/g,"($1) $2");
        v=v.replace(/(\d{5})(\d)/,"$1-$2");
        return v
    },
    rg: function(v){
        v=v.replace(/\D/g,"");
        v=v.replace(/(\d{1,2})(\d{3})(\d{3})(\d{1})$/,"$1.$2.$3-$4");
        return v;
    },
    cpf: function(v){
        v=v.replace(/\D/g,"");
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
        v=v.replace(/(\d{3})(\d)/,"$1.$2");
        v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
        return v
    }
}
data.scroll = {
    begin: function(){
        // reference Paul Irish
        window.requestAnimFrame = (function(){
          return  window.requestAnimationFrame       ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame    ||
                  function( callback ){
                    window.setTimeout(callback, 10);
                  };
        })();
        
        data.variables.scroll = window.pageYOffset;
    },
    main: function(scrollTargetY){
        this.begin();
        
        var scrollY = window.scrollY,
            scrollTargetY = scrollTargetY || 0,
            speed = speed || 10,
            easing = 'easeOutSine',
            currentTime = 0;

        var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

        var PI_D2 = Math.PI / 2,
            easingEquations = {
                easeOutSine: function (pos) {
                    return Math.sin(pos * (Math.PI / 2));
                },
                easeInOutSine: function (pos) {
                    return (-0.5 * (Math.cos(Math.PI * pos) - 1));
                },
                easeInOutQuint: function (pos) {
                    if ((pos /= 0.5) < 1) {
                        return 0.5 * Math.pow(pos, 5);
                    }
                    return 0.5 * (Math.pow((pos - 2), 5) + 2);
                }
            };

        function tick() {
            currentTime += 1 / 60;

            var p = currentTime / time;
            var t = easingEquations[easing](p);

            if (p < 1) {
                requestAnimFrame(tick);

                window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
            } else {
                window.scrollTo(0, scrollTargetY);
            }
        }
        tick();
    }
}
data.touch = {
    dir: null,
    main: function(el, callback){
        var featured = el;
        if( "ontouchstart" in window ) {
            var touchStart = function(evt) {
                var startTime = (new Date()).getTime();
                var startX = evt.changedTouches[0].pageX;
                var touchEnd = function(evt) {
                    document.removeEventListener("touchend", touchEnd);
                    var diffX = evt.changedTouches[0].pageX - startX;
                    var elapsed = (new Date()).getTime() - startTime;
                    if( elapsed < 200 && Math.abs(diffX) > 50 ) {
                        if( diffX < 0 ) {
                            data.touch.dir = "left";
                            callback();
                        } else {
                            data.touch.dir = "right";
                            callback();
                        }
                    }
                }
                document.addEventListener("touchend", touchEnd);
            };
            featured.addEventListener("touchstart", touchStart);
        }
    }
}
data.css = {
    height: function(object, value){
        document.querySelector(object).style.height = value;
    },
    width: function(object, value){
        document.querySelector(object).style.width = value;
    },
    float: function(object, value){
        document.querySelector(object).style.float = value;
    },
    position: function(object, value){
        document.querySelector(object).style.position = value;
    },
    top: function(object, value){
        document.querySelector(object).style.top = value;
    },
    left: function(object, value){
        document.querySelector(object).style.left = value;
    },
    right: function(object, value){
        document.querySelector(object).style.right = value;
    },
    bottom: function(object, value){
        document.querySelector(object).style.bottom = value;
    },
    opacity: function(object, value){
        document.querySelector(object).style.opacity = value;
    },
    visibility: function(object, value){
        document.querySelector(object).style.visibility = value;
    },
    display: function(object, value){
        document.querySelector(object).style.display = value;
    },
    zIndex: function(object, value){
        document.querySelector(object).style.zIndex = value;
    },
    margin: function(object, value){
        document.querySelector(object).style.margin = value;
    },
    marginTop: function(object, value){
        document.querySelector(object).style.marginTop = value;
    },
    padding: function(object, value){
        document.querySelector(object).style.padding = value;
    },
    overflow: function(object, value){
        document.querySelector(object).style.overflow = value;
    },
    overflowY: function(object, value){
        document.querySelector(object).style.overflowY = value;
    },
    color: function(object, value){
        document.querySelector(object).style.color = value;
    },
    border: function(object, value){
        document.querySelector(object).style.border = value;
    },
    borderBottom: function(object, value){
        document.querySelector(object).style.borderBottom = value;
    },
    background: function(object, value){
        document.querySelector(object).style.background = value;
    },
    backgroundImage: function(object, value){
        document.querySelector(object).style.backgroundImage = value;
    },
    backgroundColor: function(object, value){
        document.querySelector(object).style.backgroundColor = value;
    },
    listStyleImage: function(object, value){
        document.querySelector(object).style.listStyleImage = value;
    },
    cursor: function(object, value){
        document.querySelector(object).style.cursor = value;
    },
    transition: function(object, value) {
        document.querySelector(object).style.webkitTransition = value;
        document.querySelector(object).style.mozTransition = value;
        document.querySelector(object).style.oTransition = value;
        document.querySelector(object).style.Transition = value;
    },
    transform: function(object, value) {
        document.querySelector(object).style.webkitTransform = value;
        document.querySelector(object).style.mozTransform = value;
        document.querySelector(object).style.oTransform = value;
        document.querySelector(object).style.transform = value;
    }
}
data.main = {
    begin: function(){
        
        data.functions.begin();
        data.functions.device();
        data.functions.browser();
        
        if(data.variables.screenWidth > 800){
            if(data.variables.responsive && data.variables.responsive != null){
                data.variables.checkUpdate = true;
            }
            data.variables.responsive = false;
        } else {
            if(!data.variables.responsive && data.variables.responsive != null){
                data.variables.checkUpdate = true;
            }
            data.variables.responsive = true;
        }

    },
    content: function(index){
        this.begin();

    }
}
data.functions.resize(window, "resize", function(event) {
    if(!data.variables.device) {
        data.variables.resize = true;
        data.variables.screenWidth = window.innerWidth;
        data.variables.screenHeight = window.innerHeight;
        data.main.content();
    }
});

data.main.content();