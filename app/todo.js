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
            })
            .state('active', {
                url: '/active',
                templateUrl: 'app/todos/todos.tmpl.html',
                controller: 'ActiveCtrl',
                controllerAs: 'ctrl'
            })
            .state('completed', {
                url: '/completed',
                templateUrl: 'app/todos/todos.tmpl.html',
                controller: 'DoneCtrl',
                controllerAs: 'ctrl'
            })
            .state('important', {
                url: '/important',
                templateUrl: 'app/todos/todos.tmpl.html',
                controller: 'ImportantCtrl',
                controllerAs: 'ctrl'
            });


    });