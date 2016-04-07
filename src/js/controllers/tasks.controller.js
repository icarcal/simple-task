'use strict';

function TasksController($scope) {
	let tasks = this;

	tasks.todos = [
		{title: 'Study', description: '- angular'}
	];
	tasks.dones = [];
}

module.exports = ['$scope', TasksController];