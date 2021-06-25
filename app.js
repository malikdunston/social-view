var app = angular.module('app', ['ui.router']);


// step 1
app.controller("mainCtrl", function($scope){

	//step 3
	$scope.data = window.data;

	//step 4 - filtery by type.
	$scope.newData = {
		'facebook': [],
		'instagram': [],
		'twitter': [],
		'gallery': []
	};
	for(var i = 0 ; i < $scope.data.length ; i++){
		// console.dir($scope.data[i].type);
		var x = $scope.data[i];
		if(x.type == "facebook"){
			$scope.newData.facebook.push(x);
		} else if(x.type == "instagram"){
			$scope.newData.instagram.push(x);
		} else if(x.type == "tweet"){
			$scope.newData.twitter.push(x);
		} else{
			$scope.newData.gallery.push(x);
		}
	};

	console.dir($scope.update);
});

// Step 4 - Components
function mainHeaderCtrl(headFoot){
	this.headertext = "mainHeader";
	// this.$onInit = function(){
	// 	this.headertext = "mainHeader";
	// 	console.log(this);
	// }
	this.footertext = "hello world...";
	this.$onInit = function(){
		// alert("jak;sdfja;slk");
	}
	this.$onInit();
	console.log(headFoot);
}

//implicit controllers - every .comp has one
// automatic $ctrl controllerAs
app
	.component("mainHeader", {
		controller: mainHeaderCtrl("header"),
		controllerAs: "mh",
		template: "<header class='container' thang='update'>View more projects at <a href='https://www.malikdunston.com'>malikdunston.com</a></header>",
		bindings: {
			thang: "="
		}
	})
	.component("mainFooter", {
		controler: mainHeaderCtrl("footer"),		
		controllerAs: "mf",
		template: "<footer class='py-4 text-white text-center bg-primary'>&copy; 2018</footer>"
	})
	.component("facebookItem", {
		// transclude: true,
		templateUrl: "facebook-item.html",
		bindings: {
			item: "<"
		}
	})
	.component("twitterItem", {
		templateUrl: "twitter-item.html",
		bindings: {
			item: "<"
		}
	})
	.component("instagramItem", {
		template: "<div><img src='{{$ctrl.item.data.images.standard_resolution.url}}' alt=''/><a href=''>{{$ctrl.item.data.user.full_name}}</a><p>{{$ctrl.item.data.caption.text}}</p></div>",
		bindings: {
			item: "<"
		}
	})
	.component("galleryItem", {
		template: "<div><img src='{{$ctrl.item.data.poster.large.url}}' alt=''/><p>{{$ctrl.item.data.title}}</p></div>",
		bindings: {
			item: "<"
		}
	});

// step 6 configure route - no uirouteprovider

app
	.config(["$stateProvider", function($stateProvider){
		$stateProvider
			.state('home', {
				url: "",
				templateUrl: "home.html",
				controller: "mainCtrl"
			})
			.state('facebook', {
				url: "/facebook",
				templateUrl: "facebook.html",
				controller: "mainCtrl"
			})
			.state('twitter', {
				url: "/twitter",
				templateUrl: "twitter.html",
				controller: "mainCtrl"
			})
			.state('instagram', {
				url: "/instagram",
				templateUrl: "instagram.html",
				controller: "mainCtrl"
			})
			.state('galleries', {
				url: "/galleries",
				templateUrl: "galleries.html",
				controller: "mainCtrl"
			})
	}]);
