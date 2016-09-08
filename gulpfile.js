var gulp = require('gulp');
var postcss = require('gulp-postcss');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');

gulp.task('css', function() {
  return (
    gulp.src('./src/css/*.css')
      .pipe(postcss([
        require("postcss-cssnext")(),
      ]))
      .pipe(gulp.dest('./src/dest/css'))
      .pipe(livereload())
  )
});

gulp.task('html', function() {
  return (
    gulp.src('./src/*.html')
      .pipe(livereload())
  )
});

gulp.task('js', function() {
  return (
    gulp.src('./src/js/*.js')
      .pipe(babel())
      .pipe(gulp.dest('./src/dest/js'))
      .pipe(livereload())
  )
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/css/*.css', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
});

gulp.task('default', ['watch']);
