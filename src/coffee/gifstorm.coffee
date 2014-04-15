gifs = require('../../gifs.json')

class GIFSTORM

    constructor: (@gifs)->
        @body = document.body
        @gif_path = './gifs/'

        @load @gifs[0]

        console.log '\n\n\nGIFSTORM.biz\nby CHARLTON ROBERTS\nhttp://charlton.io\n@charltoons\n\n\n'

    load: (gif)->
        @img = new Image
        path = @get_path gif.file

        # set callback for when the gif loads
        @img.onload = =>
            @body.style.backgroundImage = 'url(' + path + ')'

        # load the image in a dummy html <img> so we know when its loaded
        @img.src = path

    get_path: (filename)-> @gif_path + filename


document.onreadystatechange = ->
    
    if document.readyState == "complete"

        GIFSTORM = new GIFSTORM gifs