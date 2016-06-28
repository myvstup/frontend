/*jshint esversion: 6 */


export class userService {
  constructor () {
    'ngInject';

    let vm = this;
    vm.userData = {};
    vm.userData.subjects = {
      ukr: { caption: 'Українська мова і література', isTested: true, score: 200},
      math: { caption: 'Математика', isTested: false, score: 200},
      physics: { caption: 'Фізика', isTested: false, score: 200},
      history: { caption: 'Історія України', isTested: false},
      biology: { caption: 'Біологія', isTested: false},
      geography: { caption: 'Географія', isTested: false},
      chemistry: { caption: 'Хімія', isTested: false},
      eng: { caption: 'Англійська мова', isTested: false},
      es: { caption: 'Іспанська мова', isTested: false},
      de: { caption: 'Німецька мова', isTested: false},
      ru: { caption: 'Російська мова', isTested: false},
      fr: { caption: 'Французька мова', isTested: false}
    };
    vm.userData.certificateScore = 200;
  }


}
