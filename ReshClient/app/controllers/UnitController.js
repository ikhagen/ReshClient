app.controller('UnitController', function ($scope, daoUnits) {

    $scope.status = "";

    $scope.searchUnit = function () {

        var unit_id = $scope.searchUnit.unit_id;

        daoUnits.get(unit_id, function (unit) {
            $scope.unit = unit;
            $scope.status = "You searched for " + unit_id;
        }, function () {
            $scope.status = "Error";
        });
    };

});