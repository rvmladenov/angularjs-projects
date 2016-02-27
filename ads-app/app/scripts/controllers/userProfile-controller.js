'use strict';

adsApp.controller('UserProfileController', ['$scope', 'townsService', 'userProfileService', 'errorMessagingService', 'authentication', '$location',
    function ($scope, townsService, userProfileService, errorMessagingService, authentication, $location) {

      if (!authentication.isLoggedIn()) {
        $location.path('/');
      }

      townsService.getTowns()
        .then(function (result) {
          $scope.townsDataArr = result;
        });

      var getCurrentUserData = function () {
        userProfileService.getUserProfile().then(function (data) {
          $scope.user = data;
        }, function (error) {
          $scope.alerts = [{type: 'danger', msg: 'The user can not be authorized. Please contact your supervisor.'}];
        });
      };
      getCurrentUserData();

      $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
      };

      $scope.updateUserProfile = function (user) {
        userProfileService.update(user).then(function () {
          $scope.alerts = [{type: 'success', msg: 'You successfully update your profile: '}];
        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };

      $scope.updateUserPassword = function (userPassword) {
        userProfileService.updatePassword(userPassword).then(function () {
          $scope.alerts = [{type: 'success', msg: 'You successfully update your profile password: '}];
        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      }

    }]
);
