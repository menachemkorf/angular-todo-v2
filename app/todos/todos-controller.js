'use strict';

angular.module('todo')
    .controller('TodosCtrl', function(todosModel) {
        var ctrl = this;

        todosModel.getTodos()
            .then(function(items) {
                ctrl.todos = items;
            })
            .catch(function(error) {
                ctrl.error = error
            })
            .finally(function() {
                console.log('Done!');
            });
    });