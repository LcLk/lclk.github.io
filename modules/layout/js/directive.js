angular.module('lclk.layout', []).directive( 'segment', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: "modules/layout/html/segment.html",
    link: function(scope, element){
    
    }
  };
}).directive( 'segmentHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      subTitle: '@'
    },
    templateUrl: "modules/layout/html/segment_header.html",
    link: function(scope, element){

    }
  };
});