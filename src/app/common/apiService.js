/*jshint esversion: 6 */
const API_URL = 'https://myvstup.herokuapp.com/api/v0/';

export class apiService {
  constructor ($http, $log) {
    'ngInject';
    this.http = $http;
    this.log = $log.log;
  }

  setRequestStatus(promise, status) {
    this.log(promise);
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

  getSome(url, scopeObj) {
    return this.setRequestStatus(this.http.get(API_URL + url), scopeObj);
  }

  postSome(url, data, scopeObj) {
    return this.setRequestStatus(this.http.post(API_URL + url, data), scopeObj);
  }

  updateSome(url, data, scopeObj) {
    return this.setRequestStatus(this.http.put(API_URL + url, data), scopeObj);
  }

  deleteSome(url, data, scopeObj) {
    return this.setRequestStatus(this.http.delete(API_URL + url, data), scopeObj);
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
