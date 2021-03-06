'use strict';

angular.module('todo')
    .controller('DoneCtrl', function(todosModel) {
        var ctrl = this;

        todosModel.getTodos()
            .then(function(items) {
                ctrl.todos = _.filter(items, 'done');
            })
            .catch(function(error) {
                ctrl.error = error
            })
            .finally(function() {
                console.log('Done!');
            });
    });