'use strict';

adsApp.factory('categoriesService', ['$resource', 'API_URLS', 'authentication', function($resource, API_URLS, authentication) {

  var resource = $resource(API_URLS.BASE + API_URLS.CATEGORIES);

  var getAllCats = function() {
    return resource.query().$promise;
  };

  var getCategoryById = function(id) {

    getAllCats().then(function(){

    });



    return resource.getById({id: id}).$promise;
  }

  var getFilterParams = function(category) {
    var params = {};
    params.categoryId = category.id;

    return params;
  };

  return {
    getCategories: getAllCats,
    getFilterParams: getFilterParams,
    getCategoryById: getCategoryById
  }
}]);
