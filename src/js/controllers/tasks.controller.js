'use strict';

function TasksController($scope) {
	var vm = this;

	vm.todos = [
		{title: 'Study', description: '- angular'}
	];
	vm.dones = [];
	vm.adding = false;

	vm.addNew = function() {
		vm.adding = true;
	};

	vm.save = function(todo) {
		vm.todos.push(angular.copy(todo));
		vm.adding = false;
		delete $scope.todo;
	};

	vm.cancel = function() {
		vm.adding = false;
	};
}

module.exports = ['$scope', TasksController];