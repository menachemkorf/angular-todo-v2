'use strict';

angular.module('todo', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/todos');

        $stateProvider
            .state('todos', {
                url: '/todos',
                templateUrl: 'app/todos/todos.tmpl.html',
                controller: 'TodosCtrl',
                controllerAs: 'ctrl'
            });


    });