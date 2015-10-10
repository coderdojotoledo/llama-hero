module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    /**
    * Removes all the files in the specified directories.
    */
    clean: {
      dev: [
          'build'
      ]
    },
    uglify: {
        options: {
            sourceMap: true
        },
        dev: {
            files: {
                "build/js/llama-hero.min.js": [
                    "app/src/**/*.js",
                    "!app/src/Init.js",
                    "app/src/Init.js"
                ]
            }
        }
    },
    copy: {
      dev: {
        files: [
            {
              cwd: 'app',
              expand: true,
              src: ['assets/**/*'],
              dest: 'build/'
            },
            {
                'build/index.html': 'app/website/dev/index.html'
            }
        ]
      },
      vendor: {
        files: [
          {
            'build/vendor/phaser.min.js': 'app/vendor/phaser-official/build/phaser.min.js',
            'build/vendor/phaser.map': 'app/vendor/phaser-official/build/phaser.map'
          }
        ]
      }
    },
    open: {
      app: {
        path: 'http://localhost:8080'
      }
    },
    connect: {
      app: {
        options: {
          port: 8080,
          base: 'build',
          livereload: true
        }
      }
    },
    watch: {
      dev: {
        files: 'app/**/*',
        tasks: ['clean:dev', 'uglify:dev', 'copy-dev'],
        options: {
          livereload: true
        }
      }
    }
  });

    grunt.registerTask('copy-dev', ['copy:dev', 'copy:vendor']);

    grunt.registerTask('dev', ['clean:dev', 'uglify:dev', 'copy-dev', 'open', 'connect', 'watch:dev']);

    grunt.registerTask('default', 'dev');
};