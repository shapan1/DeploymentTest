/**
 * initializing the app
 */
var app = angular.module('myApp', ['ngRoute']);

/**
 * configuring the routes
 */
app.config(['$routeProvider', function ($routeProvider) {
$routeProvider
// Home
.when("/", {templateUrl: "partials/home.html", controller: "Step1Ctrl as home"})
// Pages
.when("/other", {templateUrl: "partials/other.html", controller: "Step2Ctrl as vm"})
.when("/temp", {templateUrl: "partials/temp.html", controller: "TempCtrl"})
/* etc… routes to other pages… */
// else 404
.otherwise("/404", {templateUrl: "partials/404.html",controller: "Step1Ctrl"});
}]);

app.controller('Step1Ctrl', function ($scope, $location, $http) {
    console.log("Step1 Controller reporting for duty.");
    this.case1 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	this.case2 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	this.case3 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	this.case4 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};


	this.case5 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	this.case6 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	
	this.case7 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	this.case8 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};

	
	this.case9 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};
    
	this.case10 = {
		a: 0,
		b: 0,
		c: 0,
		d: 0,
		eff: 0
	};
    
});

app.controller('Step2Ctrl', function ($scope, $location, $http) {
    console.log("Step2 Controller reporting for duty.");
});

