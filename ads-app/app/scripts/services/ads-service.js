'use strict';

adsApp.factory('adsService', ['$resource', 'API_URLS', 'authentication', function ($resource, API_URLS, authentication) {

  var resource = $resource(API_URLS.BASE + API_URLS.ADS);

  var getAllAds = function (adsRequestParams) {
    return resource.get(adsRequestParams).$promise;
  };

  return {
    getAds: getAllAds
  }
}]);
