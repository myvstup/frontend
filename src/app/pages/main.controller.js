/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, $log) {
    'ngInject';
    const vm = this;
    vm.log = $log.info;
    vm.api = apiService;
    vm.transliterate = userService.transliterate;
    vm.userData = userService.userData;
    vm.currentUser = {};

    vm.init();
}

  init() {
    const vm = this;

    vm.specData = [];
    vm.universData = [];
    vm.api.getSome('auto_complete_data').then(function (response) {
      vm.universData = response.data;
      _.forEach(vm.universData, function(city) {
        let cityCut = {};
        cityCut.name = city.name;
        cityCut.specializationList = [];
        _.forEach(city.univerList, function (university) {
          _.forEach(university.facultatyList, function (facultaty) {
            _.forEach(facultaty.spetializationList, function(spetialization) {
              if (!_.includes(cityCut.specializationList, spetialization)) cityCut.specializationList.push(spetialization);
            });
          });
        });
        vm.specData.push(cityCut);
      });
    });
  }

  postChoice(data, config) {
    return this.api.postSome('get_proba', data, config);
  }

  filter(list, userInput) {
    const vm = this;
    userInput = vm.transliterate(userInput);

    let result = _.filter(list, function (item) {
      if (item.name) return _.includes( item.name.toLowerCase(), userInput);
      else return _.includes( item.toLowerCase(), userInput);
    });
    return result;
  }

  getSpecList() {
    const vm = this;
    vm.bindUser();
    vm.log(vm.userData);
    vm.postChoice(vm.userData).then(function(response) {
      vm.specializations = response.data.specializations;
    }).finally(function() {
      vm.loaded = true;
    });
  }

  bindUser() {
    const vm = this;

    if (vm.currentUser.city)  vm.userData.cityName = vm.currentUser.city.name;
    if (vm.currentUser.university) vm.userData.universityName = vm.currentUser.university.name;
    if (vm.currentUser.facultaty) vm.userData.facultatyName = vm.currentUser.facultaty.name;
    if (vm.currentUser.field) vm.userData.specialityName = vm.currentUser.field.name;
  }

  getProbabilityMessage(probabilityId) {
    if (probabilityId === -1) return 'менше 5%';
    if (probabilityId === 0)  return 'десь 40%';
    if (probabilityId === 1)  return 'близько 80%';
    if (probabilityId === 2)  return 'більше 90%';
  }

}
