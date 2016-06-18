/*jshint esversion: 6 */

export function scoreFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
        extraValues: '=?'
    },
    templateUrl: 'app/components/scoreForm/scoreForm.html',
    link: linkFunc,
    controller: scoreFormController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el) { //add attr, vm if want controllerAs
    // let watcher;
    // let typist = scoreForm(el[0], {
    //   typeSpeed: 40,
    //   deleteSpeed: 40,
    //   pauseDelay: 800,
    //   loop: true,
    //   postfix: ' '
    // });

    el.addClass('score-form');

    // angular.forEach(scope.extraValues, (value) => {
    //   typist.type(value).pause().delete();
    // });

    // watcher = scope.$watch('vm.contributors', () => {
    //   angular.forEach(vm.contributors, (contributor) => {
    //     typist.type(contributor.login).pause().delete();
    //   });
    // });

    // scope.$on('$destroy', () => {
    //   watcher();
    // });
  }

}

class scoreFormController {
  constructor ($log, githubContributor) {
    'ngInject';
    let vm = this;

    this.$log = $log;

    vm.userData = {
      ukr: { caption: 'Українська мова і література', isTested: true},
      history: { caption: 'Історія України', isTested: false},
      math: { caption: 'Математика', isTested: false},
      biology: { caption: 'Біологія', isTested: false},
      geography: { caption: 'Географія', isTested: false},
      physics: { caption: 'Фізика', isTested: false},
      chemistry: { caption: 'Хімія', isTested: false},
      eng: { caption: 'Англійська мова', isTested: false},
      es: { caption: 'Іспанська мова', isTested: false},
      de: { caption: 'Німецька мова', isTested: false},
      ru: { caption: 'Російська мова', isTested: false},
      fr: { caption: 'Французька мова', isTested: false}
    };
  }
}
