/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, specDataService, universDataService, $log) {
    'ngInject';
    const vm = this;
    vm.log = $log.info;



    vm.api = apiService;
    vm.userData = userService.userData;
    vm.specData = specDataService.specDataList;
    vm.universData = universDataService.uniDataList;
    vm.currentUser = {};
    vm.currentUser.city = specDataService.specDataDefault;
}

  // postScores(data, config) {
  //   const vm = this;
  //   return this.api.postSome('points', data, config)
  //           .then(function(response) {
  //             vm.userData.userId = response.data.userId;
  //           });
  // }

  postChoice(data, config) {
    return this.api.postSome('get_proba', data, config);
  }

  filter(list, userInput) {
    if (!list) return;
    const vm = this;
    let result = _.filter(list, function (item) {
      if (!userInput) return true;
      if (item.name) return _.includes( item.name.toLowerCase(), userInput.toLowerCase());
      else return _.includes( item.toLowerCase(), userInput.toLowerCase());
    });

    return result;
  }

  getSpecList(){
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
    vm.log(_.clone(vm.userData));
  }

  getProbabilityMessage (probabilityId) {
    if (probabilityId === -1) return 'менше 5%';
    if (probabilityId === 0)  return 'десь 40%';
    if (probabilityId === 1)  return 'близько 80%';
    if (probabilityId === 2)  return 'більше 90%';
  }

}
