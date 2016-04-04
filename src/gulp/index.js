var gulp = require('gulp');
var fs = require('fs');

module.exports = tasks => {
	tasks.forEach( task => {
		var taskFile = './tasks/'+task;
		gulp.task(task, require(taskFile));
	});

	return gulp;
};