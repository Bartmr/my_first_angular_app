angular.module('appDirectives',[])
.directive('driversTable', function() {
  return {
    restrict: 'E',
    templateUrl: 'partials/drivers-table.html',
    controller: 'driversTableController',
    controllerAs: 'driversTableCtrl'
  }
});