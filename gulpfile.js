var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('sass', function(){
  return gulp.src('app/scss/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default', ['sass', 'connect', 'watch', 'browser-sync']);
