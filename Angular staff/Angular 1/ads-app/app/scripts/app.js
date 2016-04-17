'use strict';

var adsApp = angular.module('adsProjectAngularJsApp', [
  'ngRoute',
  'LocalStorageModule',
  'ngResource',
  'angular-loading-bar',
  'ui.bootstrap'
]);

adsApp
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'UserController'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'UserController'
      })
      .when('/userProfile', {
        templateUrl: 'views/userProfile.html',
        controller: 'UserProfileController'
      })
      .when('/userAds', {
        templateUrl: 'views/userAds.html',
        controller: 'UserAdsController'
      })
      .when('/userAdsNew', {
        templateUrl: 'views/userAdsNew.html',
        controller: 'UserAdsNewController'
      })
      .when('/userAdsEdit/:adId', {
        templateUrl: 'views/userAdsEdit.html',
        controller: 'UserAdsEditController'
      })
      .when('/404', {
        templateUrl: './404.html'
      })
      .otherwise({
        redirectTo: '/404'
      });

    /**
     * TODO: Found that there is a problem with the new HTML5 Paths when the page is refreshed by the user(the user clicks F5 )
     * Defines the new HTML 5 Paths (i.e. removes the #hashtag from the addressbar)
     */
    //$locationProvider.html5Mode(true);
  }])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setNotify(false, false)
      .setPrefix('adsApp')
      .setStorageCookie(69); // Days before the cookie will expire
  }])
  .constant('LAYOUT', {
    FOOTER: 'views/layout/footer.html',
    HEADER: 'views/layout/header.html',
    RIGHT_SIDEBAR: 'views/layout/right-sidebar.html'
  })
  .constant('API_URLS', {
    BASE: 'http://localhost:1337/api/',
    ADS: 'ads/',
    USER_ADS: 'user/ads/',
    TOWNS: 'towns/',
    CATEGORIES: 'categories/',
    USER_REGISTER: 'user/register',
    USER_LOGIN: 'user/login',
    USER_LOGOUT: 'user/logout',
    USER_USER_PROFILE: 'user/profile',
    USER_USER_PROFILE_PASS: 'user/changepassword',
    USER_USER_ADS: 'user/ads',
    USER_USER_ADS_DEACIVATE: 'user/ads/deactivate/',
    USER_USER_ADS_PUBLISH_AGAIN: 'user/ads/publishagain/',
    ADMIN_USERS: '/admin/users',
    ADMIN_ADS: 'admin/ads'
  })
  .constant('ADS_OPTIONS', {
    SIZE_PER_PAGE: 2,
    ADMIN_SIZE_PER_PAGE: 1
  })
  .constant('USER_STATUS', ['Published', 'WaitingApproval', 'Inactive', 'Rejected']);
