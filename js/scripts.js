    var app = angular.module("myApp", ['ngMaterial']);
    app.controller('SwitchDemoCtrl', ['$scope','$window','$log' ,function($scope,$window,$log) {

      $scope.data = {
        cb1: false,
        cb4: true,
        cb5: false
      };
      
      $scope.$watch('data.cb1', function() {          

         if($('.mapOverlay').hasClass('initialized'))
         {
            if($('.mapOverlay').hasClass('hideOverlay'))
            {
                $('.mapOverlay').removeClass('hideOverlay');
                $('#trigger span').css('color','white');
            }
            else{
                $('.mapOverlay').addClass('hideOverlay');
                $('#trigger span').css('color','black');
            }
         }
         else
         {
                $('.mapOverlay').addClass('initialized');
         }}, true);
      
    }]);