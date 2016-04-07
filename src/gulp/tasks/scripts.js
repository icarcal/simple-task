var gulp = require('gulp');
var config = require('../../../package.json')["gulp-config"];
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

module.exports = () => {
	return gulp.src(config.vendorJs)
	    .pipe(concat('vendor.js'))
	    .pipe(uglify())
	    .pipe(gulp.dest('./build/js/'));
}