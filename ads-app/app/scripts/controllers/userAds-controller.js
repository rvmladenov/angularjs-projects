'use strict';

adsApp.controller('UserAdsController', ['$location', '$scope', 'authentication', 'userAdsService', 'errorMessagingService', 'ADS_OPTIONS', 'API_URLS', 'USER_STATUS',
    function ($location, $scope, authentication, userAdsService, errorMessagingService, ADS_OPTIONS, API_URLS, USER_STATUS) {

      if (!authentication.isLoggedIn()) {
        $location.path('/');
      }

      $scope.showPagination = true;
      $scope.hasRecords = true;
      var detaultParams = {startPage: 1, pageSize: ADS_OPTIONS.SIZE_PER_PAGE};

      var getUserAds = function () {
        userAdsService.get(detaultParams).then(function (result) {
          $scope.adsData = result;

          $scope.showPagination = (result.numPages > 1);
          $scope.hasRecords = (result.numItems == 0) ? false : true;

        }, function (error) {
          $scope.alerts = [{type: 'danger', msg: 'The user can not be authorized. Please contact your supervisor.'}];
        });
      };
      getUserAds();

      var deactivateAd = function (ad) {
        userAdsService.deactivate(ad).then(function (result) {

          getUserAds();

        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };
      $scope.deactivateAd = deactivateAd;

      var publishAgainAd = function (ad) {
        userAdsService.publishAgain(ad).then(function (result) {

          getUserAds();

        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };
      $scope.publishAgainAd = publishAgainAd;

      var deleteAd = function (ad) {
        userAdsService.delete(ad).then(function (result) {

          $scope.alerts = [{type: 'success', msg: 'Successfully deleted selected ad'}];
          getUserAds();

        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };
      $scope.deleteAd = deleteAd;

      $scope.currentPage = 1;
      $scope.startPage = 1;
      $scope.pageSize = ADS_OPTIONS.SIZE_PER_PAGE;
      $scope.pageChanged = function () {
        detaultParams.startPage = $scope.currentPage;
        getUserAds();
      }

      $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
      };

      $scope.editAd = function (id) {
        $location.path('/userAdsEdit' + "/" + id);
      };

      $scope.selectedStatus = null;
      var filterByStatus = function (status) {
        detaultParams.status = (status) ? status : null;
        $scope.selectedStatus = status;
        getUserAds();
      };
      $scope.filterByStatus = filterByStatus;
      $scope.userStats = USER_STATUS;

    }]
);
