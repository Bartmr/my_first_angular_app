angular.module('appControllers',[])
.controller('driversTableController', function($scope,ergastAPIservice){

    $scope.nameFilter = null;
    $scope.driversList = [];

    ergastAPIservice.getDrivers().then(function(data) {
                    // promise fulfilled
                    $scope.driversList =  data.data.MRData.StandingsTable.StandingsLists["0"].DriverStandings;
                }, function(error) {
                    // promise rejected, could log the error with: console.log('error', error);
                    
                });

});