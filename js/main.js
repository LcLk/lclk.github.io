app = angular.module('lclk', [
  'ngRoute',
  'lclk.layout',
  'lclk.nav',
  'lclk.blog',
  'lclk.home',
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