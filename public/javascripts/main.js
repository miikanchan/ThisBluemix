var myApp= angular.module("myApp", []);
	myApp.controller ("AppCtrl", function ($http) {
	var myApp = this;
	$http.get("http://localhost:8080")
		.success(function(data){
			myApp.foods= data;

		})

	myApp.addFood= function(display){
		$http.post("http://localhost:8080", display)
			.success(function (data){
				myApp.foods= data;
			})
	}
})