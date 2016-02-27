'use strict';

adsApp.factory('townsService', ['$resource', 'API_URLS', function($resource, API_URLS) {

  var resource = $resource(API_URLS.BASE + API_URLS.TOWNS);
  var getAllTowns = function() {
    return resource.query().$promise;
  };

  var getFilterParams = function(town) {
    var params = {};
    params.townId = town.id;

    return params;
  };

  return {
    getTowns: getAllTowns,
    getFilterParams: getFilterParams
  }
}]);
