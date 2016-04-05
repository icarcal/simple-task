var gulp = require('./src/gulp/')([
	'browserify',
	// 'clean',
	'fonts',
	'styles',
	'serve'
]);

gulp.task('default', ['browserify', 'fonts','styles', 'serve']);