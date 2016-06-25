/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService) {
    'ngInject';
    const controller = this;

    controller.api = apiService;
    controller.userData = userService.userData;

}

  postScores(data, config) {
    const controller = this;
    return this.api.postSome('points', data, config)
            .then(function(response) {
              controller.userData.id = response.data.userId;
            });
  }

  getUserId() {
    const controller = this;
    return this.api.getSome('points')
            .then(function(response) {
              controller.userData.id = response.data.userId;
            });
  }

}
