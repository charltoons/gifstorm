(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
    {
        "title": "82176388789",
        "artist": "Qil",
        "file": "82176388789.gif",
        "source": "http://electricobjects.tumblr.com/post/82217158977/82176388789-by-qil"
    },
    {
        "title": "Kick The Can",
        "artist": "Unknown",
        "file": "kick_the_can.gif",
        "source": "#"
    }
]
},{}],2:[function(require,module,exports){
var GIFSTORM, gifs,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

gifs = require('../../gifs.json');

GIFSTORM = (function() {
  function GIFSTORM(gifs) {
    this.gifs = gifs;
    this.on_next = __bind(this.on_next, this);
    this.body = document.body;
    this.gif_path = './gifs/';
    this.exhibit = document.getElementById('exhibit');
    this.title = document.getElementById('title');
    this.artist = document.getElementById('artist');
    this.source = document.getElementById('source');
    this.next = document.getElementById('next');
    this.current = 0;
    this.next.onclick = this.on_next;
    this.load(this.gifs[this.current]);
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
    this.img.src = path;
    this.title.innerText = gif.title;
    this.artist.innerText = 'by ' + gif.artist;
    return this.source.setAttribute('href', gif.source);
  };

  GIFSTORM.prototype.on_next = function() {
    if (++this.current >= this.gifs.length) {
      this.current = 0;
    }
    return this.load(this.gifs[this.current]);
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