/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, specDataService, universDataService, $log) {
    'ngInject';
    const vm = this;
    vm.log = $log.info;
    vm.api = apiService;
    vm.transliterate = userService.transliterate;
    vm.userData = userService.userData;
    vm.specData = specDataService.specDataList;
    vm.universData = universDataService.uniDataList;
    vm.currentUser = {};
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

    vm.userData.cityName = vm.currentUser.city.name;
    vm.userData.specialityName = vm.currentUser.field;
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
