/*jshint esversion: 6 */
export class apiService {
  constructor ($http, $log, API) {
    'ngInject';

    this.apiUrl = API.getData;
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
    return this.setRequestStatus(this.http.get(this.apiUrl + url), config);
  }

  postSome(postUrl, postData, postConfig) {
    // let postRequest = {
    //    method: 'POST',
    //    url: this.apiUrl + postUrl,
    //    headers: {
    //      'Content-Type': 'application/json'
    //    },
    //    data: postData
    //   };
    //   return this.http(postRequest);
    return this.setRequestStatus(this.http.post(this.apiUrl + postUrl, postData), postConfig);
  }

  updateSome(url, data, config) {
    return this.setRequestStatus(this.http.put(this.apiUrl + url, data), config);
  }

  deleteSome(url, data, config) {
    return this.setRequestStatus(this.http.delete(this.apiUrl + url, data), config);
  }
}
