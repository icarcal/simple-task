var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../../../package.json')["gulp-config"];

module.exports = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("src/stylus/*.styl", ['styles']);
    gulp.watch("src/js/**/*.js", ['js-watch']).on('change',browserSync.reload);
}