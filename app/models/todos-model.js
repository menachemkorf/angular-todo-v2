'use strict';

angular.module('todo')
    .service('TodosModel', function() {
        var service = this;

        var todos = [{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: false,
                important: true
            },{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: true,
                important: true
            },{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: false,
                important: false
            },{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: true,
                important: false
            },{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: false,
                important: true
            },{
                title: 'Angular Components',
                description: 'Views and Controllers, Directives and Services',
                done: false,
                important: false
            }
        ];

        service.all = function() {
            return todos;
        };

        service.done = function() {
            return _.filter(todos, 'done');
            /*console.log(done);
            return done;*/
        };

        service.active = function() {
            return _.filter(todos, ['done', false]);
            //['active', false]
            /*console.log(done);
            return done;*/
        };

        service.important = function() {
            return _.filter(todos, 'important');
            /*console.log(done);
            return done;*/
        };

    });