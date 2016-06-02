var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var webserver = require('gulp-webserver');

gulp.task('styles', function() {
  gulp
    .src('src/styles/main.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
  gulp
  .src('css/main.css')
    .pipe(rename({prefix: '_', suffix: '_compiled', extname: '.scss'}))
    .pipe(gulp.dest('src/styles/'));
});

gulp.task('view', function() {
  gulp.src('demo.html')
    .pipe(webserver({
      open: true,
      fallback: 'demo.html'
    }));
});

// watch yaml config folder changes
gulp.task('default',function() {
  gulp.watch('', ['styles']);
});