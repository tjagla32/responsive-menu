var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');



gulp.task('style', function(){
  gulp.src(['app/*.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style.css'))
  .pipe(gulp.dest('app'));
});

gulp.task('watch', function(){
  gulp.watch('app/*.scss', ['style']);
});

gulp.task('default', ['style', 'watch']);
