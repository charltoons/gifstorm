(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports=[
    {
        "title": "Pixelated Chicken Army",
        "artist": "Neil Sanders",
        "file": "pixelated_chicken_army.gif",
        "source": "http://neilsanders.tumblr.com/"
    },
    {
        "title": "First Animation",
        "artist": "RedAmmo9",
        "file": "ukraine.gif",
        "source": "http://www.reddit.com/r/animation/comments/26ygbx/my_first_animation_would_love_to_know_what/"
    },
    {
        "title": "Folding Triangles",
        "artist": "Unknown",
        "file": "folding_triangles.gif",
        "source": "http://24.media.tumblr.com/44fb759b34960723c4d38203f28cddcd/tumblr_n65g4igsYY1relaado1_400.gif"
    }
    ,{
        "title": "Untitled",
        "artist": "Sebbe",
        "file": "triangles.gif",
        "source": "http://imgur.com/Hx1DGxq"
    },
    {
        "title": "Circle, Square, Triangle, Fish",
        "artist": "Unknown",
        "file": "fish.gif",
        "source": "http://imgur.com/W1Q1xD7"
    },
    {
        "title": "82176388789",
        "artist": "Qil",
        "file": "82176388789.gif",
        "source": "http://imgur.com/mJ7cXhA"
    },
    {
        "title": "Negative Space",
        "artist": "Unknown",
        "file": "plus.gif",
        "source": "http://mathematica.stackexchange.com/questions/16881/how-to-create-animated-snowfall"
    },
    {
        "title": "triduo",
        "artist": "mr. div",
        "file": "triduo.gif",
        "source": "http://mrdiv.tumblr.com/post/23105246175/triduo"
    },
    {
        "title": "Untitled",
        "artist": "Limor Fried",
        "file": "dots.gif",
        "source": "https://plus.google.com/+ladyada/posts/iqQNjuGiowT"
    },
    {
        "title": "Untitled (#NovGifs)",
        "artist": "Fredric Furstenbach",
        "file": "boxes.gif",
        "source": "http://cargocollective.com/furstenbach/NovGifs"
    },
    {
        "title": "Blah Blah Blah",
        "artist": "Art Wells",
        "file": "blah.gif",
        "source": "http://electricobjects.tumblr.com/post/82026331493/blah-blah-blah-by-art-wells"
    },
    {
        "title": "Untitled (#NovGifs)",
        "artist": "Fredric Furstenbach",
        "file": "trippy.gif",
        "source": "http://cargocollective.com/furstenbach/NovGifs"
    },
    {
        "title": "Untitled (#NovGifs)",
        "artist": "Fredric Furstenbach",
        "file": "circles.gif",
        "source": "http://cargocollective.com/furstenbach/NovGifs"
    },
    {
        "title": "Stool Move",
        "artist": "sheepfilms",
        "file": "stool.gif",
        "source": "http://sheepfilms.co.uk/2009/01/11/stool-move/"
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
    window.analytics.track('Initial Load');
  }

  GIFSTORM.prototype.load = function(gif) {
    var path;
    this.img = new Image;
    path = this.get_path(gif.file);
    this.img.onload = (function(_this) {
      return function() {
        _this.is_loading(false);
        return _this.body.style.backgroundImage = 'url(' + path + ')';
      };
    })(this);
    this.is_loading(true);
    this.img.src = path;
    this.title.innerText = gif.title;
    this.artist.innerText = 'by ' + gif.artist;
    return this.source.setAttribute('href', gif.source);
  };

  GIFSTORM.prototype.on_next = function() {
    if (++this.current >= this.gifs.length) {
      this.current = 0;
    }
    this.load(this.gifs[this.current]);
    return window.analytics.track('Next');
  };

  GIFSTORM.prototype.is_loading = function(is_currently_loading) {
    if (is_currently_loading) {
      return this.body.classList.add('is-loading');
    } else {
      return this.body.classList.remove('is-loading');
    }
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