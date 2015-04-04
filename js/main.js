app = angular.module('lclk', [
  'ngRoute',
  'lclk.blog',
  'lclk.home',
  'lclk.nav',
  'lclk.profile']);

console.log("app loaded")

app.config( function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when("/home", { 
        templateUrl: "home/index.html",
        controller: "HomeCtrl"
      }).
      when("/blog", { 
        templateUrl: "blog/index.html",
        controller: "BlogCtrl"
      }).
      when("/profile", { 
        templateUrl: "profile/index.html",
        controller: "ProfileCtrl"
      }).
      otherwise( { 
        redirectTo: "/home" 
      });
});

app.controller('NavCtrl', function($scope,$location){
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

app.controller('BlogCtrl', function($scope){
  $scope.test = "Hello Blog World";
});



