var gulp = require('gulp');
var gutil = require('gulp-util');
var zip = require('gulp-zip');

const WP_PLUGINS_DIR = "C:/wordpress/wordpress-3.8/wordpress/wp-content/plugins";

gulp.task('default', [ 'local' ]);

gulp.task('local', function() {
  gulp.src('./gps-press/**/*').pipe(gulp.dest(WP_PLUGINS_DIR+"/gps-press/"));
});

gulp.task('dist', function() {
  gulp.src('./gps-press/**/*').pipe(zip('gps-press.zip')).pipe(gulp.dest('dist'));
});