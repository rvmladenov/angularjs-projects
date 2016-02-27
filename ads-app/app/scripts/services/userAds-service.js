'use strict';

adsApp.factory('userAdsService', ['$resource', '$q', '$http', 'API_URLS', 'authentication', function ($resource, $q, $http, API_URLS, authentication) {

  var resource = $resource(API_URLS.BASE + API_URLS.USER_USER_ADS, {}, {
    'get': {method: 'GET', headers: authentication.getAuthHeaders()},
    'getById': {
      method: 'GET', headers: authentication.getAuthHeaders(),
      url: API_URLS.BASE + API_URLS.USER_USER_ADS + '/:id',
      params: {id: '@id'}
    },
    'save': {method: 'POST', headers: authentication.getAuthHeaders()},
    'update': {method: 'PUT', headers: authentication.getAuthHeaders(),
      url: API_URLS.BASE + API_URLS.USER_USER_ADS + '/:id',
      params: {id: '@id'}},
    'delete': {
      method: 'DELETE',
      headers: authentication.getAuthHeaders(),
      url: API_URLS.BASE + API_URLS.USER_USER_ADS + '/:id',
      params: {id: '@id'}
    },
    'deactivate': {
      method: 'PUT',
      headers: authentication.getAuthHeaders(),
      url: API_URLS.BASE + API_URLS.USER_USER_ADS_DEACIVATE + ':id',
      params: {id: '@id'}
    },
    'publishAgain': {
      method: 'PUT',
      headers: authentication.getAuthHeaders(),
      url: API_URLS.BASE + API_URLS.USER_USER_ADS_PUBLISH_AGAIN + ':id',
      params: {id: '@id'}
    }
  });

  var get = function (detaultParams) {
    return resource.get(detaultParams).$promise;
  };

  var getById = function (id) {
    return resource.getById({id: id}).$promise;
  };

  var update = function (ad) {
    return resource.update({id: ad.id}, ad).$promise;
  };

  var publishAgain = function (ad) {
    return resource.publishAgain({id: ad.id}).$promise;
  };

  var deactivate = function (ad) {
    return resource.deactivate({id: ad.id}).$promise;
  };

  var deleteAd = function (ad) {
    return resource.delete({id: ad.id}).$promise;
  };

  var save = function (ad) {
    return resource.save(ad).$promise;
  }

  return {
    get: get,
    getById: getById,
    update: update,
    delete: deleteAd,
    save: save,
    publishAgain: publishAgain,
    deactivate: deactivate
  }
}]);
