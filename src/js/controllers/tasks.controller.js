'use strict';

function TasksController($scope) {
	var tasks = this;

	tasks.todos = [
		{title: 'Study', description: '- angular'}
	];
	tasks.dones = [];
	tasks.adding = false;

	tasks.addNew = function() {
		tasks.adding = true;
	};

	tasks.save = function(todo) {
		tasks.todos.push(angular.copy(todo));
		tasks.adding = false;
		delete $scope.todo;
	};

	tasks.cancel = function() {
		tasks.adding = false;
	};
}

module.exports = ['$scope', TasksController];