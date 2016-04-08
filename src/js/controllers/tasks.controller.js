'use strict';

function TasksController($scope) {
	let tasks = this;

	tasks.todos = [
		{title: 'Study', description: '- angular'}
	];
	tasks.dones = [];
	tasks.adding = false;

	tasks.addNew = function() {
		tasks.adding = true;
	};

	tasks.save = function(task) {
		tasks.todos.push(task)
		tasks.adding = false;
	};

	tasks.cancel = function() {
		tasks.adding = false;
	};
}

module.exports = ['$scope', TasksController];