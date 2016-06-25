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
    }).state('spetialization', {
      url: '/spetialization',
      templateUrl: 'app/pages/spetialization.html',
      controller: 'MainController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
}
