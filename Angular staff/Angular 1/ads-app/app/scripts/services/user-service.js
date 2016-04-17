'use strict';

adsApp.factory('userService', ['$resource', '$q', '$http', 'API_URLS', 'authentication',
  function ($resource, $q, $http, API_URLS, authentication) {

    var register = function (user) {
      return $resource(API_URLS.BASE + API_URLS.USER_REGISTER).save(user).$promise;
    };

    var login = function (user) {
      return $resource(API_URLS.BASE + API_URLS.USER_LOGIN).save(user).$promise;
    };

    var logout = function () {
      var d = $q.defer(),
          headers = authentication.getAuthHeaders();

      $http.post(API_URLS.BASE + API_URLS.USER_LOGOUT, {}, {headers: headers})
        .success(function (userLogoutData) {
          authentication.clearUserSession(userLogoutData);
          d.resolve(userLogoutData);
        })
        .error(function (logoutErr) {
          d.reject(logoutErr);
        });

      return d.promise;
    };

    return {
      register: register,
      login: login,
      logout: logout
    }
  }]
);
