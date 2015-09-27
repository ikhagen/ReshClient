app.service('daoUnits', function ($http, REST) {
    this.get = function (id, successCallback, errorCallback) {
        $http.get(REST.path + 'resh/' + id).success(function (result) {
            if (typeof (successCallback) === 'function') {
                successCallback(result);
            }
        }).error(function () {
            if (typeof (errorCallback) === 'function') {
                errorCallback();
            }
        });
    };
});