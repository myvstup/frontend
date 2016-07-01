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

  transliterate(text) {
    // English to Ukrainian
    text = text.toLowerCase()
        .replace(/a/g, 'а')
        .replace(/b/g, 'б')
        .replace(/c/g, 'с')
        .replace(/d/g, 'д')
        .replace(/e/g, 'е')
        .replace(/f/g, 'ф')
        .replace(/g/g, 'г')
        .replace(/h/g, 'х')
        .replace(/i/g, 'і')
        .replace(/k/g, 'к')
        .replace(/l/g, 'л')
        .replace(/m/g, 'м')
        .replace(/n/g, 'н')
        .replace(/o/g, 'о')
        .replace(/p/g, 'п')
        .replace(/q/g, 'к')
        .replace(/r/g, 'р')
        .replace(/s/g, 'с')
        .replace(/t/g, 'т')
        .replace(/u/g, 'ю')
        .replace(/w/g, 'в')
        .replace(/v/g, 'в')
        .replace(/z/g, 'з');
    return text;
}


}
