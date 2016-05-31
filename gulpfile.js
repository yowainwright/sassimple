var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var purifyCSS = require('gulp-purifycss');
var cssnano = require('gulp-cssnano');
var webserver = require('gulp-webserver');

// compile styles 
gulp.task('styles', function() {

  gulp
    // turn sass into css
    .src('src/styles/main.scss')
    // for all partials
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    // remove unused css
    .pipe(purifyCSS(['src/javascript/**/*.js', 'src/mustache/*.mustache']))
    // further minify css
    .pipe(cssnano())
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