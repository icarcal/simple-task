var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var streamify = require('gulp-streamify')
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

module.exports = () => {
	var files = [
		'./src/js/app.js',
	],
	dest = './build/js/';

	return browserify(files)
		.transform("babelify", {presets: ["es2015"]})
    	.bundle()
    	.pipe(source('app.js'))
    	.pipe(buffer())
    	.pipe(sourcemaps.init({loadMaps: true}))
    	.pipe(streamify(uglify()))
    	.pipe(sourcemaps.write('./'))
    	.pipe(gulp.dest(dest));
}