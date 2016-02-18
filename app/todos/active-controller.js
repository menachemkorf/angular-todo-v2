'use strict';

angular.module('todo')
    .controller('ActiveCtrl', function(todosModel) {
        var ctrl = this;

        todosModel.getTodos()
            .then(function(items) {
                ctrl.todos = _.filter(items, ['done', false]);
            })
            .catch(function(error) {
                ctrl.error = error
            })
            .finally(function() {
                console.log('Done!');
            });
    });