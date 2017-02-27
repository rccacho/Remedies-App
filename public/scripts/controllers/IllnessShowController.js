angular
  .module('remedies')
  .controller('IllnessShowController', IllnessShowController);

IllnessShowController.$inject = [ '$http' ];

function IllnessShowController ($http) {
  var vm = this;
  vm.illnesses = illness;
}