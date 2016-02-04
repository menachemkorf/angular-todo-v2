angular.module('todo')
    .controller('TodosCtrl', function() {
        var ctrl = this;

        ctrl.todos = [
            {title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false},
            {title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false},
            {title: 'Angular Components', description: 'Views and Controllers, Directives and Services', done: false}
        ];
    });