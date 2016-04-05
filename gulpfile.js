var gulp = require('./src/gulp/')([
	'browserify',
	// 'clean',
	'fonts',
	'styles',
	'serve'
]);
var browserSync = require('browser-sync').create();

gulp.task('default', ['browserify', 'fonts','styles', 'serve']);
gulp.task('js-watch', ['browserify'], browserSync.reload());