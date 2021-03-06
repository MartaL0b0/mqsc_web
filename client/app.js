var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function ($routeProvider) {
  $routeProvider.when('/',{
    controller: 'WomenController',
    templateUrl: 'views/home.html'
  })
  .when('/about',{
    controller: 'WomenController',
    templateUrl: 'views/about.html'
  })

  .when('/women',{
    controller: 'WomenController',
    templateUrl: 'views/women.html'
  })

  .when('/women/details/:id',{
    controller: 'WomenController',
    templateUrl: 'views/woman_details.html'
  })

  .when('/women/add',{
    controller: 'WomenController',
    templateUrl: 'views/add_woman.html'
  })

  .when('/women/edit/:id',{
    controller: 'WomenController',
    templateUrl: 'views/edit_woman.html'
  })

  .when('/test',{
    controller: 'WomenController',
    templateUrl: 'views/template.html'
  })

  .otherwise({
    redirectTo: '/'
  });


});
