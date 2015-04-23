angular.
  module('lclk.nav').directive( 'internalNav', function() {
  return {
    restrict: 'E',
    templateUrl: "modules/nav/html/internal_nav.html",
    link: function(scope, element){
      console.log('linked!');
      scope.active = true;
      scope.showContents = true;
    }
  };
}).
  directive( 'sectionsMenu', function() {
  return {
    restrict: 'E',
    templateUrl: "modules/nav/html/sections/menu.html",
    link: function(scope, element){  
      scope.sections = [
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
    }
  };
}).
  directive( 'sectionsButton', ['$routeParams', function($routeParams) {
  return {
    restrict: 'E',
    scope: {
      url: '=',
      text: '=',
      icon: '=',
      color: '='
    },
    templateUrl: "modules/nav/html/sections/button.html",
    link: function(scope, element){
      scope.isSelected = function() {
        return $routeParams.section == scope.url;
      }
    }
  };
}]).directive( 'footerBar', [ function($routeParams) {
  return {
    restrict: 'E',
    scope: {
    },
    templateUrl: "modules/nav/html/sections/footer_bar.html",
    link: function(scope, element){
    }
  };
}]);