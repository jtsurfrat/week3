namespace mongodb {

    angular.module('mongodb', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: mongodb.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: mongodb.Controllers.EditController,
                controllerAs: 'controller'
            })
            // .state('delete', {
            //     url: '/delete/:id',
            //     templateUrl: '/ngApp/views/delete.html',
            //     controller: mongodb.Controllers.deleteController,
            //     controllerAs: 'controller'
            // })
            .state('about', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: mongodb.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
