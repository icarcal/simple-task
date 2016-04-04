var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

module.exports = () => {
	var files = [
		'./src/js/app.js'
	];

	return browserify(files)
    	.bundle()
    	.pipe(source('app.js'))
    	.pipe(gulp.dest('./build/'));
}