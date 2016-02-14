'use strict';

angular.module('todo')
    .controller('ActiveCtrl', function(TodosService) {
        var ctrl = this;

        ctrl.todos = TodosService.active();

    });