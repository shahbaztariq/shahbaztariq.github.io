/**
 * requires
 */
var gulp    = require('gulp');
var sass    = require('gulp-sass');
var minify  = require('gulp-minify');
var rename  = require('gulp-rename');
var plumber = require('gulp-plumber');

/**
 * default task
 */
gulp.task('default', ['js', 'css']);

/**
 * css task
 */
gulp.task('css', function () {
    
    var options = {
        outputStyle: 'compressed'
    };
    
    gulp.src('./build/scss/styles.scss')
        .pipe(plumber())
        .pipe(sass(options))
        .pipe(gulp.dest('./assets/'));
});

/**
 * js task
 */
gulp.task('js', function () {
    
    var options = {
        ext : {
            min : '.js'
        },
        noSource : true
    };
    
    gulp.src('./build/js/ssst.js')
        .pipe(plumber())
        .pipe(minify(options))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('./assets/'));
});

/**
 * watch task
 */
gulp.task('watch', function () {
    gulp.watch('./build/js/**/*.js', ['js']);
    gulp.watch('./build/scss/**/*.scss', ['css']);
})
