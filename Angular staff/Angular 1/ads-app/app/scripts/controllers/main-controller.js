'use strict';

adsApp.controller('MainController', ['$scope', '$route', '$location', 'LAYOUT', 'localStorageService', 'authentication', '$timeout', 'cfpLoadingBar', 'userService', 'ADS_OPTIONS', 'messagingService',
    function ($scope, $route, $location, LAYOUT, localStorageService, authentication, $timeout, cfpLoadingBar, userService, ADS_OPTIONS, messagingService) {

      $scope.alerts = [];

      /** Progress indicator */
      $scope.start = function () {
        cfpLoadingBar.start();
      };

      $scope.complete = function () {
        cfpLoadingBar.complete();
      };

      // fake the initial load so first time users can see it the right away:
      $scope.start();
      $scope.fakeIntro = true;
      $timeout(function () {
        $scope.complete();
        $scope.fakeIntro = false;
      }, 750);

      /** App initialization */
      var getAppInitErrs = function () {
        var errors = [];

        // TODO: What to do with this ?
        if (!localStorageService.isSupported) {
          errors.push(new Error('localStorageService does not support [' + localStorageService.getStorageType() + ']'));
        }

        return errors;
      };

      var appInitializationErrs = getAppInitErrs();
      if (appInitializationErrs) {

        // TODO: Handle this errors using some other more smarter way(using jquery notify for example)
        appInitializationErrs.forEach(function (err) {
          console.log(err.message);
        });
      }

      /** Sessions */
      $scope.isUserLoggedIn = function () {
        return authentication.isLoggedIn();
      };

      $scope.isUserAdmin = function () {

        // TODO: Uncomment this
        //return authentication.isAdmin();

        return false;
      };

      $scope.getCurrentUserName = function () {
        if (authentication.isLoggedIn()) {
          return authentication.getCurrentUser().username;
        }
      };

      $scope.logOut = function () {
        userService.logout().then(function (data) {
          $location.path('/');
        }, function (error) {
          $scope.alerts = [{ type: 'danger', msg: 'The following error occurred: ' + error }];
        })
      };

      /** Alert */
      $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
      };

      /** Layouts definitions */
      $scope.headerLayout = LAYOUT.HEADER;
      $scope.footerLayout = LAYOUT.FOOTER;

      $scope.getCurrentPath = function() {
        return $location.path();
      }

      $scope.isWaitingOrPublishedStatus = function (ad) {
        return (ad.status == 'WaitingApproval' || ad.status == 'Published');
      }
    }]
);
