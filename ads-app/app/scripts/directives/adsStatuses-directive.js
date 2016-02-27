adsApp.directive('adsStatusesDirective', function () {
  return {
    controller: 'UserAdsController',
    restrict: 'AE',
    templateUrl: 'views/adsStatuses.html'
  };
});
