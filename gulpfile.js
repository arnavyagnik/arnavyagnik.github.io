var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream : true
    }))
});
gulp.task('browserSync', function(){
  browserSync.init({
    server : {
      baseDir : 'dist'
    }
  })
})
gulp.task('watch', ['browserSync','sass'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass'])
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
})
