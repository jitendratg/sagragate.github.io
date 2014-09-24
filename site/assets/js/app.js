angular.module('Sagra.Preview', ['ui.router', 'ui.bootstrap', 'ngSanitize', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider
			.otherwise('/tab/1');

		$stateProvider
			.state('app', {
				url: "/tab",
				abstract: true,
				template: "<div ui-view></div>"
			})
			.state('app.tab', {
				url: '/:tab',
				templateUrl: function($stateParams) {
					return 'partials/' + $stateParams.tab + '.html';
				},
				controller: function($scope, $state, $stateParams, $rootScope, $log){
					$rootScope.tab = parseInt($stateParams.tab);
				}
			});
	})
	.run(function() {
	});




