'use strict';

angular.module("schoolApp", [])

         .controller('ProfessorController', ['$scope','dataFactory',function($scope,dataFactory) {
             //professors data
             $scope.professors={};
             dataFactory.getProfessors()
            .then(
                function(response) {
                    $scope.professors = response.data;
                }
            );
             
             
             
             $scope.students={};
              dataFactory.getStudents()
            .then(
                function(response) {
                    $scope.students = response.data;
                }
            );
            
            
             //Save Professor object 
             $scope.saveProfessor= function(){
                 $scope.professors.push($scope.newProfessor);
             };
             
             //Students data
            
           
             //Save Student object 
             $scope.saveStudent=function(){
                 $scope.students.push($scope.newStudent);
             };
             
            //Update Student object with new Option
             $scope.updateStudents = function(student,newStudent,newOption,options){
                 student.option = newOption;
             };
        }]);
		

