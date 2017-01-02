/*jshint esversion: 6 */

export class userService {
  constructor () {
    'ngInject';
    const vm = this;

    vm.userData = {};
    vm.userData.subjects = {
      ukr:      vm.generateSubject('Українська мова і література', true),
      math:     vm.generateSubject('Математика'),
      physics:  vm.generateSubject('Фізика'),
      history:  vm.generateSubject('Історія України'),
      biology:  vm.generateSubject('Біологія'),
      geography: vm.generateSubject('Географія'),
      chemistry: vm.generateSubject('Хімія'),
      eng:      vm.generateSubject('Англійська мова'),
      es:       vm.generateSubject('Іспанська мова'),
      de:       vm.generateSubject('Німецька мова'),
      ru:       vm.generateSubject('Російська мова'),
      fr:       vm.generateSubject('Французька мова')
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
        .replace(/y/g, 'и')
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
  generateSubject(name, isTested= false) {
    return {caption: name, isTested: isTested, score: 200}
  }
}
