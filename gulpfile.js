var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var webserver = require('gulp-webserver');

gulp.task('styles', function() {
  gulp
  .src('src/pre/styles/demo.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/'));
});



// watch yaml config folder changes
gulp.task('default',function() {
  gulp.watch('', ['styles']);
});