(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
    {
        "title": "Kick The Can",
        "artist": "Unknown",
        "file": "kick_the_can.gif",
        "source": "#"
    }
]
},{}],2:[function(require,module,exports){
var GIFSTORM, gifs;

gifs = require('../../gifs.json');

GIFSTORM = (function() {
  function GIFSTORM(gifs) {
    this.gifs = gifs;
    this.body = document.body;
    this.gif_path = './gifs/';
    this.load(this.gifs[0]);
    console.log('\n\n\nGIFSTORM.biz\nby CHARLTON ROBERTS\nhttp://charlton.io\n@charltoons\n\n\n');
  }

  GIFSTORM.prototype.load = function(gif) {
    var path;
    this.img = new Image;
    path = this.get_path(gif.file);
    this.img.onload = (function(_this) {
      return function() {
        return _this.body.style.backgroundImage = 'url(' + path + ')';
      };
    })(this);
    return this.img.src = path;
  };

  GIFSTORM.prototype.get_path = function(filename) {
    return this.gif_path + filename;
  };

  return GIFSTORM;

})();

document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    return GIFSTORM = new GIFSTORM(gifs);
  }
};


},{"../../gifs.json":1}]},{},[1,2]);