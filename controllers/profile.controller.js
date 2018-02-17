(function () {
    'use strict';
       
        angular
        .module('app')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = ['$location', '$rootScope', '$scope', 'RestCallerService', '$cookies','$window','$cookieStore'];
    
    function ProfileController($location, $rootScope, $scope, RestCallerService, $cookies,$window,$cookieStore) {

        //Initialize view-model for controller
        var vm = this;
        vm.showHome = true;
        vm.showAbout = false;
        vm.showSkills = false;
        vm.showWork = false;

        vm.openAbout = openAbout;
        vm.openSkills = openSkills;
        vm.openWork = openWork;
        vm.home = home;

        function openAbout() {
            vm.showHome = false;
            vm.showAbout = true;
            vm.showSkills = false;
            vm.showWork = false;
        };

        function openSkills() {
            vm.showHome = false;
            vm.showAbout = false;
            vm.showSkills = true;
            vm.showWork = false;
        };

        function openWork() {
            vm.showHome = false;
            vm.showAbout = false;
            vm.showSkills = false;
            vm.showWork = true;
        };

        function home() {
            vm.showHome = true;
            vm.showAbout = false;
            vm.showSkills = false;
            vm.showWork = false;
        };

    }
   

})();
