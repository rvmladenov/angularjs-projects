'use strict';

adsApp.controller('HomeController', ['$scope', 'townsService', 'categoriesService', 'adsService', 'LAYOUT', 'ADS_OPTIONS',
  function ($scope, townsService, categoriesService, adsService, LAYOUT, ADS_OPTIONS) {

    $scope.showPagination = true;
    $scope.hasRecords = true;
    $scope.sidebarLayout = LAYOUT.RIGHT_SIDEBAR;
    var detaultParams = {startPage: 1, pageSize: ADS_OPTIONS.SIZE_PER_PAGE};

    var loadAds = function () {
      adsService
        .getAds(detaultParams)
        .then(function (result) {

          $scope.adsData = result;
          $scope.showPagination = (result.numPages >1);
          $scope.hasRecords = (result.numItems == 0) ? false : true;

        }, function (error) {
          $scope.alerts = [{type: 'danger', msg: 'The following error occurred: ' +
          errorMessagingService.getErrorMessage(error)  +
          errorMessagingService.getErrorMessageDtls(error)}];
        });
    }
    loadAds();

    $scope.$on('clickedCategory', function (event, category) {
      detaultParams.categoryId = (category) ? category.id : null;
      loadAds(detaultParams);
    });

    $scope.$on('clickedTown', function (event, town) {
      detaultParams.townId = (town) ? town.id : null;
      loadAds();
    });

    $scope.currentPage = 1;
    $scope.pageSize = ADS_OPTIONS.SIZE_PER_PAGE;

    $scope.pageChanged = function() {
      detaultParams.startPage = $scope.currentPage;
      loadAds(detaultParams);
    }
  }]
);
