/*jshint esversion: 6 */


export class userService {
  constructor () {
    'ngInject';

    let vm = this;

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
