'use strict';

angular.module('todo')
    .controller('AddCtrl', function(todosModel) {
        var ctrl = this;

        ctrl.add = function() {

            var lastId = todosModel.length;
            var newId = lastId + 1;

            todosModel.addTodo({
                id: newId,
                title: ctrl.newTodoTitle,
                description: ctrl.newTodoDescription,
                done: false,
                important: false
            });

            ctrl.newTodoTitle = '';
            ctrl.newTodoDescription = '';

        };
    });