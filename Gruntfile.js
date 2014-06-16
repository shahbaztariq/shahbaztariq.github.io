module.exports = function(grunt) {
    // configuration.
    grunt.initConfig({
        pkg:   grunt.file.readJSON('package.json'),
        
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
                    'assets/bower/bootstrap/dist/css/bootstrap.min.css'
                ],
                dest: 'assets/css/main.css'
            }
        }
    });
    
    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // default tasks
    grunt.registerTask('default', ['concat']);
};
