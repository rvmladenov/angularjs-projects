adsApp.filter('adsStatusFilter', function () {
  return function (status) {
    if(status == "WaitingApproval") {
      return "Waiting Approval";
    }

    return status;
  };
});
