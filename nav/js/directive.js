angular.module('lclk.nav',[]).directive( 'internalNav', function() {
	return {
		restrict: 'E',
		templateUrl: "nav/html/internal_nav.html",
    link: function(scope, element){
      console.log('linked!');
    }
	};
});