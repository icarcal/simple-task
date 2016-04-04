var gulp = require('gulp');
var config = require('../../../package.json')["gulp-config"];
var concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');

module.exports = () => {
	return gulp.src(config.vendorCss)
	    .pipe(concat('vendor.css'))
	    .pipe(cssnano())
	    .pipe(gulp.dest('./build/css/'));
}