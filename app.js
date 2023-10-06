var app = angular.module('employeeApp', []);

app.controller('EmployeeController', ['$scope', '$http', function($scope, $http) {
    $scope.employee = {};
    $scope.employees = [];

    $scope.saveEmployee = function(employee) {
        $http.post('http://localhost:9091/api/employees/save-employee', employee)
            .then(function(response) {
                alert('Employee saved successfully!');
                $scope.employee = {}; // Clear the form
            })
            .catch(function(error) {
                alert('An error occurred when saving employee, please try again later');
            });
    };

    $scope.displayAllEmployees = function() {
        $http.get('http://localhost:9091/api/employees')
            .then(function(response) {
                $scope.employees = response.data;
            })
            .catch(function(error) {
                alert('Error fetching employees: ' + error.data.message);
            });
    };
}]);