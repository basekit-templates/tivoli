var sass = require('gulp-sass');
var path = require('path');
var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('concat', function(){
  gulp.src(['./**/**/*.scss','./**/*.scss','./*.scss', '!./node_modules/**/*.scss', '!./concat/**/*.scss'])
    .pipe(gulp.dest('concat'));
});

gulp.task('sass', function () {
  return gulp.src('./concat/*.scss')
    .pipe(sass({
      paths: [ path.join(__dirname, 'sass', 'includes') ]
    }))
    .pipe(gulp.dest('./concat'));
});

gulp.task('default', ['concat', 'sass'])
