app = angular.module('lclk', [
  'ngRoute',
  'lclk.blog',
  'lclk.home',
  'lclk.nav',
  'lclk.profile']);

app.config( function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when('/sections/:section', {
        templateUrl: function(args){
          return "sections/" + args.section + "/index.html"
        }
      }).
      otherwise( { 
        redirectTo: "/sections/home" 
      });
});