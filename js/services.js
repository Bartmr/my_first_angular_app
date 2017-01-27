angular.module('appServices', []).
  factory('ergastAPIservice', function($http,$sce) {

    var ergastAPI = {};

    ergastAPI.getDrivers = function() {
      return $http({
        method: 'GET', 
        url: $sce.trustAsResourceUrl('https://bartmr.github.io/my_first_angular_app/driverStandingsData.json')
      });
    }

    return ergastAPI;

  });