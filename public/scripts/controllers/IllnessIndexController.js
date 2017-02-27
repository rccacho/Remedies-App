angular
  .module('remedies')
  .controller('IllnessIndexController', IllnessIndexController);

IllnessIndexController.$inject = [ '$http' ];

function IllnessIndexController ($http) {
  var vm = this;
  $http({
    method: 'GET',
    url: ''
  }).then(function successCallback(response) {
  	console.log(response);
  	vm.illnesses = response.data.illnesses;
  }, function errorCallback(response) {
    console.log('There was an error posting the data', response);
  });
}