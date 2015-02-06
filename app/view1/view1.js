'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'ReadingListController'
  });
}])

.controller('ReadingListController', [function() {
  this.books = books;
  this.genres = genres;
  this.showForm = false;
}])
.directive('bookCover', function(){
  return {
    restrict: 'E',
    templateUrl: 'view1/partials/book-cover.html',
    replace: true
  }
})
.directive('bookGenres', function(){
  return {
    restrict: 'E',
    templateUrl: 'view1/partials/book-genres.html',
    scope: {
      genres: '='
    }
  }
})
.directive('reviewForm', function(){
   return {
     restrict: 'E',
     templateUrl: 'view1/partials/review-form.html',
     replace: true,
     controller: function(){
       this.book = {genres:{}};

       this.addReview = function(form){
         books.push(this.book);
         this.book = {genres:{}};
         form.$setPristine();
       }
     },
     controllerAs: 'reviewFormCtrl',
     scope: {
       books: '=',
       genres: '='
     }
   }
 });
