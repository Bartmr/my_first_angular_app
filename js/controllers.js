angular.module('appControllers', [])
    .controller('driversTableController', function ($rootScope,$scope, ergastAPIservice) {

        $scope.nameFilter = null;
        $scope.driversList = [];

        $scope.searchFilter = function (driver) {
            var keyword = new RegExp($scope.nameFilter, 'i');
            return !$scope.nameFilter || keyword.test(driver.Driver.givenName) || keyword.test(driver.Driver.familyName);
        };

        ergastAPIservice.getDrivers().then(function (data) {
            // promise fulfilled
            $scope.driversList = data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        }, function (error) {
            // promise rejected, could log the error with: console.log('error', error);

        });

        this.showDriverInfo = function(id){
            $rootScope.$broadcast('show-driver-info', id);
        }


    })
    .controller('driverInfoController',function($scope,ergastAPIservice){
        $scope.driver = null;
        $scope.$on('show-driver-info', function(event, args) {
            console.log(args);
            ergastAPIservice.getDriverDetails(args).then(function (data){
                dataToSet = data.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0];
                console.log(dataToSet);
                $scope.driver = dataToSet;
            })


        });


    });