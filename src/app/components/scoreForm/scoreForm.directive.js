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
    controller: 'MainController',
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
  constructor (userService) {
    'ngInject';
    let vm = this;

    vm.userData = userService.userData;
  }
}
