'use strict';

adsApp.controller('UserAdsNewController', ['$scope', 'authentication', 'userAdsService', 'errorMessagingService', 'townsService', 'categoriesService',
    function ($scope, authentication, userAdsService, errorMessagingService, townsService, categoriesService) {

      if (!authentication.isLoggedIn()) {
        $location.path('/');
      }

      $scope.ad = {};

      $scope.publishNewAdd = function(ad) {
        userAdsService.save(ad).then(function(data){
          $scope.alerts = [{type: 'success', msg: 'You successfully added new ad: '}];
        }, function(error) {
          $scope.alerts = [{
            type: 'danger', msg: 'The following error occurred: ' +
            errorMessagingService.getErrorMessage(error) + '' +
            errorMessagingService.getErrorMessageDtls(error)
          }];
        });
      };

      var getAllTowns = function() {
        townsService.getTowns()
          .then(function (result) {
            $scope.townsDataArr = result;
          });
      };
      getAllTowns();

      var getAllCategories = function() {
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
    }]
);
