module.exports = function(grunt) {
    // configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        /* concat */
        concat: {
            options: {},
            js: {
                src: [
                    'assets/bower/jquery/dist/jquery.min.js',
                    'assets/bower/bootstrap/dist/js/bootstrap.min.js'
                ],
                dest: 'assets/js/main.js'
            },
            css: {
                src: [
                    'assets/bower/bootstrap/dist/css/bootstrap.min.css',
                    'assets/local/css/styles.css'
                ],
                dest: 'assets/css/main.css'
            }
        },
        
        /* concat */
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: ['assets/bower/bootstrap/dist/fonts/*'],
                dest: 'assets/fonts/',
                filter: 'isFile'
            }
        }
    });
    
    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // default tasks
    grunt.registerTask('default', ['concat', 'copy']);
};
