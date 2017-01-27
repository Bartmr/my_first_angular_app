angular.module('appServices', []).
  factory('ergastAPIservice', function($http,$sce) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: $sce.trustAsResourceUrl('http://ergast.com/api/f1/2013/driverStandings.json')
      });
    }

    return ergastAPI;

  });