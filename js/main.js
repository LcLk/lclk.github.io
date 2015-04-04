app = angular.module('lclk', [
  'ngRoute',
  'lclk.blog',
  'lclk.home',
  'lclk.nav',
  'lclk.profile']);

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