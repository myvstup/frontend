export function config ($logProvider, $mdThemingProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  $mdThemingProvider.theme('default')
    .primaryPalette('teal')
    .accentPalette('grey')
    .warnPalette('red');

  runGoogleAnalytics();

  function runGoogleAnalytics() {
    googleMagic (window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-80489581-1', 'auto');
    ga('send', 'pageview');

    function googleMagic(i,s,o,g,r,a,m) {
      i['GoogleAnalyticsObject']=r;
      i[r]= i[r]|| function() {
        (i[r].q= i[r].q || []).push(arguments)
      },
      i[r].l=1*new Date();
      a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];
      a.async=1;a.src=g;
      m.parentNode.insertBefore(a,m)
    }
  }
}
