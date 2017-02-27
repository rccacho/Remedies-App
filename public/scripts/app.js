console.log("app.js is working!")
angular
  .module('remedies', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/templates/illness-index.html',
      controllerAs: 'illnessIndexController',
      controller: 'IllnessIndexController'
    })
    .when('/:id', {
      templateUrl: '/templates/illness-show.html',
      controllerAs: 'illnessShowController',
      controller: 'IllnessShowController'
    })
    .otherwise({ redirectTo: '/'})

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}