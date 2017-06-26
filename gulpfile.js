var gulp = require('gulp');
var less = require('gulp-less');
var SRC = './js/*.js';
var DEST = 'dist';
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');
var source = require('vinyl-source-stream');


gulp.task('less', function () {
    gulp.src('local/less/main.less')
    .pipe(less())
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(minify())
    .pipe(gulp.dest('public/css'));

});

gulp.task('watch', function () {

    // Watch .less files
    gulp.watch('local/less/*.less', ['less']);
    

});
