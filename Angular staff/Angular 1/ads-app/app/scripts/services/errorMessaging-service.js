'use strict';

adsApp.factory('errorMessagingService', [function () {

  var getMsg = function(error) {
    return error.data.message;
  };

  var getMsgDtls = function(error) {
    var dtls = error.data.modelState;
    var result = '';

    if(dtls) {
      for(var prop in dtls) {
        if(dtls.hasOwnProperty(prop)) {
          var propArr = dtls[prop];
          for(var i = 0; i < propArr.length; i++) {

            result += " - " + propArr[i];

          }
        }
      }
    }

    return result;
  }

  return {
    getErrorMessage: getMsg,
    getErrorMessageDtls: getMsgDtls
  }
}]);
