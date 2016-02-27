'use strict';

adsApp.controller('UserAdsEditController', ['$scope', '$routeParams', 'authentication', 'userAdsService', 'errorMessagingService', 'townsService', 'categoriesService',
    function ($scope, $routeParams, authentication, userAdsService, errorMessagingService, townsService, categoriesService) {

      if (!authentication.isLoggedIn()) {
        $location.path('/');
      }

      if (!$routeParams.adId) {
        $location.path('/');
      }

      var getAd = function (id) {
        userAdsService.getById(id).then(function (data) {
          $scope.ad = data;
        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };
      getAd($routeParams.adId);

      var updateAd = function (ad) {
        userAdsService.update(ad).then(function (data) {
          $scope.alerts = [{type: 'success', msg: 'Successfully updated add'}];
        }, function (error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };
      $scope.updateAd = updateAd;

      var getAllTowns = function () {
        townsService.getTowns()
          .then(function (result) {
            $scope.townsDataArr = result;
          });
      };
      getAllTowns();

      var getAllCategories = function () {
        categoriesService.getCategories()
          .then(function (result) {
            $scope.categoriesDataArr = result;
          });
      };
      getAllCategories();

      $scope.previewImage = function previewImage(file, idToPreview) {
        var file = file.files[0];

        // TODO: Add validation

        var reader = new FileReader();
        reader.onload = function () {
          $scope.ad.imageDataUrl = reader.result;
          $(idToPreview).attr("src", reader.result);
        }

        reader.readAsDataURL(file);
      };

      $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
      };
    }]
);
