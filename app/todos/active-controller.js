angular.module('todo')
    .controller('ActiveCtrl', function(TodosModel) {
        var ctrl = this;

        ctrl.todos = TodosModel.active();

    });