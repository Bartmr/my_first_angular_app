angular.module('appServices', []).
  factory('ergastAPIservice', function($http,$sce) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: $sce.trustAsResourceUrl('https://bartmr.github.io/my_first_angular_app/driverStandingsData.json')
      });
    }

    ergastAPI.getDriverDetails = function(id) {
      return $http({
        method: 'JSONP', 
        url: $sce.trustAsResourceUrl('http://ergast.com/api/f1/2013/drivers/'+ id +'/driverStandings.json')
      });
    }

    return ergastAPI;

  });