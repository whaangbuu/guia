(function(){
    'use strict';

    angular.module('statisticsController', [])
        .controller('StatisticsController', StatisticsController);

    StatisticsController.$inject = ['Toast'];

    function StatisticsController(Toast){
        var vm = this;

        Toast.success();

        vm.report = "Monthly";

        vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        vm.series = ['Series A', 'Series B'];
        vm.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        vm.onClick = function (points, evt) {
            console.log(points, evt);
        };
    }

})();