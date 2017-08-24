var myApp = angular.module('myApp');

myApp.controller('WomenController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){ //lo pone así para evitar break al usar 'minified angular'
  console.log('WomenController loaded...');

  $scope.getWomen = function () {
    //console.log('getWomen called');
    // $http.get('/api/women').success(function(response) {
    //   $scope.women = response;
    //   console.log(response);
    // });
    $http({
          method: 'GET',
          url: 'api/women'
       }).then(function (response){
         $scope.women = response.data;
         console.log(response.data);
       },function (error){
         console.log(error);
       });

  }

  $scope.getWoman = function () {
      console.log('entra en la función getWoman');
      var id = $routeParams.id; //esto lo he cambiado respecto al tutorial porque si no no hacía el casting de id para poder hacer la query bien a la DB
    $http({
          method: 'GET',
          url: 'api/women/'+ id
       }).then(function (response){
         $scope.woman = response.data;
         console.log(url);
         console.log(response.data);
       },function (error){
         console.log(error);
       });
  }

  $scope.addWoman = function () {
      console.log('entra en la función addWoman');
      //var id = $routeParams.id; //esto lo he cambiado respecto al tutorial porque si no no hacía el casting de id para poder hacer la query bien a la DB
    $http({
          method: 'POST',
          url: 'api/women/',
          data: $scope.woman
       }).then(function (response){
        // $scope.woman = response.data;
        window.location.href='#!/women';

         console.log(response.data);
       },function (error){
         console.log(error);
       });
  }

  $scope.updateWoman = function () {
      //console.log('entra en la función updateWoman');
      var id = $routeParams.id;
    $http({
          method: 'PUT',
          url: 'api/women/' + id,
          data: $scope.woman
       }).then(function (response){
        // $scope.woman = response.data;
        window.location.href='#!/women';

         console.log(response.data);
       },function (error){
         console.log(error);
       });
  }

  $scope.removeWoman = function (id) {
    if (confirm("Are you sure?") == true) {
      $http({
            method: 'DELETE',
            url: 'api/women/' + id
         }).then(function (response){
          // $scope.woman = response.data;
          window.location.href='#!/women';

           console.log(response.data);
         },function (error){
           console.log(error);
         });
  } else {
  }

  }


  $scope.getFields = function () {
    //console.log('getWomen called');
    // $http.get('/api/women').success(function(response) {
    //   $scope.women = response;
    //   console.log(response);
    // });
    $http({
          method: 'GET',
          url: 'api/fields'
       }).then(function (response){
         $scope.fields = response.data;
         console.log(response.data);
       },function (error){
         console.log(error);
       });

  }


//funcion para tests
  $scope.myTxt = "You have not yet clicked submit";
    $scope.myFunc = function () {
        $scope.myTxt = "You clicked submit!";
        console.log('holi');
    }

}]);
