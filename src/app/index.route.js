/*jshint esversion: 6 */

export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/pages/choice.html',
      controller: 'MainController',
      controllerAs: 'vm'
    }).state('field', {
      url: '/field',
      templateUrl: 'app/pages/field.html',
      controller: 'MainController',
      controllerAs: 'vm'
    }).state('specialization', {
      url: '/specialization',
      templateUrl: 'app/pages/specialization.html',
      controller: 'MainController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
