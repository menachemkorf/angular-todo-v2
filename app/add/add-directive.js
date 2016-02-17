'use strict';

angular.module('todo')
    .directive('addTodo', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/add/add.tmpl.html',
            controller: 'AddCtrl',
            controllerAs: 'add',
        };
    });