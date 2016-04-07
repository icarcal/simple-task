var gulp = require('./src/gulp/')([
	// 'clean',
	'browserify',
	'fonts',
	'styles',
	'scripts',
	'serve'
]);

gulp.task('default', ['scripts', 'fonts', 'styles', 'browserify', 'serve']);