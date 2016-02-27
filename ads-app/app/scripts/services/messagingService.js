"use strict";

adsApp.factory('messagingService', function () {
  var errorMessage = function (container) {
    container = { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' };
  }

  var successMessage = function (container) {
    container = {msg: 'Another alert!'};
  }

  return {
    showErrorMessage: errorMessage,
    showSuccessMessage: successMessage
  }
});
