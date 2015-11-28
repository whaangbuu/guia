(function(){
    'use strict';

    angular.module('locationController', ['locationSrvc'])
        .controller('DashboardController', function(Location, Reward, $scope){

            //var vm = this;
            $scope.locations = [];

            Location.getAllLocation()
                .success(function(data){
                $scope.locations = data;
            });

            $scope.addLocation = function(){
                console.log('Added New Location');
                Location.location($scope.locationData)
                    .success(function(data){
                        $scope.commentData = '';
                    });
            }
    });

    angular.module('rewardController', ['rewardSrvc'])
        .controller('DashboardController', function(Reward, $scope){
            $scope.addReward = function(){
                console.log('Added New Reward');
                Location.location($scope.rewardData)
                    .success(function(data){
                        $scope.commentData = '';
                    });
            }
    });

    angular.module('preferenceController', ['preferenceSrvc'])
        .controller('DashboardController', function(Preference, $scope){
            $scope.addPreference = function(){
                console.log('Added New Preference');
                Location.location($scope.preferenceData)
                    .success(function(data){
                        $scope.commentData = '';
                    });
            }
    });


})();