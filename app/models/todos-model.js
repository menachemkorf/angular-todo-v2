'use strict';

angular.module('todo')
    .factory('todosModel', function($q) {

        var todos = [{
                id: 1,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: false,
                important: true
            },{
                id: 2,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: true,
                important: true
            },{
                id: 3,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: false,
                important: false
            },{
                id: 4,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: true,
                important: false
            },{
                id: 5,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: false,
                important: true
            },{
                id: 6,
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services.',
                done: false,
                important: false
            }
        ];

        var getTodos = function(query) {
            var deferred = $q.defer();

            deferred.resolve(todos);

            return deferred.promise;
        };

        var addTodo = function(item) {
            todos.push(item);
        };



        return {
            getTodos: getTodos,
            addTodo: addTodo
        };

    });