export function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('grey')
    .warnPalette('red');
}
