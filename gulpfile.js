var gulp = require('./src/gulp/')([
	'browserify',
	// 'clean',
	// 'watch',
	'serve'
]);

gulp.task('default', ['browserify', 'serve']);