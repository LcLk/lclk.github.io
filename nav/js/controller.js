angular.module('lclk.nav',[]).controller('NavCtrl', function($scope,$location){
  $scope.test = "Hello World";
  $scope.sections = [
    {
      url:"home",
      text:"Home",
      icon: "home",
      color: "blue"
    },
    {
      url:"blog",
      text:"Blog",
      icon: "paragraph",
      color: "yellow"
    },
    {
      url:"profile",
      text:"Profile",
      icon: "user",
      color: "green"
    }
  ];

  // Is the current tab the active partial?
  $scope.isActive = function(path) {
    if ($location.path().substr(1, path.length) == path) {
      return "active"
    } else {
      return ""
    }
  }

});