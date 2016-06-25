/*jshint esversion: 6 */

export class MainController {
  constructor (apiService, userService, $timeout, webDevTec, toastr) {
    'ngInject';
    const controller = this;

    controller.api = apiService;
    controller.userData = userService.userData;

    controller.awesomeThings = [];
    controller.classAnimation = '';
    controller.creationDate = 1465734467013;
    controller.toastr = toastr;
    console.log("constructor this"); console.log(this);
    // this.activate($timeout, webDevTec);
}

  postScores(data, config) {
    const controller = this;
    return this.api.postSome('points', data, config)
            .then(function(response) {
              console.log("POST data response"); console.log(response.data);
              controller.userData.id = response.data.userId;
            });
  }

  getUserId() {
    const controller = this;
    console.log("controller.userData"); console.log(controller.userData);
    return this.api.getSome('points')
            .then(function(response) {
              console.log("GET data response"); console.log(response.data);
              controller.userData.id = response.data.userId;
            });
  }
  activate($timeout, webDevTec) {
    this.getWebDevTec(webDevTec);
    $timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
