'use strict';

adsApp.factory('authentication', ['$resource', 'localStorageService', 'API_URLS', function ($resource, localStorageService, API_URLS) {

  var userKeyID = 'user';

  var createUserSession = function (data) {
    localStorageService.set(userKeyID, angular.toJson(data));
  };

  var clearUserSession = function (data) {
    localStorageService.remove(userKeyID);
  };

  var getCurrentUser = function () {
    // TODO:
    return angular.fromJson(localStorageService.get(userKeyID));
  };

  var isAdmin = function() {
    var currUser = getCurrentUser();
    if(currUser) {
      return currUser.isAdmin;
    }
    return false;
  };

  var isLoggedIn = function() {
    var currUser = getCurrentUser();
    if(currUser) {
      return true;
    }
    return false;
  }

  var getAuthHeaders = function () {
    var headers = {};
    var curUser = getCurrentUser();
    if(curUser) {
      headers.Authorization = 'Bearer ' + curUser.access_token;
    }

    return headers;
  }

  return {
    createUserSession: createUserSession,
    getCurrentUser: getCurrentUser,
    getAuthHeaders: getAuthHeaders,
    clearUserSession: clearUserSession,
    isLoggedIn: isLoggedIn,
    isAdmin: isAdmin
  }
}]);
