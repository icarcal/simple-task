var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');

module.exports = () => {
	var files = [
		'./src/js/app.js',
	];

	return browserify(files)
    	.bundle()
    	.pipe(source('app.js'))
    	.pipe(streamify(uglify()))
    	.pipe(gulp.dest('./build/js/'));
}