module.exports = (grunt)->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    jade:
      compile:
        options:
          data: (dest, src)->
            require './gifs.json'
        files:
          './index.html': './src/jade/index.jade'

    browserify:
      dist: 
        files: 
          './build/js/gifstorm.js': ['./gifs.json', './src/coffee/*.coffee']
        options:
          transform: ['coffeeify']

    sass:
      dist:
        files:
          './build/css/gifstorm.css': './src/sass/gifstorm.scss'

    watch:
      scripts:
        files: ['./src/coffee/*.coffee', './gifs.json']
        tasks: ['browserify']
      styles:
        files: './src/sass/*.scss'
        tasks: ['sass']
      source:
        files: './src/jade/*.jade'
        tasks: ['jade']



  grunt.loadNpmTasks  'grunt-contrib-jade'
  grunt.loadNpmTasks  'grunt-contrib-sass'
  grunt.loadNpmTasks  'grunt-contrib-watch'
  grunt.loadNpmTasks  'grunt-browserify'

  grunt.registerTask  'default', ['jade', 'browserify', 'sass']
