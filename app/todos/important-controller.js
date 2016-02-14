'use strict';

angular.module('todo')
    .controller('ImportantCtrl', function(TodosService) {
        var ctrl = this;

        ctrl.todos = TodosService.important();

    });