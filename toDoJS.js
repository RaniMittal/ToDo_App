var ngTodo=angular.module('ngTodo',[])

ngTodo.controller('ngTodoController',function($scope){
	$scope.Todos = [
		               {
                       		title:'Do my homework',
                       		details:'i must do my homework today.'
					   },

					   {
                       		title:'Do my assignment',
                       		details:'i must do my assignment tomorrow.'
					   },

					   {
                       		title:'wish birthday',
                       		details:'i must wish mom\'s birthday' 
					   },

					   {
                       		title:'make chocolate cake',
                       		details:'i must make a chocolate cake for mom'
					   },

					   {
                       		title:'Do complete projects',
                       		details:'i must complete my projects till sunday morning'
					   }
				   ];


    //clear(element(by.model('add.title')));
	$scope.addTodo = function(title,details) {
		    todo={title:title,details:details};
			$scope.Todos.push(todo);			
		}

	$scope.searchTodo = function(todo) {
			$scope.Todos.splice(index, 1);
		}

	$scope.deleteTodo = function(index) {
			$scope.Todos.splice(index, 1);
		}

});