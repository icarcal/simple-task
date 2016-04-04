var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var config = require('../../../package.json')["gulp-config"];

module.exports = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}