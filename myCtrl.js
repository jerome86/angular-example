/**
 * Created with IntelliJ IDEA.
 * User: enxtur
 * Date: 11/26/13
 * Time: 8:18 PM
 * To change this template use File | Settings | File Templates.
 */



angular.module("myApp", [])
    .controller("myCtrl", function($scope){
        $scope.name = "enkhtur";

        $scope.list = [{
            name: "enhtur",
            gender: "m"
        },{
            name: "lulu",
            gender: "m"
        },{
            name: "anand",
            gender: "m"
        },{
            name: "jerome",
            gender: "m"
        },{
            name: "enhtur",
            gender: "m"
        }];

        $scope.setToAnand = function(){
                $scope.name = "anand";
        };
    });
