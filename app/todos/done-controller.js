'use strict';

angular.module('todo')
    .controller('DoneCtrl', function(TodosService) {
        var ctrl = this;

        ctrl.todos = TodosService.done();

    });