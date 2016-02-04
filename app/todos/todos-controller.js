angular.module('todo')
    .controller('TodosCtrl', function(TodosModel) {
        var ctrl = this;

        ctrl.todos = TodosModel.all();

    });