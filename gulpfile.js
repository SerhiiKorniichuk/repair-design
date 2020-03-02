var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

function style () {
    return gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
}

function watch () {
    browserSync.init({
      server: {
        baseDir: './'
      }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

function minicss () {
      return gulp.src('./css/**/*.css')
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('./css'))
}

exports.style = style;
exports.watch = watch;
exports.minicss = minicss;