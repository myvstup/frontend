/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, specDataService, universDataService) {
    'ngInject';
    const controller = this;

    controller.api = apiService;
    controller.userData = userService.userData;
    controller.specData = specDataService.specDataList;
    controller.universData = universDataService.uniDataList;
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

  convert(selected) {
    const controller = this;

    if (selected) controller.userData.cityName = selected.name;
    console.log("message"); console.log(selected);
  }

}
