angular.module('todo')
    .controller('ImportantCtrl', function(TodosModel) {
        var ctrl = this;

        ctrl.todos = TodosModel.important();

    });