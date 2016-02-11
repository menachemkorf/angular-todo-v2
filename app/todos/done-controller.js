angular.module('todo')
    .controller('DoneCtrl', function(TodosModel) {
        var ctrl = this;

        ctrl.todos = TodosModel.done();

    });