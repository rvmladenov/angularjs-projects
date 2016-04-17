'use strict';

adsApp.factory('adsAdminService', ['$resource', '$location', 'API_URLS', 'authentication', function ($resource, $location, API_URLS, authentication) {

  if(!authentication.isAdmin()) {
    $location.path('/');
  }

  var resource = $resource(API_URLS.BASE + API_URLS.ADS, {}, {
    'get': {method: 'GET', headers: authentication.getAuthHeaders()}
  });

  var getAllAds = function (adsRequestParams) {
    return resource.get(adsRequestParams).$promise;
  };

  return {
    getAds: getAllAds
  }
}]);
