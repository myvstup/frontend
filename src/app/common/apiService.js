/*jshint esversion: 6 */
const API_URL = 'https://myvstup.herokuapp.com/api/v0/';

export class apiService {
  constructor ($http, $log) {
    'ngInject';

    this.http = $http;
    this.log = $log.log;
  }

  setRequestStatus(promise, status) {
    if (!status) return promise;
    status.request = {
      isSuccess: false,
      isError: false,
      isInProgress: true
    };

    promise.then(function(data) {
        status.request.isSuccess = true;
        return data;
      }, function(data) {
        status.request.isError = true;
        return data;
    })
    .finally(function(data) {
      status.request.isInProgress = false;
      return data;
    });

    return promise;
  }

  getSome(url, config) {
    return this.setRequestStatus(this.http.get(API_URL + url), config);
  }

  postSome(postUrl, postData, postConfig) {
    var postRequest = {
       method: 'POST',
       url: API_URL + postUrl,
       headers: {
         'Content-Type': 'application/json'
       },
       data: postData // $$state.value.config.data
      //  ,config: {'ZNOtest':150}
      //  ,config: postConfig
      };
      return this.http(postRequest);
    // return this.setRequestStatus(this.http.post(API_URL + url, data), config);
  }

  updateSome(url, data, config) {
    return this.setRequestStatus(this.http.put(API_URL + url, data), config);
  }

  deleteSome(url, data, config) {
    return this.setRequestStatus(this.http.delete(API_URL + url, data), config);
  }

  getContributors(limit) {
    if (!limit) {
      limit = 30;
    }

    return this.http.get(this.apiHost + '/contributors?per_page=' + limit)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }
}
