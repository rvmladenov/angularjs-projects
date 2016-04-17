'use strict';

adsApp.controller('UserController', ['$scope', '$location', 'townsService', 'userService', 'authentication', 'errorMessagingService',
  function ($scope, $location, townsService, userService, authentication, errorMessagingService) {

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };

    var redirectToHome = function () {
      $location.path('/');
    };

    townsService.getTowns()
      .then(function (data) {
        $scope.townsDataArr = data;
      });

    var registerNewUser = function (user) {
      if (!user) {
        $scope.alerts = [{type: 'danger', msg: 'Please fill all required fields'}];
        return;
      }

      userService.register(user).then(function (data) {
        authentication.createUserSession(data);
        redirectToHome();
      }, function (error) {
        $scope.alerts = [{type: 'danger', msg: 'The following error occurred: ' +
        errorMessagingService.getErrorMessage(error)  +
        errorMessagingService.getErrorMessageDtls(error)}];
      });
    }
    $scope.registerNewUser = registerNewUser;

    var loginUser = function (user) {
      user = user || {};
      if (!user.username || !user.password) {
        $scope.alerts = [{type: 'danger', msg: 'All fields are required'}];
        return;
      }

      userService.login(user).then(function (data) {
        authentication.createUserSession(data);
        redirectToHome();

      }, function (error) {
        $scope.alerts = [{type: 'danger', msg: 'The following error occurred: ' + error.data.error_description}];
      });
    }
    $scope.loginUser = loginUser;
  }]
);
