/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, specDataService, universDataService, $log) {
    'ngInject';
    const controller = this;
    controller.log = $log.info;



    controller.api = apiService;
    controller.userData = userService.userData;
    controller.specData = specDataService.specDataList;
    controller.universData = universDataService.uniDataList;
    controller.choice = {};
}

  postScores(data, config) {
    const controller = this;
    return this.api.postSome('points', data, config)
            .then(function(response) {
              controller.userData.userId = response.data.userId;
            });
  }

  postChoice(data, config) {
    const controller = this;
    return this.api.postSome('get_proba', data, config)
            .then(function(response) {
              controller.specializations = response.data.specializations;
            });
  }

  getUserId() {
    const controller = this;
    return this.api.getSome('points')
            .then(function(response) {
              controller.userData.userId = response.data.userId;
            });
  }

  filter(list, userInput) {
    if (!list) return;
    const controller = this;
    let result = _.filter(list, function (item) {
      if (!userInput) return true;
      if (item.name) return _.includes( item.name.toLowerCase(), userInput.toLowerCase());
      else return _.includes( item.toLowerCase(), userInput.toLowerCase());
    });

    return result;
  }


  convert(selected) {
    const controller = this;

    if (selected) controller.userData.cityName = controller.choice.city.name;
    controller.log("message"); controller.log(selected);
    controller.log("controller.choice.city"); controller.log(controller.choice.city);
  }

}
