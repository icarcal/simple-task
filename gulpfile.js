var gulp = require('./src/gulp/')([
	'browserify',
	// 'clean',
	// 'watch',
	'styles',
	'serve'
]);

gulp.task('default', ['browserify', 'styles', 'serve']);