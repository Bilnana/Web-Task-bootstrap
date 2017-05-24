'use strict';

angular.module('schoolApp')
        .constant("baseURL","http://localhost:3000/")

        .service('dataFactory', ['$http', 'baseURL', function($http,baseURL) {
       
                    this.getProfessors = function(){
                                        return $http.get(baseURL+"professors");
                                    };
                    this.getStudents = function () {
                                       return $http.get(baseURL+"students");

                };
        }]);