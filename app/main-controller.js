angular.module('todo')
    .controller('MainCtrl', function(todosModel) {
        var main = this;

        main.add = function() {

            var lastId = todosModel.length;
            var newId = lastId + 1;

            todosModel.push({
                id: newId,
                title: main.newTodoTitle,
                description: main.newTodoDescription,
                done: false,
                important: false
            });

            main.newTodoTitle = '';
            main.newTodoDescription = '';

        };

    });