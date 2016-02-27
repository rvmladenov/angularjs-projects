adsApp.directive('townsDirective', function () {
  return {
    controller: 'TownsController',
    restrict: 'AE',
    templateUrl: 'views/towns.html'
  };
});
