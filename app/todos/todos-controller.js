'use strict';

angular.module('todo')
    .controller('TodosCtrl', function(TodosService) {
        var ctrl = this;
        ctrl.todos = TodosService.all();
    });