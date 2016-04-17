'use strict';

adsApp.factory('userProfileService', ['$resource', 'API_URLS', 'authentication', function ($resource, API_URLS, authentication) {

  var resource = $resource(API_URLS.BASE + API_URLS.USER_USER_PROFILE, {}, {
    'update': {method: 'PUT', headers: authentication.getAuthHeaders()},
    'getProfile': {method: 'GET', headers: authentication.getAuthHeaders()},
    'updatePassowrd': {method: 'PUT', headers: authentication.getAuthHeaders(), url: API_URLS.BASE + API_URLS.USER_USER_PROFILE_PASS}
  });

  var update = function (user) {
    return resource.update(user).$promise;
  };

  var getUserProfile = function () {
    return resource.getProfile().$promise;
  };

  var updatePassword = function (user) {
    return resource.updatePassowrd(user).$promise;
  };

  return {
    update: update,
    getUserProfile: getUserProfile,
    updatePassword: updatePassword
  }
}]);
