var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');
gulp.task('sass', function () {
  return gulp.src('app/sass/**/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('app/css/'))
      .pipe(browserSync.reload({stream: true}))
});


gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false,
    // open: false,
    // online: true, // Work Offline Without Internet Connection
    // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
  });
});


gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('app/sass/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});
gulp.task('default', ['watch', 'sass', 'browser-sync']);
