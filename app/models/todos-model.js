'use strict';

angular.module('todo')
	.service('TodosModel', function() {
		var service = this;

		var todos = [
			{title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false},
            {title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false},
            {title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false}
		];

		service.all = function() {
			return todos;
		};
	});