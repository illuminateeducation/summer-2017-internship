'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    
    clean: {
      site: [
        'public/css/build/site-*',
        'public/js/build/site-*'
      ]
    },


    copy: {

      site: {
        files: [
          {
            src: 'public/css/dev/site-library.css',
            dest: 'public/css/build/site-library.min.css'
          },
          {
            src: 'public/css/dev/site-main.css',
            dest: 'public/css/build/site-main.min.css'
          }
        ]
      },
      build: {
        files: [
          {
            src: '**/*',
            cwd: 'public/css/dev/images',
            dest: 'public/css/build/images',
            expand: true
          },
          {
            src: '**/*',
            cwd: 'public/css/dev/fonts',
            dest: 'public/css/build/fonts',
            expand: true
          }
        ]
      }
    },

    // Creating the watch functionality for compiling LESS files when they change.
    watch: {
      siteCss: {
        files: [
          'public/css/site/**/*.less'
        ],
        tasks: ['less:site']
      },
    },

    // Setting up the LESS compilation and helper folders for 'bootstrap' and 'font awesome'.
    less: {
      site: {
        options: {
          cleancss: true,
          paths: [
            'public/libs/bootstrap/less',
            'public/libs/font-awesome/less'
          ]
        },
        files: {
          'public/css/dev/site-library.css': 'public/css/site/site-library.less',
          'public/css/dev/site-main.css': 'public/css/site/site-main.less'
        }
      }
    },

    requirejs: {
      siteCompile: {
        options: {
          almond: true,
          name: '../../../node_modules/almond/almond',
          mainConfigFile: 'public/js/site/require.build.js',
          optimize: 'uglify',
          out: 'public/js/build/site-main.min.js',
          paths: {
            'require': 'empty:',
            'jquery': 'empty:',
            'underscore': 'empty:',
            'backbone': 'empty:',
            'bootstrap': 'empty:',
            'js-cookie': 'empty:'
          },
          wrap: {
            startFile: 'public/js/site/wrappers/build_start.frag',
            endFile: 'public/js/site/wrappers/build_end.frag'
          }
        }
      }
    },

    uglify: {
      build: {
        options: {
          sourceMap: false,
          mangle: false
        }
      },
      site: {
        files: {
          'public/js/build/site-library.min.js': [
            'public/libs/jquery/dist/jquery.js',
            'public/libs/fastclick/lib/fastclick.js',
            'public/libs/lodash/lodash.js',
            'public/libs/backbone/backbone.js',
            'public/libs/bootstrap/dist/js/bootstrap.js',
            'public/libs/js-cookie/src/js.cookie.js'
          ]
        }
      }
    },

    concat: {
      siteMapLibrary: {
        src: [
        ],
        dest: 'public/js/build/site-map-library.min.js'
      }
    },

  });

  // Loading additional grunt helper files.
  // This single command will load all the grunt-contrib options.
  require('load-grunt-tasks')(grunt);

  // Registering the grunt tasks.
  grunt.registerTask('test', [
    'phpunit'
  ]);

  grunt.registerTask('build', [
    'buildSite:*:*',
  ]);

  grunt.registerTask('buildSite', [
    'clean:site',
    'less:site',
    'requirejs:siteCompile',
    'uglify:site',
    'concat:siteMapLibrary',
    'copy:site'
  ]);

  grunt.registerTask('appDist', [
    'buildSite:*:*'
  ]);

  grunt.registerTask('compile', [
    'less:site'
  ]);

  grunt.registerTask('default', [
    'compile', 
    'watch'
  ]);
  
};