angular
  .module('remedies')
  .controller('IllnessIndexController', IllnessIndexController);

function IllnessIndexController() {
  var vm = this;
  vm.illnesses = illness;
}