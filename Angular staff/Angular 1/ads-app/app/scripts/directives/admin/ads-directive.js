adsApp.directive('adsAdminDirective', function () {
  return {
    controller: 'AdminAdsController',
    restrict: 'AE',
    templateUrl: 'views/admin/ads.html'
  };
});
