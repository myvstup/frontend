/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, dataService, $log) {
    'ngInject';
    const vm = this;
    vm.log = $log.info;
    vm.api = apiService;
    vm.userService = userService;
    vm.transliterate = userService.transliterate;
    vm.userData = userService.userData;
    vm.dataService = dataService;

    vm.universData = vm.dataService.universitiesLists;
    vm.specData = vm.dataService.specializationsLists;
    vm.currentUser = {};

    vm.init();
}

  init() {
    const vm = this;

    if (!vm.universData) vm.api.getSome('auto_complete_data').then(function (response) {
      vm.universData = vm.dataService.universitiesLists = response.data;
      vm.specData = vm.dataService.specializationsLists = vm.sortSpecicalizationList();
    });
  }

  sortSpecicalizationList() {
    let citySpecializationLists = [];

    this.universData.forEach(function(city) {
      let cityCut = {};
      cityCut.name = city.name;
      cityCut.specializationList = [];
      // efficiency tested
      city.univerList.forEach( function (university) {
        university.facultatyList.forEach( function (facultaty) {
          facultaty.spetializationList.forEach( function(spetialization) {
            let indexToInsert = _.sortedIndex(cityCut.specializationList, spetialization); //to avoid sorting dublicating
            cityCut.specializationList.splice(indexToInsert, 0, spetialization);
          });
        });
      });
      cityCut.specializationList = _.sortedUniq(cityCut.specializationList); //to avoid dublicating
      citySpecializationLists.push(cityCut);
    });
    return citySpecializationLists;
  }

  postChoice(data, config) {
    return this.api.postSome('get_proba', data, config);
  }

  filter(list, userInput) {
    const vm = this;
    userInput = vm.userService.transliterate(userInput);

    let result = _.filter(list, function (item) {
      if (item.name) return _.includes( item.name.toLowerCase(), userInput);
      else return _.includes( item.toLowerCase(), userInput);
    });
    return result;
  }

  getSpecList() {
    const vm = this;
    vm.bindUser();
    vm.pending = true;
    vm.postChoice(vm.userData).then(function(response) {
      vm.specializations = response.data.specializations;
      vm.errorMessage = response.data.errorMessage || undefined;
    }).finally(function() {
      vm.pending = false;
      vm.loaded = true;
    });
  }

  bindUser() {
    const vm = this;

    if (vm.currentUser.city)  vm.userData.cityName = vm.currentUser.city.name;
    if (vm.currentUser.university) vm.userData.universityName = vm.currentUser.university.name;
    if (vm.currentUser.facultaty) vm.userData.facultatyName = vm.currentUser.facultaty.name;
    if (vm.currentUser.field) vm.userData.specialityName = vm.currentUser.field;
  }

  getProbabilityMessage(probabilityId) {
    if (probabilityId === -1) return 'менше 5%';
    if (probabilityId === 0)  return 'близько 40%';
    if (probabilityId === 1)  return 'більше 70%';
    if (probabilityId === 2)  return 'більше 90%';
  }

  cleanUserChoice() {
    const vm = this;

    delete vm.userData.cityName;
    delete vm.userData.universityName;
    delete vm.userData.facultatyName;
    delete vm.userData.specialityName;

    vm.currentUser = {};
  }
}
