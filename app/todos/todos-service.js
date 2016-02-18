'use strict';

angular.module('todo')
    .service('TodosService', function(todosModel) {
        var service = this;
        var model = todosModel;
        var todos;

        service.all = function() {
            return model;
        };

        service.done = function() {
            return _.filter(model, 'done');
        };

        service.active = function() {
            return _.filter(model, ['done', false]);
        };

        service.important = function() {
            return _.filter(model, 'important');
        };
    });