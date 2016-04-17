'use strict';

adsApp.controller('TownsController', ['$scope', 'townsService', '$rootScope', function ($scope, townsService, $rootScope) {

  $scope.selectedTown = null;

  townsService.getTowns()
    .then(function (result) {
      $scope.townsDataArr = result;
    });

  $scope.getAdsByTownFilter = function (town) {
    $scope.selectedTown = town ? town.id : null;
    $rootScope.$broadcast('clickedTown', town);
  }
}]);
