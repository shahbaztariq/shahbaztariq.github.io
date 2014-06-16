module.exports = function(grunt) {
    // configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        /* uglify */
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            build: {
                files: {
                    'build/js/scripts.js': [
                        'build/js/_scripts/core.js'
                    ]
                }
            }
        },
        
        /* sass */
        sass: {
            styles: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'build/css/styles.css' : 'build/css/sass/styles.scss'
                }
            }
        },
        
        /* concat */
        concat: {
            options: {},
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'build/js/scripts.js'
                ],
                dest: 'assets/js/main.js'
            },
            css: {
                src: [
                    'bower_components/bootswatch/united/bootstrap.min.css',
                    'build/css/styles.css'
                ],
                dest: 'assets/css/main.css'
            }
        },
        
        /* concat */
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: ['bower_components/bootstrap/dist/fonts/*'],
                dest: 'assets/fonts/',
                filter: 'isFile'
            }
        },
        
        /* watch */
        watch: {
            css: {
                files: 'build/css/sass/**.*',
                tasks: ['sass', 'concat:css']
            }
        }
    });
    
    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // default tasks
    grunt.registerTask('default', ['uglify', 'sass', 'concat', 'copy']);
};
