module.exports = function(grunt) {

  grunt.initConfig({
    //jshint: {
    //  files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
    //  options: {
    //    globals: {
    //      jQuery: true
    //    }
    //  }
    //},
    //watch: {
    //  files: ['<%= jshint.files %>'],
    //  tasks: ['jshint']
    //}

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['./bower_components/jvectormap/src/*.js', './bower_components/jvectormap/jquery-jvectormap.js'],
        dest: './.tmp/jvectormap.js'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['concat']);

};