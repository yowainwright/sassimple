var gulp = require('gulp');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var webserver = require('gulp-webserver');

gulp.task('copy', function() {
	// 3rd party mixins
	gulp
    .src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss')
    .pipe(gulp.dest('mixins/bootstrap/mixins/'));
  gulp
    .src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss')
    .pipe(gulp.dest('mixins/bootstrap/'));
  gulp
    .src('bower_components/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss')
    .pipe(gulp.dest('mixins/bootstrap/'));
  gulp
    .src('bower_components/compass-sass-mixins/lib/**/*')
    .pipe(gulp.dest('mixins/compass/'));
  gulp
	.src('bower_components/sassline/assets/sass/sassline-base/_variables.scss')
    .pipe(gulp.dest('mixins/sassline/'));
  gulp
	.src('bower_components/sassline/assets/sass/sassline-base/_mixins.scss')
    .pipe(gulp.dest('mixins/sassline/'));
  gulp
  .src('bower_components/bourbon/assets/stylesheets/**/*')
    .pipe(gulp.dest('mixins/bourbon/'));
  gulp
  .src('bower_components/neat/app/assets/stylesheets/**/*')
    .pipe(gulp.dest('mixins/neat/'));
});

gulp.task('styles', function() {
  gulp
  .src('main.scss')
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('page/'));
});

gulp.task('default', ['copy', 'styles']);