gifs = require('../../gifs.json')

class GIFSTORM

    constructor: (@gifs)->
        @body = document.body
        @gif_path = './gifs/'
        @exhibit = document.getElementById 'exhibit'
        @title = document.getElementById 'title'
        @artist = document.getElementById 'artist'
        @source = document.getElementById 'source'
        @next = document.getElementById 'next'
        @current = 0

        @next.onclick = @on_next

        @load @gifs[@current]

        console.log '\n\n\nGIFSTORM.biz\nby CHARLTON ROBERTS\nhttp://charlton.io\n@charltoons\n\n\n'

    load: (gif)->
        @img = new Image
        path = @get_path gif.file

        # set callback for when the gif loads
        @img.onload = =>
            @body.style.backgroundImage = 'url(' + path + ')'

        # load the image in a dummy html <img> so we know when its loaded
        @img.src = path

        # set the exhibit info
        @title.innerText = gif.title
        @artist.innerText = 'by ' + gif.artist
        @source.setAttribute 'href', gif.source
    on_next: =>
        if ++@current >= @gifs.length then @current = 0
        @load @gifs[@current]

    get_path: (filename)-> @gif_path + filename


document.onreadystatechange = ->
    
    if document.readyState == "complete"

        GIFSTORM = new GIFSTORM gifs