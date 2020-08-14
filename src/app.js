(function () {

angular.module('RoutingApp',['ui.router']);

angular.module('RoutingApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/tab1');

  // Set up UI states
  $stateProvider
    .state('tab1', {
      url: '/tab1',
      templateUrl: '<div>This s </div>'
    })
     .state('tab2', {
      url: '/tab2',
      templateUrl: '<div>This is tab 2 content </div>'
    });
}	




})();


