const gulp = require('gulp');
const rename = require("gulp-rename");

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');


// COPY
// copy in foot printless sass mixins
gulp.task('copy', () => {
	gulp
    .src('node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/*.scss')
    .pipe(gulp.dest('mixins/bootstrap/mixins/'));
  gulp
    .src('node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_mixins.scss')
    .pipe(gulp.dest('mixins/bootstrap/'));
  gulp
    .src('node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss')
    .pipe(gulp.dest('mixins/bootstrap/'));
  gulp
    .src('node_modules/compass-sass-mixins/lib/**/*')
    .pipe(gulp.dest('mixins/compass/'));
  gulp
	  .src('node_modules/sassline/assets/sass/sassline-base/_variables.scss')
    .pipe(gulp.dest('mixins/sassline/'));
  gulp
	  .src('node_modules/sassline/assets/sass/sassline-base/_mixins.scss')
    .pipe(gulp.dest('mixins/sassline/'));
  gulp
    .src('node_modules/bourbon/assets/stylesheets/**/*')
    .pipe(gulp.dest('mixins/bourbon/'));
  gulp
    .src('node_modules/neat/app/assets/stylesheets/**/*')
    .pipe(gulp.dest('mixins/neat/'));
});

gulp.task('default', ['copy']);
