'use strict';

var Hashids = require('hashids');

function TasksController($scope) {
	var vm = this,
		hashids = new Hashids("app.simple-task");

	vm.tasks = [];
	vm.adding = false;

	vm.todo = () => {
		return vm.tasks.filter( (task) => !task.complete );
	}

	vm.done = () => {
		return vm.tasks.filter( (task) => task.complete );
	}

	vm.addNew = () => {
		vm.adding = true;
		setTimeout( () => {
			document.getElementById('task-name').focus();
		}, 0);
	};

	vm.save = (task) => {
		if(vm.validate(task)) {
			task.id = hashids.encode(Date.now());
			task.complete = false;

			vm.tasks.push(angular.copy(task));
			vm.adding = false;
			delete $scope.task;
		}
	};

	vm.cancel = () => {
		vm.adding = false;
	};

	vm.remove = (task) => {
		vm.tasks = vm.tasks.filter( (t) => t.id != task.id );
	}

	vm.complete = (task) => {
		task.complete = true;
	}

	vm.validate = (task) => {
		if(task) {
			if(task.title === undefined || task.description === undefined) {
				return false;
			}

			return true;
		}

		return false;
	}
}

module.exports = ['$scope', TasksController];