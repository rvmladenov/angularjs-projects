'use strict';

adsApp.controller('CategoriesController', ['$scope', '$rootScope', 'categoriesService', 'adsService', 'ADS_OPTIONS', function ($scope, $rootScope, categoriesService, adsService, ADS_OPTIONS) {

  $scope.selectedCat = null;

  categoriesService.getCategories()
    .then(function (result) {
      $scope.categoriesDataArr = result;
    });

  $scope.getAdsByCategoryFilter = function (category) {
    $scope.selectedCat = category ? category.id : null;
    $rootScope.$broadcast('clickedCategory', category);
  }
}]);
