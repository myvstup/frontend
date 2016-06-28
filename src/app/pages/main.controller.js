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
    vm.choice = {};
    // vm.choice.city = specDataService.specDataDefault;
}

  postScores(data, config) {
    const vm = this;
    return this.api.postSome('points', data, config)
            .then(function(response) {
              vm.userData.userId = response.data.userId;
            });
  }

  postChoice(data, config) {
    const vm = this;
    return this.api.postSome('get_proba', data, config);
            // .then(function(response) {
            //   vm.specializations = response.data.specializations;
            // });
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

    vm.userData.cityName = vm.choice.city.name;
    vm.userData.specialityName = vm.choice.field;
    vm.log(vm.userData);
    vm.postChoice(vm.userData).then(function(response) {
      vm.specializations = response.data.specializations;
    });
  }

  convert(selected) {
    const vm = this;

    if (selected) vm.userData.cityName = vm.choice.city.name;
    vm.log("message"); vm.log(selected);
    vm.log("vm.choice.city"); vm.log(vm.choice.city);
  }

  getProbabilityMessage (probabilityId) {
    if (probabilityId === -1) return 'менше 5%';
    if (probabilityId === 0)  return 'десь 40%';
    if (probabilityId === 1)  return 'близько 80%';
    if (probabilityId === 2)  return 'б1льше 90%';
  }

}
