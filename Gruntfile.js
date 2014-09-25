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
                    'bower_components/imgLiquid/js/imgLiquid-min.js',
                    'build/js/scripts.js'
                ],
                dest: 'assets/js/main.js'
            },
            css: {
                src: [
                    'bower_components/pure/pure-min.css',
                    'bower_components/pure/grids-responsive-min.css',
                    'build/css/styles.css'
                ],
                dest: 'assets/css/main.css'
            }
        },
        
        /* jekyll */
        jekyll: {
            dist: {
                
            }
        },
        
        /* image resize */
        image_resize: {
            facebook: {
                options: {
                    width: 200
                },
                src: 'assets/images/islam/*.jpg',
                dest: 'assets/images/islam/facebook/'
            }
        },
        
        /* watch */
        watch: {
            css: {
                files: 'build/css/sass/**/**.*',
                tasks: ['sass', 'concat:css', 'jekyll']
            },
            js : {
                files: 'build/js/_scripts/**/**.*',
                tasks: ['uglify', 'concat:js', 'jekyll']
            },
            html: {
                files: [
                    '_includes/**/**.html',
                    '_layouts/**/**.html',
                    '_posts/**/**.md',
                    '_islam/**/**.md',
                    'islam.html',
                    'index.html'
                ],
                tasks: ['jekyll']
            }
        }
    });
    
    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.loadNpmTasks('grunt-jekyll');
    
    // default tasks
    grunt.registerTask('default', ['uglify', 'sass', 'concat', 'jekyll']);
};
