'use strict';

angular.module('todo')
    .controller('ImportantCtrl', function(todosModel) {
        var ctrl = this;

        todosModel.getTodos()
            .then(function(items) {
                ctrl.todos = _.filter(items, 'important');
            })
            .catch(function(error) {
                ctrl.error = error
            })
            .finally(function() {
                console.log('Done!');
            });
    });