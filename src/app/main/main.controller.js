/*jshint esversion: 6 */

export class MainController {
  constructor ($timeout, webDevTec, toastr, apiService, userService) {
    'ngInject';
    this.api = apiService;
    this.userService = userService;
    this.userData = userService.userData;

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1465734467013;
    this.toastr = toastr;

    this.activate($timeout, webDevTec);
}

  postScores(data) {
    return this.api.postSome('points', data)
            .success(function(response) {
              this.userData.id = response.userId;
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
