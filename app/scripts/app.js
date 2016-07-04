'use strict';

angular
  .module("nApp", ['ui.router'])
  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home' , {
      url: '/',
      templateUrl: 'app/views/home.html',
      controller: 'dataCtrl'
    })
}])
