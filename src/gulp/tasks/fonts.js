var gulp = require('gulp');
var config = require('../../../package.json')["gulp-config"];

module.exports = () => {
	gulp.src(config.vendorFonts)
   		.pipe(gulp.dest(config.buildDir+'/fonts'));
}