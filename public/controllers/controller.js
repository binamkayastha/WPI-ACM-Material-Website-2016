var myApp = angular.module('myApp', []);

myApp.controller('EventsCtrl', ['$scope', '$http', function($scope, $http) {
    // Get Json data from a file in the JsonBlob folder, then store info into
    // $scope.eventList, where eventList is a JsonArray, holding objects like:
    // {
    //  title: "title",
    //  description: "description"
    // }
    //data=JSON.parse('[{"title": "hello", "description": "test"}, {"title": "nubha 2", "description": "Another Test"}]');
    $http.get('../JsonBlobs/events.json').then(function(res) {
      $scope.eventList = res.data;
    })
    //$scope.eventList = JSON.stringify(data);

}])

myApp.controller('InfoCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('../JsonBlobs/info.json').then(function(res) {
      $scope.infoList = res.data;
    })

}])
