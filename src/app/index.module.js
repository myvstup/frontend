/*jshint esversion: 6 */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './common/main.controller';
import { apiService } from '../app/common/apiService';
import { dataService } from '../app/common/dataService';
import { userService } from '../app/common/userService';
import { scoreFormDirective } from '../app/components/scoreForm/scoreForm.directive';


angular.module('myVstup', ['ngAria', 'restangular', 'ui.router', 'ngMaterial'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('apiService', apiService)
  .service('dataService', dataService)
  .service('userService', userService)
  .controller('MainController', MainController)
  .directive('scoreForm', scoreFormDirective)
  .constant('API', {getData: 'https://myvstup.herokuapp.com/api/v0/'});
