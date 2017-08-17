// var myApp = angular.module('myApp');
//
// myApp.controller('FieldsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){ //lo pone así para evitar break al usar 'minified angular'
//   console.log('FieldsController loaded...');
//
//   $scope.getFields = function () {
//     //console.log('getWomen called');
//     // $http.get('/api/women').success(function(response) {
//     //   $scope.women = response;
//     //   console.log(response);
//     // });
//     $http({
//           method: 'GET',
//           url: 'api/fields'
//        }).then(function (response){
//          $scope.fields = response.data;
//          console.log(response.data);
//        },function (error){
//          console.log(error);
//        });
//
//   }
//
// }]);
